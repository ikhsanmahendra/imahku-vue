<script setup lang="ts">
import { contact } from "@/assets/images";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { IconRedirect } from "@/components/icons";
</script>

<template>
  <div
    class="flex-none md:flex md:justify-between gap-5 mt-4 bg-white px-4 md:px-20 lg:px-32"
  >
    <h1
      class="text-5xl md:text-6xl lg:text-7xl text-black font-extrabold font-sans w-full"
    >
      Get In Touch
    </h1>
    <div class="flex justify-center items-center">
      <h2 class="text-sm md:text-base lg:text-lg font-sans text-black">
        Stay connected with us! We help you to find your dream house.
      </h2>
    </div>
  </div>

  <section
    class="flex-none md:flex space-x-4 space-y-4 pt-16 px-4 md:px-20 lg:px-32 mb-20"
  >
    <div
      class="bg-gray-50 w-full rounded-2xl px-3 md:px-4 lg:px-6 py-6 md:py-8 lg:py-12 flex-none md:flex md:space-x-4 flex-col lg:flex-row-reverse gap-4"
    >
      <div class="flex justify-center items-center w-full lg:w-1/2">
        <img
          :src="contact"
          alt=""
          class="w-72 md:w-full lg:w-[400px] xl:w-[800px] h-52 md:h-full lg:h-[600px] xl:h-[600px] object-cover rounded-xl"
        />
      </div>
      <div class="space-y-2 w-full lg:w-1/2">
        <h1
          class="text-black font-sans font-bold text-3xl md:text-4xl lg:text-5xl"
        >
          Take a helpfull hand
        </h1>
        <h2 class="text-gray-500 font-sans text-base md:text-lg lg:text-xl">
          Avg. responding time is 2 working days. Our working time Mon - Frid
          (8:00 - 16:00)
        </h2>

        <div class="w-full flex-none space-y-2">
          <div class="w-full flex-none space-y-1">
            <h1 for="name" class="font-sans font-bold text-xs md:text-sm">
              Name
            </h1>
            <input
              type="text"
              id="name"
              placeholder="Name"
              class="bg-white rounded p-3 md:p-4 border border-gray-200 w-full"
            />
          </div>
          <div class="w-full flex-none space-y-1">
            <h1 for="email" class="font-sans font-bold text-xs md:text-sm">
              Email
            </h1>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              class="bg-white rounded p-3 md:p-4 border border-gray-200 w-full"
            />
          </div>
          <div class="w-full flex-none space-y-1">
            <h1 for="message" class="font-sans font-bold text-xs md:text-sm">
              Message
            </h1>
            <textarea
              type="text"
              id="message"
              placeholder="Your Message"
              class="bg-white rounded p-3 md:p-4 border border-gray-200 w-full"
            />
          </div>
        </div>

        <div class="flex space-x-2">
          <div>
            <input type="checkbox" />
          </div>
          <h2
            class="font-sans text-xs md:text-sm lg:text-base text-start text-gray-600"
          >
            By clicking on “Send message” you agree with our
            <span
              class="text-start font-sans text-xs md:text-sm lg:text-base text-black"
              >Terms and Conditions</span
            >, meaning you agree to get back in touch with you based on provided
            infomations based filling your forms.
          </h2>
        </div>
        <ButtonComponent class="w-full mt-10">Send Message</ButtonComponent>
      </div>
    </div>
  </section>
  <section
    class="flex-none md:flex space-x-4 space-y-4 bg-gray-50 pt-16 px-4 md:px-20 lg:px-32"
  >
    <div class="md:grid md: grid-cols-3 gap-10 space-y-8 md:space-y-0">
      <div class="space-y-8">
        <div class="space-y-4">
          <h1
            class="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black"
          >
            Join Community
          </h1>
          <h2 class="text-xs md:text-sm lg:text-base font-sans text-gray-600">
            Become a member and join a growing community of people looking for
            building. Share your stories and be paid.
          </h2>
        </div>
        <ButtonComponent>Join Now</ButtonComponent>
      </div>

      <div class="space-y-8">
        <div class="space-y-4">
          <h1
            class="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black"
          >
            Call Us
          </h1>
          <h2 class="text-xs md:text-sm lg:text-base font-sans text-gray-600">
            Feel free to call us in working hours Mon - Frid (8:00 - 16:00 UTC
            +7). Our team will be happy to help answer your questions
          </h2>
        </div>
        <div class="flex space-x-2">
          <h1 class="text-sm md:text-base text-gray-600 font-sans font-bold">
            +6282929292930
          </h1>
          <IconRedirect />
        </div>
      </div>

      <div class="space-y-8">
        <div class="space-y-4">
          <h1
            class="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black"
          >
            Mail Us
          </h1>
          <h2 class="text-xs md:text-sm lg:text-base font-sans text-gray-600">
            No need to filling forms. Jump on your email and mail us with
            whatever you need. We are here to help you.
          </h2>
        </div>
        <div class="flex space-x-2">
          <h1 class="text-sm md:text-base text-gray-600 font-sans font-bold">
            support@imahku.com
          </h1>
          <IconRedirect />
        </div>
      </div>
    </div>
  </section>
</template>
