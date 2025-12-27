<template>
    <div>
        <div v-if="false">나는 {{number}}번째 서브 컴포넌트 입니다~</div>
        <div class="sub-box">
            <h4>[자식영역]</h4>
            <p>부모가 보낸 메세지: {{ propsData }}</p>
            <button @click="$emit('sendSignal')">부모에게 신호 보내기</button>
            <button @click="$emit('sendData', childMsg)">부모에게 자식 메세지 보내기</button>
        </div>
        <div class="suv-box">
            <h4>[자식 입력창]</h4>
            <input type="text" v-model="childInput" @input="sendToParent" placeholder="여기에 입력해 보세요">
        </div>        
    </div>
</template>
<script>
export default {
    props: ['propsData'],
    emits:['sendData'],
    data(){
        return {
            number: '1',
            childMsg: '엄마!!!!!!! (스크립트에서 보냄)',
            childInput:''
        }
    },
    methods: {
        sendToParent() {
            this.$emit('sendData', this.childInput);
        }
    }
}
</script>
<style>
    .sub-box{border: 1px solid green;padding: 10px;margin-top: 10px;}
    input{padding: 8px;width: 80%;border: 1px solid #ccc;border-radius: 4px;}
</style>