<template>
  <div class="form">
    <input v-model="start" placeholder="Start (A-E)" />
    <input v-model="end" placeholder="End (A-E)" />

    <button @click="handleSubmit">Find Route</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["onSearch"]);

const start = ref("");
const end = ref("");

const handleSubmit = () => {
  if (!start.value || !end.value) return;
  emit("onSearch", { start: start.value, end: end.value });
};
</script>


