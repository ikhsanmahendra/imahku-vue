<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterBar from "./components/FooterBar.vue";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <RouterView />
  <FooterBar />
</template>
