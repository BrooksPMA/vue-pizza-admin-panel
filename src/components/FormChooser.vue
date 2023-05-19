<template>
  <form-pizza v-if="foodName === 'pizza'" />
  <form-snacks v-if="foodName === 'snacks'" />
  <form-desserts v-if="foodName === 'desserts'" />
  <form-drinks v-if="foodName === 'drinks'" />
  <form-others v-if="foodName === 'others'" />
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
</script>

<style lang="scss" scoped></style>
