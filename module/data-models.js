
export class VagabondsBaseActorModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
        health: new fields.SchemaField({
            value: new fields.NumberField({
              required: true,
              initial: 8,
              integer: true
            }),
            min: new fields.NumberField({
              required: true,
              initial: 0,
              integer: true
            }),
            max: new fields.NumberField({
              required: true,
              initial: 8,
              integer: true
            })
          }),
        speed: new fields.SchemaField({
            value: new fields.NumberField({
              required: true,
              initial: 0,
              integer: true
            }),
            min: new fields.NumberField({
              required: true,
              initial: -10,
              integer: true
            }),
            max: new fields.NumberField({
              required: true,
              initial: 15,
              integer: true
            })
          }),
        armor: new fields.SchemaField({
            value: new fields.NumberField({
              required: true,
              initial: 0,
              integer: true
            }),
            min: new fields.NumberField({
              required: true,
              initial: 0,
              integer: true
            }),
            max: new fields.NumberField({
              required: true,
              initial: 20,
              integer: true
            })
          }),
        attributes: new fields.SchemaField({
            level: new fields.SchemaField({
              value: new fields.NumberField({
                required: true,
                initial: 1,
                integer: true
              })
            }),
            xp: new fields.SchemaField({
              value: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
              }),
              min: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
              }),
              max: new fields.NumberField({
                required: true,
                initial: 100,
                integer: true
              })
            })
          })
    };
  }
}

export class VagabondsActorDataModel extends VagabondsBaseActorModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return foundry.utils.mergeObject(super.defineSchema(), {
            aproaches :  new fields.SchemaField({
                conflict: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                goal: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                gimmick: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                background: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                foreground: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                weakness: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                wealth: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                a1: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                a2: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                a3: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                a4: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                a5: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                a6: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
                coreflaw: new fields.StringField({
                  nullable:false,
                  required: true,
                  initial:""
                }),
            }),
        });
      }

}



export class VagabondsNPCDataModel extends VagabondsBaseActorModel {
  static defineSchema() {
      const fields = foundry.data.fields;
      return foundry.utils.mergeObject(super.defineSchema(), {
          damage: new fields.SchemaField({
              value: new fields.NumberField({
                required: true,
                initial: 1,
                integer: true
            })}),
          description: new fields.StringField({
            nullable:false,
            required: true,
            initial:""
          }),
          traits: new fields.StringField({
            nullable:false,
            required: true,
            initial:""
          }),
          combat_notes: new fields.StringField({
            nullable:false,
            required: true,
            initial:""
          }),
      });
    }
  }


  export class VagabondsBaseItemModel  extends foundry.abstract.TypeDataModel {

    static defineSchema() {
      const fields = foundry.data.fields;
      return {
        description: new fields.StringField({
          nullable:false,
          required: true,
          initial:""
        })
      };
    }
  }