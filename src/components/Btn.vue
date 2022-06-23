<template>
  <button @click="$emit('was-clicked')">{{ msg }}</button>
</template>

<script setup>
defineEmits(['was-clicked']);
defineProps({
  msg: { type: String, default: '' },
  // onClick: { type: Function },
});
</script>

<style scoped>
button {
  background-color: white;
  /* height: 6vh;
  width: 15vw; */
  width: 100%;
  height: 100%;
  /* align-self: flex-start; */
  border-radius: 10px;
  border: 1px solid #7a7a7a;
  font-size: 1.6rem;
  cursor: pointer;
}
</style>
