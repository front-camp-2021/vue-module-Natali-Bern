<template>
  <div class="app-wrapper">
    <Header />
    <Breadcrumbs />
    <Main />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Breadcrumbs from "./components/breadcrumbs/breadbrumbs.vue";
import Header from "./components/header/header.vue";
import Main from "./components/main/main.vue";
export default {
  name: "App",
  components: {
    Header,
    Breadcrumbs,
    Main,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap");
@import "/src/assets/styles/variables.scss";


body {
  background-color: $page-background-color;
  position: relative !important;
}
* {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
}
</style>
