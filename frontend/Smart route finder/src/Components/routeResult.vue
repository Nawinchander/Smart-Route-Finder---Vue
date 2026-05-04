<template>
  <div v-if="result" class="result">
    <h3>Shortest Path</h3>
    <p>{{ result.path.join(" → ") }}</p>
    <p><strong>Distance:</strong> {{ result.distance }}</p>
  </div>
</template>

<script setup>
defineProps({
  result: Object
});
</script>