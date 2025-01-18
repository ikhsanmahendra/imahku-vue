<template>
  <section class=""></section>
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
import { slide1, slide2, slide3 } from "@/assets/images";
import CustomerReviews from "@/components/CustomerReviews.vue";
import { ref } from "vue";

const cards = ref([
  {
    id: 1,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Haunted House",
    description:
      "A spooky yet charming haunted house with an eerie vibe and modern amenities.",
    price: 400,
    bed: 2,
    tub: 4,
    wide: 200,
  },
  {
    id: 2,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Luxury Mansion",
    description:
      "A stunning mansion offering breathtaking views and top-of-the-line facilities.",
    price: 600,
    bed: 5,
    tub: 6,
    wide: 1000,
  },
  {
    id: 3,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Modern Villa",
    description:
      "A sleek and modern villa perfect for family living with spacious rooms and a pool.",
    price: 8000,
    bed: 4,
    tub: 5,
    wide: 700,
  },
  {
    id: 4,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Cozy Cottage",
    description:
      "A small and cozy cottage located in a serene environment, ideal for relaxation.",
    price: 1000,
    bed: 2,
    tub: 2,
    wide: 300,
  },
  {
    id: 5,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Fancy House",
    description:
      "An elegant house featuring a perfect blend of classic and contemporary design.",
    price: 100,
    bed: 3,
    tub: 3,
    wide: 400,
  },
  {
    id: 6,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Family Home",
    description:
      "A spacious home designed to accommodate a growing family in comfort and style.",
    price: 700,
    bed: 4,
    tub: 3,
    wide: 500,
  },
  {
    id: 7,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Urban Apartment",
    description:
      "A modern apartment located in the heart of the city with excellent connectivity.",
    price: 500,
    bed: 2,
    tub: 1,
    wide: 150,
  },
  {
    id: 8,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Penthouse Suite",
    description:
      "An exclusive penthouse suite offering luxury, privacy, and panoramic city views.",
    price: 9000,
    bed: 3,
    tub: 4,
    wide: 900,
  },
  {
    id: 9,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Rustic Farmhouse",
    description:
      "A charming farmhouse surrounded by nature, ideal for a peaceful countryside retreat.",
    price: 1200,
    bed: 3,
    tub: 2,
    wide: 600,
  },
  {
    id: 10,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Beachfront Bungalow",
    description:
      "A stunning beachfront property with direct access to white sandy beaches.",
    price: 3000,
    bed: 5,
    tub: 5,
    wide: 800,
  },
  {
    id: 11,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Mountain Cabin",
    description:
      "A cozy cabin nestled in the mountains, offering spectacular views and tranquility.",
    price: 1800,
    bed: 2,
    tub: 2,
    wide: 400,
  },
  {
    id: 12,
    image1: slide2,
    image2: slide1,
    image3: slide3,
    image4: slide1,
    title: "Eco-Friendly House",
    description:
      "An energy-efficient and sustainable house designed with eco-friendly materials.",
    price: 2500,
    bed: 4,
    tub: 3,
    wide: 650,
  },
]);

// const house = cards.find((card) => card.id === id);
</script>
