<script setup>
import { useIndexStore } from "./store/index";
import Menu from "./components/Menu.vue";
import Hero from "./components/Hero.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

const state = useIndexStore();

function handleClick() {
  state.handleModal(true);
}
</script>

<template>
  <div
    class="flex w-full bg-[#F3EDE5] min-w-[250px] font-helvetica min-h-screen"
  >
    <div class="container mx-auto flex flex-col">
      <!-- nav -->
      <Navbar />

      <!-- hero -->
      <Hero />

      <!-- footer -->
      <Footer />
    </div>
  </div>
</template>
