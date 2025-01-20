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
    title: "Tropical Paradise Villa",
    description:
      "A breathtaking tropical villa surrounded by lush greenery and a private pool.",
    price: 10000,
    bed: 5,
    tub: 6,
    wide: 1200,
  },
  {
    id: 2,
    image: slide2,
    title: "Hillside Escape Villa",
    description:
      "A serene villa perched on a hillside offering panoramic mountain views.",
    price: 8000,
    bed: 4,
    tub: 4,
    wide: 1000,
  },
  {
    id: 3,
    image: slide3,
    title: "Luxury Oceanfront Villa",
    description:
      "An exquisite villa with direct ocean access and stunning sunset views.",
    price: 15000,
    bed: 6,
    tub: 5,
    wide: 1400,
  },
  {
    id: 4,
    image: slide1,
    title: "Rustic Countryside Villa",
    description:
      "A charming villa in the countryside, perfect for a peaceful retreat.",
    price: 5000,
    bed: 3,
    tub: 2,
    wide: 800,
  },
  {
    id: 5,
    image: slide2,
    title: "Mediterranean Villa",
    description:
      "A stylish villa inspired by Mediterranean architecture, featuring classic design elements.",
    price: 9000,
    bed: 5,
    tub: 4,
    wide: 1100,
  },
  {
    id: 6,
    image: slide3,
    title: "Private Beach Villa",
    description:
      "An exclusive beachfront villa with direct access to the pristine sands.",
    price: 12000,
    bed: 4,
    tub: 4,
    wide: 1300,
  },
  {
    id: 7,
    image: slide1,
    title: "Minimalist Modern Villa",
    description:
      "A sleek and stylish villa with minimalist design and state-of-the-art amenities.",
    price: 9500,
    bed: 3,
    tub: 3,
    wide: 900,
  },
  {
    id: 8,
    image: slide2,
    title: "Zen Garden Villa",
    description:
      "A tranquil villa surrounded by beautifully landscaped Zen gardens.",
    price: 7500,
    bed: 4,
    tub: 3,
    wide: 850,
  },
  {
    id: 9,
    image: slide3,
    title: "Skyline View Villa",
    description:
      "A high-rise villa with stunning skyline views and luxurious interiors.",
    price: 13500,
    bed: 5,
    tub: 4,
    wide: 1250,
  },
  {
    id: 10,
    image: slide1,
    title: "Eco-Friendly Villa",
    description:
      "An environmentally conscious villa with sustainable features and solar power.",
    price: 6000,
    bed: 3,
    tub: 2,
    wide: 700,
  },
  {
    id: 11,
    image: slide2,
    title: "Cultural Heritage Villa",
    description:
      "A beautifully preserved villa reflecting the charm of local culture and heritage.",
    price: 7000,
    bed: 4,
    tub: 3,
    wide: 900,
  },
  {
    id: 12,
    image: slide3,
    title: "Luxury Desert Villa",
    description:
      "A magnificent villa set in the desert, blending traditional and modern elements.",
    price: 8500,
    bed: 5,
    tub: 4,
    wide: 1100,
  },
  {
    id: 13,
    image: slide1,
    title: "Rainforest Hideaway Villa",
    description:
      "A secluded villa hidden within lush rainforest, offering complete privacy.",
    price: 10500,
    bed: 3,
    tub: 2,
    wide: 1000,
  },
  {
    id: 14,
    image: slide2,
    title: "Ski Resort Villa",
    description:
      "A cozy villa located in a famous ski resort, perfect for winter vacations.",
    price: 9500,
    bed: 4,
    tub: 3,
    wide: 900,
  },
  {
    id: 15,
    image: slide3,
    title: "Floating Water Villa",
    description:
      "A unique villa that floats on water, offering an unparalleled experience.",
    price: 15000,
    bed: 2,
    tub: 2,
    wide: 600,
  },
  {
    id: 16,
    image: slide1,
    title: "Cliffside Luxury Villa",
    description:
      "A spectacular cliffside villa with breathtaking views of the ocean below.",
    price: 13000,
    bed: 5,
    tub: 5,
    wide: 1400,
  },
  {
    id: 17,
    image: slide2,
    title: "Urban Skyline Villa",
    description:
      "A modern villa situated in the city with easy access to all urban conveniences.",
    price: 11000,
    bed: 3,
    tub: 3,
    wide: 850,
  },
  {
    id: 18,
    image: slide3,
    title: "Safari Adventure Villa",
    description:
      "An adventurous villa located near a wildlife reserve, perfect for nature lovers.",
    price: 7000,
    bed: 4,
    tub: 3,
    wide: 1000,
  },
  {
    id: 19,
    image: slide1,
    title: "Lakeside Villa",
    description:
      "A beautiful villa by the lake, ideal for relaxation and outdoor activities.",
    price: 9000,
    bed: 4,
    tub: 3,
    wide: 950,
  },
  {
    id: 20,
    image: slide2,
    title: "Romantic Getaway Villa",
    description:
      "A romantic villa designed for couples looking for a peaceful and intimate escape.",
    price: 8500,
    bed: 2,
    tub: 2,
    wide: 700,
  },
]);
</script>
