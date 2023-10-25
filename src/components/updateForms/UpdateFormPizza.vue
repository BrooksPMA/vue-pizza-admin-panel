<template>
  <form @submit.prevent="updateForm">
    <h1 class="mb-6 border-b-[1px] text-2xl font-medium text-gray-900">
      Изменить данные пиццы "{{ formData.name }}"
    </h1>
    <div class="mb-8">
      <label class="block mb-1 text-sm font-medium text-gray-900">
        Название
      </label>
      <div class="flex items-center min-w-[400px]">
        <input
          type="text"
          v-model="formData.name"
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
        v-model="formData.description"
        placeholder="Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус"
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
          v-model="formData.image"
          placeholder="https://dodopizza-a.akamaihd.net/static/Img/Products/748949429e25404ea10aab002c910d84_584x584.webp"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
    </div>

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
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-gray-900">
              Цена
            </label>
            <div class="flex items-center min-w-[400px]">
              <input
                type="text"
                v-model="formData.americanSizes.small.price"
                placeholder="519"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span class="ml-1 text-m font-medium text-gray-900">₽</span>
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-gray-900">
              Вес
            </label>
            <div class="flex items-center min-w-[400px]">
              <input
                type="text"
                v-model="formData.americanSizes.small.weight"
                placeholder="400"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span class="ml-1 text-m font-medium text-gray-900">г</span>
            </div>
          </div>
        </div>
        <h1 class="block mb-2 text-m font-bold text-gray-900">Средняя</h1>

        <div class="flex space-x-10">
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-gray-900">
              Цена
            </label>
            <div class="flex items-center min-w-[400px]">
              <input
                type="text"
                v-model="formData.americanSizes.medium.price"
                placeholder="819"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span class="ml-1 text-m font-medium text-gray-900">₽</span>
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-gray-900">
              Вес
            </label>
            <div class="flex items-center min-w-[400px]">
              <input
                type="text"
                v-model="formData.americanSizes.medium.weight"
                placeholder="610"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span class="ml-1 text-m font-medium text-gray-900">г</span>
            </div>
          </div>
        </div>

        <h1 class="block mb-2 text-m font-bold text-gray-900">Большая</h1>
        <div class="flex space-x-10">
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-gray-900">
              Цена
            </label>
            <div class="flex items-center min-w-[400px]">
              <input
                type="text"
                v-model="formData.americanSizes.large.price"
                placeholder="999"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span class="ml-1 text-m font-medium text-gray-900">₽</span>
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-gray-900">
              Вес
            </label>
            <div class="flex items-center min-w-[400px]">
              <input
                type="text"
                v-model="formData.americanSizes.large.weight"
                placeholder="850"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span class="ml-1 text-m font-medium text-gray-900">г</span>
            </div>
          </div>
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
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-gray-900">
              Цена
            </label>
            <div class="flex items-center min-w-[400px]">
              <input
                type="text"
                v-model="formData.italianSizes.medium.price"
                placeholder="819"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span class="ml-1 text-m font-medium text-gray-900">₽</span>
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-gray-900">
              Вес
            </label>
            <div class="flex items-center min-w-[400px]">
              <input
                type="text"
                v-model="formData.italianSizes.medium.weight"
                placeholder="490"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span class="ml-1 text-m font-medium text-gray-900">г</span>
            </div>
          </div>
        </div>
        <h1 class="block mb-2 text-m font-bold text-gray-900">Большая</h1>
        <div class="flex space-x-10">
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-gray-900">
              Цена
            </label>
            <div class="flex items-center min-w-[400px]">
              <input
                type="text"
                v-model="formData.italianSizes.large.price"
                placeholder="999"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span class="ml-1 text-m font-medium text-gray-900">₽</span>
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-gray-900">
              Вес
            </label>
            <div class="flex items-center min-w-[400px]">
              <input
                type="text"
                v-model="formData.italianSizes.large.weight"
                placeholder="710"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span class="ml-1 text-m font-medium text-gray-900">г</span>
            </div>
          </div>
        </div>
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
import { setProductStore } from '../../stores/setProductStore';

const productStore = setProductStore();

const emit = defineEmits(['updateForm']);
const props = defineProps({
  formData: Object,
});

const updateForm = async () => {
  emit('updateForm', props.formData);
};
</script>
