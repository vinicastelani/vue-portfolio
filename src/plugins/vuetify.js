import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md",
  },
  theme: {
    themes: {
      light: {
        primary: "#2b2b2b;",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
