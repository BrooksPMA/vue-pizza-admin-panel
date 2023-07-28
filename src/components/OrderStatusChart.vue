<template>
  <div
    v-if="!isAllZero"
    id="chart"
    class="flex flex-col border rounded-lg bg-gray-50 h-[350px] w-[380px]"
  >
    <h1 class="text-xl m-auto">Статистика заказов</h1>
    <p class="text-sm mb-2 m-auto">Всего заказов: {{ sum }}</p>
    <apexchart
      type="pie"
      width="380"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { getStatisticsStore } from '../stores/statisticsStore';

const statisticsStore = getStatisticsStore();
const series = ref([]);
const sum = computed(() => series.value.reduce((acc, curr) => acc + curr, 0));

const isAllZero = computed(() => {
  return series.value.every((item) => item === 0);
});

const chartOptions = {
  plotOptions: {
    pie: {
      expandOnClick: true,
    },
  },
  colors: ['#20334E', '#004C99', '#0080FF', '#66B2FF', '#003365'],
  legend: {
    position: 'bottom',
  },
  labels: ['Просрочены', 'Выполнены', 'В работе', 'Отменены', 'Активные'],
};

onMounted(async () => {
  await statisticsStore.getOrderStatusData();
  const obj = statisticsStore.data;
  series.value = [obj.expired, obj.done, obj.inWork, obj.cancelled, obj.active];
});
</script>

<style lang="scss" scoped></style>
