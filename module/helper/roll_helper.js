// Bind event to d20 icon


export class RollHelper {
    static async displayRollModal(defend) {
        defend = (typeof defend !== 'undefined') ?  defend : "";
        if (defend == true) { defend = "checked";}
        let confirmed = false;
        // Add modifier for a d20 roll
        new Dialog({
            title: "Roll + Apptitude",
            content: `
            <form>
            <div class="form-group">
            <label>Apptitude:</label>
                <select id="modifier-value" name="modifier-value">
                    <option value="+3">+3</option>
                    <option value="+2">+2</option>
                    <option value="+1">+1</option>
                    <option value="+0" selected>0</option>
                    <option value="-1">-1</option>
                    <option value="-2">-2</option>
                    <option value="-3">-3</option>
                </select>
            </div>
            <div class="form-group">
                <label>Defence Roll?</label>
                <input type="checkbox" ` + defend + ` id="rolltype-defense" name="rolltype-defense" value="1"> Yes
            </div>
            <div class="form-group">
            <label>Roll Type:</label>
                <select id="roll-adv" name="roll-adv">
                    <option value="adv">Advantage</option>
                    <option value="normal" selected>Normal</option>
                    <option value="dis">Disadvantage</option>
                </select>
            </div>
            </form>
            `,
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Roll!",
                    callback: () => confirmed = true
                },
                two: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "Cancel",
                    callback: () => confirmed = false
                }
            },
            default: "Cancel",
            close: html => {
                if (confirmed) {
                    let rollModifier = parseInt(html.find('[name=modifier-value]')[0].value);
                    let rollisDefense= html.find(`[name=rolltype-defense]`).is(":checked");
                    let rollType =html.find('[name=roll-adv]')[0].value;
                    //let token = canvas.tokens.controlled;
                    let actor = game.user.character ?? canvas.tokens.controlled[0]?.actor ?? game.actors.find(a => a.owner);

                    //console.log(token);
                    if (actor == undefined) {
                            ui.notifications.error("You must select a token to roll");
                            return
                    }
                    let roll;
                    let RollTemplate;
                    let baseRoll = "2d6";
                    console.log(rollType);
                    if (rollType == "adv") baseRoll = "3d6kh2"
                    if (rollType == "dis") baseRoll = "3d6kl2"

                    if (rollModifier >= 0) { 

                        roll = new Roll(baseRoll + " +" + rollModifier, actor);
                    } else {
                        roll = new Roll(baseRoll + rollModifier, actor);

                    }
                    roll.evaluate(  ).then(
                        function(result) {
                            //console.log(result); // "Stuff worked!"
                            //Set Roll Type
                            let RollResult;
                            if (rollisDefense == true) {
                                //Making a defense roll
                                RollResult = {type: "defend", high: "0", low:"0", damage:"No", outcome:" Outright success", roll: roll };
                                if (result.terms[0].results[0].result > result.terms[0].results[1].result) {
                                    RollResult.high = result.terms[0].results[0].result;
                                    RollResult.low = result.terms[0].results[1].result;
                                } else {
                                    RollResult.low = result.terms[0].results[0].result;
                                    RollResult.high = result.terms[0].results[1].result;
                                }

                                if (result._total < 7) {
                                    RollResult.outcome = "Failure";
                                    RollResult.damage =  (RollResult.high - result.data.system.armor.value);
                                } else if (result._total < 10) {
                                    RollResult.outcome = "Partial Success";
                                    RollResult.damage = (RollResult.low - result.data.system.armor.value)
                                } 

                                if (RollResult.damage < 0) { RollResult.damage = 0; }
                                
                                let template = 'systems/vagabonds/templates/chat/rolls.html';
                                RollTemplate = renderTemplate(template, RollResult).then(content => {
                                    result.toMessage({
                                        user: game.user.id,
                                        speaker: ChatMessage.getSpeaker({actor: result.data}),
                                        flavor: content,
                                    });
                                });

                            } else {
                                //Normal Roll
                                RollResult = {type: "action", outcome:"Complete Success", apptitude: rollModifier, roll: result };
                                if (result._total < 7) {
                                    RollResult.outcome = "Failure";
                                } else if (result._total < 10) {
                                    RollResult.outcome = "Partial Success";
                                } else if (result._total > 12) {
                                    RollResult.outcome = "Critical Success";
                                }
                                let template = 'systems/vagabonds/templates/chat/rolls.html';
                                RollTemplate = renderTemplate(template, RollResult).then(content => {
                                    result.toMessage({
                                    speaker: ChatMessage.getSpeaker({ }),//actor: this.actor }),
                                    flavor: content,
                                    });
                                });
                            
                            }
                        }
                    );
                }
            }
        }).render(true);
    }

} 