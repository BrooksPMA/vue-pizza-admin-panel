<template>
  <form @submit.prevent="updateForm">
    <h1 class="mb-6 border-b-[1px] text-2xl font-medium text-gray-900">
      Изменить данные закуски "{{ name }}"
    </h1>
    <div class="mb-8">
      <label class="block mb-1 text-sm font-medium text-gray-900">
        Название
      </label>
      <div class="flex items-center min-w-[400px]">
        <input
          type="text"
          v-model="name"
          readonly
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
    </div>

    <div class="mb-8">
      <label class="block mb-2 text-sm font-medium text-gray-900">
        Описание
      </label>
      <textarea
        rows="4"
        v-model="description"
        placeholder="Поджаристая чиабатта и знакомое сочетание ветчины, цыпленка, моцареллы со свежими томатами и соусом ранч"
        class="block p-2.5 w-full resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </div>

    <div class="mb-8">
      <label class="block mb-1 text-sm font-medium text-gray-900">
        Ссылка на фотографию
      </label>
      <div class="flex items-center min-w-[400px]">
        <input
          type="text"
          v-model="image"
          placeholder="https://dodopizza-a.akamaihd.net/static/Img/Products/727c8ec398bb48bc814a2d83c2e6a74c_1875x1875.webp"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
    </div>
    <div class="mb-8">
      <label class="block mb-1 text-sm font-medium text-gray-900"> Вес </label>
      <div class="flex items-center min-w-[400px]">
        <input
          type="text"
          v-model="weight"
          placeholder="210"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <span class="ml-1 text-m font-medium text-gray-900">г</span>
      </div>
    </div>
    <div class="mb-8">
      <label class="block mb-1 text-sm font-medium text-gray-900"> Цена </label>
      <div class="flex items-center min-w-[400px]">
        <input
          type="text"
          v-model="price"
          placeholder="229"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <span class="ml-1 text-m font-medium text-gray-900">₽</span>
      </div>
    </div>

    <div class="flex items-center">
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
        type="submit"
      >
        Изменить
      </button>
      <small-loader v-if="productStore.isLoading" />
      <font-awesome-icon
        v-if="productStore.loaded"
        icon="fa-solid fa-thumbs-up"
        bounce
        class="ml-3 w-6 h-6"
        style="color: #1c651b"
      />
    </div>
  </form>
</template>

<script setup>
import SmallLoader from '../ui/SmallLoader.vue';
import { ref, reactive, onMounted } from 'vue';
import { setProductStore } from '../../stores/setProductStore';
import { useRoute, useRouter } from 'vue-router';
import { getProductStore } from '../../stores/getProductStore';

const route = useRoute();
const router = useRouter();

const productStore = setProductStore();
const getProduct = getProductStore();

const name = ref('');
const description = ref('');
const image = ref('');
const weight = ref('');
const price = ref('');

onMounted(async () => {
  if (route.params.id) {
    getProduct.docName = route.params.id;
    getProduct.docType = route.params.type;
    await getProduct.getDocWithName();

    if (getProduct.docData.data()) {
      console.log(getProduct.docData.data());
      const data = getProduct.docData.data();

      name.value = data.name;
      description.value = data.description;
      image.value = data.image;
      weight.value = data.weight;
      price.value = data.price;
    } else {
      router.push({ name: 'NotFound' });
    }
  }
});

const updateForm = async (event) => {
  productStore.form = {
    type: 'snacks',
    name: name.value,
    description: description.value,
    image: image.value,
    weight: weight.value,
    price: price.value,
  };
  await productStore.updateForm();
};
</script>
