<template>
  <div class="p-4 border-2 border-gray-400 border-dashed rounded-lg">
    <loader class="h-screen" v-if="ordersStore.isLoading" />
    <div v-else>
      <div class="flex justify-between">
        <h1 class="text-3xl mb-6 bold">
          Заказ №{{ routeId }}
          <span v-if="order">- {{ status[order.status] }}</span>
        </h1>
        <div>
          <button
            class="mr-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm w-auto px-5 py-2.5 text-center"
            v-if="order && order.status === 'active'"
            @click="updateOrderStatus('inWork')"
          >
            Взять в работу
          </button>
          <button
            class="mr-2 text-white bg-green-600 hover:bg-green-800 font-medium rounded-full text-sm w-auto px-5 py-2.5 text-center"
            v-if="order && order.status === 'inWork'"
            @click="updateOrderStatus('done')"
          >
            Заказ выполнен
          </button>
          <button
            class="mr-2 text-white bg-red-600 hover:bg-red-800 font-medium rounded-full text-sm w-auto px-5 py-2.5 text-center"
            v-if="order && order.status === 'inWork'"
            @click="updateOrderStatus('cancelled')"
          >
            Отменить заказ
          </button>
        </div>
      </div>
      <div
        v-if="order"
        class="flex justify-between items-center mb-6 border rounded-lg p-2.5 bg-gray-50"
        v-for="item in order.items"
        :key="item.id"
      >
        <div class="flex items-center">
          <img class="h-32 mr-2" :src="item.image" alt="item.image" />
          <div class="flex flex-col my-auto ml-10">
            <h1 class="text-xl text-black">{{ item.name }}</h1>
            <p v-if="item.doughName" class="text-m text-gray-500">
              {{ item.doughName }}, {{ sizes[item.size] }}
            </p>
          </div>
        </div>
        <p class="mr-4 text-xl">{{ item.amount }} шт</p>
      </div>
      <div v-if="!ordersStore.isLoading && !order">
        <h1 class="text-xl mb-6 bold">Заказ не найден</h1>
        <router-link
          class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm w-auto px-5 py-2.5 text-center"
          :to="{ name: 'Orders' }"
        >
          Вернуться назад
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loader from '../components/ui/Loader.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getOrdersStore } from '../stores/getOrdersStore';
import { getStatisticsStore } from '../stores/statisticsStore';

const route = useRoute();
const routeId = route.params.id;

const ordersStore = getOrdersStore();
const statisticsStore = getStatisticsStore();
const order = ref({});

const sizes = {
  small: 'маленькая',
  medium: 'средняя',
  large: 'большая',
};

const status = {
  active: 'активный',
  inWork: 'в работе',
  done: 'выполнен',
  cancelled: 'отменён',
  expired: 'просрочен',
};

const updateOrderStatus = (status) => {
  ordersStore.updateOrderStatus(routeId, status);
  statisticsStore.updateStatusCount(status);
  order.value.status = status;
};

onMounted(async () => {
  await ordersStore.getOrderWithId(routeId);
  order.value = ordersStore.data;
  // console.log(order.value);
});
</script>
