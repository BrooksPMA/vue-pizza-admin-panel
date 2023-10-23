<template>
  <div class="p-4 border-2 border-gray-400 border-dashed rounded-lg">
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-3xl font-semibold mb-4">
        Произошла ошибка 404. Ничего не найдено!
      </h1>
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
        @click="router.go(-1)"
      >
        Вернуться назад
      </button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
