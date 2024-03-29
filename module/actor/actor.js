/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class VagabondsActor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();


    const actorData = this;

    //const data = actorData.data;
    //const flags = actorData.flags;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (this.type === 'character') this._prepareCharacterData(actorData);
    //if (actorData.type === 'npc') this._prepareCharacterData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    //const data = actorData.data;
    // Make modifications to data here. For example:
    return actorData
  }

}