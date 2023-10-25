<template>
  <div class="p-4 border-2 border-gray-400 border-dashed rounded-lg">
    <component
      @updateForm="updateForm"
      :formData="formData"
      :is="tabs[route.params.type]"
    />
  </div>
</template>

<script setup>
import UpdateFormDesserts from '../components/updateForms/UpdateFormDesserts.vue';
import UpdateFormDrinks from '../components/updateForms/UpdateFormDrinks.vue';
import UpdateFormOthers from '../components/updateForms/UpdateFormOthers.vue';
import UpdateFormPizza from '@/components/updateForms/updateFormPizza.vue';
import UpdateFormSnacks from '../components/updateForms/UpdateFormSnacks.vue';

import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { setProductStore } from '../stores/setProductStore';
import { getProductStore } from '../stores/getProductStore';

const route = useRoute();
const router = useRouter();

const productStore = setProductStore();
const getProduct = getProductStore();

const updateForm = async (data) => {
  productStore.form = data;
  await productStore.updateForm();
};

const formData = ref({});

onMounted(async () => {
  if (route.params.id) {
    getProduct.docName = route.params.id;
    getProduct.docType = route.params.type;
    await getProduct.getDocWithName();

    if (getProduct.docData.data()) {
      formData.value = getProduct.docData.data();
    } else {
      router.push({ name: 'NotFound' });
    }
  }

  if (route.params.type in tabs === false) {
    router.push({ name: 'NotFound' });
  }
});

const tabs = {
  snacks: UpdateFormSnacks,
  desserts: UpdateFormDesserts,
  others: UpdateFormOthers,
  drinks: UpdateFormDrinks,
  pizza: UpdateFormPizza,
};
</script>
