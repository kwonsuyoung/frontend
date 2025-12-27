<template>
  <div>
    <div>
      <h3>[부모영역] 메세지 상태: {{ parentMsg }}</h3>
      Hello, {{ name }}
      <MyLocalSub
        :propsData="parentMsg"
        @sendSignal="updateMsg"
        @sendData="receiveMsg"
      />
      <button @click="resetMsg">초기화</button>
    </div>
  </div>
</template>
<script>
import MyLocalSub from "./Sub.vue";

export default {
  components: { MyLocalSub },
  data() {
    return {
      name: "vue...",
      parentMsg: "부모의 메세지",
    };
  },
  methods: {
    updateMsg() {
      this.parentMsg = "자식으로부터 신호를 받았습니다!";
    },
    resetMsg() {
      this.parentMsg = "부모의 메세지";
    },
    receiveChildMsg(value) {
      this.parentMsg = value;
    },
    receiveMsg(val) {
        this.parentMsg = val;    
    }
  },
};
</script>
