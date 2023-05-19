<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800">
      <div class="flex items-center mb-8">
        <img
          class="h-16 w-16 mr-6"
          src="../assets/pictures/pizza.svg"
          alt="Pizza icon"
        />
        <h1 class="text-white font-bold text-xl">Пиццерия</h1>
      </div>
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            :to="{ name: 'Dashboard' }"
            class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
          >
            <font-awesome-icon
              class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
              icon="fa-solid fa-house"
            />
            <span class="ml-3">Главная</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Products', params: { type: 'pizza' } }"
            class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
          >
            <font-awesome-icon
              class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
              icon="fa-solid fa-bars"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Товары</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'AddFood', params: { type: 'pizza' } }"
            class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
          >
            <font-awesome-icon
              class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
              icon="fa-solid fa-cart-plus"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Добавить</span>
            <!-- <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >3</span
            > -->
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Orders' }"
            class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
          >
            <font-awesome-icon
              class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
              icon="fa-solid fa-user"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Заказы</span>
          </router-link>
        </li>
        <!-- <li>
          <a
            href="#"
            class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
          </a>
        </li> -->
        <li>
          <router-link
            :to="{ name: 'Login' }"
            @click="useAuthStore().logout"
            class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
          >
            <font-awesome-icon
              class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
              icon="fa-solid fa-right-from-bracket"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Выйти</span>
          </router-link>
        </li>
        <!-- <li>
          <a
            href="#"
            class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
          </a>
        </li> -->
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { useAuthStore } from '../stores/authStore';
</script>
<style scoped>
.active {
  background-color: rgb(55 65 81);
}
</style>
