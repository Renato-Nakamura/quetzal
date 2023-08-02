<template>
  <div
    class="bg-gray-300 grid sm:grid-cols-1 md:grid-cols-4 grid-flow-row gap-5 p-5"
  >
    <div v-for="panel in panels" :key="panel.name" class="my-auto h-full">
      <div class="w-full p-5 main-font">
        {{ panel.name }}
        <img :src="panel.image" alt="">
      </div>
    </div>
  </div>
</template> 

<script setup>
import { ref } from "vue";
import contents from "../../helpers/contents";
const contentsPanels =contents.filter(content=>content.panel)
const panels = ref(contentsPanels);

console.log(contents);
</script>
