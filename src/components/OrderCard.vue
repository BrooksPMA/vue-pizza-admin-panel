<template>
  <router-link :to="{ name: 'Order', params: { id: order.id } }">
    <div
      class="flex justify-between items-center mb-6 border rounded-lg p-2.5 bg-gray-50"
    >
      <div>
        <h1 class="text-3xl max-w-[500px] mb-6 bold border-b-[1px]">
          Заказ №{{ order.id }}
        </h1>
        <div v-if="itemsLength <= 3" class="flex">
          <div v-for="orderItem in orderItems" :key="orderItem.id">
            <img class="h-20 w-20 mr-2" :src="orderItem.image" />
          </div>
        </div>
        <div v-else class="flex items-center">
          <div v-for="orderItem in orderItems.slice(0, 3)" :key="orderItem.id">
            <img class="h-20 w-20 mr-2" :src="orderItem.image" />
          </div>
          <p class="border ml-16 px-2 py-1 rounded-full bg-gray-200">
            +{{ itemsLength - 3 }}
          </p>
        </div>
      </div>
      <div class="w-[200px] text-2xl text-center">
        <vue-countdown
          v-if="props.order.status === 'active'"
          :time="timeLeft"
          @end="$emit('orderExpired', order.id)"
          v-slot="{ minutes, seconds }"
        >
          {{ minutes }}:{{ seconds }}
        </vue-countdown>
        <span v-else>Заказ {{ status[order.status] }}</span>
      </div>
    </div>
  </router-link>
</template>
<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  order: Object,
});
const emit = defineEmits(['getOrders', 'orderExpired']);
const orderItems = props.order.items;

const timeLeft = ref();
const now = Date.now();
const time = +props.order.id;
timeLeft.value = time + 3600000 - now;

const status = {
  active: 'активный',
  done: 'выполнен',
  expired: 'просрочен',
  inWork: 'в работе',
  cancelled: 'отменён',
};

document.getElementById('hi');

const itemsLength = computed(() => {
  return orderItems.length;
});
</script>
