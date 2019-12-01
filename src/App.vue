<template>
  <v-app>
    <v-btn block @click="install()" v-if="isInstall">
      Install to homescreen
    </v-btn>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    isInstall: false,
    installer: undefined
  }),
  created() {
    let installPrompt;
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      installPrompt = e;
      this.isInstall = true;
    });
    this.installer = () => {
      this.isInstall = false;
      installPrompt.prompt();
      installPrompt.userChoice.then(res => {
        if (res.outcome === "accepted") {
          // eslint-disable-next-line
          console.log("user accepted");
        } else {
          // eslint-disable-next-line
          console.log("User denied");
        }
        installPrompt = null;
      });
    };
  }
};
</script>
