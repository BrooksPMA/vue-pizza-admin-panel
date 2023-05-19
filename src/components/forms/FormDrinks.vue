<template>
  <form @submit.prevent="handleSubmit">
    <input-with-label
      :label="'Название'"
      :placeholder="'Добрый Кола'"
      v-model="name"
    />
    <textarea-with-label :label="'Описание'" v-model="description" />
    <input-with-label
      :label="'Ссылка на фотографию'"
      v-model="image"
      :placeholder="'https://dodopizza-a.akamaihd.net/static/Img/Products/dc74c00bc0634933ba7194b99a164094_760x760.webp'"
    />
    <input-with-label
      :label="'Объём'"
      :placeholder="'0.5'"
      :text-helper="'л'"
      v-model="weight"
    />
    <input-with-label
      :label="'Цена'"
      :placeholder="'109'"
      :text-helper="'₽'"
      v-model="price"
    />

    <button
      class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
      type="submit"
    >
      Добавить
    </button>
  </form>
</template>

<script setup>
import TextareaWithLabel from '../ui/TextareaWithLabel.vue';
import InputWithLabel from '../ui/InputWithLabel.vue';
import { ref } from 'vue';
import { setProductStore } from '../../stores/setProductStore';

const productStore = setProductStore();

const name = ref('');
const description = ref('');
const image = ref('');
const weight = ref('');
const price = ref('');

// const clearForm = () => {
//   name.value = '';
//   description.value = '';
//   image.value = '';
//   weight.value = '';
//   price.value = '';
// };

const handleSubmit = async () => {
  productStore.form = {
    type: 'drinks',
    name: name.value,
    description: description.value,
    image: image.value,
    weight: weight.value,
    price: price.value,
  };
  await productStore.submitForm();
  // clearForm();
};
</script>
