<template>
  <!-- <div class="grid grid-cols-3 gap-4 mb-4">
    <div
      class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
    <div
      class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
    <div
      class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
  </div>
  <div
    class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800"
  >
    <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
  </div>
  <div class="grid grid-cols-2 gap-4 mb-4">
    <div
      class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
    <div
      class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
    <div
      class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
    <div
      class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
  </div>
  <div
    class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800"
  >
    <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div
      class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
    <div
      class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
    <div
      class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
    <div
      class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
    >
      <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
    </div>
  </div> -->
  <!-- <h1>Dashboard</h1> -->
  <loader class="h-screen"></loader>
</template>

<script setup>
import Loader from '../components/ui/Loader.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push('/login');
};
</script>

<style lang="scss" scoped></style>
