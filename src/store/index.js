import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: ["pt-br", "en-us"],
    selectedLanguage: "en-us",
  },
  actions: {
    updateLanguage: function (context, payload) {
      context.commit("updateLanguageState", payload);
    },
  },
  mutations: {
    updateLanguageState: function (state, value) {
      state.selectedLanguage = value;
    },
  },
  getters: {
    getSelectedLanguage: function (state) {
      return state.selectedLanguage;
    },
  },
});
