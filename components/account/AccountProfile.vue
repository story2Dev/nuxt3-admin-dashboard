<template>
  <NuxtLink to="/settings/accounts">
    <div class="flex gap-4">
      <n-avatar circle :size="60" :src="user.image" />
      <article>
        <h2 class="text-base">{{ user.displayName }} </h2>
        <p class="text-sm text-gray-500">
          <small>{{ user.email }}</small>
        </p>
      </article>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const user = {
  displayName: 'Mark AI',
  email: 'mark-ai@email.com',
  image: 'https://avatars.githubusercontent.com/u/18229355?v=4',
};
</script>
