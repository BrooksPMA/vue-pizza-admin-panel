<template>
  <sidebar v-if="isLoggedIn"></sidebar>
  <div :class="[isLoggedIn ? 'hasSidebar' : '']">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Sidebar from './components/Sidebar.vue';
import { useAuthStore } from './stores/authStore';

const authStore = useAuthStore();
const isLoggedIn = computed(() => {
  return authStore.isLoggedIn;
});
</script>

<style scoped>
.hasSidebar {
  padding: 1rem;
  margin-left: 16rem;
}
</style>
