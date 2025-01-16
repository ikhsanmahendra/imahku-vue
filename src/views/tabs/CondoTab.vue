<template>
  <div class="md:grid md:grid-cols-3 space-x-2 px-4 md:px-20 lg:px-32">
    <div
      class="w-full flex"
      v-for="(card, index) in displayedCards"
      :key="index"
    >
      <CardList
        :image="card.image"
        :title="card.title"
        :description="card.description"
        :price="'$' + card.price"
        :bed="card.bed"
        :tub="card.tub"
        :wide="card.wide"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { slide1, slide2, slide3 } from "@/assets/images";
import CardList from "@/components/CardList.vue";
import { computed, ref } from "vue";

const cards = ref([
  {
    image: slide3,
    title: "Haunted House",
    description:
      "lorem ipsum amdkamwda amdkamdkwmdkadl mflaldmlka amdkwlmdklma akdmakmd a km kmdka kwmdk a kmk dmakm dkmwdkmakmdam a km k maldmaiwnfduabud vayu v yudhwyyeagy yagwydaonajsdb iubjbi i",
    price: 200,
    bed: 2,
    tub: 4,
    wide: 200,
  },
  {
    image: slide1,
    title: "Haunted House",
    description:
      "lorem ipsum amdkamwda amdkamdkwmdkadl mflaldmlka amdkwlmdklma akdmakmd a km kmdka kwmdk a kmk dmakm dkmwdkmakmdam a km k maldmaiwnfduabud vayu v yudhwyyeagy yagwydaonajsdb iubjbi i",
    price: 200,
    bed: 2,
    tub: 4,
    wide: 200,
  },
  {
    image: slide2,
    title: "Haunted House",
    description:
      "lorem ipsum amdkamwda amdkamdkwmdkadl mflaldmlka amdkwlmdklma akdmakmd a km kmdka kwmdk a kmk dmakm dkmwdkmakmdam a km k maldmaiwnfduabud vayu v yudhwyyeagy yagwydaonajsdb iubjbi i",
    price: 200,
    bed: 2,
    tub: 4,
    wide: 200,
  },
  {
    image: slide1,
    title: "Haunted House",
    description:
      "lorem ipsum amdkamwda amdkamdkwmdkadl mflaldmlka amdkwlmdklma akdmakmd a km kmdka kwmdk a kmk dmakm dkmwdkmakmdam a km k maldmaiwnfduabud vayu v yudhwyyeagy yagwydaonajsdb iubjbi i",
    price: 200,
    bed: 2,
    tub: 4,
    wide: 200,
  },
  {
    image: slide2,
    title: "Haunted House",
    description:
      "lorem ipsum amdkamwda amdkamdkwmdkadl mflaldmlka amdkwlmdklma akdmakmd a km kmdka kwmdk a kmk dmakm dkmwdkmakmdam a km k maldmaiwnfduabud vayu v yudhwyyeagy yagwydaonajsdb iubjbi i",
    price: 200,
    bed: 2,
    tub: 4,
    wide: 200,
  },
  {
    image: slide3,
    title: "Haunted House",
    description:
      "lorem ipsum amdkamwda amdkamdkwmdkadl mflaldmlka amdkwlmdklma akdmakmd a km kmdka kwmdk a kmk dmakm dkmwdkmakmdam a km k maldmaiwnfduabud vayu v yudhwyyeagy yagwydaonajsdb iubjbi i",
    price: 200,
    bed: 2,
    tub: 4,
    wide: 200,
  },
]);

const displayedCards = computed(() => cards.value.splice(0, 3));
</script>
