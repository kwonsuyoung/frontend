<script setup>
import { reactive } from 'vue';
const state = reactive({
    pushUp: 0,
    sitUp: 0,
})
const increasePushUp = () => state.pushUp++;
const increaseSitUp = () => state.sitUp++;
</script>

<template>
<h3>page114.vue</h3>
<hr>
<br>
<div>팔 굽혀 펴기: {{ state.pushUp }}</div>
<div>윗몸 일으키키: {{ state.sitUp }}</div>
<br>
<hr>
<br>
<button @click="increasePushUp">팔 굽혀 펴기 증가</button>
<button @click="increaseSitUp">윗몸 일으키기 증가</button>
</template>

<style scoped>

</style>