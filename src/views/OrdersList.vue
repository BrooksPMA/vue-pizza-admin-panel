<template>
  <div class="p-4 border-2 border-gray-400 border-dashed rounded-lg">
    <div class="flex justify-between mb-10">
      <h1 class="text-4xl text-black bold">Заказы</h1>
      <button
        class="flex items-center text-gray-400 hover:text-gray-600"
        @click="deleteAllDocuments"
      >
        <font-awesome-icon class="mr-2" :icon="['fas', 'trash']" />
        <h2 class="text-m">Удалить всё</h2>
      </button>
    </div>
    <loader class="h-screen" v-if="ordersStore.isLoading" />
    <div v-else v-for="order in orders" :key="order.id">
      <order-card
        :order="order"
        @order-expired="(id) => orderExpired(id)"
        @get-orders="getOrders"
      />
    </div>
  </div>
</template>

<script setup>
import Loader from '../components/ui/Loader.vue';
import OrderCard from '../components/OrderCard.vue';
import { onMounted, ref } from 'vue';
import { getOrdersStore } from '../stores/getOrdersStore';
import { useRouter } from 'vue-router';
import { getStatisticsStore } from '../stores/statisticsStore';

const statisticsStore = getStatisticsStore();
const ordersStore = getOrdersStore();
const orders = ref();

const router = useRouter();

const getOrders = async () => {
  await ordersStore.getOrders();
  orders.value = ordersStore.data;
};

const orderExpired = async (id) => {
  await ordersStore.updateOrderStatus(id, 'expired');
  await statisticsStore.updateStatusCount('expired');
  getOrders();
};

const deleteAllDocuments = async () => {
  const confirmDelete = confirm('Вы уверены что хотите удалить все заказы?');
  if (confirmDelete) {
    await ordersStore.deleteAllDocuments();
    statisticsStore.clearOrderStatus();
    getOrders();
  }
};

onMounted(() => {
  getOrders();
});
</script>
