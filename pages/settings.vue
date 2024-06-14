<template>
  <div class="mx-auto h-full max-w-3xl w-full p-4">
    <n-card :content-style="{ padding: '0' }" class="h-full">
      <div class="flex h-full gap-4 divide-x divide-slate-100">
        <nav class="w-52 p-4">
          <div>
            <n-input v-model:value="search" :placeholder="$t('search')">
              <template #prefix>
                <Icon name="heroicons:magnifying-glass" />
              </template>
            </n-input>
          </div>

          <div v-show="!search" class="mt-2">
            <AccountProfile />
          </div>
          <nav class="mt-4 flex flex-col space-y-1">
            <nuxt-link
              v-for="(item, index) in menuFiler"
              :key="index"
              :to="item.path"
              class="flex items-center gap-2"
            >
              <Icon :name="item.icon" />
              <span>{{ item.title }}</span>
            </nuxt-link>
            <article
              v-show="!menuFiler.length"
              class="flex items-center justify-center gap-2 rounded-lg bg-slate-50 p-2"
            >
              <Icon name="heroicons:magnifying-glass" />
              <span>{{ $t('no_results') }}</span>
            </article>
          </nav>
        </nav>
        <main class="flex-grow p-4">
          <nav class="mb-2 flex items-center gap-2">
            <article class="flex items-center gap-2 font-bold">
              <button @click="$router.back()">
                <Icon name="solar:alt-arrow-left-line-duotone" size="20" />
              </button>
              <button @click="$router.forward()">
                <Icon name="solar:alt-arrow-right-line-duotone" size="20" />
              </button>
            </article>
            <h1 class="text-xl font-bold">Setting</h1>
          </nav>
          <NuxtPage />
        </main>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
const { title } = useApp();

title.value = 'Settings';

useHead({
  title: title.value,
});

const search = ref('');

const menu = [
  {
    title: 'Billing',
    icon: 'solar:bill-list-outline',
    path: '/settings/billing',
    keywords: ['billing', 'ໃບເກັບເງິນ'],
  },
  {
    title: 'Payment',
    icon: 'f7:money-dollar-circle',
    path: '/settings/payment',
    keywords: ['payment', 'ເງິນ'],
  },
  {
    title: 'Orders',
    icon: 'material-symbols-light:order-approve-outline-rounded',
    path: '/settings/orders',
    keywords: ['orders', 'ລາຍລະອຽດ'],
  },
];

const menuFiler = computed(() => {
  return menu.filter((item) => {
    return item.keywords
      .map((k) => k.toLowerCase())
      .some((k) => k.includes(search.value.toLowerCase()));
  });
});
</script>

<style scoped></style>
