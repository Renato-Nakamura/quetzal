<template>
  <div class="grid grid-cols-5">
    <div
      class="bg-gray-400 col-span-3"
      v-for="(category, index) in categories"
      :key="category.name"
      @click="change"
    >
      <PercentageBar v-model="categories[index]" />
    </div>
    <div>bbb</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PercentageBar from "../components/budget/PercentageBar.vue";

let categories = ref([
  {
    name: "Fixos",
    value: 50,
  },
  {
    name: "Fixos22",
    value: 50,
  },
]);

function change() {
  console.log(categories);
}
</script>
