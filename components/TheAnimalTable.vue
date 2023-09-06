<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { Animal } from '../types'
import { calculateAgeInYears } from '../composables/helpers'

const props = defineProps({
  animals: {
    type: Array as PropType<Array<Animal>>,
    required: true,
  },
})

const animalsSortedByName = computed(() => props.animals.slice().sort((animalA, animalB) => animalA.name.localeCompare(animalB.name)))
</script>
<template>
  <table class="table-auto">
    <thead>
      <tr class="bg-green-200 text-center border-4">
        <th class="border-x-4">Index</th>
        <th class="border-x-4">Species</th>
        <th class="border-x-4">Name</th>
        <th class="border-x-4">Gender</th>
        <th class="border-x-4">Age (yrs)</th>
        <th class="border-x-4">Weight (kg)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({ id, species, name, gender, birthdate, weight }, animalIndex) in animalsSortedByName" :key="id" class="hover:bg-gray-200 hover:text-green-600 bg-gray-100 capitalize text-center border-4">
        <td class="border-x-4">{{ animalIndex + 1 }}</td>
        <td class="border-x-4">{{ species }}</td>
        <td class="border-x-4">{{ name }}</td>
        <td class="border-x-4">{{ gender }}</td>
        <td class="border-x-4">{{ calculateAgeInYears(birthdate) }}</td>
        <td class="border-x-4">{{ weight }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  @apply text-left
}

td {
  @apply w-40
}

tr {
  @apply border-b-2
}
</style>
