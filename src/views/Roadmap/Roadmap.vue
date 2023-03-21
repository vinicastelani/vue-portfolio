<template>
  <v-row>
    <v-col cols="12" class="d-flex flex-column align-center">
      <v-timeline class="my-12">
        <v-timeline-item
          v-for="(year, i) in text.roadMap"
          :key="i"
          :color="'#FFF'"
          small
          fill-dot
        >
          <template v-slot:opposite>
            <p class="headline font-weight-bold my-0" v-text="year.year"></p>
          </template>
          <v-card
            variant="outlined"
            color="transparent"
            elevation="24"
            tile
            class="px-4 py-4"
          >
            <p class="text-caption my-0">
              {{ year[storedLanguage] }}
            </p>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import text from "@/assets/language";

export default {
  name: "roadmapComponent",
  data: () => ({
    years: [
      { color: "cyan", year: "1960" },
      { color: "green", year: "1970" },
      {
        color: "pink",
        year: "1980",
      },
      { color: "amber", year: "1990" },
      { color: "orange", year: "2000" },
    ],
  }),
  computed: {
    ...mapGetters({ storedLanguage: "getSelectedLanguage" }),
    text: function () {
      return text;
    },
  },
};
</script>

<style scoped>
.theme--light.v-timeline:before {
  background: rgb(255, 255, 255);
}
</style>
