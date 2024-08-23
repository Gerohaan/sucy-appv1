import { defineStore } from 'pinia';
import { getAll } from "./../services/sucyService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useSucyStore = defineStore('sucy', {
  state: () => {
    return {
      loading: false,
      sucy: ref([])
    };
  },
  getters: {
    getSucy(state) {
      return state.sucy
    }
  },
  actions: {

    async sucyAll() {
      this.loading = true
      try {
        this.sucy.value = await getAll()
        this.loading = false
      } catch (error) {
        this.loading = false
        Notify.create({
          type: 'negative',
          message: error.response.data.message,
          position: 'bottom-right'
        })
        console.log(error);

        throw error
      }
    },

  },
});
