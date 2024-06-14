import 'vue';
import type mitt from 'mitt';

type Events = {
  customEvent: string;
};

declare module '#app' {
  interface NuxtApp {
    $bus: mitt.Emitter<Events>;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $bus: mitt.Emitter<Events>;
  }
}
