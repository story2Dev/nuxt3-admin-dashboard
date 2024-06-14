<template>
  <div>
    <h1>
      <p>{{ message }}</p>
    </h1>
    <button @click="testError">error test</button>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app';
definePageMeta({
  layout: 'app',
});

const message = ref('');
const { $bus } = useNuxtApp();

const handleCustomEvent = (msg: string) => {
  message.value = msg;
};

const items = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' },
  { id: 7, name: '7' },
  { id: 8, name: '8' },
  { id: 9, name: '9' },
];

function testError() {
  throw new Error('test error');
}

onMounted(() => {
  $bus.on('customEvent', handleCustomEvent);
});

onBeforeUnmount(() => {
  $bus.off('customEvent', handleCustomEvent);
});
</script>

<style scoped></style>
