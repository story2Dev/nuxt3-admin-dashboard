<template>
  <div>
    <nav class="flex h-full items-center justify-between">
      <ul class="flex h-full">
        <li>
          <div
            class="flex h-full w-14 items-center justify-center bg-gray-100 transition-all hover:bg-primary-400 hover:text-white dark:bg-slate-700"
          >
            <Icon name="iconamoon:apps" size="18" />
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
          <nuxt-link to="/" class="text-base font-bold text-primary-500">
            <span class="hidden md:block">Nuxt Admin</span>
            <span class="md:hidden">NA</span>
          </nuxt-link>
        </li>
      </ul>

      <div class="flex h-full w-full max-w-md items-center justify-center">
        <n-input class="hidden w-full md:block" placeholder="Search">
          <template #prefix>
            <Icon name="fluent:search-20-regular" />
          </template>
        </n-input>
        <button
          class="flex h-full w-12 items-center justify-center p-2 text-center transition-all hover:bg-gray-50 dark:hover:bg-gray-800 md:hidden"
        >
          <Icon name="fluent:search-20-regular" />
        </button>
      </div>

      <ul class="flex h-full items-center">
        <li
          class="flex h-full w-12 items-center justify-center p-2 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <Icon name="fluent:settings-20-regular" />
        </li>
        <li
          class="flex h-full w-12 items-center justify-center p-2 transition-colors duration-500 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <Icon name="system-uicons:question-circle" />
        </li>
        <li
          class="p-2 transition-colors duration-500 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <NuxtLink to="/setting/account">
            <article class="flex h-10 w-10 items-center justify-center gap-2">
              <img
                alt="Mark AI"
                src="https://avatars.githubusercontent.com/u/18229355?v=4"
                class="h-full w-full rounded-full object-cover"
              />
            </article>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>
