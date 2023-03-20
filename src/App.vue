<template>
  <v-app>
    <v-app-bar app color="transparent" elevation="0">
      <navigation />
    </v-app-bar>

    <v-main>
      <v-container>
        <transition>
          <router-view />
        </transition>
      </v-container>
    </v-main>
    <v-footer
      style="background-color: transparent"
      class="d-flex justify-center align-center"
    >
      <p class="text-caption my-0">
        Built with ❤️ -
        {{ time }} -
        <a href="https://www.linkedin.com/in/visacastelani/" target="_blank">
          Vinícius Castelani
        </a>
        ©
      </p>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    navigation: () => ({
      component: import("@/components/Navigation/Navigation.vue"),
    }),
  },

  data: () => ({
    time: "",
  }),
  computed: {
    ...mapGetters({ storedLanguage: "getSelectedLanguage" }),
  },
  methods: {
    getTimeSinceBeggining: function () {
      setTimeout(() => {
        this.getTimeSinceBeggining();
      }, 1000);

      const start = new Date(2023, 2, 13).getTime();
      const current = new Date().getTime();

      let diff = (current - start) / 1000;
      var d = Math.floor(diff / (24 * 60 * 60));
      diff = diff - d * 24 * 60 * 60;
      var h = Math.floor(diff / (60 * 60));
      diff = diff - h * 60 * 60;
      var m = Math.floor(diff / 60);
      diff = diff - m * 60;

      var s = Math.round(diff);

      this.time = `Online since: ${d}d ${h}h ${m}m ${s}s`;
    },
  },
  created: function () {
    this.getTimeSinceBeggining();
  },
};
</script>

<style lang="scss">
@import url("./assets/style/typography.scss");

#app {
  background: linear-gradient(-45deg, #8c00ff, #000000, #000000, #8c00ff);
  background-size: 400% 400%;
  animation: gradient 20s ease-in infinite;
  height: 100%;
}
@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
a {
  text-decoration: none;
  color: #fff;
}
a:visited {
  color: #fff !important;
}
</style>
