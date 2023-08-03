<template>
    <div class="grid grid-rows-5">
        <div class="row-span-3">
            <div class="h-full w-full flex flex-col justify-center gap-20 items-center">
                <div class="main-font text-4xl">Facilite sua vida financeira</div>
                <Searchbar class="w-1/3"/>
            </div>
        </div>
        <Cards class="row-span-2"/>
    </div>
</template>

<script setup>
import Searchbar from '../components/commons/Searchbar.vue'
import Cards from '../components/home/Cards.vue'
</script>