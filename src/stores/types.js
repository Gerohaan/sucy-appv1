import { defineStore } from 'pinia';
import { getAll } from "./../services/typesService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useTypesStore = defineStore('types', {
  state: () => {
    return {
      loading: false,
      types: ref([])
    };
  },
  getters: {
    getTypes(state) {
      return state.types
    }
  },
  actions: {

    async typesAll() {
      this.loading = true
      try {
        this.types.value = await getAll()
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
