// Bind event to d20 icon


export class RollHelper {
    static async displayRollModal() {
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
                    if (rollModifier >= 0) { 
                        var roll = new Roll("2d6 +" + rollModifier);
                    } else {
                        var roll = new Roll("2d6 " + rollModifier);
                    }
                    roll.evaluate({async: true}).then(
                        function(result) {
                            console.log(result); // "Stuff worked!"

                            var RollResult = {type: "action", outcome:"Complete Success", apptitude: rollModifier, roll: result };
                            if (result._total < 7) {
                                RollResult.outcome = "Failure";
                              } else if (result._total < 10) {
                                RollResult.outcome = "Partial Success";
                              } else if (result._total > 12) {
                                RollResult.outcome = "Critical Success";
                              }
                            let template = 'systems/vagabonds/templates/chat/rolls.html';
                            var RollTemplate = renderTemplate(template, RollResult).then(content => {
                                result.toMessage({
                                speaker: ChatMessage.getSpeaker({ }),//actor: this.actor }),
                                flavor: content,
                              });
                            });

                        }

                    );


                   
                }
            }
        }).render(true);
    }

} 