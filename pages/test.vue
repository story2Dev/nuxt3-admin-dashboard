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
