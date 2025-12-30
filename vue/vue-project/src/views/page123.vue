<script setup>
import { reactive } from 'vue';

const state = reactive({
    player: 'Kim',
    name:'Hong'
})

</script>

<template>
<h3>page123.vue</h3>
    <!-- 단방향 데이터 바인딩 -->
    <div>{{ state.player }}</div>
    <input type="text" :value="state.player"/>
    <!-- input에 쓰인 값이 객체에 적힌 속성값이 변하는 건 아님 -->
    <br><br>
    <hr>
    <br>
    <!-- 양방향 데이터 바인딩 -->
    <div>{{ state.name }}</div>
    <input type="text" v-model="state.name"/>
    <!-- input값이 객체에 적힌 속성값을 바꿈 -->
</template>

<style scoped>

</style>