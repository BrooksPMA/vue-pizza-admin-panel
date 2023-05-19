<template>
  <div class="p-4 border-2 border-gray-400 border-dashed rounded-lg">
    <update-form-desserts v-if="route.params.type === 'desserts'" />
    <update-form-drinks v-if="route.params.type === 'drinks'" />
    <update-form-others v-if="route.params.type === 'others'" />
    <update-form-pizza v-if="route.params.type === 'pizza'" />
    <update-form-snacks v-if="route.params.type === 'snacks'" />
  </div>
</template>

<script setup>
import UpdateFormDesserts from '../components/updateForms/UpdateFormDesserts.vue';
import UpdateFormDrinks from '../components/updateForms/UpdateFormDrinks.vue';
import UpdateFormOthers from '../components/updateForms/UpdateFormOthers.vue';
import UpdateFormPizza from '@/components/updateForms/updateFormPizza.vue';
import UpdateFormSnacks from '../components/updateForms/UpdateFormSnacks.vue';

import { useRoute } from 'vue-router';

const route = useRoute();
</script>
