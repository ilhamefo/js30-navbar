<script setup>
import { nextTick, onMounted, ref } from "@vue/runtime-core";
import { useIndexStore } from "../store/index";

const state = useIndexStore();
const menuModal = ref([]);

onMounted(() => {
  menuModal.value.focus();
});
</script>

<template>
  <div class="pt-5 absolute top-0 right-0 flex-1 w-full md:max-w-sm">
    <div
      @focusout="state.handleModal(false)"
      tabindex="0"
      ref="menuModal"
      class="
        flex flex-col
        bg-white
        w-full
        rounded-xl
        px-5
        py-10
        md:py-5
        shadow-lg
        space-y-5
      "
    >
      <div class="flex items-center justify-between">
        <div class="text-xs font-semibold text-gray-500">PRODUCTS</div>
        <button
          class="rounded-lg p-1 hover:bg-gray-100 md:hidden"
          @click="state.handleModal(false)"
        >
          <img src="../assets/Close.svg" alt="Close Button" />
        </button>
      </div>
      <div class="grid grid-rows-1 gap-1">
        <div
          class="
            flex
            items-start
            space-x-2
            hover:bg-gray-100
            py-2
            px-1
            rounded-md
            transition-colors
            cursor-pointer
          "
        >
          <img
            src="../assets/Spense_Icon.svg"
            class="w-6 h-6"
            alt="Spense_Icon"
          />
          <div class="flex flex-col items-start justify-start flex-1">
            <div class="font-semibold text-sm">Spense</div>
            <div class="text-sm text-gray-500 leading-[1.5]">
              Spense is a landing pages for writers. Great for practicing
              absolute positioning and flex layouts.
            </div>
          </div>
        </div>
        <div
          class="
            flex
            items-start
            space-x-2
            hover:bg-gray-100
            py-2
            px-1
            rounded-md
            transition-colors
            cursor-pointer
          "
        >
          <img
            src="../assets/Fiber_Icon.svg"
            class="w-6 h-6"
            alt="Spense_Icon"
          />
          <div class="flex flex-col items-start justify-start flex-1">
            <div class="font-semibold text-sm">Fiber Landing Page</div>
            <div class="text-sm text-gray-500 leading-[1.5]">
              An online portfolio generator. Great to practice flex/grid
              layouts, and absolute positioning.
            </div>
          </div>
        </div>
        <div
          class="
            flex
            items-start
            space-x-2
            hover:bg-gray-100
            py-2
            px-1
            rounded-md
            transition-colors
            cursor-pointer
          "
        >
          <img
            src="../assets/Gradie_Icon.svg"
            class="w-6 h-6"
            alt="Spense_Icon"
          />
          <div class="flex flex-col items-start justify-start flex-1">
            <div class="font-semibold text-sm">Gradie Sign Up Page</div>
            <div class="text-sm text-gray-500 leading-[1.5]">
              Gradie is a simple sign up page, great to practice centering
              layouts.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>