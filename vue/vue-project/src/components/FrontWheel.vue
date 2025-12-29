<script setup>
import Tire from "./Tire.vue"
const page = 'history';
</script>
<template>
    <div class="front-wheel">
        <span :id="page">FRONT WHEEL</span>
        <tire color="BLUE"/>
    </div>
</template>
<style scoped>
#history{text-decoration: underline;}
    .front-wheel{
        border: 1px solid #000;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
    }
</style>