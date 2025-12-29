<!-- 로직 담당 -->
<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
// . app.vue를 기준으로 자리를 찾아가는 상대주소
// @ 절대주소에 가까움.  src 기준에서 찾아갖기

const message = 'There';
const message2 = {
  name: 'Kim',
  age: 20,
};
</script>

<!-- 화면 View 담당-->
<template>
  <div>Hello {{ message2.name }}</div>
  <br />
  <br />
  <hr />
  <div>Hello {{ message2 }}</div>
  <div>
    <span>Hello </span>
    <span v-text="message2"></span>
  </div>
  <br />
  <br />
  <hr />
  <br />
  <br />
  <div>Hello {{ message }}</div>
  <div>
    <span>Hello </span>
    <span v-text="message"></span>
  </div>
  <br />
  <br />
  <br />
  <front-wheel />
  <rear-wheel />
</template>
