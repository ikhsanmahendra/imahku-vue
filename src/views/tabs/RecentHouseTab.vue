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
    title: "Cozy Suburban House",
    description:
      "A charming house with a cozy ambiance in a quiet neighborhood.",
    price: 2000,
    bed: 3,
    tub: 2,
    wide: 600,
  },
  {
    id: 2,
    image: slide2,
    title: "Spacious Family Home",
    description: "Perfect for families with spacious rooms and a backyard.",
    price: 3500,
    bed: 5,
    tub: 3,
    wide: 900,
  },
  {
    id: 3,
    image: slide3,
    title: "Minimalist Home",
    description: "A modern minimalist house with an open-concept design.",
    price: 1800,
    bed: 2,
    tub: 1,
    wide: 400,
  },
  {
    id: 4,
    image: slide1,
    title: "Modern Smart Home",
    description:
      "A house equipped with smart technology and energy efficiency.",
    price: 5000,
    bed: 4,
    tub: 3,
    wide: 1000,
  },
  {
    id: 5,
    image: slide2,
    title: "Rustic Country House",
    description:
      "A beautiful countryside home with wooden interiors and a large yard.",
    price: 3200,
    bed: 3,
    tub: 2,
    wide: 700,
  },
  {
    id: 6,
    image: slide3,
    title: "Eco-Friendly Home",
    description: "A sustainable house designed with eco-conscious materials.",
    price: 4500,
    bed: 4,
    tub: 3,
    wide: 800,
  },
  {
    id: 7,
    image: slide1,
    title: "Victorian Style House",
    description:
      "An elegant Victorian house with classic charm and modern amenities.",
    price: 6000,
    bed: 5,
    tub: 4,
    wide: 1200,
  },
  {
    id: 8,
    image: slide2,
    title: "Beachfront House",
    description: "A beautiful house with direct beach access and ocean views.",
    price: 7000,
    bed: 5,
    tub: 3,
    wide: 1000,
  },
  {
    id: 9,
    image: slide3,
    title: "Urban Townhouse",
    description: "A stylish townhouse located in the heart of the city.",
    price: 2800,
    bed: 3,
    tub: 2,
    wide: 500,
  },
  {
    id: 10,
    image: slide1,
    title: "Hillside Retreat",
    description: "A peaceful retreat with stunning views of the hills.",
    price: 7500,
    bed: 4,
    tub: 3,
    wide: 900,
  },
  {
    id: 11,
    image: slide2,
    title: "Luxury Estate",
    description: "A sprawling estate with luxurious features and vast gardens.",
    price: 15000,
    bed: 6,
    tub: 5,
    wide: 2000,
  },
  {
    id: 12,
    image: slide3,
    title: "Countryside Bungalow",
    description: "A quaint bungalow surrounded by nature and tranquility.",
    price: 4000,
    bed: 3,
    tub: 2,
    wide: 650,
  },
  {
    id: 13,
    image: slide1,
    title: "Contemporary House",
    description: "A modern house with clean lines and stylish interiors.",
    price: 5200,
    bed: 4,
    tub: 3,
    wide: 850,
  },
  {
    id: 14,
    image: slide2,
    title: "Urban Duplex",
    description: "A spacious duplex in a prime city location.",
    price: 5800,
    bed: 5,
    tub: 3,
    wide: 950,
  },
  {
    id: 15,
    image: slide3,
    title: "Classic Brick House",
    description: "A timeless brick house with a warm and inviting feel.",
    price: 4200,
    bed: 3,
    tub: 2,
    wide: 750,
  },
  {
    id: 16,
    image: slide1,
    title: "Lakeside Home",
    description: "A serene house with a beautiful lake view.",
    price: 9000,
    bed: 5,
    tub: 4,
    wide: 1100,
  },
  {
    id: 17,
    image: slide2,
    title: "Traditional Cottage",
    description: "A cozy cottage with traditional wooden features.",
    price: 2500,
    bed: 2,
    tub: 1,
    wide: 400,
  },
  {
    id: 18,
    image: slide3,
    title: "Mountain Getaway",
    description: "A peaceful house nestled in the mountains.",
    price: 6500,
    bed: 4,
    tub: 3,
    wide: 1000,
  },
  {
    id: 19,
    image: slide1,
    title: "Garden House",
    description: "A house surrounded by lush gardens and beautiful landscapes.",
    price: 7200,
    bed: 4,
    tub: 3,
    wide: 950,
  },
  {
    id: 20,
    image: slide2,
    title: "Affordable Family Home",
    description: "A budget-friendly house perfect for a growing family.",
    price: 1800,
    bed: 3,
    tub: 2,
    wide: 550,
  },
]);
</script>
