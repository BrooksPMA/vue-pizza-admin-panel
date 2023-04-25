<template>
  <div class="p-4 border-2 border-gray-400 border-dashed rounded-lg">
    <div class="flex mb-8">
      <div
        v-for="foodName in foodNames"
        :key="foodName.key"
        class="px-4 py-1 cursor-pointer"
      >
        <router-link :to="{ name: 'AddFood', params: { type: foodName.name } }">
          {{ foodName.title }}</router-link
        >
      </div>
    </div>
    <form-chooser :food-name="currentFoodName" />
  </div>
</template>

<script setup>
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

// function selectItem(foodName, index) {
//   foodNames.forEach((item, i) => {
//     item.active = index === i;
//   });
//   currentFoodName.value = foodName.name;
//   console.log(currentFoodName.value);
// }

// TODO: Add own form for each type of food.
//    case 'pizza':
//       currentFoodTypeName.value = 'Пицца';
//       break;
//     case 'snacks':
//       currentFoodTypeName.value = 'Закуски';
//       break;
//     case 'desserts':
//       currentFoodTypeName.value = 'Десерты';
//       break;
//     case 'combo':
//       currentFoodTypeName.value = 'Комбо';
//       break;
//     case 'drinks':
//       currentFoodTypeName.value = 'Напитки';
//       break;
//     case 'others':
//       currentFoodTypeName.value = 'Другие товары';
//       break;
</script>
<style scoped>
.active {
  border-bottom: 2px solid rgb(31 41 55);
}
</style>
