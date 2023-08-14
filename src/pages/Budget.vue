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
  obj.changed = false;
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

function onChange(item) {
  //separar nova fração
  let changedValue = 0;

  //pegar fracao de cada um

  let total = 0;
  // let clearChange =adjustedCategories.every(cat=> cat.changed)

  adjustedCategories.forEach((cat) => {
    if (!cat.changed) {
      total += cat.value;
    } else {
      changedValue += cat.value;
    }
  });

  //fracao antiga restante pela que sobrou da nova
  categories.value = categories.value.map((cat) => {
    console.log(cat);
    // if(clearChange) cat.changed = false
    if (cat.changed) {
      if (cat.name == item.name && changedValue > 100) {
        cat.value = cat.value - (changedValue - 100);
      }
      return cat;
    }
    console.log(changedValue, cat.value, total);

    let newValue =
      changedValue < 100
        ? (cat.value / (total || 1) || 1) * (100 - changedValue)
        : 0;
    console.log(newValue);

    cat.value = Math.round(newValue * 100) / 100;

    return cat;
  });
}
</script>
