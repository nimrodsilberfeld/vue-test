<template>
  <div class="table">
    <div class="table_titles">
      <div
        class="table-title"
        v-for="(title, index) in table_titles"
        :key="index"
      >
        {{ title }}
      </div>
    </div>
    <div class="insect_line_wrapper">
      <InsectLine
        :id="insect.id"
        :name="insect.name"
        :description="insect.description"
        :date="insect.createdAt"
        v-for="(insect, index) in getInsects"
        :key="insect.id"
      />
    </div>
  </div>
</template>

<script setup>
import { mapGetters } from '@/map-state';
import InsectLine from './InsectLine.vue';

const table_titles = ['ID', 'Name', 'Description', 'Date',''];
const { getInsects } = mapGetters();
</script>

<style scoped>
.table {
  height: 60vh;
  width: 100%;
  border: 1px solid #aeaeae;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.table_titles {
  height: 10%;
  width: 100%;
  background-color: #f5f5f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.table-title {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 1.3vw;
  padding-left: 20px;
}
.insect_line_wrapper {
  height: 90%;
  width: 100%;
  overflow-y: auto;
}
</style>
