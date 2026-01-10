<template>
    <div>
        <h3>router test</h3>
        <ul>
            <li v-for="item in items" :key="item" @click="goToDetail(item)">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'; // 훅(Hook)을 불러와서 사용

const router = useRouter();
const items = ["title1", "title2", "title3"];

const goToDetail = (param) => {
  router.push(`/detail/test`); // $router 대신 router 변수 사용
};
</script>