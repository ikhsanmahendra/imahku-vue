<template>
  <section class="flex-none space-y-4 pt-16 bg-white px-4 md:px-20 lg:px-32">
    <h1
      class="text-black font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl"
    >
      Latest Property Lists
    </h1>
    <h1 class="text-sm md:text-base lg:text-lg font-sans text-black">
      Uncover the home of your dreams, where every detail is crafted just for
      you.
    </h1>
  </section>
  <section class="flex-none space-y-4 bg-white">
    <TabProvider :tabs="['House', 'Condo', 'Villa']">
      <TabPanel key="House"><HouseTab /></TabPanel>
      <TabPanel key="Condo"><CondoTab /></TabPanel>
      <TabPanel key="Villa"><VillaTab /></TabPanel>
    </TabProvider>
  </section>
  <section
    id="reviews"
    class="py-16 md:py-20 lg:py-32 space-y-5 md:space-y-8 lg:space-y-10 bg-gray-50"
  >
    <div class="px-4 md:px-20 lg:px-32 space-y-4">
      <h1
        class="text-black font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl"
      >
        Customer Reviews
      </h1>
      <h1 class="text-black font-sans text-sm md:text-base lg:text-lg">
        Customer satisfaction is our priority.
      </h1>
    </div>
    <CustomerReviews />
  </section>
</template>

<script setup lang="ts">
import TabProvider from "@/components/TabProvider.vue";
import { TabPanel } from "@headlessui/vue";
import HouseTab from "./tabs/HouseTab.vue";
import CondoTab from "./tabs/CondoTab.vue";
import VillaTab from "./tabs/VillaTab.vue";
import CustomerReviews from "@/components/CustomerReviews.vue";
</script>
