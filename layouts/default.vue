<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <AppBar />

    <section class="flex h-full w-full flex-grow">
      <aside
        class="group relative flex h-full flex-col items-center bg-gray-100 dark:bg-slate-700"
      >
        <div class="flex w-14 items-center pt-4">
          <AppSideBar />
        </div>
      </aside>
      <main class="flex h-full w-full flex-grow flex-col overflow-y-auto">
        <slot />
      </main>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
