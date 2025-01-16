<script setup lang="ts">
import {
  IconFB,
  IconIG,
  IconLinkedin,
  IconMail,
  IconMaps,
  IconPhone,
  IconX,
} from "./icons";
</script>

<template>
  <div
    class="px-4 md:px-20 lg:px-32 py-20 w-full flex-1 md:flex justify-between items-start md:space-x-8"
  >
    <div class="space-y-6 py-5 md:py-0 w-full md:w-1/2">
      <h1
        class="text-xl md:text-2xl lg:text-3xl font-extrabold font-sans text-black"
      >
        Imahku
      </h1>
      <p class="text-gray-600 font-sans">
        We are passionate about helping our clients achieve their real estate
        dreams. With a team of dedicated professionals and a commitment to
        integrity, we provide exceptional service and expertise in every
        transaction.
      </p>
      <div class="flex justify-start items-center space-x-12">
        <a href="">
          <IconFB />
        </a>
        <a href="">
          <IconX />
        </a>
        <a href="">
          <IconLinkedin />
        </a>
        <a href="">
          <IconIG />
        </a>
      </div>
    </div>

    <div class="space-y-6 py-5 md:py-0 w-full md:w-1/3">
      <h1
        class="text-base md:text-lg lg:text-xl font-extrabold font-sans text-black"
      >
        License
      </h1>
      <p class="text-gray-600 font-sans">Privacy Policy</p>
      <p class="text-gray-600 font-sans">Copyright</p>
    </div>

    <div class="flex flex-col space-y-6 py-5 md:py-0 w-full md:w-1/3">
      <h1
        class="text-base md:text-lg lg:text-xl font-extrabold font-sans text-black"
      >
        Contact
      </h1>
      <div class="flex space-x-8 justify-start items-start">
        <div>
          <IconPhone />
        </div>
        <p class="text-gray-600 font-sans">+6282929292930</p>
      </div>
      <div class="flex space-x-8 justify-start items-start">
        <div>
          <IconMail />
        </div>
        <p class="text-gray-600 font-sans">support@imahku.com</p>
      </div>
      <div class="flex space-x-8 justify-start items-start">
        <div>
          <IconMaps />
        </div>
        <p class="text-gray-600 font-sans">
          2972 Westheimer Rd. Santa Ana, Illinois 85486
        </p>
      </div>
    </div>
  </div>
</template>
