<template>
  <div>
    <NuxtLink to="/settings/accounts">
      <div class="flex flex-col items-center justify-center gap-4 text-center">
        <n-avatar circle :size="90" :src="user.image"></n-avatar>
        <article>
          <h2 class="text-base">{{ user.displayName }} </h2>
          <p class="text-sm text-gray-500">
            <small>{{ user.email }}</small>
          </p>
        </article>
      </div>
    </NuxtLink>

    <article class="my-4">
      <n-card>
        <ul class="flex flex-col divide-y divide-slate-100">
          <li v-for="(item, index) in items" :key="index">
            <NuxtLink
              :to="item.path"
              class="flex items-center justify-between gap-2 py-0.5"
            >
              <div class="flex items-center gap-2">
                <Icon :name="item.icon" />
                <span>{{ item.title }}</span>
              </div>
              <Icon name="solar:alt-arrow-right-line-duotone" />
            </NuxtLink>
          </li>
        </ul>
      </n-card>
    </article>
  </div>
</template>

<script setup lang="ts">
const user = {
  displayName: 'Mark AI',
  email: 'mark-ai@email.com',
  image: 'https://avatars.githubusercontent.com/u/18229355?v=4',
};

const items = [
  {
    title: 'Personal Information',
    path: '/settings/accounts/personal',
    icon: 'solar:user-circle-outline',
  },
  {
    title: 'Sigin-In & Security',
    path: '/settings/accounts/signin',
    icon: 'solar:shield-keyhole-line-duotone',
  },
  {
    title: 'Billing',
    path: '/settings/accounts/billing',
    icon: 'solar:bill-list-outline',
  },
];
</script>
