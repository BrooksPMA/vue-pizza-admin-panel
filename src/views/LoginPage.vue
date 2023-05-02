<template>
  <section class="bg-gray-200 w-full">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen"
    >
      <div class="w-full max-w-md bg-white rounded-lg shadow">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-2xl font-bold leading-tight tracking-tight text-gray-700"
          >
            Войдите в ваш аккаунт
          </h1>
          <form class="space-y-6" @submit.prevent="submit()">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-90"
                >Адрес эл. почты</label
              >
              <input
                v-model="email"
                type="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Пароль</label
              >
              <input
                v-model="password"
                type="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <button
              type="submit"
              @submit.prevent="submit()"
              class="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');

const submit = async () => {
  const success = await authStore.login(email.value, password.value);
  if (success) {
    router.push('/');
  } else {
    alert('Invalid email or password');
  }
};
</script>
