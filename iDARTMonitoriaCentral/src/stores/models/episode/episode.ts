import { Model, ModelFields } from 'pinia-orm';

export default class Episode extends Model {
  static entity = 'episodes';

  static fields(): ModelFields {
    return {
      id: this.attr(null),
      startdate: this.attr(''),
      stopdate: this.attr(''),
      startreason: this.attr(''),
      stopreason: this.attr(''),
      startnotes: this.attr(''),
      stopnotes: this.attr(''),
      patientuuid: this.attr(''),
      syncstatus: this.attr(''),
      us: this.attr(''),
      clinic: this.attr(''),
      usuuid: this.attr(''),
      clinicuuid: this.attr(''),

      // Relationship

      //patient: this.belongsTo(Patient, 'patientuuid'),
      //  clinic: this.belongsTo(Clinic, 'clinic'),
    };
  }
}
