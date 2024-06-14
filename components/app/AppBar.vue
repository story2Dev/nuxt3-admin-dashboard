<template>
  <div>
    <nav
      class="grid h-full grid-cols-3 items-center justify-between border-b border-slate-100"
    >
      <ul class="flex h-full">
        <li>
          <div
            class="flex h-full w-14 items-center justify-center bg-gray-100 transition-all hover:bg-primary-400 hover:text-white dark:bg-slate-700"
          >
            <Icon name="iconamoon:apps" size="16" />
          </div>
        </li>
        <li
          v-show="$route.fullPath !== '/'"
          class="flex items-center justify-center px-2"
        >
          <span text="Go Back">
            <button @click="$router.back()">
              <Icon
                name="fluent:arrow-left-12-regular"
                class="text-xl text-primary-500"
              />
            </button>
          </span>
        </li>
        <li
          class="flex items-center justify-center"
          :class="{
            'px-3': $route.fullPath == '/',
          }"
        >
          <span class="hidden text-lg md:block">{{ title }}</span>
          <nuxt-link to="/" class="text-base font-bold text-primary-500">
            <span class="md:hidden">NA</span>
          </nuxt-link>
        </li>
      </ul>

      <AppBarSearch />

      <ul class="flex h-full items-center justify-end">
        <li class="h-full">
          <AppBarNotification />
        </li>
        <li
          class="flex h-full w-12 cursor-pointer items-center justify-center rounded-xl p-2 transition-colors duration-500 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <Icon name="system-uicons:question-circle" />
        </li>
        <li
          class="rounded-xl p-2 transition-colors duration-500 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <AppBarProfile />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { title } = useApp();
</script>
