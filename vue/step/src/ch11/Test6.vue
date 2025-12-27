<template>
  <div class="container">
    <canvas 
      ref="canvasRef"
      :width="CANVAS_WIDTH" 
      :height="CANVAS_HEIGHT"
      @mousemove="onMove"
      @mousedown="startPainting"
      @mouseup="cancelPainting"
      @mouseleave="cancelPainting"
      @click="onCanvasClick"
      @dblclick="onDoubleClick"
    ></canvas>

    <div class="controls">
      <input type="range" v-model="lineWidth" min="1" max="10" />
      <input type="color" v-model="selectedColor" />

      <button @click="isFilling = !isFilling">
        {{ isFilling ? 'Fill Mode' : 'Draw Mode' }}
      </button>

      <div class="color-options">
        <div 
          v-for="color in colors" 
          :key="color"
          :style="{ backgroundColor: color }"
          @click="selectColor(color)"
          class="color-option"
        ></div>
      </div>
      
      <button @click="onClear">Clear</button>
      <button @click="onSave">Save Image</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CANVAS_WIDTH: 800,
      CANVAS_HEIGHT: 800,
      ctx: null,
      isPainting: false,
      isFilling: false,
      lineWidth: 5,
      selectedColor: '#000000',
      colors: ["#ff3838", "#ffb8b8", "#c56cf0", "#ff9f1a", "#fff200"] // 컬러 목록
    };
  },
  mounted() {
    // 캔버스 초기화 (Vue에서 DOM 접근 시 ref 사용)
    const canvas = this.$refs.canvasRef;
    this.ctx = canvas.getContext("2d");
    this.ctx.lineCap = "round";
  },
  watch: {
    // 데이터(선 굵기, 색상)가 변하면 붓의 설정도 자동 업데이트
    lineWidth(newVal) { this.ctx.lineWidth = newVal; },
    selectedColor(newVal) {
      this.ctx.strokeStyle = newVal;
      this.ctx.fillStyle = newVal;
    }
  },
  methods: {
    startPainting() { this.isPainting = true; },
    cancelPainting() {
      this.isPainting = false;
      this.ctx.beginPath();
    },
    onMove(event) {
      if (this.isPainting && !this.isFilling) {
        this.ctx.lineTo(event.offsetX, event.offsetY);
        this.ctx.stroke();
      } else {
        this.ctx.moveTo(event.offsetX, event.offsetY);
      }
    },
    selectColor(color) {
      this.selectedColor = color; // 데이터만 바꾸면 watch가 감지해서 ctx 색상도 바꿈
    },
    onCanvasClick() {
      if (this.isFilling) {
        this.ctx.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
      }
    },
    onClear() {
      this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    },
    onSave() {
      const url = this.$refs.canvasRef.toDataURL();
      const a = document.createElement("a");
      a.href = url;
      a.download = "myDrawing.png";
      a.click();
    }
  }
};
</script>