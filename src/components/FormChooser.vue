<template>
  <component @submitForm="submitForm" :is="tabs[foodName]" />
</template>

<script setup>
import FormSnacks from './forms/FormSnacks.vue';
import FormDesserts from './forms/FormDesserts.vue';
import FormOthers from './forms/FormOthers.vue';
import FormDrinks from './forms/FormDrinks.vue';
import FormPizza from './forms/FormPizza.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { setProductStore } from '../stores/setProductStore';

const props = defineProps({
  foodName: String,
});

const router = useRouter();

const productStore = setProductStore();
const submitForm = async (data) => {
  productStore.form = data;
  await productStore.submitForm();
};

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
