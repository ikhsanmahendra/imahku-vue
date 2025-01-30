<template>
  <button @click="onClick" type="button" class="my-2 w-full">
    <div class="relative">
      <h1
        class="px-2 py-1 bg-blue-50 text-sm md:text-xs lg:text-sm font-sans font-bold rounded-md absolute z-20 right-4 mt-4"
      >
        {{ props.price }}
      </h1>
      <div class="rounded-xl overflow-hidden">
        <img
          :src="props.image"
          alt=""
          class="mb-5 w-full h-full md:h-40 md:w-full lg:h-52 xl:h-60 lg:w-[600px] object-cover rounded-xl py-2 duration-150 transition hover:scale-110"
        />
      </div>
    </div>
    <div class="space-y-2">
      <h1
        class="text-2xl md:text-xl lg:text-2xl text-black font-sans font-bold text-start"
      >
        {{ props.title }}
      </h1>
      <h2 class="text-gray-500 font-sans text-start line-clamp-4">
        {{ props.description }}
      </h2>
    </div>
    <div class="flex justify-start space-x-4 md:space-x-2 lg:space-x-4 py-2">
      <div class="flex justify-start items-center space-x-2">
        <IconBed class="size-5 lg:size-6" />
        <h1
          class="text-sm md:text-xs lg:text-sm font-sans font-medium text-black"
        >
          {{ props.bed }} Bed
        </h1>
      </div>
      <div class="flex justify-start items-center space-x-2">
        <IconTub class="size-5 lg:size-6" />
        <h1
          class="text-sm md:text-xs lg:text-sm font-sans font-medium text-black"
        >
          {{ props.tub }} Tub
        </h1>
      </div>
      <div class="flex justify-start items-center space-x-2">
        <IconWide class="size-5 lg:size-6" />
        <h1
          class="text-sm md:text-xs lg:text-sm font-sans font-medium text-black"
        >
          {{ props.wide }} m<sup>2</sup>
        </h1>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { IconBed, IconTub, IconWide } from "./icons";

const props = defineProps({
  title: {
    type: String,
    default: "",
    require: true,
  },
  description: {
    type: String,
    require: true,
    default: "",
  },
  image: {
    type: String,
    require: true,
    default: "",
  },
  price: {
    type: String,
    default: "",
    require: true,
  },
  bed: {
    type: Number,
    default: 0,
    require: true,
  },
  tub: {
    type: Number,
    default: 0,
    require: true,
  },
  wide: {
    type: Number,
    default: 0,
    require: true,
  },
});

const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};
</script>
