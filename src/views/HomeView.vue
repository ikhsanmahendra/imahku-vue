<template>
  <header>
    <div
      class="flex-none md:flex justify-between space-y-2 md:space-x-20 lg:space-x-40 py-4 bg-white px-4 md:px-20 lg:px-32"
    >
      <h1
        class="text-5xl md:text-6xl lg:text-7xl font-extrabold font-sans text-black"
      >
        Find Your Dream House
      </h1>
      <div class="space-y-5">
        <h1 class="text-sm md:text-base lg:text-lg text-gray-500 font-sans">
          Discover the charm of an exclusive family home nestled in the serene
          hills of Sumedang, where the air is fresh, the atmosphere is tranquil,
          and the cool breeze invites relaxation.
        </h1>
        <div class="w-1/2">
          <ButtonComponent>Discover More</ButtonComponent>
        </div>
      </div>
    </div>

    <!-- slider -->
    <div class="w-full h-auto flex flex-col py-10 items-center">
      <div class="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Swiper
          :modules="[Pagination, Autoplay]"
          :space-between="1"
          :centered-slides="true"
          :slides-per-view="1.2"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :pagination="{
            dynamicBullets: true,
            clickable: true,
            type: 'bullets',
          }"
          class="h-full"
          @slideChange="onSwiperSlideChange"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <div
              :class="{
                'transition-all duration-3000 flex justify-center items-center scale-100':
                  isActive(index),
                'transition-all duration-2000 flex justify-center items-center scale-90':
                  !isActive(index),
              }"
            >
              <img
                :src="image"
                :alt="'Slide ' + (index + 1)"
                class="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <!-- slider brand -->
    <div
      class="w-full bg-gray-50 flex flex-col py-8 md:py-12 lg:py-16 items-center"
    >
      <div class="relative w-full">
        <Swiper
          :modules="[Pagination, Autoplay]"
          :space-between="50"
          :slides-per-view="5"
          :loop="true"
          :autoplay="{ delay: 0, disableOnInteraction: false }"
          :speed="2000"
          class="h-full"
          :freeMode="true"
          :loopedSlides="5"
          @slideChange="onSwiperSlideChange"
        >
          <SwiperSlide v-for="(brand, index) in logo" :key="index">
            <img
              :src="brand"
              :alt="'Slide ' + (index + 1)"
              class="w-14 h-3 md:w-16 md:h-5 lg:w-20 lg:h-8"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </header>

  <main>
    <section class="pb-6 md:pb-8 lg:pb-10">
      <div
        class="pt-10 md:pt-16 lg:pt-20 flex-1 md:flex md:justify-between space-x-0 md:space-x-4 px-4 md:px-20 lg:px-32"
      >
        <div class="space-y-4">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sans text-black"
          >
            Latest Property List
          </h1>
          <h2 class="text-sm md:text-base lg:text-lg font-sans text-gray-500">
            Uncover the home of your dreams, where every detail is crafted just
            for you.
          </h2>
        </div>
        <div
          class="flex justify-center items-center w-1/3 md:w-1/6 mt-4 md:mt-0"
        >
          <ButtonComponent @click="">View All</ButtonComponent>
        </div>
      </div>

      <TabProvider :tabs="['House', 'Condo', 'Villa']">
        <TabPanel key="House"><HouseTab /></TabPanel>
        <TabPanel key="Condo"><CondoTab /></TabPanel>
        <TabPanel key="Villa"><VillaTab /></TabPanel>
      </TabProvider>
    </section>

    <section class="bg-gray-50 py-10 md:py-16 lg:py-20 px-4 md:px-20 lg:px-32">
      <div class="px-10 md:px-16 lg:px-20">
        <h1
          class="text-2xl md:text-3xl lg:text-4xl font-sans font-extrabold text-black text-center mb-3"
        >
          Find your new living
        </h1>
        <h2
          class="text-xs md:text-sm lg:text-base font-sans text-gray-500 text-center mb-8"
        >
          ImahKu will give you help hand with search for a new living
        </h2>
        <div class="flex justify-center items-center">
          <ButtonComponent>Get a New Comfortable Home</ButtonComponent>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20 lg:py-36 px-4 md:px-20 lg:px-32">
      <div class="space-y-6 md:space-y-8 lg:space-y-10">
        <div class="space-y-4">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-black text-start"
          >
            Why Chose Us?
          </h1>
          <h2
            class="text-gray-500 text-sm md:text-base lg:text-lg font-sans w-3/4"
          >
            We are committed to providing exceptional service and unparalleled
            expertise in the real estate market.
          </h2>
        </div>
        <div class="w-full h-full rounded-2xl">
          <img
            src="@/assets/images/slide1.jpg"
            alt=""
            class="w-full h-52 md:h-64 lg:h-80 rounded-2xl object-cover"
          />
        </div>
        <div
          class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-12 space-y-8 md:space-y-0 md:gap-y-10 lg:gap-y-20"
        >
          <div class="space-y-4">
            <h1
              class="text-black font-bold font-sans text-lg md:text-xl lg:text-2xl"
            >
              Professional
            </h1>
            <h2 class="text-gray-500 font-sans text-sm md:text-base">
              Team of professionals in the Reality and Financing sector. With
              our experiences you will find your future house easilly.
            </h2>
          </div>

          <div class="space-y-4">
            <h1
              class="text-black font-bold font-sans text-lg md:text-xl lg:text-2xl"
            >
              Educated
            </h1>
            <h2 class="text-gray-500 font-sans text-sm md:text-base">
              Behind agreements is a lot of documentation and paper work. Our
              team takes care to be educated in every legislative policies,
            </h2>
          </div>

          <div class="space-y-4">
            <h1
              class="text-black font-bold font-sans text-lg md:text-xl lg:text-2xl"
            >
              Trusted
            </h1>
            <h2 class="text-gray-500 font-sans text-sm md:text-base">
              We are trusted by over thousands users around the Europe and Asian
              countries. Feel free to read our customer reviews.
            </h2>
          </div>

          <div class="space-y-4">
            <h1
              class="text-black font-bold font-sans text-lg md:text-xl lg:text-2xl"
            >
              Professional
            </h1>
            <h2 class="text-gray-500 font-sans text-sm md:text-base">
              Team of professionals in the Reality and Financing sector. With
              our experiences you will find your future house easilly.
            </h2>
          </div>

          <div class="space-y-4">
            <h1
              class="text-black font-bold font-sans text-lg md:text-xl lg:text-2xl"
            >
              Educated
            </h1>
            <h2 class="text-gray-500 font-sans text-sm md:text-base">
              Behind agreements is a lot of documentation and paper work. Our
              team takes care to be educated in every legislative policies,
            </h2>
          </div>

          <div class="space-y-4">
            <h1
              class="text-black font-bold font-sans text-lg md:text-xl lg:text-2xl"
            >
              Trusted
            </h1>
            <h2 class="text-gray-500 font-sans text-sm md:text-base">
              We are trusted by over thousands users around the Europe and Asian
              countries. Feel free to read our customer reviews.
            </h2>
          </div>
        </div>
      </div>
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
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  slide1,
  slide2,
  slide3,
} from "@/assets/images";
import TabProvider from "@/components/TabProvider.vue";
import { TabPanel } from "@headlessui/vue";
import HouseTab from "./tabs/HouseTab.vue";
import CondoTab from "./tabs/CondoTab.vue";
import VillaTab from "./tabs/VillaTab.vue";
import { ref } from "vue";
import CustomerReviews from "@/components/CustomerReviews.vue";

const images = [slide1, slide2, slide3, slide1, slide2, slide3];
const logo = [logo1, logo2, logo3, logo4, logo5, logo6];

const activeIndex = ref(0);

// Check if the slide is active
const isActive = (index: number) => {
  return index === activeIndex.value;
};

const onSwiperSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex;
};
</script>

<style scoped>
::v-deep(.swiper-pagination-bullet) {
  background: rgb(107, 107, 107) !important;
  opacity: 0.7;
}

::v-deep(.swiper-pagination-bullet-active) {
  background: rgb(0, 0, 0) !important;
  opacity: 1;
  width: 30%;
  border-radius: 20px;
}
</style>
