<template>
  <div class="flex mb-8">
    <div
      v-for="foodName in foodNames"
      :key="foodName.key"
      class="px-4 py-1 cursor-pointer"
    >
      <router-link :to="{ name: link, params: { type: foodName.name } }">
        {{ foodName.title }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

defineProps({
  link: String,
});

const foodNames = reactive([
  { title: 'Пицца', name: 'pizza' },
  { title: 'Закуски', name: 'snacks' },
  { title: 'Дессерты', name: 'desserts' },
  { title: 'Напитки', name: 'drinks' },
  { title: 'Другие товары', name: 'others' },
]);
</script>

<style scoped>
.active {
  border-bottom: 2px solid rgb(31 41 55);
}
</style>
