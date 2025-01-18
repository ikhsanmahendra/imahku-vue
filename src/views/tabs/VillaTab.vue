<template>
  <div
    class="flex-none md:flex justify-between items-center px-4 space-y-2 md:space-y-0 md:px-20 lg:px-32"
  >
    <h1 class="text-sm md:text-base lg:text-lg font-sans font-medium">
      {{ filteredCards.length }} house(s) Found
    </h1>
    <div class="flex">
      <div
        class="flex space-x-2 px-2 md:px-3 py-1 md:py-2 justify-center items-center border border-r-0 border-gray-200 rounded-l-lg"
      >
        <IconSearch class="flex justify-center items-center" />
        <input
          type="text"
          v-model="searchQuery"
          placeholder="search house"
          class="flex justify-center items-center outline-none w-full"
        />
      </div>
      <select
        v-model="priceFilter"
        class="py-1 md:py-2 pr-2 md:pr-3 pl-3 md:pl-4 bg-gray-50 border rounded-r-lg border-gray-200"
        placeholder="Filter"
      >
        <option value="">Filter</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>
  </div>

  <div class="md:grid md:grid-cols-3 gap-5 px-4 md:px-20 lg:px-32">
    <div
      class="w-full flex"
      v-for="(card, index) in filteredCards"
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
import IconSearch from "@/components/icons/IconSearch.vue";
import { computed, ref } from "vue";

const searchQuery = ref("");
const priceFilter = ref("");

const filteredCards = computed(() => {
  let result = cards.value;

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter((card) => card.title.toLowerCase().includes(query));
  }

  if (priceFilter.value === "") {
    return result;
  }

  if (priceFilter.value === "low-to-high") {
    result = result.sort((a, b) => a.price - b.price);
  } else if (priceFilter.value === "high-to-low") {
    result = result.sort((a, b) => b.price - a.price);
  }

  return result;
});

const cards = ref([
  {
    id: 1,
    image: slide1,
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
    image: slide2,
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
    image: slide3,
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
    image: slide1,
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
    image: slide2,
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
    image: slide3,
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
    image: slide1,
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
    image: slide2,
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
    image: slide3,
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
    image: slide1,
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
    image: slide2,
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
    image: slide3,
    title: "Eco-Friendly House",
    description:
      "An energy-efficient and sustainable house designed with eco-friendly materials.",
    price: 2500,
    bed: 4,
    tub: 3,
    wide: 650,
  },
]);
</script>
