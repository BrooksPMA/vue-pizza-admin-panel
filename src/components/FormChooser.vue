<template>
  <component :is="tabs[foodName]" />
</template>

<script setup>
import FormSnacks from './forms/FormSnacks.vue';
import FormDesserts from './forms/FormDesserts.vue';
import FormOthers from './forms/FormOthers.vue';
import FormDrinks from './forms/FormDrinks.vue';
import FormPizza from './forms/FormPizza.vue';
defineProps({
  foodName: String,
});

const tabs = {
  snacks: FormSnacks,
  desserts: FormDesserts,
  others: FormOthers,
  drinks: FormDrinks,
  pizza: FormPizza,
};
</script>
