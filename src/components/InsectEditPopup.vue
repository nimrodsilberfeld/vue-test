<template>
  <div class="edit_popup">
    <p class="btn">Edit</p>
    <div class="line"></div>
    <p class="btn" @click="onClick">Delete</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: { type: String },
  delete: { type: Function },
});

function onClick() {
  props.delete(props.id);
}
</script>

<style scoped>
.edit_popup {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  height: 100%;
  width: 70%;
  column-rule: 1px solid black;
}
.line {
  width: 100%;
  height: 1px;
  background-color: gray;
}
p {
  font-size: 1vw;
  margin: 0;
  padding: 0;
}
.btn:hover {
  cursor: pointer;

  font-weight: bold;
}
</style>
