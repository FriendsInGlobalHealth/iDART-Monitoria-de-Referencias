import { useRepo } from 'pinia-orm';
import api from '../apiService/apiService';
import { alert } from '../../components/Shared/Directives/Plugins/Dialog/dialog';
import Prescription from 'src/stores/models/prescription/prescription';

const sync_temp_dispense = useRepo(Prescription);

export default {
  // Axios API call
  post(params: string) {
    return api()
      .post('sync_temp_dispense', params)
      .then((resp) => {
        sync_temp_dispense.save(resp.data);
      });
  },
  get(offset: number) {
    if (offset >= 0) {
      return api()
        .get('sync_temp_dispense?offset=' + offset + '&limit=100')
        .then((resp) => {
          sync_temp_dispense.save(resp.data);
          offset = offset + 100;
          if (resp.data.length > 0) {
            setTimeout(this.get, 2);
          }
        });
    }
  },
  patch(id: number, params: string) {
    return api()
      .patch('sync_temp_dispense/' + id, params)
      .then((resp) => {
        sync_temp_dispense.save(resp.data);
      });
  },
  delete(id: number) {
    return api()
      .delete('sync_temp_dispense/' + id)
      .then(() => {
        sync_temp_dispense.destroy(id);
      });
  },
  // Local Storage Pinia
  newInstanceEntity() {
    return sync_temp_dispense.getModel().$newInstance();
  },
  getAllFromStorage() {
    return sync_temp_dispense.all();
  },

  getPrescriptionsByPatientId(patientid: string) {
    return sync_temp_dispense
      .query()
      .where((prescriptions) => {
        return prescriptions.patientid === patientid;
      })
      .get();
  },
};