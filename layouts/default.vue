<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <CommonAppBar />

    <section class="flex h-full w-full flex-grow">
      <aside
        class="group relative flex h-full  flex-col items-center bg-gray-100 dark:bg-slate-700"
      >
        <div class="flex  items-center w-14 pt-4">
          <CommonSideBar />
        </div>
      </aside>
      <main class="flex h-full flex-grow flex-col overflow-y-auto w-full">
        <slot></slot>
      </main>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
