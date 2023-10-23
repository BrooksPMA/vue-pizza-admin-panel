<template>
  <component :is="tabs[foodName]" />
</template>

<script setup>
import FormSnacks from './forms/FormSnacks.vue';
import FormDesserts from './forms/FormDesserts.vue';
import FormOthers from './forms/FormOthers.vue';
import FormDrinks from './forms/FormDrinks.vue';
import FormPizza from './forms/FormPizza.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  foodName: String,
});

const router = useRouter();

onMounted(() => {
  if (props.foodName in tabs === false) {
    router.push({ name: 'NotFound' });
  }
});

const tabs = {
  snacks: FormSnacks,
  desserts: FormDesserts,
  others: FormOthers,
  drinks: FormDrinks,
  pizza: FormPizza,
};
</script>
