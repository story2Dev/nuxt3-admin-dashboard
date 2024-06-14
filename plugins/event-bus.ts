import mitt from 'mitt';
import { defineNuxtPlugin } from '#app';

type Events = {
  customEvent: string;
};

const emitter = mitt<Events>();

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bus', emitter);
});