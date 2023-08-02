<template>
    <div class="grid grid-rows-5">
        <div class="row-span-3">
            <div class="h-full w-full flex flex-col justify-around">
                <div>Titulo</div>
                <div>searchbar</div>
            </div>
        </div>
        <Cards class="row-span-2"/>
    </div>
</template>

<script setup>
import Cards from '../components/home/Cards.vue'
</script>