<script setup lang="ts">
import './assets/css/tailwind.css'
import type { Animal } from './types'

const animals: Array<Animal> = await $fetch('/api/animals')


</script>

<template>
  <div class="mx-12">
    <h1 class="text-4xl font-medium">
      Cologne Zoo🦁
    </h1>
    <br>
    <div class="my-2">
      <p>
        This is the overview board of the Cologne Zoo. It can be used by zookeepers to get an overview of the animals and their relevant health data.
      </p>
      <br>
      <p>
        Please contact the zoo admin at "admin@zoo-cologne.de" for support with the dashboard. Cyber-Attacks from the Duisburg Zoo have become more frequent on the past, so be on the lookout.
      </p>
    </div>
    <h2 class="text-xl mt-8 mb-4 font-medium">
      Our (lovely) Animals🦚:
    </h2>
    <the-animal-table :animals="animals" />
  </div>
</template>
