<template>
  <div class="flex h-screen bg-slate-50">
    <aside class="relative flex w-64 flex-col divide-y bg-slate-100">
      <div v-if="isShow">
        <button @click="isShow = !isShow">hide me</button>
        <button @click="sendEvent">Click me</button>
        <hr />
        <button @click="rightSide = Hello">test com</button>
        <button @click="rightSide = Me">test com</button>
      </div>
      <div v-else>
        <button @click="isShow = !isShow">Click me</button>
      </div>
      <button @click="toggle">Toggle Slide</button>
      {{ direction }} - {{ transitionName }} {{ show }}
      <transition :name="transitionName" class="h-full w-full">
        <div v-if="show" class="h-full w-full bg-blue-500 p-4"
          >Sliding Content</div
        >
      </transition>
    </aside>
    <main class="flex-grow">
      <slot />
    </main>
    {{ isRightSide }}
    <nav v-if="isRightSide">
      <component :is="rightSide" />
    </nav>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { useNuxtApp } from '#app';
const { $bus } = useNuxtApp();

const { isRightSide, rightSide } = useApp();

const isShow = ref(true);

const Hello = () => {
  return h('p', 'Hello from Layout');
};
const Me = () => {
  return h('p', 'Me from Layout');
};

const sendEvent = () => {
  isRightSide.value = !isRightSide.value;
  $bus.emit('customEvent', 'Hello from Layout');
};

const show = ref(false);
const direction = ref('right'); // or 'right'
const transitionName = ref('slide-left');

const toggle = () => {
  direction.value = show.value ? 'left' : 'right';
  transitionName.value = show.value ? 'slide-left' : 'slide-right';
  show.value = !show.value;
};
</script>

<style scoped>
.view-container {
  position: absolute;
  width: 100%;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
  /* transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
  /* transform: translateX(0); */
  /* transition: all .3s linear; */
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}

/* 
.slide-left-enter {
  transform: translateX(100%);
}

.slide-left-leave-to {
   transform: translateX(-100%);
}

.slide-right-enter {
  transform: translateX(-100%);
}

.slide-right-leave-to {
   transform: translateX(100%);
} */
</style>
