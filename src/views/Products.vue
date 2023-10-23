<template>
  <div class="p-4 border-2 border-gray-400 border-dashed rounded-lg">
    <navigation :link="'Products'" />
    <loader class="h-screen" v-if="productStore.isLoading" />
    <div v-else>
      <div class="flex flex-wrap justify-start ml-10 gap-10">
        <div v-for="product in productData" :key="product.id">
          <product-card @getData="getData" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
import ProductCard from '@/components/ProductCard.vue';
import Loader from '../components/ui/Loader.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { getProductStore } from '../stores/getProductStore';
import { useRoute, useRouter } from 'vue-router';

const productStore = getProductStore();

const productData = ref();
const route = useRoute();
const router = useRouter();

const currentFoodName = computed(() => {
  return route.params.type;
});

const getData = async () => {
  productStore.type = currentFoodName;
  await productStore.getDataWithType();
  productData.value = await productStore.data;
  if (!productData.value) {
    router.push({ name: 'NotFound' });
  }
};

watch(currentFoodName, () => {
  getData();
});

onMounted(() => {
  getData();
});
</script>
