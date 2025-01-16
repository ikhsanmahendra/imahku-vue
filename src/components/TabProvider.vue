<template>
  <TabGroup :defaultIndex="defaultIndex">
    <TabList
      class="px-4 md:px-20 lg:px-32 flex md:space-x-2 pt-8 font-bold border-primary-900 overflow-x-auto whitespace-nowrap"
    >
      <Tab
        class="font-extrabold font-sans"
        @click="emit('on:click', { tab, index })"
        v-for="(tab, index) in tabs"
        :key="index"
        as="template"
        v-slot="{ selected }"
      >
        <button
          :class="{
            'text-sm md:text-lg font-bold text-primary-900 px-2 py-2 outline-none':
              selected,
            'text-sm md:text-lg font-semibold text-primary-900 px-3 py-2':
              !selected,
          }"
        >
          <div
            class="flex flex-col relative px-1 pb-2"
            :class="{
              'text-sm md:text-lg font-bold text-primary-900': selected,
              'text-sm md:text-lg font-semibold text-primary-900': !selected,
            }"
          >
            <span
              :class="{
                'font-bold': selected,
                'font-normal': !selected,
              }"
              >{{ tab }}</span
            >
            <span
              class="border w-full absolute border-black focus:outline-none -bottom-px left-0 transition-transform duration-300"
              :class="{ hidden: !selected }"
            ></span>
          </div>
        </button>
      </Tab>
    </TabList>
    <TabPanels>
      <slot></slot>
    </TabPanels>
  </TabGroup>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels } from "@headlessui/vue";

defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  defaultIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["on:click"]);
</script>
