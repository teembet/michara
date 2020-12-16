<template>
  <v-app>
    <app-nav></app-nav>
    <v-main>
      <router-view />
    </v-main>
    <app-footer></app-footer>
    <div class="hidden-md-and-up">Active: {{ bottomNav }}</div>

    <!-- <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="white"
      style="position: fixed;"
      class="hidden-md-and-up"
    >
      <v-btn color="#f25d13" flat value="recent" @click="toHome">
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="#f25d13" flat value="favorites" @click="toStore">
        <v-icon>store</v-icon>
      </v-btn>

      <v-btn color="#f25d13" flat value="nearby" @click="toDash">
        <v-icon>person</v-icon>
      </v-btn>

      <v-btn color="#f25d13" flat value="contact" @click="toHelp">
        <v-icon>error_outline</v-icon>
      </v-btn>
    </v-bottom-nav> -->
  </v-app>
</template>

<script>
import nav from "./components/nav";
import footer from "./components/Footer";
export default {
  name: "App",

  components: {
    "app-nav": nav,
    "app-footer": footer,
  },
   data(){
    return{
      dialog: false,
      bottomNav: 'recent'
    }
},};
</script>
<style>
#app {
  background-color: white;
}
 .v-dialog{width:auto !important}
</style>
