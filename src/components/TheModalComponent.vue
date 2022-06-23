<template>
  <div class="modal-wrapper">
    <div class="modal-content">
      <div class="input-wrapper">
        <SearchInput v-model="name" type="string" />
      </div>
      <div class="input-wrapper desc">
        <SearchInput v-model="description" type="string" />
      </div>
      <div class="btn_wrapper">
        <Btn msg="Add" @was-clicked="addAnimal" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SearchInput from './SearchInput.vue';
import Btn from './Btn.vue';
import { useStore } from 'vuex';
const store = useStore();

const props = defineProps({
  toggle: { type: Function },
});
const name = ref('');
const description = ref('');

const hide = () => {
  props.toggle();
};

const addAnimal = async () => {
  await store.dispatch('addAnimal', {
    name: name.value,
    des: description.value,
  });
  hide();
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}
.modal-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 40vh;
  background-color: white;
  border: 1px solid gray;
  padding: 1rem;
}
.modal-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.input-wrapper {
  width: 80%;
  height: 15%;
}
.desc {
  height: 40%;
}
.btn_wrapper {
  height: 15%;
  width: 70%;
}
</style>
