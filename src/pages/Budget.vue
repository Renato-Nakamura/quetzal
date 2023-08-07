<template>
  <div class="grid grid-cols-5">
    <div class="col-span-3 bg-gray-400 flex flex-col gap-12 pt-24">
      <h1 class="text-6xl main-font text-center">ORÇAMENTO</h1>
      <div class="h-44 bg-gray-800">cards</div>
      <div>
        <div
          class=""
          v-for="(category, index) in categories"
          :key="category.name"
        >
          <PercentageBar v-model="categories[index]" @onChange="onChange" />
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <apexchart
        class="w-full h-full flex items-center"
        type="pie"
        :options="chartOptions"
        :series="categories.map((cat) => cat.value)"
      ></apexchart>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PercentageBar from "../components/budget/PercentageBar.vue";

const standardCategories = ["Custos fixos", "Lazer", "Metas", "Guardar"];

const adjustedCategories = standardCategories.map((cat) => {
  const obj = {};
  obj.value = 100 / standardCategories.length;
  obj.name = cat;
  return obj;
});

let categories = ref(adjustedCategories);
let chartOptions = ref({
  chart: {
    id: "chart4",
  },
  legend: {
    show: false,
  },
  labels: standardCategories,
});

function onChange(name) {
  console.log(name);
  let percentageUsed = 0;
  categories = categories.value.map((cat) => {
    if (name == cat.name) {
      percentageUsed += cat.value;
      return cat;
    }
    cat.value = (
      (cat.value /
        adjustedCategories
          .map((cat) => cat.value)
          .reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          )) *
      (100 - percentageUsed)
    ).toFixed(2);
    percentageUsed += cat.value;

    console.log(cat);

    return cat;
  });
}
</script>
