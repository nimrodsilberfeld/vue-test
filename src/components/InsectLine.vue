<template>
  <div class="insect_line">
    <p class="line_item_part">{{ id }}</p>
    <p class="line_item_part">{{ name }}</p>
    <p class="line_item_part">{{ description }}</p>
    <p class="line_item_part">{{ newDate }}</p>
    <div v-if="openPop" class="pop_wrapper" @click="openPop = !openPop">
      <InsectEditPopup :id="id" :delete="deleteInsect" />
    </div>
    <p v-else class="clickPop line_item_part" @click="openPop = !openPop">
      {{ '...' }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import InsectEditPopup from './InsectEditPopup.vue';
const store = useStore();

const deleteInsect = async (id) => {
  await store.dispatch('deleteAnimal', id);
  // console.log('DELETE', id);
};

const props = defineProps({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  date: { type: String },
});
const openPop = ref(false);

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('.');
}
const newDate = formatDate(new Date(props.date));
</script>

<style scoped>
.insect_line {
  background-color: white;
  height: 5.5vh;
  width: 100%;
  /* border-bottom: 1px solid #7a7a7a; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.6rem;
}
.line_item_part {
  width: 20%;
  max-width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  padding-left: 20px;
  font-size: 1.1vw;
  font-weight: 400;
}
.large_line_item_part {
  width: 25%;
  max-width: 25%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  padding-left: 20px;
}
.clickPop {
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.clickPop:hover {
  font-size: 1.5vw;
}
.pop_wrapper {
  width: 20%;
  height: 100%;
  padding-left: 20px;
}
</style>
