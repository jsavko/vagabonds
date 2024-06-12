// Import Modules
import { VagabondsActor } from "./actor/actor.js";
import { VagabondsActorSheet } from "./actor/actor-sheet.js";
import { VagabondsNPCSheet } from "./actor/npc-sheet.js";
import { VagabondsItem } from "./item/item.js";
import { VagabondsItemSheet } from "./item/item-sheet.js";
import { RollHelper } from "./helper/roll_helper.js";
import { VagabondsActorDataModel } from "./data-models.js";

Hooks.once('init', async function() {

  game.vagabonds = {
    VagabondsActor,
    VagabondsItem,
    RollHelper
  };


  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "@speed.value",
    decimals: 2
  };
  CONFIG.Vagabonds = {};

  // Define custom Entity classes
  CONFIG.Actor.documentClass = VagabondsActor;
  //CONFIG.Actor.dataModels.character = VagabondsActorDataModel;

  CONFIG.Item.documentClass = VagabondsItem;

  CONFIG.Vagabonds.tokenHPColors = {
    damage: 15711680,
    healing: 65280
  }

  //foundry.data.ItemData.DEFAULT_ICON = "icons/containers/bags/pack-leather-brown.webp";

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);

  Actors.registerSheet("vagabonds", VagabondsNPCSheet, { types: ["npc"], makeDefault: true });
  Actors.registerSheet("vagabonds", VagabondsActorSheet, { types: ["character"],makeDefault: true });
  
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("vagabonds", VagabondsItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });

  Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
  });
  

});

Hooks.on("renderSidebarTab", (app, html, data) => {
  html.find(".chat-control-icon").click(async (event) => {
    RollHelper.displayRollModal();
  });
});