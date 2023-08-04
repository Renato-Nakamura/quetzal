<template>
  <div
    class="bg-gray-300 grid sm:grid-cols-1 md:grid-cols-3 grid-flow-row gap-5 px-5 h-fit min-h-full"
  >
    <!-- :class="
      panels.length < 4 ? 'md:grid-cols-' + panels.length : 'md:grid-cols-4'
    " -->
    <div v-for="panel in panels" :key="panel.name" class="flex items-center h-full">
      <router-link class="w-full main-font p-5" :to="panel.path">
        {{ panel.name }}
        <img :src="panel.image" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import contents from "../../helpers/contents";
const contentsPanels = contents.filter((content) => content.panel);
const panels = ref(contentsPanels);

console.log(contents);
</script>
