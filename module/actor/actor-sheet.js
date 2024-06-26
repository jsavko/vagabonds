/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */

import VagabondsActorSheetBase from "../svelte/VagabondsActorSheetBase.svelte"; // import Svelte App
import { writable } from "svelte/store";

export class VagabondsActorSheet extends ActorSheet {
    app = null;
    dataStore = null;

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["vagabonds", "sheet", "actor"],
            template: "systems/vagabonds/templates/actor/actor-sheetv2.html",
            width: 640,
            height: 700,
            tabs: [
                {
                    navSelector: ".sheet-tabs",
                    contentSelector: ".sheet-body",
                    initial: "description"
                }
            ]
        });
    }

    /* -------------------------------------------- */


    /** @override */
    getData() {
        const data = super.getData();

        // Prepare items.
        if (this.actor.type == "character") {
            this._prepareCharacterItems(data);
        }

        //console.log(data);
        return data;
    }

    _prepareCharacterItems(sheetData) {
        const actorData = sheetData.data;

        // Initialize containers.
        const gear = [];
        const techniques = [];
        const lineage = [];
        const injury = [];
        const approach = [];
        const trait = [];
        // Iterate through items, allocating to containers
        // let totalWeight = 0;
        for (let i of sheetData.items) {
            i.img = i.img || DEFAULT_TOKEN;
            // Append to features.

            switch (i.type) {
                case "item":
                    gear.push(i);
                    break;
                case "lineage":
                    lineage.push(i);
                    break;
                case "technique":
                    techniques.push(i);
                    break;
                case "injury":
                    injury.push(i);
                    break;
                case "approach":
                    approach.push(i);
                    break;
                case "trait":
                    trait.push(i);
            }
        }

        // Assign and return
        sheetData.gear = gear.sort((a, b) => a.sort - b.sort);
        sheetData.techniques = techniques.sort((a, b) => a.sort - b.sort);;
        sheetData.lineage = lineage;
        sheetData.injury = injury.sort((a, b) => a.sort - b.sort);;
        sheetData.approach = approach;
        sheetData.trait = trait;
        sheetData.sheet = this;
    }

    async migrateData(...args){ 
      super.migrateData(...args);
      //Let's migrate system data? 
      console.log('Attempting to migrate system data');
    }


    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        // Everything below here is only needed if the sheet is editable
        if (!this.options.editable) return;

        // Add Inventory Item
        html.find(".item-create").click(this._onItemCreate.bind(this));

        // Update Inventory Item
        html.find(".item-edit").click((ev) => {
            const li = $(ev.currentTarget).parents(".item");
            //const item = this.actor.getOwnedItem(li.data("itemId"));
            const item = this.actor.items.get(li.data("itemId"));
            item.sheet.render(true);
        });

        html.find(".item-name").dblclick((ev) => {
            const li = $(ev.currentTarget).parents(".item");
            //const item = this.actor.getOwnedItem(li.data("itemId"));
            const item = this.actor.items.get(li.data("itemId"));
            item.sheet.render(true);
        });

        // Delete Inventory Item
        html.find(".item-delete").click((ev) => {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.items.get(li.data("itemId"));
            item.delete();
            li.slideUp(200, () => this.render(false));
        });

        // Rollable abilities.
        html.find(".rollable").click(this._onRoll.bind(this));
    }

    async _onItemDelete(itemId) {
        const item = this.actor.items.get(itemId);
        item.delete();
        this.render();
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
            type: type
        };
        // Finally, create the item!

        return await Item.create(itemData, { parent: this.actor }).then(
            (item) => {
                item.sheet.render(true);
            }
        );
    }

    async _onItemEdit(itemId) {
        const item = this.actor.items.get(itemId);
        item.sheet.render(true);
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
            let roll = new Roll(dataset.roll, this.actor);
            let label = dataset.label ? `Rolling ${dataset.label}` : "";
            roll.roll().toMessage({
                speaker: ChatMessage.getSpeaker({ actor: this.actor }),
                flavor: label
            });
        }

        if (dataset.defend) {
            game.vagabonds.RollHelper.displayRollModal(true);
        }
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

    render(force = false, options = {}) {
        // Grab the sheetdata for both updates and new apps.
        let sheetData = this.getData();
        // Exit if Vue has already rendered.
        if (this.app !== null) {
            let states = Application.RENDER_STATES;
            if (
                this._state == states.RENDERING ||
                this._state == states.RENDERED
            ) {
                // Update the Datastore.
                this.dataStore?.set(sheetData);
                return;
            }
        }
        // Run the normal Foundry render once.
        this._render(force, options)
            .catch((err) => {
                err.message = `An error occurred while rendering ${this.constructor.name} ${this.appId}: ${err.message}`;
                console.error(err);
                this._state = Application.RENDER_STATES.ERROR;
            })
            // Run Svelte's render, assign it to our prop for tracking.
            .then((rendered) => {
                // Prepare the actor data.
                this.dataStore = writable(sheetData);
                //console.log(sheetData);
                this.app = new VagabondsActorSheetBase({
                    target: this.element.find("form").get(0),
                    props: {
                        dataStore: this.dataStore
                        //name: 'world',
                    }
                });
            });
        // Update editable permission
        options.editable = options.editable ?? this.object.isOwner;

        // Register the active Application with the referenced Documents
        this.object.apps[this.appId] = this;
        // Return per the overridden method.
        return this;
    }

    close(options = {}) {
        if (this.app != null) {
            this.app.$destroy();
            this.app = null;
            this.dataStore = null;
        }
        return super.close(options);
    }
}
