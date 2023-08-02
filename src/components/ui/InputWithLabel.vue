<template>
  <div>
    <label v-if="label" class="block mb-1 text-sm font-medium text-gray-900">
      {{ label }}
    </label>
    <div class="flex items-center min-w-[400px]">
      <input
        type="text"
        v-bind="$attrs"
        v-model="modelValue"
        :placeholder="placeholder"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <span v-if="textHelper" class="ml-1 text-m font-medium text-gray-900">{{
        textHelper
      }}</span>
    </div>
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
  textHelper: {
    type: [String, Number],
    default: '',
    required: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const model = ref(props.modelValue);

// ????
// watch(props.modelValue, (value) => {
//   model.value = value;
// });

watch(model, (value) => {
  emit('update:modelValue', value);
});

const modelValue = model;
</script>
