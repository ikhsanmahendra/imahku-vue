<template>
  <button
    :type="type"
    @click="onClick"
    :disabled="disabled"
    class="flex flex-row items-center justify-center gap-2 px-2 md:px-4 lg:px-6 py-2 lg:py-3 font-sans font-extrabold text-center transition duration-300 ease-in-out rounded-lg bg-black text-white"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as () => "button" | "submit" | "reset",
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};
</script>
