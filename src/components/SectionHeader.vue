<template>
  <div class="p-8 w-full flex justify-between">
    <h3 class="text-4xl font-bold font-mono">
      {{ title }}
    </h3>
    <div>
      <Button
        v-if="primaryAction"
        cta
        :name="primaryAction.name && primaryAction.name"
        @click="primaryAction.action"
      />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const Button = defineAsyncComponent(() => import('@components/Button.vue'));

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  primaryAction: {
    type: Object,
    default: () => {}
  }
});
</script>
