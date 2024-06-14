<template>
  <div class="h-full">
    <section class="relative h-52 max-w-md bg-red-200">
      <Transition name="groups">
        <div
          v-if="showGroups"
          ref="groupsRef"
          class="content-groups"
          @click="toggle"
        >
          <ul>
            <li v-for="n in 5" :key="n" class="p-2 hover:bg-slate-100">
              Group {{ n }}
            </li>
          </ul>
        </div>
      </Transition>

      <Transition name="categories">
        <ul
          v-if="showCategories"
          ref="categoriesRef"
          class="content-categories bg-slate-200"
        >
          <button @click="toggle">Back</button>
          <li v-for="n in 5" :key="n" class="p-2 hover:bg-slate-100">
            categories {{ n }}
          </li>
        </ul>
      </Transition>
    </section>
  </div>
</template>

<script setup lang="ts">
const showGroups = ref(true);
const groupsRef = ref();
const showCategories = ref(false);
const categoriesRef = ref();

const toggle = () => {
  showGroups.value = !showGroups.value;
  showCategories.value = !showCategories.value;
};
</script>

<style scoped>
/* .parent {
  position: relative;
  overflow-y: hidden;
} */

.content-groups,
.content-categories {
  position: absolute;
  top: 0;
  width: 100%;
}
.content-groups {
  left: 0;
}
.content-categories {
  left: 100%;
  transform: translate3d(-100%, 0, 0);
}

/* When removed from the DOM, we need the groups to move to the left */
.groups-leave-from {
  transform: translate3d(0, 0, 0); /* Basically, no transform */
}
.groups-leave-to {
  transform: translate3d(
    -100%,
    0,
    0
  ); /* Move 100% or the parent div width to the left */
}

.categories-enter-from {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}
.categories-enter-to {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}

/* --- "Back" transition --- */

.groups-enter-from {
  transform: translate3d(-100%, 0, 0);
}
.groups-enter-to {
  transform: translate3d(0, 0, 0);
}

.categories-leave-from {
  transform: translate3d(-100%, 0, 0);
}
.categories-leave-to {
  transform: translate3d(0, 0, 0);
}

.groups-enter-active,
.groups-leave-active,
.categories-enter-active,
.categories-leave-active {
  transition: transform 0.3s ease-in-out;
}
</style>
