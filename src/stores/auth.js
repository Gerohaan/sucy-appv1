import { defineStore } from 'pinia';
import { login } from "./../services/authService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      userInfo: ref({}),
      accessToken: ref(''),
      tokenType: ref(''),
      loading: false,
      response: ref({}),
      dataUser: ref({})
    };
  },
  getters: {
    getUser(state) {
      return state.userInfo
    },
    getDataUser(state) {
      state.dataUser = {
        name: localStorage.getItem('nameUser'),
        email: localStorage.getItem('emailUser')
      }
      return state.dataUser
    }
  },
  actions: {

    async loginUser(param) {
      this.loading = true
      try {
        this.response.value = await login(param)
        this.userInfo.value = this.response.value
        localStorage.setItem('sucyAppToken', this.userInfo.value.access_token)
        localStorage.setItem('nameUser', this.userInfo.value.data.name)
        localStorage.setItem('emailUser', this.userInfo.value.data.email)
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
