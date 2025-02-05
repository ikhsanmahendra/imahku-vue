<template>
  <div class="md:grid md:grid-cols-3 gap-5 px-4 md:px-20 lg:px-32">
    <div
      class="w-full flex"
      v-for="(card, index) in displayedCards"
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
</template>

<script setup lang="ts">
import CardList from "@/components/CardList.vue";
import { villaData } from "@/data/villaCardData";
import { computed } from "vue";

const displayedCards = computed(() => {
  return villaData
    .slice()
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);
});
</script>
