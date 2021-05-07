/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
 export class VagabondsActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["vagabonds", "sheet", "actor"],
      template: "systems/vagabonds/templates/actor/actor-sheet.html",
      width: 600,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = super.getData();
    data.dtypes = ["String", "Number", "Boolean"];
    for (let attr of Object.values(data.data.data.attributes)) {
      attr.isCheckbox = attr.dtype === "Boolean";
    }

      // Prepare items.
    if (this.actor.data.type == 'character') {
      this._prepareCharacterItems(data);

    }

    return data;
  }


  _prepareCharacterItems(sheetData) {

    const actorData = sheetData.data;

    // Initialize containers.
  const gear = [];
  const techniques = [];
  const lineage = [];
  const injury = [];

  // Iterate through items, allocating to containers
  // let totalWeight = 0;
  for (let i of sheetData.items) {
    let item = i;
    i.img = i.img || DEFAULT_TOKEN;
    // Append to gear.
    if (i.type === 'item') {
      gear.push(i);
    }
    // Append to features.
    else if (i.type === 'technique') {
      techniques.push(i);
    }
    else if (i.type === 'lineage') {
      lineage.push(i);
    }
    else if (i.type === 'injury') {
      injury.push(i);
    }
  }

  // Assign and return
  actorData.gear = gear;
  actorData.techniques = techniques;
  actorData.lineage = lineage;
  actorData.injury = injury;
}


  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    // Add Inventory Item
    html.find('.item-create').click(this._onItemCreate.bind(this));
    
    // Update Inventory Item
    html.find('.item-edit').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.getOwnedItem(li.data("itemId"));
      item.sheet.render(true);
    });
    
    // Delete Inventory Item
    html.find('.item-delete').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      this.actor.deleteOwnedItem(li.data("itemId"));
      li.slideUp(200, () => this.render(false));
    });

    // Rollable abilities.
    html.find('.rollable').click(this._onRoll.bind(this));
  }

  /* -------------------------------------------- */

  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @param {Event} event   The originating click event
   * @private
   */
  _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    // Get the type of item to create.
    const type = header.dataset.type;
    // Grab any data associated with this control.
    const data = duplicate(header.dataset);
    // Initialize a default name.
    const name = `New ${type.capitalize()}`;
    // Prepare the item object.
    const itemData = {
      name: name,
      type: type,
      data: data
    };
    // Remove the type from the dataset since it's in the itemData.type prop.
    delete itemData.data["type"];

    // Finally, create the item!
    return this.actor.createOwnedItem(itemData);
  }

  /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
  _onRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;

    if (dataset.roll) {
      let roll = new Roll(dataset.roll, this.actor.data.data);
      let label = dataset.label ? `Rolling ${dataset.label}` : '';
      roll.roll().toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: label
      });
    }

    if (dataset.defend) {
      let roll = new Roll(dataset.defend, this.actor);
      let label = dataset.label ? `Defending ${dataset.label}` : '';
      roll.evaluate({async: true}).then(
        function(result)  {
          var RollResult = {type: "defend", high: "0", low:"0", damage:"No", outcome:" Outright success", roll: roll };
          if (result.terms[0].results[0].result > roll.terms[0].results[1].result) {
            RollResult.high = roll.terms[0].results[0].result;
            RollResult.low = roll.terms[0].results[1].result;
          } else {
            RollResult.low = roll.terms[0].results[0].result;
            RollResult.high = roll.terms[0].results[1].result;
          }

          if (result._total < 7) {
            RollResult.outcome = "Failure";
            RollResult.damage =  (RollResult.high - result.data.data.data.armor.value);
          } else if (result._total < 10) {
            RollResult.outcome = "Partial Success";
            RollResult.damage = (RollResult.low - result.data.data.data.armor.value)
          } 

          let template = 'systems/vagabonds/templates/chat/rolls.html';
          var RollTemplate = renderTemplate(template, RollResult).then(content => {
            result.toMessage({
              speaker: ChatMessage.getSpeaker({actor: result.data}),
              flavor: content,
            });
          });
        }
      );

      
    }
  }

}
