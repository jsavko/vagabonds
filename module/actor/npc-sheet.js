/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class VagabondsNPCSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["vagabonds", "sheet", "actor"],
      template: "systems/vagabonds/templates/actor/npc-sheet.html",
      width: 600,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }

  /* -------------------------------------------- */

  getData() {
    const data = super.getData(); 
    return data;
  }


  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    // Add Inventory Item
    html.find('.item-create').click(this._onItemCreate.bind(this));


    // Chat Item
    html.find('.item-speak').click(ev => {
      ev.stopPropagation()
      const li = $(ev.currentTarget).parents(".item");
      this._chatItem(li.data("itemId"));
    });

    // Update Inventory Item
    html.find('.item-edit').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      //const item = this.actor.getOwnedItem(li.data("itemId"));
      const item = this.actor.items.get(li.data("itemId"));
      item.sheet.render(true);
    });

    html.find('.item-name').dblclick(ev => {
      const li = $(ev.currentTarget).parents(".item");
      //const item = this.actor.getOwnedItem(li.data("itemId"));
      const item = this.actor.items.get(li.data("itemId"));
      item.sheet.render(true);
    });
    
    // Delete Inventory Item
    html.find('.item-delete').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
     // this.actor.deleteOwnedItem(li.data("itemId"));
      this.actor.deleteEmbeddedDocuments("Item", [li.data("itemId")])
      li.slideUp(200, () => this.render(false));
    });

    html.find('li.item').click(ev => {
      const li = $(ev.currentTarget);
      const desc = li.find('.npc_item_desc');
      if (desc.is(':visible')) {
        desc.slideUp("slow");
      } else  {
        desc.slideDown("slow");
      }
      console.log(li);

    });

  }

  


  
  async _chatItem(id) {
    const item = this.actor.items.get(id);
    let template = "systems/vagabonds/templates/chat/ability.html";
    item.system.description = await TextEditor.enrichHTML(
        item.system.description,
        { async: true }
    );
    let data = { ability: item, actor: this.actor.system };   
    const html = await renderTemplate(template, data);

    const chatData = {
        actor: this.actor._id,
        type: CONST.CHAT_MESSAGE_STYLES.OTHER,
        content: html,
        speaker: {
            actor: this.actor
        }
    };
    return ChatMessage.create(chatData);


}



  /* -------------------------------------------- */

  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @param {Event} event   The originating click event
   * @private
   */
  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    // Get the type of item to create.
    const type = header.dataset.type;
    // Grab any data associated with this control.
    const data = foundry.utils.duplicate(header.dataset);
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
    //return this.actor.createOwnedItem(itemData);
    await this.actor.createEmbeddedDocuments('Item', [itemData], {});

  }

}
