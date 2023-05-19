<template>
  <form @submit.prevent="handleSubmit">
    <input-with-label
      :label="'Название'"
      :placeholder="'Маргарита'"
      v-model="name"
    />
    <textarea-with-label
      :label="'Описание'"
      :placeholder="'Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус'"
      v-model="description"
    />

    <input-with-label
      :label="'Ссылка на фотографию'"
      :placeholder="'https://dodopizza-a.akamaihd.net/static/Img/Products/748949429e25404ea10aab002c910d84_584x584.webp'"
      v-model="image"
    />

    <h1 class="block mb-2 text-sm font-medium text-gray-900">Тип пиццы</h1>

    <!-- American -->
    <div>
      <div class="mb-6 border rounded-lg p-2.5 bg-gray-50">
        <h1
          class="max-w-[300px] mb-6 border-b-[1px] text-2xl font-medium text-gray-900"
        >
          Американская
        </h1>
        <h1 class="block mb-2 text-m font-bold text-gray-900">Маленькая</h1>
        <div class="flex space-x-10">
          <input-with-label
            :label="'Цена'"
            :placeholder="'519'"
            :textHelper="'₽'"
            v-model="americanSizes.small.price"
          />
          <input-with-label
            :label="'Вес'"
            :placeholder="'400'"
            :textHelper="'г'"
            v-model="americanSizes.small.weight"
          />
        </div>
        <h1 class="block mb-2 text-m font-bold text-gray-900">Средняя</h1>
        <div class="flex space-x-10">
          <input-with-label
            :label="'Цена'"
            :placeholder="'819'"
            :textHelper="'₽'"
            v-model="americanSizes.medium.price"
          />
          <input-with-label
            :label="'Вес'"
            :placeholder="'610'"
            :textHelper="'г'"
            v-model="americanSizes.medium.weight"
          />
        </div>
        <h1 class="block mb-2 text-m font-bold text-gray-900">Большая</h1>
        <div class="flex space-x-10">
          <input-with-label
            :label="'Цена'"
            :placeholder="'999'"
            :textHelper="'₽'"
            v-model="americanSizes.large.price"
          />
          <input-with-label
            :label="'Вес'"
            :placeholder="'850'"
            :textHelper="'г'"
            v-model="americanSizes.large.weight"
          />
        </div>
      </div>
    </div>

    <!-- Italian -->
    <div class="mb-6">
      <div class="border rounded-lg p-2.5 bg-gray-50">
        <h1
          class="max-w-[300px] mb-6 border-b-[1px] text-2xl font-medium text-gray-900"
        >
          Итальянская
        </h1>
        <h1 class="block mb-2 text-m font-bold text-gray-900">Средняя</h1>
        <div class="flex space-x-10">
          <input-with-label
            :label="'Цена'"
            :placeholder="'819'"
            :textHelper="'₽'"
            v-model="italianSizes.medium.price"
          />
          <input-with-label
            :label="'Вес'"
            :placeholder="'490'"
            :textHelper="'г'"
            v-model="italianSizes.medium.weight"
          />
        </div>
        <h1 class="block mb-2 text-m font-bold text-gray-900">Большая</h1>
        <div class="flex space-x-10">
          <input-with-label
            :label="'Цена'"
            :placeholder="'999'"
            :textHelper="'₽'"
            v-model="italianSizes.large.price"
          />
          <input-with-label
            :label="'Вес'"
            :placeholder="'710'"
            :textHelper="'г'"
            v-model="italianSizes.large.weight"
          />
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
        type="submit"
      >
        Добавить
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

import TextareaWithLabel from '../ui/TextareaWithLabel.vue';
import InputWithLabel from '../ui/InputWithLabel.vue';
import { ref, reactive } from 'vue';
import { setProductStore } from '../../stores/setProductStore';

const productStore = setProductStore();

const name = ref('');
const description = ref('');
const image = ref('');

const americanSizes = reactive({
  small: { price: '', weight: '' },
  medium: { price: '', weight: '' },
  large: { price: '', weight: '' },
});

const italianSizes = reactive({
  medium: { price: '', weight: '' },
  large: { price: '', weight: '' },
});

const handleSubmit = async (event) => {
  productStore.form = await {
    type: 'pizza',
    name: name.value,
    description: description.value,
    image: image.value,
    americanSizes: { ...americanSizes },
    italianSizes: { ...italianSizes },
  };
  await productStore.submitForm();
  event.target.reset();
};
</script>

<style lang="scss" scoped></style>
