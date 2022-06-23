<template>
  <div class="container">
    <h1 class="title">Insects Viewr</h1>
    <div class="btnWrapper">
      <Btn msg="+ Create Insect" @was-clicked="testFunc" />
    </div>

    <div class="searchWrapper">
      <SearchInput v-model="searchVal" type="string" :search="true" />
    </div>
    <InsectTable />
    <TheModalComponent v-if="showModal" :toggle="testFunc" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue';

import Btn from './components/Btn.vue';
import SearchInput from './components/SearchInput.vue';
import InsectTable from './components/InsectTable.vue';
import { useStore } from 'vuex';
import TheModalComponent from './components/TheModalComponent.vue';
const searchVal = ref('');
const showModal = ref('');
const store = useStore();
onMounted(async () => {
  await store.dispatch('fetchData');
});

const testFunc = () => {
  showModal.value = !showModal.value;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alef:wght@400;700&display=swap');
#app {
  font-family: 'Alef', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.container {
  position: relative;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 90vh;
  border: 1px solid #aeaeae;
  padding: 1rem;
}
.searchWrapper {
  width: 20%;
  height: 5%;
  align-self: flex-start;
}
.title {
  align-self: flex-start;
  font-size: 2.5rem;
}
.btnWrapper {
  align-self: flex-start;
  width: 20%;
  height: 5%;
}
*::-webkit-scrollbar {
  width: 7px;
}

*::-webkit-scrollbar-track {
  -webkit-box-shadow: none;
}

*::-webkit-scrollbar-thumb {
  border-radius: 3.5px;
  background-color: #021a29;
  outline: none;
}
</style>
