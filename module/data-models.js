export class VagabondsActorDataModel extends foundry.abstract.TypeDataModel {
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
                  initial: 3,
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
        };
      }

}
