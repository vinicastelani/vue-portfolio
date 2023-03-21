<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center px-0 mt-4">
      <ul class="d-flex align-center">
        <li v-for="(item, index) in navigationList" :key="index" class="px-2">
          <router-link :to="item.url">
            <nav-button :title="item.title">
              <template v-if="item.icon" #icon>
                <v-icon color="#FFF">{{ item.icon }} </v-icon>
              </template>
            </nav-button>
          </router-link>
        </li>
        <li class="px-2 d-flex">
          <div class="d-flex language-selector">
            <p
              v-for="(language, index) in languageOptions"
              :key="index"
              class="text-caption"
              :class="
                language != selectedLanguage
                  ? ''
                  : 'language-selector__disabled'
              "
              @click="selectedLanguage = language"
            >
              {{ language.split("-")[0].toUpperCase() }}
            </p>
          </div>
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "navigationComponent",
  components: {
    NavButton: () => ({
      component: import("./Components/Button.vue"),
    }),
  },
  data: () => ({
    icon: "",
    navigationList: [
      {
        title: "",
        url: "/",
        icon: "mdi-home",
      },
      {
        title: "Roadmap",
        url: "/roadmap",
      },
      {
        title: "Projects",
        url: "/projects",
      },
    ],
    selectedLanguage: "en-us",
    languageOptions: ["en-us", "pt-br"],
  }),
  computed: {
    ...mapGetters({
      storedLanguage: "getSelectedLanguage",
    }),
  },
  watch: {
    selectedLanguage: {
      handler: function (language) {
        this.updateLanguage(language);
      },
    },
  },
  methods: {
    ...mapActions(["updateLanguage"]),
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
.language-selector {
  p {
    border: solid 1px rgba(255, 255, 255, 0.2);
    margin: 0;
    padding: 4px;
    cursor: pointer;
    transition: ease-in-out 0.3s;
  }
  p:hover {
    background: rgba(255, 255, 255, 0.2);
    transition: ease-in-out 0.3s;
  }
}

.language-selector__disabled {
  background: rgba(255, 255, 255, 0.2);
}
</style>
