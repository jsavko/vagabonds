/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class VagabondsItem extends Item {
  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  
  prepareData() {
    super.prepareData();

    // Get the Item's data

    const itemData = this;

    //const actorData = this.actor ? this.actor.data : {};
    //const data = itemData.data;

    if (itemData.type == "injury" && itemData.img == 'icons/svg/item-bag.svg') { 
      itemData.img = 'systems/vagabonds/assets/cut-palm.svg'
    } else if(itemData.type == "item" && itemData.img == 'icons/svg/item-bag.svg') { 
      itemData.img = 'systems/vagabonds/assets/swap-bag.svg'
    } else if(itemData.type == "technique" && itemData.img == 'icons/svg/item-bag.svg') { 
      itemData.img = 'systems/vagabonds/assets/swords-emblem.svg'
    } 

    //console.log(itemData);
  }

  async _preCreate(data, options, user) {
    await super._preCreate(data, options, user);
    this.updateSource({ sort: Date.now() });
  }

}