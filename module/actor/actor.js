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

  async _preUpdate(changed, options, user) {
    if ( (await super._preUpdate(changed, options, user)) === false ) return false;
    
    if ( "health" in (this.system || {}) ) {
      foundry.utils.setProperty(options, "vagabonds.health", { ...this.system.health }); 
    }
  }

  async _onUpdate(data, options, userId) {
    super._onUpdate(data, options, userId);

    const curr =this.system.health.value;
    const hp = options.vagabonds?.health; 

    if (hp) { 
      const changes = {
        hp: curr - hp.value,
      };  
      console.log(changes)
      changes.total = changes.hp;
      const isDead = this.system.health.value <= 0;
  
      this._displayTokenEffect(changes);
      if (isDead) {
        
        this._displayTokenMessage('Dead', CONFIG.Vagabonds.tokenHPColors['damage'] )

      }
    }
  }

 _displayTokenMessage(message, fill) { 
  const tokens = this.isToken ? [this.token] : this.getActiveTokens(true, true);
  if ( !tokens.length ) return;

    for ( const token of tokens ) {
      if ( !token.object?.visible || !token.object?.renderable ) continue;
      const t = token.object;
      canvas.interface.createScrollingText(t.center, message, {
        anchor: CONST.TEXT_ANCHOR_POINTS.TOP,
        // Adapt the font size relative to the Actor's HP total to emphasize more significant blows
        fontSize: 48, // Range between [16, 48]
        fill: fill,
        stroke: 0x000000,
        strokeThickness: 4,
        jitter: 0.25
      });
    }

  
}

  _displayTokenEffect(changes) {
    let key;
    let value;
    if ( changes.hp < 0 ) {
      key = "damage";
      value = changes.total;
    } else if ( changes.hp > 0 ) {
      key = "healing";
      value = changes.total;
    }

    if ( !key || !value ) return;

    const tokens = this.isToken ? [this.token] : this.getActiveTokens(true, true);
    if ( !tokens.length ) return;

    const pct = Math.clamp(Math.abs(value) / this.system.health.max, 0, 1);
    const fill = CONFIG.Vagabonds.tokenHPColors[key];

    for ( const token of tokens ) {
      if ( !token.object?.visible || !token.object?.renderable ) continue;
      const t = token.object;
      canvas.interface.createScrollingText(t.center, value.signedString(), {
        anchor: CONST.TEXT_ANCHOR_POINTS.TOP,
        // Adapt the font size relative to the Actor's HP total to emphasize more significant blows
        fontSize: 16 + (32 * pct), // Range between [16, 48]
        fill: fill,
        stroke: 0x000000,
        strokeThickness: 4,
        jitter: 0.25
      });
    }
  }


}