<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterBar from "./components/FooterBar.vue";
import NavBarComponent from "./components/NavBarComponent.vue";
</script>

<template>
  <NavBarComponent />
  <RouterView />
  <FooterBar />
</template>
