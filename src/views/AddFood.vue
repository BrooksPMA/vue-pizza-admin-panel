<template>
  <div class="p-4 border-2 border-gray-400 border-dashed rounded-lg">
    <navigation :link="'AddFood'" />
    <form-chooser :food-name="currentFoodName" />
  </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue';
import FormChooser from '../components/FormChooser.vue';
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const foodNames = reactive([
  { title: 'Пицца', name: 'pizza' },
  { title: 'Закуски', name: 'snacks' },
  { title: 'Дессерты', name: 'desserts' },
  { title: 'Напитки', name: 'drinks' },
  { title: 'Другие товары', name: 'others' },
]);

const currentFoodName = computed(() => {
  return route.params.type;
});
</script>
np
