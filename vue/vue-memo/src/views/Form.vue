<script setup>
import { reactive, onMounted } from 'vue';
import storageService from '@/services/StorageService';
//Home에서 불러오는 것과 같은 객체 주소값이 넘어옴
import { useRoute, useRouter } from "vue-router";

const router = useRouter();//라우터 객체 주소값 얻기 // 이동할때는 useRouter를 써야함
const route = useRoute(); //라우트 객체 주소값 얻기 (PathVariable 값 가져오기)
const state = reactive({
    memo: {
        title: '',
        content: '',
    }
});
const submit = () => {
    if (route.params.id) {
        storageService.setItem(state.memo);
        window.alert("수정하였습니다.");
    } else {
        storageService.addItem(state.memo);
        window.alert("저장하였습니다.");
    }
    // 라우팅 처리 (path:'/')로 주소값 이동 (화면 전환)
    router.push({path:'/'})
}
onMounted(() => {
    if (route.params.id) {// id: router/index.js에서 id값을 사용하니
        const id = Number(route.params.id); //받아온 문자열(주소창에 쓰이는 건 모두 문자열)을 숫자로 바꿈
        //route.params.XX route 쓰는 약속
        state.memo = storageService.getItem(id);
    }
})
</script>

<template>
<form class="detail" @submit.prevent="submit">
    <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" id="title" class="form-control p-3" v-model="state.memo.title">
    </div>
    <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea id="content" v-model="state.memo.content" class="form-control p-3"></textarea>
    </div>
    <button class="btn btn-primary w-100 py-3">
        <span v-if="route.params.id">수정</span>
        <span v-else>저장</span>
        <!-- {{ route.params.id ? '수정' : '저장' }} -->
    </button>
</form>

</template>

<style scoped>

</style>