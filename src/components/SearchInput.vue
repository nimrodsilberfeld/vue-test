<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
    v-on:keydown.enter="onEnter"
  />
</template>

<script setup>
import { useStore } from 'vuex';

defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: { type: String, default: '' },
  search: { type: Boolean, default: false },
});
const store = useStore();
const onEnter = async () => {
  if (props.search) {
    await store.dispatch('fetchData', props.modelValue);
  }
};
</script>

<style scoped>
input {
  background-color: #f5f5f5;
  outline: none;
  border: none;
  /* padding: 1rem; */
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
</style>

<!-- 
<template>
  <input
    :value="modelValue"
    @input="validation($event.target.value)"
    v-bind="$attrs"
  />
</template>

<script setup>
const emit = defineEmits(['update:modelValue']);
defineProps({
  modelValue: { type: String, default: '' },
  //   label: { type: [String, Boolean], default: false },
});

const validation = (value) => {
  if (value.length < 5) {
    emit('update:modelValue', value);
  }
};
</script>
 -->
