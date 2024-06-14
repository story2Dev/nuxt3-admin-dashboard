<template>
  <n-popover trigger="click" >
    <template #trigger>
      <article class="flex h-10 w-10 items-center justify-center gap-2">
        <img
          alt="Mark AI"
          src="https://avatars.githubusercontent.com/u/18229355?v=4"
          class="h-full w-full rounded-full object-cover"
        />
      </article>
    </template>
    <div>

      <article>
        <nav class="relative px-4 text-center">
          <h3 class="en text-xl text-gray-500">{{ user?.email }}</h3>
        </nav>

        <nav class="flex flex-col items-center justify-center px-4">
          <n-avatar
            class="my-2"
            :src="`${user?.avatarUrl}`"
            :size="64"
            circle
          ></n-avatar>
          <h3 class="text-xl">{{ user?.displayName }}</h3>
          </nav>
      </article>
      <ul class="flex flex-col divide-y divide-slate-100 bg-slate-50 rounded-xl mt-4">
        <li class="px-4 py-2">
          <NuxtLink to="/settings/accounts" class="flex items-center gap-2"> 
             <Icon name="solar:user-id-line-duotone" class="text-lg" />
             Profile  
          </NuxtLink>
        </li>
        <li class="px-4 py-2">
          <NuxtLink to="/settings/accounts" class="flex items-center gap-2"> 
             <Icon name="solar:shield-keyhole-line-duotone" class="text-lg" />
             Security  
          </NuxtLink>
        </li>
        <li class="px-4 py-2">
          <NuxtLink to="/settings/accounts" class="flex items-center gap-2"> 
             <Icon name="heroicons:cog" class="text-lg" />
             Setting  
          </NuxtLink>
        </li>
      </ul>

      <ul
            class="mt-4 w-full divide-y divide-slate-100 rounded-xl bg-slate-50"
          >
            <li class="flex gap-4 px-4 py-2">
              <div class="flex flex-grow gap-4">
                <Icon name="system-uicons:moon" size="20" />
                <span>Theme</span>
              </div>
              <div class="flex items-center gap-2">
                Light
                <Icon name="ph:caret-right" />
              </div>
            </li>
            <li class="flex gap-4 px-4 py-2">
              <div class="flex flex-grow gap-4">
                <Icon name="system-uicons:globe" size="20" />
                <span>Language</span>
              </div>
              <div class="flex items-center gap-2">
                English
                <Icon name="ph:caret-right" />
              </div>
            </li>
            <li class="grid grid-cols-2 divide-x divide-slate-200/50">
              <nuxt-link-locale
                class="flex cursor-pointer gap-4 px-4 py-2"
              >
                <Icon name="system-uicons:flag" size="20" />
                Feedback
              </nuxt-link-locale>
              <nuxt-link-locale
                class="flex gap-4 px-4 py-2"
                to="/settings/help"
              >
                <Icon name="system-uicons:question-circle" size="20" />
                {{ ('help') }}
              </nuxt-link-locale>
            </li>
          </ul>

          <ul
            class="my-4 w-full divide-y divide-slate-100 rounded-xl bg-slate-50"
          >
            <li>
              <button class="flex w-full gap-4 px-4 py-2">
                <Icon name="ph:sign-out" size="20" />
                Sign Out
              </button>
            </li>
          </ul>

          <div class="mt-4 flex items-center justify-center gap-4 text-xs">
            <a
              target="_blank"
              rel="noopener noreferrer"
            >
              <n-button text size="tiny">Privacy Policy</n-button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
            >
              <n-button text size="tiny">
                Terms of Service
              </n-button>
            </a>
          </div>
    </div>
  </n-popover>
</template>

<script setup lang="ts">

const user = {
  displayName: 'Mark AI',
  email: 'mark-ai@email.com',
  avatarUrl: 'https://avatars.githubusercontent.com/u/18229355?v=4',
}

</script>
