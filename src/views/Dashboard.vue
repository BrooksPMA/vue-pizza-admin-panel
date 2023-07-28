<template>
  <div class="p-4 border-2 border-gray-400 border-dashed rounded-lg">
    <h1 class="text-3xl mb-6 bold">Привет, Даниэль!</h1>
    <div class="flex justify-between">
      <UpdateNotices />
      <OrderStatusChart />
    </div>
  </div>
</template>

<script setup>
import UpdateNotices from '../components/UpdateNotices.vue';
import OrderStatusChart from '../components/OrderStatusChart.vue';
</script>
