<template>
  <div class="md:grid md:grid-cols-3 gap-5 px-4 md:px-20 lg:px-32">
    <div
      class="w-full flex"
      v-for="(card, index) in displayedCards"
      :key="index"
    >
      <RouterLink :to="`/list/${card.id}`">
        <CardList
          :image="card.image"
          :title="card.title"
          :description="card.description"
          :price="'$' + card.price"
          :bed="card.bed"
          :tub="card.tub"
          :wide="card.wide"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { slide1, slide2, slide3 } from "@/assets/images";
import CardList from "@/components/CardList.vue";
import { computed, ref } from "vue";

const displayedCards = computed(() => {
  return cards.value
    .slice()
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);
});

const cards = ref([
  {
    id: 1,
    image: slide1,
    title: "Skyline Condo",
    description:
      "A stylish condo with a breathtaking skyline view, located in a prime area.",
    price: 2000,
    bed: 2,
    tub: 2,
    wide: 500,
  },
  {
    id: 2,
    image: slide2,
    title: "Urban Condo",
    description:
      "A contemporary condo in the city center, perfect for professionals.",
    price: 1800,
    bed: 1,
    tub: 1,
    wide: 400,
  },
  {
    id: 3,
    image: slide3,
    title: "Cozy Condo",
    description:
      "A warm and inviting condo with all modern amenities and a homey vibe.",
    price: 1500,
    bed: 2,
    tub: 2,
    wide: 450,
  },
  {
    id: 4,
    image: slide1,
    title: "Luxury Condo",
    description:
      "A high-end condo offering top-of-the-line facilities and a luxurious experience.",
    price: 5000,
    bed: 3,
    tub: 3,
    wide: 800,
  },
  {
    id: 5,
    image: slide2,
    title: "Beachfront Condo",
    description:
      "A stunning beachfront condo with direct access to sandy beaches.",
    price: 4000,
    bed: 3,
    tub: 3,
    wide: 700,
  },
  {
    id: 6,
    image: slide3,
    title: "Smart Condo",
    description:
      "A condo equipped with the latest smart home technology for modern living.",
    price: 3200,
    bed: 2,
    tub: 2,
    wide: 600,
  },
  {
    id: 7,
    image: slide1,
    title: "Minimalist Condo",
    description:
      "A sleek and minimalist condo designed for a clutter-free lifestyle.",
    price: 2500,
    bed: 2,
    tub: 2,
    wide: 550,
  },
  {
    id: 8,
    image: slide2,
    title: "Penthouse Condo",
    description:
      "An exclusive penthouse condo offering breathtaking views and luxury.",
    price: 8000,
    bed: 4,
    tub: 4,
    wide: 1000,
  },
  {
    id: 9,
    image: slide3,
    title: "Garden Condo",
    description:
      "A serene condo surrounded by lush gardens for a peaceful living experience.",
    price: 2800,
    bed: 2,
    tub: 2,
    wide: 500,
  },
  {
    id: 10,
    image: slide1,
    title: "Mountain View Condo",
    description: "A beautiful condo offering stunning views of the mountains.",
    price: 3500,
    bed: 3,
    tub: 3,
    wide: 750,
  },
  {
    id: 11,
    image: slide2,
    title: "Eco-Friendly Condo",
    description:
      "A sustainable condo built with eco-friendly materials and energy-efficient systems.",
    price: 3000,
    bed: 2,
    tub: 2,
    wide: 600,
  },
  {
    id: 12,
    image: slide3,
    title: "City Lights Condo",
    description:
      "A stylish condo offering an amazing view of the city's night lights.",
    price: 2700,
    bed: 1,
    tub: 1,
    wide: 400,
  },
  {
    id: 13,
    image: slide1,
    title: "Business Condo",
    description:
      "A modern condo designed for business professionals, located in a commercial hub.",
    price: 2200,
    bed: 1,
    tub: 1,
    wide: 450,
  },
  {
    id: 14,
    image: slide2,
    title: "Family Condo",
    description:
      "A spacious condo perfect for families, featuring kid-friendly amenities.",
    price: 3800,
    bed: 3,
    tub: 2,
    wide: 700,
  },
  {
    id: 15,
    image: slide3,
    title: "Seaside Condo",
    description:
      "A cozy condo located by the sea, offering fresh air and serene views.",
    price: 2900,
    bed: 2,
    tub: 2,
    wide: 550,
  },
  {
    id: 16,
    image: slide1,
    title: "Rooftop Condo",
    description:
      "A condo with an exclusive rooftop terrace perfect for gatherings.",
    price: 4500,
    bed: 3,
    tub: 3,
    wide: 750,
  },
  {
    id: 17,
    image: slide2,
    title: "Urban Escape Condo",
    description:
      "A condo offering a peaceful retreat amidst the bustling city.",
    price: 3100,
    bed: 2,
    tub: 2,
    wide: 600,
  },
  {
    id: 18,
    image: slide3,
    title: "Compact Condo",
    description:
      "A budget-friendly condo with a smart layout for efficient living.",
    price: 1600,
    bed: 1,
    tub: 1,
    wide: 350,
  },
  {
    id: 19,
    image: slide1,
    title: "Modern Condo",
    description:
      "A condo with a modern touch, featuring stylish interiors and appliances.",
    price: 2700,
    bed: 2,
    tub: 2,
    wide: 500,
  },
  {
    id: 20,
    image: slide2,
    title: "Classic Condo",
    description:
      "A condo with a classic design offering timeless elegance and comfort.",
    price: 3300,
    bed: 2,
    tub: 2,
    wide: 550,
  },
]);
</script>
