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
      v-for="(card, index) in paginatedCards"
      :key="index"
    >
      <RouterLink :to="`/property-list/${card.type}/${card.id}`">
        <CardList
          :image="card.thumbnail"
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

  <div class="flex justify-center items-center space-x-4 mt-5">
    <button
      class="px-4 py-2 bg-gray-200 rounded"
      :disabled="currentPage === 1"
      @click="currentPage--"
    >
      Previous
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button
      class="px-4 py-2 bg-gray-200 rounded"
      :disabled="currentPage === totalPages"
      @click="currentPage++"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import CardList from "@/components/CardList.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import { villaData } from "@/data/villaCardData";
import { computed, ref } from "vue";

const searchQuery = ref("");
const priceFilter = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(9);

const filteredCards = computed(() => {
  let result = [...villaData];

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

const totalPages = computed(() => {
  return Math.ceil(filteredCards.value.length / itemsPerPage.value);
});

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredCards.value.slice(start, end);
});
</script>
