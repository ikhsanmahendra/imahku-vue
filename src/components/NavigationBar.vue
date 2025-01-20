<template>
  <div
    class="w-full px-4 md:px-20 lg:px-32 py-4 flex justify-between items-center"
  >
    <h1
      class="text-xl md:text-2xl lg:text-3xl font-extrabold font-sans text-black"
    >
      <router-link to="/"> Imahku </router-link>
    </h1>

    <!-- Menu for larger screens -->
    <div class="hidden md:flex justify-between space-x-8 items-center">
      <router-link
        to="/"
        :class="{ 'underline underline-offset-4 text-black': isActive('/') }"
        class="text-sm md:text-base lg:text-lg font-bold font-sans"
      >
        Home
      </router-link>
      <router-link
        to="/list"
        :class="{
          'underline underline-offset-4 text-black': isActive('/list'),
        }"
        class="text-sm md:text-base lg:text-lg font-bold font-sans"
      >
        Property List
      </router-link>
      <router-link
        to="/about"
        :class="{
          'underline underline-offset-4 text-black': isActive('/about'),
        }"
        class="text-sm md:text-base lg:text-lg font-bold font-sans"
      >
        About Us
      </router-link>
      <router-link
        to="/contact"
        :class="{
          'underline underline-offset-4 text-black': isActive('/contact'),
        }"
        class="text-sm md:text-base lg:text-lg font-bold font-sans"
      >
        Get In Touch
      </router-link>
    </div>

    <!-- Mobile menu button -->
    <button
      @click="isMenuOpen = !isMenuOpen"
      class="block md:hidden text-black focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <!-- Mobile menu -->
    <div
      v-if="isMenuOpen"
      class="absolute top-12 left-0 w-full bg-white shadow-md md:hidden"
    >
      <router-link
        to="/"
        :class="{ 'underline underline-offset-4 text-black': isActive('/') }"
        class="block py-2 px-4 text-sm font-bold font-sans border-b"
      >
        Home
      </router-link>
      <router-link
        to="/list"
        :class="{
          'underline underline-offset-4 text-black': isActive('/list'),
        }"
        class="block py-2 px-4 text-sm font-bold font-sans border-b"
      >
        Property List
      </router-link>
      <router-link
        to="/about"
        :class="{
          'underline underline-offset-4 text-black': isActive('/about'),
        }"
        class="block py-2 px-4 text-sm font-bold font-sans border-b"
      >
        About Us
      </router-link>
      <router-link
        to="/contact"
        :class="{
          'underline underline-offset-4 text-black': isActive('/contact'),
        }"
        class="block py-2 px-4 text-sm font-bold font-sans"
      >
        Get In Touch
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const route = useRoute();

const isActive = (path) => route.path === path;
</script>
