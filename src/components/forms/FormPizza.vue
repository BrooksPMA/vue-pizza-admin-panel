<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-8">
      <input-with-label
        :label="'Название'"
        :placeholder="'Маргарита'"
        v-model="state.name"
      />
      <p v-if="v$.name.$error" class="mt-2 text-xs text-red-600">
        {{ v$.name.$errors[0].$message }}
      </p>
    </div>
    <div class="mb-8">
      <textarea-with-label
        :label="'Описание'"
        :placeholder="'Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус'"
        v-model="state.description"
      />
      <p v-if="v$.description.$error" class="mt-2 text-xs text-red-600">
        {{ v$.description.$errors[0].$message }}
      </p>
    </div>
    <div class="mb-8">
      <input-with-label
        :label="'Ссылка на фотографию'"
        :placeholder="'https://dodopizza-a.akamaihd.net/static/Img/Products/748949429e25404ea10aab002c910d84_584x584.webp'"
        v-model="state.image"
      />
      <p v-if="v$.image.$error" class="mt-2 text-xs text-red-600">
        {{ v$.image.$errors[0].$message }}
      </p>
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
            <input-with-label
              :label="'Цена'"
              :placeholder="'519'"
              :textHelper="'₽'"
              v-model="state.americanSizes.small.price"
            />
            <p
              v-if="v$.americanSizes.small.price.$error"
              class="mt-2 text-xs text-red-600"
            >
              {{ v$.americanSizes.small.price.$errors[0].$message }}
            </p>
          </div>
          <div class="mb-8">
            <input-with-label
              :label="'Вес'"
              :placeholder="'400'"
              :textHelper="'г'"
              v-model="state.americanSizes.small.weight"
            />
            <p
              v-if="v$.americanSizes.small.weight.$error"
              class="mt-2 text-xs text-red-600"
            >
              {{ v$.americanSizes.small.weight.$errors[0].$message }}
            </p>
          </div>
        </div>
        <h1 class="block mb-2 text-m font-bold text-gray-900">Средняя</h1>
        <div class="flex space-x-10">
          <div class="mb-8">
            <input-with-label
              :label="'Цена'"
              :placeholder="'819'"
              :textHelper="'₽'"
              v-model="state.americanSizes.medium.price"
            />
            <p
              v-if="v$.americanSizes.medium.price.$error"
              class="mt-2 text-xs text-red-600"
            >
              {{ v$.americanSizes.medium.price.$errors[0].$message }}
            </p>
          </div>
          <div class="mb-8">
            <input-with-label
              :label="'Вес'"
              :placeholder="'610'"
              :textHelper="'г'"
              v-model="state.americanSizes.medium.weight"
            />
            <p
              v-if="v$.americanSizes.medium.weight.$error"
              class="mt-2 text-xs text-red-600"
            >
              {{ v$.americanSizes.medium.weight.$errors[0].$message }}
            </p>
          </div>
        </div>
        <h1 class="block mb-2 text-m font-bold text-gray-900">Большая</h1>
        <div class="flex space-x-10">
          <div class="mb-8">
            <input-with-label
              :label="'Цена'"
              :placeholder="'999'"
              :textHelper="'₽'"
              v-model="state.americanSizes.large.price"
            />
            <p
              v-if="v$.americanSizes.large.price.$error"
              class="mt-2 text-xs text-red-600"
            >
              {{ v$.americanSizes.large.price.$errors[0].$message }}
            </p>
          </div>
          <div class="mb-8">
            <input-with-label
              :label="'Вес'"
              :placeholder="'850'"
              :textHelper="'г'"
              v-model="state.americanSizes.large.weight"
            />
            <p
              v-if="v$.americanSizes.large.weight.$error"
              class="mt-2 text-xs text-red-600"
            >
              {{ v$.americanSizes.large.weight.$errors[0].$message }}
            </p>
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
          <input-with-label
            class="mb-8"
            :label="'Цена'"
            :placeholder="'819'"
            :textHelper="'₽'"
            v-model="state.italianSizes.medium.price"
          />
          <input-with-label
            class="mb-8"
            :label="'Вес'"
            :placeholder="'490'"
            :textHelper="'г'"
            v-model="state.italianSizes.medium.weight"
          />
        </div>
        <h1 class="block mb-2 text-m font-bold text-gray-900">Большая</h1>
        <div class="flex space-x-10">
          <input-with-label
            class="mb-8"
            :label="'Цена'"
            :placeholder="'999'"
            :textHelper="'₽'"
            v-model="state.italianSizes.large.price"
          />
          <input-with-label
            class="mb-8"
            :label="'Вес'"
            :placeholder="'710'"
            :textHelper="'г'"
            v-model="state.italianSizes.large.weight"
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
import { ref, computed, reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, helpers, integer } from '@vuelidate/validators';
import { setProductStore } from '../../stores/setProductStore';

const productStore = setProductStore();

const state = reactive({
  name: '',
  description: '',
  image: '',
  americanSizes: {
    small: { price: '', weight: '' },
    medium: { price: '', weight: '' },
    large: { price: '', weight: '' },
  },
  italianSizes: {
    medium: { price: '', weight: '' },
    large: { price: '', weight: '' },
  },
});

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Это поле не может быть пустым', required),
      minLength: helpers.withMessage('Минимум 8 символов', minLength(8)),
    },
    description: {
      required: helpers.withMessage('Это поле не может быть пустым', required),
      minLength: helpers.withMessage('Минимум 20 символов', minLength(20)),
    },
    image: {
      required: helpers.withMessage('Это поле не может быть пустым', required),
    },
    americanSizes: {
      small: {
        price: {
          required: helpers.withMessage(
            'Это поле не может быть пустым',
            required
          ),
          integer,
        },
        weight: {
          required: helpers.withMessage(
            'Это поле не может быть пустым',
            required
          ),
          integer,
        },
      },
      medium: {
        price: {
          required: helpers.withMessage(
            'Это поле не может быть пустым',
            required
          ),
          integer,
        },
        weight: {
          required: helpers.withMessage(
            'Это поле не может быть пустым',
            required
          ),
          integer,
        },
      },
      large: {
        price: {
          required: helpers.withMessage(
            'Это поле не может быть пустым',
            required
          ),
          integer,
        },
        weight: {
          required: helpers.withMessage(
            'Это поле не может быть пустым',
            required
          ),
          integer,
        },
      },
    },
  };
});

const v$ = useVuelidate(rules, state);

const handleSubmit = async (event) => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  productStore.form = await {
    type: 'pizza',
    name: state.name,
    description: state.description,
    image: state.image,
    americanSizes: { ...state.americanSizes },
    italianSizes: { ...state.italianSizes },
  };
  await productStore.submitForm();
  event.target.reset();
};
</script>
