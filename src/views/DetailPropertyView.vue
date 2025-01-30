<template>
  <section v-if="detail">
    <div
      class="w-full space-y-4 md:space-y-8 lg:space-y-10 py-4 px-4 md:px-20 lg:px-32"
    >
      <div class="w-full flex-none md:flex md:justify-between space-y-2">
        <div class="w-full space-y-4">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl text-black font-sans font-extrabold"
          >
            {{ detail.title }}
          </h1>
          <h2>{{ detail.address }}</h2>
        </div>
        <div class="flex justify-start items-start">
          <h1
            class="px-4 py-1 bg-blue-50 text-2xl md:text-3xl lg:text-4xl font-sans font-bold rounded-full"
          >
            {{ "$" + detail.price }}
          </h1>
        </div>
      </div>
    </div>
  </section>

  <section v-if="detail">
    <div
      id="image_detail"
      class="flex-none w-full md:flex md:justify-between space-y-6 md:space-y-0 md:gap-4 lg:gap-6 py-4 px-4 md:px-20 lg:px-32"
    >
      <div class="flex-none md:flex md:justify-center md:gap-6 w-full md:w-2/5">
        <img
          :src="detail.thumbnail"
          alt=""
          class="object-cover rounded-xl w-full h-48 md:h-full"
        />
      </div>

      <div class="md:gap-4 lg:gap-6 w-full md:w-3/5 space-y-6">
        <div
          class="flex flex-col w-full md:flex md:flex-row gap-6 space-y-6 md:space-y-0"
        >
          <div class="w-full">
            <img
              :src="detail.image1"
              alt=""
              class="rounded-xl w-full h-48 md:w-40 md:h-40 lg:w-full lg:h-52 object-cover"
            />
          </div>
          <div class="w-full">
            <img
              :src="detail.image2"
              alt=""
              class="rounded-xl w-full h-48 md:w-40 md:h-40 lg:w-full lg:h-52 object-cover"
            />
          </div>
        </div>
        <div class="w-full h-full">
          <img
            :src="detail.image2"
            alt=""
            class="object-cover rounded-xl w-full h-48 md:w-full md:h-48 lg:w-full lg:h-72"
          />
        </div>
      </div>
    </div>
  </section>

  <section v-if="detail" class="mb-10">
    <div
      class="flex-none w-full md:flex md:gap-5 space-y-6 md:space-y-0 py-4 px-4 md:px-20 lg:px-32"
    >
      <div class="space-y-4 md:space-y-8 w-full md:w-3/5">
        <div class="space-y-2 md:space-y-4">
          <h1
            class="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-black"
          >
            Overview
          </h1>
          <h1 class="font-sans text-black text-sm lg:text-lg">
            {{ detail.description }}
          </h1>
        </div>

        <div class="space-y-2 md:space-y-4">
          <h1
            class="font-sans font-bold text-lg md:text-xl lg:text-2xl text-black"
          >
            General Information
          </h1>
          <h1 class="font-sans text-black text-sm lg:text-lg">
            {{ detail.information }}
          </h1>
        </div>

        <div class="space-y-2 md:space-y-4">
          <h1
            class="font-sans font-bold text-lg md:text-xl lg:text-2xl text-black"
          >
            Interior Detail
          </h1>
          <h1 class="font-sans text-black text-sm lg:text-lg">
            {{ detail.interior }}
          </h1>
        </div>
      </div>

      <div
        class="w-full md:w-2/5 bg-gray-50 py-2 md:py-4 px-3 md:px-6 rounded-lg space-y-3 md:space-y-4 lg:space-y-6"
      >
        <div class="space-y-2 md:space-y-4">
          <h1
            class="font-sans font-bold text-lg md:text-xl lg:text-2xl text-black"
          >
            Property Agent
          </h1>
          <h1 class="font-sans text-black text-sm lg:text-lg">
            Here the information agen contact
          </h1>
        </div>

        <div class="w-full flex justify-start gap-x-4">
          <img
            :src="detail.agent.agentImage"
            alt="agent profile"
            class="rounded-full size-16 object-cover"
          />

          <div class="flex flex-col justify-center items-start">
            <h1 class="text-black font-sans font-bold md:text-lg lg:text-xl">
              {{ detail.agent.agentName }}
            </h1>
            <h1 class="text-gray-500 font-sans text-sm md:base">
              {{ detail.agent.agentEmail }}
            </h1>
          </div>
        </div>

        <div class="w-full flex-none space-y-2">
          <div class="w-full flex-none space-y-1">
            <h1 for="name" class="font-sans font-bold text-xs md:text-sm">
              Name
            </h1>
            <input
              type="text"
              id="name"
              placeholder="Name"
              class="bg-white rounded p-3 md:p-4 border border-gray-200 w-full"
            />
          </div>
          <div class="w-full flex-none space-y-1">
            <h1 for="email" class="font-sans font-bold text-xs md:text-sm">
              Email
            </h1>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              class="bg-white rounded p-3 md:p-4 border border-gray-200 w-full"
            />
          </div>

          <div class="w-full flex-none space-y-1">
            <h1 for="phone" class="font-sans font-bold text-xs md:text-sm">
              Phone Number
            </h1>
            <input
              type="number"
              id="phone"
              placeholder="Phone number"
              class="bg-white rounded p-3 md:p-4 border border-gray-200 w-full"
            />
          </div>
          <div class="w-full flex-none space-y-1">
            <h1 for="message" class="font-sans font-bold text-xs md:text-sm">
              Message
            </h1>
            <textarea
              type="text"
              id="message"
              placeholder="Your Message"
              class="bg-white rounded p-3 md:p-4 border border-gray-200 w-full"
            />
          </div>
          <ButtonComponent class="w-full mt-5">Send Message</ButtonComponent>
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
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import CustomerReviews from "@/components/CustomerReviews.vue";
import { condoData } from "@/data/condoCardData";
import { houseData } from "@/data/houseCardData";
import { villaData } from "@/data/villaCardData";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = Number(route.params.id);
const type = route.params.type as string;
const detail = ref<any>(null);

onMounted(() => {
  if (type === "house") {
    detail.value = houseData.find((item) => item.id === id);
  } else if (type === "condo") {
    detail.value = condoData.find((item) => item.id === id);
  } else if (type === "villa") {
    detail.value = villaData.find((item) => item.id === id);
  }
});
</script>
