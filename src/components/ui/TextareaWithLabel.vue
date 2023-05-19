<template>
  <div class="mb-8">
    <label class="block mb-2 text-sm font-medium text-gray-900">
      {{ label }}
    </label>
    <textarea
      rows="4"
      v-bind="$attrs"
      v-model="modelValue"
      :placeholder="placeholder"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    ></textarea>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: {
    type: [String, Number],
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const model = ref(props.modelValue);

watch(model, (value) => {
  emit('update:modelValue', value);
});

const modelValue = model;
</script>
