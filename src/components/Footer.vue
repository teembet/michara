<template>
  <v-footer  height="auto">
    <v-card class="flex" >
      <v-card-actions class="justify-center">
        <strong style="padding:30px;font-size:16px"> &copy;2020 — Aitee</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram",
    ],
  }),
};
</script>
<style scoped>
.theme--dark.v-footer {
    background-color: white  !important; 
     color: #FFFFFF;
}
</style>
