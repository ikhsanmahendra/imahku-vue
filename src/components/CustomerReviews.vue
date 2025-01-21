<template>
  <Swiper
    :modules="[Autoplay]"
    :centered-slides="false"
    :breakpoints="{
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 40 },
      1024: { slidesPerView: 2.5, spaceBetween: 20 },
    }"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    class="h-full"
  >
    <SwiperSlide v-for="(customer, index) in customers" :key="index">
      <div id="main" class="p-8 bg-white rounded-lg space-y-6">
        <div class="flex space-x-4">
          <div class="size-10 md:size-12 lg:size-16">
            <img
              :src="customer.avatar"
              alt="avatar customer"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1
              class="md:text-lg lg:text-xl text-black font-sans font-bold line-clamp-1"
            >
              {{ customer.name }}
            </h1>
            <h2 class="text-xs md:text-sm lg:text-base text-gray-500 font-sans">
              {{ customer.job }}
            </h2>
          </div>
        </div>

        <div>
          <h1
            class="text-xs md:text-sm lg:text-base font-sans dont-medium text-black line-clamp-3"
          >
            {{ customer.review }}
          </h1>
        </div>
        <div class="flex justify-between">
          <h1 class="text-gray-500 font-sans text-xs md:text-sm font-medium">
            {{ customer.date }}
          </h1>
          <!-- Render bintang -->
          <div class="flex space-x-1">
            <span v-for="n in customer.star" :key="n" class="text-black"
              >★</span
            >
            <span
              v-for="n in 5 - customer.star"
              :key="'empty-' + n"
              class="text-gray-300"
            >
              ★
            </span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import {
  avatar,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "@/assets/images";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const customers = [
  {
    avatar: avatar,
    name: "Sophia Carter",
    job: "Interior Designer",
    review:
      "“The house was beautifully designed and every detail was carefully thought out. I was impressed by the quality of the materials used and the functionality of the layout. Truly a dream home!”",
    date: "Jan 10, 2024",
    star: 5,
  },
  {
    avatar: avatar1,
    name: "Michael Johnson",
    job: "Architect",
    review:
      "“The property has potential but the layout could have been better. Some areas felt cramped, though the natural light in the living room was a highlight.”",
    date: "Jan 12, 2024",
    star: 3,
  },
  {
    avatar: avatar2,
    name: "Emma Wilson",
    job: "Real Estate Agent",
    review:
      "“As someone in the real estate business, I found this property to be a gem. The neighborhood is peaceful, and the house itself is very well-maintained. Perfect for families!”",
    date: "Jan 15, 2024",
    star: 4,
  },
  {
    avatar: avatar3,
    name: "Daniel Roberts",
    job: "Software Engineer",
    review:
      "“I loved the tech-friendly setup of the house, especially the smart home integration. It made living here so convenient. Highly recommend!”",
    date: "Jan 18, 2024",
    star: 5,
  },
  {
    avatar: avatar4,
    name: "Ava Brown",
    job: "Photographer",
    review:
      "“The property had stunning views and the garden was absolutely breathtaking. However, the indoor space felt slightly outdated and could use a modern touch.”",
    date: "Jan 20, 2024",
    star: 4,
  },
  {
    avatar: avatar5,
    name: "Lucas Miller",
    job: "Teacher",
    review:
      "“The house was nice overall, but the lack of storage space was a downside. It’s great for a small family but may not be ideal for larger ones.”",
    date: "Jan 22, 2024",
    star: 3,
  },
  {
    avatar: avatar6,
    name: "Olivia Davis",
    job: "Marketing Specialist",
    review:
      "“A perfect combination of comfort and style. The living room design is cozy and inviting, while the kitchen is well-equipped for hosting guests.”",
    date: "Jan 25, 2024",
    star: 5,
  },
];
</script>
