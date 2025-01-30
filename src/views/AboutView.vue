<template>
  <div
    class="flex-none pb-10 space-x-0 md:space-x-10 lg:space-x-20 bg-white py-4 px-4 md:px-20 lg:px-32"
  >
    <div class="flex-none md:grid md:grid-cols-2 space-y-4 md:space-y-0">
      <h1
        class="text-black font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl"
      >
        About Us
      </h1>
      <h2
        class="text-black font-sans text-sm md:text-base lg:text-lg flex justify-center items-center"
      >
        We are passionate about helping our clients achieve their real estate
        dreams.
      </h2>
    </div>
  </div>
  <div
    class="flex-none md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 px-4 md:px-20 lg:px-32 space-y-4 md:space-y-0 pb-16"
  >
    <div class="w-full h-36 md:h-48 lg:h-60">
      <img
        :src="about"
        alt="about"
        class="w-full h-full object-cover rounded-xl"
      />
    </div>
    <div class="space-y-4 md:space-y-6 lg:space-y-8">
      <h1
        class="text-black text-2xl md:text-3xl lg:text-4xl text-start font-sans font-bold"
      >
        ImahKu
      </h1>
      <h1 class="text-gray-600 font-sans text-sm md:text-base lg:text-lg">
        We are passionate about helping our clients achieve their real estate
        dreams. With a team of dedicated professionals and a commitment to
        integrity, we provide exceptional service and expertise in every
        transaction.
      </h1>
    </div>
  </div>

  <section id="about">
    <div
      class="flex-none md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 px-4 md:px-20 lg:px-32 space-y-4 md:space-y-0 pb-36"
    >
      <div class="space-y-4 md:space-y-6 lg:space-y-8">
        <h1
          class="text-black font-sans font-bold text-2xl md:text-3xl lg:text-4xl"
        >
          Vision
        </h1>
        <h2 class="font-sans text-gray-600 text-sm md:text-base lg:text-lg">
          Our Vision is to provide unparallaled real estate services that exceed
          our clients expectations.
        </h2>
      </div>
      <div class="space-y-4 md:space-y-6 lg:space-y-8">
        <h1
          class="text-black font-sans font-bold text-2xl md:text-3xl lg:text-4xl"
        >
          Our Values
        </h1>
        <div class="flex space-x-4 justify-start items-start">
          <div class="flex justify-start items-start pt-1">
            <IconCheck />
          </div>
          <h2
            class="text-gray-600 font-sans text-sm md:text-base lg:text-lg text-start align-top"
          >
            We conduct our business with the highest level of honesty and
            ethical standars, ensuring that our clients can trust us to
            represent their best interest.
          </h2>
        </div>
        <div class="flex space-x-4 justify-start items-start">
          <div class="flex justify-start items-start pt-1">
            <IconCheck />
          </div>
          <h2
            class="text-gray-600 font-sans text-sm md:text-base lg:text-lg text-start align-top"
          >
            We strive for excellence in everything we do, from our clients
            interactions to the results we deliver. Our commitment to quality
            set us apart.
          </h2>
        </div>
        <div class="flex space-x-4 justify-start items-start">
          <div class="flex justify-start items-start pt-1">
            <IconCheck />
          </div>
          <h2
            class="text-gray-600 font-sans text-sm md:text-base lg:text-lg text-start align-top"
          >
            We embrace innovation and leverage the latest technology to provide
            our clients with cutting-edge solutions and insights.
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

  <section
    class="bg-white py-6 md:py-10 lg:py-20 px-4 md:px-20 lg:px-32 space-y-4 md:space-y-8 lg:space-y-10"
  >
    <div class="space-y-4">
      <h1
        class="text-black font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl"
      >
        Our Team
      </h1>
      <h1 class="text-black text-sm md:text-base lg:text-lg font-sans">
        Customer satisfaction is our main priority.
      </h1>
    </div>
    <div
      class="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 justify-center items-start"
    >
      <div
        v-for="(member, index) in team"
        :key="index"
        class="bg-gray-50 px-2 py-1 rounded-2xl space-y-0 md:space-y-6 grid grid-row-2 justify-center items-start"
      >
        <div
          class="w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center overflow-hidden"
        >
          <img
            :src="member.profilePicture"
            alt="profile"
            class="w-full h-full object-cover rounded-lg flex justify-center items-center"
          />
        </div>
        <div class="space-y-2">
          <h1
            class="font-sans font-extrabold text-sm md:text-base lg:text-lg text-black text-center"
          >
            {{ member.name }}
          </h1>
          <h2
            class="font-sans text-xs md:text-sm lg:text-base font-gray-500 text-center"
          >
            {{ member.job }}
          </h2>
        </div>
      </div>
    </div>
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
        <RouterLink to="/list">
          <ButtonComponent>Get a New Comfortable Home</ButtonComponent>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  about,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
} from "@/assets/images";
import ButtonComponent from "@/components/ButtonComponent.vue";
import CustomerReviews from "@/components/CustomerReviews.vue";
import { IconCheck } from "@/components/icons";

const team = [
  {
    profilePicture: avatar1,
    name: "John Davis",
    job: "Construction Manager",
  },
  {
    profilePicture: avatar2,
    name: "David Johnson",
    job: "Property Appraiser",
  },
  {
    profilePicture: avatar3,
    name: "William Harris",
    job: "Architect",
  },
  {
    profilePicture: avatar4,
    name: "James Clark",
    job: "Real Estate Broker",
  },
  {
    profilePicture: avatar5,
    name: "Robert Moore",
    job: "Urban Planner",
  },
  {
    profilePicture: avatar6,
    name: "Daniel Martinez",
    job: "Interior Designer",
  },
  {
    profilePicture: avatar7,
    name: "Christopher Taylor",
    job: "Property Manager",
  },
  {
    profilePicture: avatar8,
    name: "Anthony Anderson",
    job: "Surveyor",
  },
];
</script>
