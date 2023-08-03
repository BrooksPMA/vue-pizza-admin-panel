<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-8">
      <input-with-label
        :label="'Название'"
        :placeholder="'Добрый Кола'"
        v-model="state.name"
      />
      <p v-if="v$.name.$error" class="mt-2 text-xs text-red-600">
        {{ v$.name.$errors[0].$message }}
      </p>
    </div>
    <div class="mb-8">
      <textarea-with-label :label="'Описание'" v-model="state.description" />
    </div>
    <div class="mb-8">
      <input-with-label
        :label="'Ссылка на фотографию'"
        v-model="state.image"
        :placeholder="'https://dodopizza-a.akamaihd.net/static/Img/Products/727c8ec398bb48bc814a2d83c2e6a74c_1875x1875.webp'"
      />
      <p v-if="v$.image.$error" class="mt-2 text-xs text-red-600">
        {{ v$.image.$errors[0].$message }}
      </p>
    </div>
    <div class="mb-8">
      <input-with-label
        :label="'Объём'"
        :placeholder="'0.5'"
        :text-helper="'л'"
        v-model="state.weight"
      />
      <p v-if="v$.weight.$error" class="mt-2 text-xs text-red-600">
        {{ v$.weight.$errors[0].$message }}
      </p>
    </div>
    <div class="mb-8">
      <input-with-label
        :label="'Цена'"
        :placeholder="'109'"
        :text-helper="'₽'"
        v-model="state.price"
      />
      <p v-if="v$.price.$error" class="mt-2 text-xs text-red-600">
        {{ v$.price.$errors[0].$message }}
      </p>
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
import { reactive, computed } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, helpers, integer } from '@vuelidate/validators';
import { setProductStore } from '../../stores/setProductStore';

const productStore = setProductStore();

const state = reactive({
  name: '',
  description: '',
  image: '',
  weight: '',
  price: '',
});

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Это поле не может быть пустым', required),
      minLength: helpers.withMessage('Минимум 8 символов', minLength(8)),
    },
    image: {
      required: helpers.withMessage('Это поле не может быть пустым', required),
    },
    price: {
      required: helpers.withMessage('Это поле не может быть пустым', required),
      integer: helpers.withMessage('Введите число', integer),
    },
    weight: {
      required: helpers.withMessage('Это поле не может быть пустым', required),
      integer: helpers.withMessage('Введите число', integer),
    },
  };
});

const v$ = useVuelidate(rules, state);
const handleSubmit = async (event) => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  productStore.form = {
    type: 'desserts',
    name: state.name,
    description: state.description,
    image: state.image,
    weight: state.weight,
    price: state.price,
  };
  await productStore.submitForm();
  event.target.reset();
};
</script>
