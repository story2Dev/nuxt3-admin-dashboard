<script setup lang="ts">
const items = [
  {
    id: 1,
    client: {
      name: 'Mark AI',
      email: 'mark@email.com',
      image: 'https://avatars.githubusercontent.com/u/18229355?v=4',
    },
    createdAt: '2021-08-01T12:00:00.000Z',
    currency: 'USD',
    total: 1000,
    project: 'Project 1',
    status: {
      id: 1,
      name: 'Draft',
    },
  },
  {
    id: 2,
    client: {
      name: 'Alex Smith',
      email: 'mark@email.com',
      image: 'https://avatars.githubusercontent.com/u/18229355?v=4',
    },
    createdAt: '2021-08-01T12:00:00.000Z',
    currency: 'USD',
    total: 1000,
    project: 'Project 2',
    status: {
      id: 1,
      name: 'Draft',
    },
  },
  {
    id: 2,
    client: {
      name: 'Alex Smith',
      email: 'mark@email.com',
      image: 'https://avatars.githubusercontent.com/u/18229355?v=4',
    },
    createdAt: '2021-08-01T12:00:00.000Z',
    currency: 'USD',
    total: 1000,
    project: 'Project 2',
    status: {
      id: 1,
      name: 'Draft',
    },
  },
  {
    id: 2,
    client: {
      name: 'Alex Smith',
      email: 'mark@email.com',
      image: 'https://avatars.githubusercontent.com/u/18229355?v=4',
    },
    createdAt: '2021-08-01T12:00:00.000Z',
    currency: 'USD',
    total: 1000,
    project: 'Project 2',
    status: {
      id: 1,
      name: 'Draft',
    },
  },
  {
    id: 2,
    client: {
      name: 'Alex Smith',
      email: 'mark@email.com',
      image: 'https://avatars.githubusercontent.com/u/18229355?v=4',
    },
    createdAt: '2021-08-01T12:00:00.000Z',
    currency: 'USD',
    total: 1000,
    project: 'Project 2',
    status: {
      id: 1,
      name: 'Draft',
    },
  },
];
</script>

<template>
  <div class="pb-1">
    <div class="rounded-md border-gray-200 dark:border-slate-700">
      <header class="border-b border-gray-100 py-4 dark:border-slate-700">
        <h2 class="font-semibold text-gray-600"> Recent Quotes </h2>
      </header>
      <div>
        <div class="overflow-x-auto">
          <table class="w-full table-auto">
            <thead
              class="bg-gray-50 text-xs font-semibold uppercase text-gray-400 dark:bg-slate-800"
            >
              <tr>
                <th class="whitespace-nowrap px-2 py-2">
                  <div class="text-left font-semibold">{{ 'name' }}</div>
                </th>

                <th class="whitespace-nowrap p-2">
                  <div class="text-left font-semibold">
                    {{ 'currency' }}
                  </div>
                </th>
                <th class="whitespace-nowrap p-2">
                  <div class="text-left font-semibold">{{ 'total' }}</div>
                </th>
                <th class="whitespace-nowrap p-2">
                  <div class="text-center font-semibold">
                    {{ 'project' }}
                  </div>
                </th>
                <th class="whitespace-nowrap p-2">
                  <div class="text-center font-semibold">
                    {{ 'status' }}
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody
              class="divide-y divide-gray-100 text-sm dark:divide-slate-700"
            >
              <tr
                v-for="(item, index) in items"
                :key="index"
                class="transition-all hover:shadow-lg"
              >
                <td class="whitespace-nowrap py-2">
                  <div class="flex items-center">
                    <div class="mr-2 h-10 w-10 flex-shrink-0 px-2 sm:mr-3">
                      <NAvatar
                        class="rounded-full bg-primary-50"
                        :src="item.client?.image"
                        width="40"
                        height="40"
                        :alt="item.client?.name"
                      />
                    </div>
                    <div>
                      <nuxt-link
                        :to="`/quote/${item.id}`"
                        class="text-primary font-medium"
                      >
                        {{ item.client?.name }}
                      </nuxt-link>
                      <div class="text-left text-gray-600">
                        {{ item.client?.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap p-2">
                  <div class="text-left font-medium text-green-500">
                    {{ item.currency }}
                  </div>
                </td>
                <td class="whitespace-nowrap p-2">
                  <div class="text-left font-medium text-green-500">
                    {{ item.total }}
                  </div>
                </td>
                <td class="whitespace-nowrap p-2">
                  <div class="text-center">{{ item.project }}</div>
                </td>
                <td class="p-2 text-center">
                  <span
                    class="relative inline-block px-3 py-1 font-semibold leading-tight"
                    :class="
                      item.status.id == 1 ? 'text-green-900' : 'text-orange-900'
                    "
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 rounded-full opacity-50"
                      :class="
                        item.status.id == 1 ? 'bg-green-200' : 'bg-orange-200'
                      "
                    ></span>
                    <span class="relative">{{ item.status.name }}</span>
                  </span>
                </td>
                <td class="px-4">
                  <p class="text-xs text-gray-800">
                    {{ new Date(item.createdAt).toDateString() }}
                  </p>
                  <span class="text-xs text-gray-500">
                    {{ new Date(item.createdAt).toLocaleTimeString() }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
