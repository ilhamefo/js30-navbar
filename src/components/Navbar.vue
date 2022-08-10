<script setup>
import { useIndexStore } from "../store/index";
import Menu from "./Menu.vue";

const state = useIndexStore();

function handleClick() {
  state.handleModal(true);
}
</script>

<template>
  <nav class="flex items-center mx-5 justify-between py-7 relative">
    <a href="#" class="">
      <img src="../assets/Logo.svg" alt="" />
    </a>
    <button class="flex md:hidden" @click="handleClick()">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-[#6C6C6C]"
      >
        <path
          d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
        />
      </svg>
    </button>
    <div class="hidden lg:flex items-center space-x-5 relative">
      <button class="text-gray-500" @click="handleClick()">Products</button>
      <a href="#" class="text-gray-500">Challenges</a>
      <a href="#" class="text-gray-500">Resources</a>
      <a href="#" class="text-gray-500">Other Links</a>
      <Menu class="top-3" v-if="state.openMenu" />
    </div>
    <div class="hidden md:flex items-center space-x-5">
      <a href="#" class="text-gray-500">Sign in</a>
      <button
        class="
          text-white
          bg-[#133416]
          py-4
          px-8
          rounded-md
          text-base
          font-medium
          hover:bg-[#1b4b1f]
          transition-all
          hover:ring
          ring-offset-2 ring-[#2e8635]
          focus:ring-offset-0
        "
      >
        Try for free
      </button>
    </div>

    <Menu v-if="state.openMenu" class="md:hidden" />
  </nav>
</template>