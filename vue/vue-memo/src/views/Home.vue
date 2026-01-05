<script setup>
import { reactive, onMounted } from 'vue';
import storageService  from '@/services/StorageService';
//Home에서 불러오는 것과 같은 객체 주소값이 넘어옴

const state = reactive({
    memos: {}
});

onMounted(() => state.memos = storageService.getItems());
const remove = id => {
    console.log('id:', id);
    if(!confirm('삭제하시겠습니까?')){
        return
    }
    console.log('삭제실행');
    storageService.delItem(id);
    state.memos = storageService.getItems();
}
</script>

<template>
    <div class="memo-list">
        <router-link class="item" v-for="item in state.memos" :to="`/memos/${item.id}`" :key="item.id">
            <div class="d-flex pt-3">
                <div class="pb-3 mb-0 w-100">
                    <div class="d-flex justify-content-between">
                        <b>{{ item.title }}</b>
                    <div>
                        <!-- click.prevent는 클릭이벤트 버블링을 막는 것 -->
                        <span role="button" @click.prevent="remove(item.id)">삭제</span>
                    </div>
                </div>
                <div class="mt-2">{{ item.content }}</div>
            </div>
        </div>
    </router-link>
    <router-link to="/memos/add" class="add btn btn-primary">+ 추가하기</router-link>
    </div>
</template>
<style lang="scss" scoped>
.memo-list{
    .item{
        background: #f8f6fa;
        border: 1px solid #eee;
        display: block;
        color: #000;
        text-decoration: none;
        padding: 20px 30px;
        margin: 15px 0;
        &:hover{
            border-color: #aaa;
        }
    }
        
}
.add{
    display: block;
    padding: 25px;
    border: 1px solid #eee;
}
</style>