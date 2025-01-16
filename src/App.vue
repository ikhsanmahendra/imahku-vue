<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterBar from "./components/FooterBar.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterBar />
</template>
