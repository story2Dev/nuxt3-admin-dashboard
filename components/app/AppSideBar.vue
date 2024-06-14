<template>
  <aside class="w-full">
    <ul class="flex w-full flex-col space-y-4">
      <li v-for="(item, index) in AppMenu" :key="index" class="">
        <div
          v-if="isActivePath(item.path)"
          class="relative flex flex-col items-center"
        >
          <div name="fade">
            <div class="absolute inset-0 z-10 flex items-center justify-start">
              <div class="ml-0.5 h-6 w-1 rounded-md bg-primary-400" />
            </div>
          </div>
          <span :title="item.title">
            <nuxt-link
              :to="item.path"
              class="rounded-md p-2 px-3 text-primary-600 dark:hover:bg-slate-800"
            >
              <Icon :name="`${item.icon}`" class="text-xl" />
            </nuxt-link>
          </span>
        </div>
        <div v-else class="relative flex flex-col items-center">
          <span :text="item.title">
            <nuxt-link
              :to="item.path"
              class="rounded-md p-2 px-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Icon :name="`${item.icon}`" class="text-xl" />
            </nuxt-link>
          </span>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { AppMenu } from '~/constants';

const isActivePath = (to?: string) => {
  const roots = to?.split('/').filter((r) => r !== '');
  const { fullPath } = useRouter().currentRoute.value;

  if (fullPath === '/' && !roots?.length) {
    return true;
  }

  const currentPath = fullPath.split('/')[1];
  return roots?.some((r) => currentPath === r);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
