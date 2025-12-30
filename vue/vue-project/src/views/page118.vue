<script setup>
import { computed, reactive } from 'vue';

const state = reactive({
    mvpId: 0,
    players: [
        { id: 7, name: 'John Doe' }
        , { id: 9, name: 'Jane Lee' }
        , { id: 12, name:'James Park'}
    ]
})
const getMvpName = () => {
    // if (state.mvpId) {
    //     const players = state.players.find(item => item.id === state.mvpId);
    //     if (players) {
    //         return players.name
    //     }
    // }
    // return '없음';
    console.log('call getMvpName')
    return state.players.find(m => m.id === state.mvpId)?.name || '없음';
}

const computedMvpName = computed(() => {
    console.log('call computedMvpName')
    return state.players.find(m => m.id === state.mvpId)?.name || '없음';
})

const increaseMvpId = () => {
    state.mvpId++
};
</script>

<template>
<h3>page118.vue</h3>
<div>
    <h1>오늘의 MVP</h1>
    <template v-if="state.mvpId">
        {{ state.players.find(m => m.id === state.mvpId)?.name ||'없음' }}

        {{state.players.find(m => m.id === state.mvpId) ?
        state.players.find(m => m.id === state.mvpId).name : '없음' }}
    </template>
    <template v-else>없음2</template>
    <br>
    <br>
    <hr>
    <br>
    <div>{{ getMvpName() }}</div>
    <div>{{ getMvpName() }}</div>
    <div>{{ getMvpName() }}</div>
    <br>
    <hr>
    <br>
    <div>{{ computedMvpName }}</div>
    <div>{{ computedMvpName }}</div>
    <div>{{ computedMvpName }}</div>
    <br>
    <hr>
    <br>
    <!-- 미니 미션 버튼 클릭하면 mvpId 1씩 올라가게 해주세요-->
    <div>{{ state.mvpId }}</div>
    <button @click="increaseMvpId">mvp바꾸기</button>
</div>
</template>

<style scoped>

</style>