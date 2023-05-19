<template>
  <form @submit.prevent="handleSubmit">
    <input-with-label
      :label="'Название'"
      :placeholder="'Дэнвич ветчина и сыр'"
      v-model="name"
    />
    <textarea-with-label
      :label="'Описание'"
      v-model="description"
      :placeholder="'Поджаристая чиабатта и знакомое сочетание ветчины, цыпленка, моцареллы со свежими томатами и соусом ранч'"
    />
    <input-with-label
      :label="'Ссылка на фотографию'"
      v-model="image"
      :placeholder="'https://dodopizza-a.akamaihd.net/static/Img/Products/727c8ec398bb48bc814a2d83c2e6a74c_1875x1875.webp'"
    />
    <input-with-label
      :label="'Вес'"
      :placeholder="'210'"
      :text-helper="'г'"
      v-model="weight"
    />
    <input-with-label
      :label="'Цена'"
      :placeholder="'229'"
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
    type: 'snacks',
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
