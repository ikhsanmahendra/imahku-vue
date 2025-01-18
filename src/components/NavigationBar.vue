<template>
  <div
    class="w-full px-4 md:px-20 lg:px-32 py-4 flex justify-between items-center"
  >
    <h1
      class="text-xl md:text-2xl lg:text-3xl font-extrabold font-sans text-black"
    >
      <a href="/"> Imahku </a>
    </h1>
    <!-- Menu for larger screens -->
    <div class="hidden md:flex justify-between space-x-8 items-center">
      <a class="text-sm md:text-base lg:text-lg font-bold font-sans" href="/"
        >Home</a
      >
      <a
        class="text-sm md:text-base lg:text-lg font-bold font-sans"
        href="/list"
        >Property List</a
      >
      <a
        class="text-sm md:text-base lg:text-lg font-bold font-sans"
        href="/about"
        >About Us</a
      >
      <a
        class="text-sm md:text-base lg:text-lg font-bold font-sans"
        href="/contact"
        >Get In Touch</a
      >
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
      <a class="block py-2 px-4 text-sm font-bold font-sans border-b" href="/"
        >Home</a
      >
      <a
        class="block py-2 px-4 text-sm font-bold font-sans border-b"
        href="/list"
        >Property List</a
      >
      <a
        class="block py-2 px-4 text-sm font-bold font-sans border-b"
        href="/about"
        >About Us</a
      >
      <a class="block py-2 px-4 text-sm font-bold font-sans" href="/contact"
        >Get In Touch</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false);
</script>
