import { defineStore } from 'pinia';
import { getAll } from "./../services/categoriesService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useCategoriesStore = defineStore('categories', {
  state: () => {
    return {
      loading: false,
      categories: ref([])
    };
  },
  getters: {
    getCategories(state) {
      return state.categories
    }
  },
  actions: {

    async categoriesAll() {
      this.loading = true
      try {
        this.categories.value = await getAll()
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
