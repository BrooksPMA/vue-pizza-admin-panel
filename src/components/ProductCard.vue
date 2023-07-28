<template>
  <div
    class="w-72 bg-white shadow-md rounded-xl mb-5 duration-500 border hover:scale-105 hover:shadow-xl"
  >
    <router-link
      :to="{
        name: 'UpdateProduct',
        params: { type: product.type, id: product.name },
      }"
    >
      <img
        :src="product.image"
        alt="No image found"
        class="h-50 w-50 rounded-t-xl"
      />
      <div class="px-4 py-3 w-72">
        <p class="text-gray-400 mr-3 uppercase text-xs">{{ product.type }}</p>
        <div class="flex justify-between">
          <h1 class="text-lg font-bold text-black truncate block capitalize">
            {{ product.name }}
          </h1>
          <font-awesome-icon
            @click="deleteProduct()"
            class="ml-3 h-6 hover:scale-125"
            icon="fa-solid fa-trash"
          />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { delProductStore } from '../stores/deleteProductStore';

const props = defineProps({
  product: Object,
});

const deleteStore = delProductStore();

const emits = defineEmits(['getData']);

const deleteProduct = () => {
  deleteStore.data = props.product;
  const confirmDelete = confirm(
    'Вы уверены что хотите удалить ' + props.product.name + '?'
  );
  if (confirmDelete) {
    deleteStore.delDocWithType();
    emits('getData');
  }
};
</script>
