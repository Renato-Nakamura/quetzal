<template>
  <div class="flex items-center gap-5 p-5">
    <span class="w-24">
      {{ modelValue.name }}
    </span>
    <input
      type="range"
      class="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
      min="1"
      max="100"
      :value="modelValue.value"
      @input="props.modelValue.value = Number($event.target.value)"
      @change="$emit('onChange', modelValue)"
    />
    {{ modelValue.value }}%
  </div>
</template>

<script setup>
const props = defineProps(["modelValue"]);
</script>
