<template>
  <form @submit.prevent="handleSubmit">
    <input-with-label
      :label="'Название'"
      :placeholder="'Раскраска'"
      v-model="name"
    />
    <textarea-with-label
      :label="'Описание'"
      v-model="description"
      :placeholder="'Чтобы обед был не только сытным, но и веселым'"
    />
    <input-with-label
      :label="'Ссылка на фотографию'"
      v-model="image"
      :placeholder="'https://dodopizza-a.akamaihd.net/static/Img/Products/1011bb408c7649c08512e62db380ab4e_1875x1875.webp'"
    />
    <input-with-label
      :label="'Количество'"
      :placeholder="'1'"
      :text-helper="'шт'"
      v-model="weight"
    />
    <input-with-label
      :label="'Цена'"
      :placeholder="'10'"
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
import CheckboxToggle from '../ui/CheckboxToggle.vue';
import TextareaWithLabel from '../ui/TextareaWithLabel.vue';
import InputWithLabel from '../ui/InputWithLabel.vue';
import { ref } from 'vue';
import { useProductStore } from '../../stores/productStore';

const productStore = useProductStore();

const name = ref('');
const description = ref('');
const image = ref('');
const weight = ref('');
const price = ref('');

const clearForm = () => {
  name.value = '';
  description.value = '';
  image.value = '';
  weight.value = '';
  price.value = '';
};

const handleSubmit = async () => {
  productStore.form = {
    type: 'others',
    name: name.value,
    description: description.value,
    image: image.value,
    weight: weight.value,
    price: price.value,
  };
  await productStore.submitForm();
  clearForm();
};
</script>
