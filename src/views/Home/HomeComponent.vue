<template>
  <v-row>
    <v-col cols="12" class="grid">
      <p
        class="text-xl-h1 text-lg-h1 text-md-h1 text-sm-h1 text-h2 my-10 animate"
      >
        {{ textOutput.greeting }}
      </p>
      <p
        class="text-xl-h1 text-lg-h1 text-md-h1 text-sm-h1 text-h2 my-10 font-weight-bold"
      >
        I'm Vini,
      </p>
      <p
        class="text-xl-h1 text-lg-h1 text-md-h1 text-sm-h1 text-h2 my-10 animate"
      >
        {{ textOutput.speech }}
      </p>
    </v-col>
    <v-col cols="12">
      <p class="text-h5 text-md-h5 text-sm-h6">
        {{ text.home.lineOne[storedLanguage] }}
      </p>
      <p class="">
        {{ text.home.lineTwo[storedLanguage] }}
      </p>
      <p class="">
        {{ text.home.lineThree[storedLanguage] }}
      </p>
    </v-col>
    <v-col cols="12" class="">
      <div
        class="d-flex boucing d-flex justify-center align-center justify-space-between"
        style="position: relative"
      >
        <div v-for="i in 5" :key="i" class=""></div>
      </div>
    </v-col>
    <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="profile">
      <div></div>
      <v-row>
        <v-col cols="4" xl="4" lg="4" md="4" sm="12">
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="12" xl="8" lg="8" md="12" sm="12">
          <v-card variant="outlined" color="transparent" elevation="24" tile>
            <v-card-title>
              <p class="my-1">
                {{ text.home.lineFour[storedLanguage] }}
              </p>
            </v-card-title>
            <v-card-text>
              <p class="my-1">{{ text.home.lineFive[storedLanguage] }} lorem</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" xl="4" lg="4" md="4" sm="12">
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="12" xl="8" lg="8" md="12" sm="12">
          <v-card variant="outlined" color="transparent" elevation="24" tile>
            <v-card-text>
              <p class="my-1">
                {{ text.home.lineSix[storedLanguage] }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" xl="4" lg="4" md="4" sm="12">
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="12" xl="8" lg="8" md="12" sm="12">
          <v-card variant="outlined" color="transparent" elevation="24" tile>
            <v-card-text>
              <p class="my-1">
                {{ text.home.lineSeven[storedLanguage] }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="" style="min-height: 244px">
      <v-spacer></v-spacer>
    </v-col>
    <v-col cols="12" class="d-flex justify-center align-center flex-column">
      <p>
        {{ text.home.lineEigth[storedLanguage] }}
      </p>
      <div class="d-flex justify-center align-center">
        <div class="px-4">
          <a href="https://www.linkedin.com/in/visacastelani/" target="_blank">
            <v-icon color="white" large> mdi-linkedin </v-icon>
          </a>
        </div>
        <div class="px-4">
          <a href="mailto:visacastelani@gmail.com" target="_blank">
            <v-icon color="white" large> mdi-email </v-icon>
          </a>
        </div>
        <div class="px-4">
          <a
            href="https://github.com/vinicastelani?tab=repositories"
            target="_blank"
          >
            <v-icon color="white" large> mdi-github </v-icon>
          </a>
        </div>
        <div class="px-4">
          <a href="https://vinicastelani.github.io/curriculo/" target="_blank">
            <v-icon color="white" large> mdi-file </v-icon>
          </a>
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="" style="min-height: 244px"> </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

import text from "@/assets/language";
export default {
  name: "HomeComponent",
  data: () => ({
    greetings: ["Olá!", "Hi!", "Hello!", "Oi!"],
    speech: ["Que bom te conhecer!", "Nice to meet you!"],
    textOutput: {
      greeting: "",
      speech: "",
    },
  }),
  computed: {
    ...mapGetters({ storedLanguage: "getSelectedLanguage" }),
    text: function () {
      return text;
    },
  },
  methods: {
    changeTextOutput: function (arr, key) {
      setTimeout(() => {
        this.changeTextOutput(arr, key);
      }, 20000);

      const randIndex = arr[Math.floor(Math.random() * arr.length)];

      this.textOutput[key] = randIndex;
    },
  },
  created: function () {
    this.changeTextOutput(this.greetings, "greeting");
    this.changeTextOutput(this.speech, "speech");
  },
};
</script>

<style lang="scss">
.profile {
  position: relative;
  min-height: 100%;
  background-image: url("@/assets/images/me3.png");
  z-index: 0;
  > div:nth-child(1) {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(140, 0, 255, 0.2);
    filter: blur(50px);
  }
}

@media screen and (max-width: 1280px) {
  .profile {
    .v-card {
      background: rgb(140, 0, 255, 0.8) !important;
    }
  }
}

@keyframes flipWord {
  0% {
    opacity: 0;
    transform: rotateX(90def);
  }
  7% {
    opacity: 1;
    transform: rotateX(720deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(720deg);
  }
}

.animate {
  animation: flipWord 20s infinite;
}

.boucing {
  position: relative;
  min-height: 428px;
  :nth-child(1) {
    background: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    animation: jump 3s 0.1s ease-in-out infinite;
  }
  :nth-child(2) {
    background: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    animation: jump 3s 0.2s ease-in-out infinite;
  }
  :nth-child(3) {
    background: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    animation: jump 3s 0.3s ease-in-out infinite;
  }
  :nth-child(4) {
    background: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    animation: jump 3s 0.5s ease-in-out infinite;
  }
  :nth-child(5) {
    background: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    animation: jump 3s 0.8s ease-in-out infinite;
  }
}

@keyframes jump {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 100px, 0);
  }
  100% {
    transform: translate3d(0, -10, 0);
  }
}

a {
  text-decoration: none;
}
</style>
