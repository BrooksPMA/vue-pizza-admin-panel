<template>
  <h1 v-if="authStore.isAuthenticated">Navbar</h1>
  <router-view></router-view>
</template>

<script setup>
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();
</script>

<style lang="scss" scoped></style>
