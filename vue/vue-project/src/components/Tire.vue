<script setup>
const props = defineProps({
    color: String, //강제성은 없으나 타입 문제를 파악할 수 있음
});
</script>
<template>
    <div :style="{ color: props.color }">{{ props.color || 'BLACK' }} TIRE</div>
</template>
F
