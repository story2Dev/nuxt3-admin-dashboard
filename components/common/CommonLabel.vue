<template>
  <div class="flex gap-2 py-1">
    <span>
      <slot name="label" />
    </span>
    <article class="flex-grow text-right">
      <slot name="value" />
    </article>
  </div>
</template>

<script setup lang="ts"></script>
