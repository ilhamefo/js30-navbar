<template>
  <div class="flex items-center lg:mt-5 lg:mx-5 space-x-10 flex-1">
    <div class="flex flex-col items-start px-5 py-2 space-y-3">
      <div
        class="
          text-left text-[2.5rem]
          md:text-[3rem]
          lg:text-[4.5rem]
          leading-[1.1]
          font-black
        "
      >
        Ondeck is your remote
        <span class="text-[#F7B300]"> conference calling tool</span>
      </div>

      <div class="text-[#6C6C6C] text-base">
        Ondeck is a service that allows you to create beautiul, online, and
        encrypted video calls for you and your remote team.
      </div>

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

      <div class="flex items-center justify-start space-x-4 pt-5">
        <div class="text-[#6C6C6C] text-base">
          5.0 Rating based on reviews from:
        </div>
        <div class="flex items-center space-x-3">
          <img src="../assets/CapterraLogo.svg" alt="Capterra Logo" />
          <img src="../assets/AlternativeToLogo.svg" alt="Capterra Logo" />
          <img src="../assets/Shopify.svg" alt="Capterra Logo" />
        </div>
      </div>
    </div>

    <div class="max-w-xs hidden md:flex lg:max-w-md">
      <img src="../assets/HeroImage.png" alt="" />
    </div>
  </div>
</template>