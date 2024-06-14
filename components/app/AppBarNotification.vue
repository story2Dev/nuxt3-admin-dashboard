<template>
  <div
    class="flex h-full w-12 cursor-pointer items-center justify-center rounded-xl p-2 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
  >
    <n-badge :value="10" :max="15">
      <Icon name="system-uicons:bell" size="24" />
    </n-badge>
  </div>
</template>

<script setup lang="ts"></script>
