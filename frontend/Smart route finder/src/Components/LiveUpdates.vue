<template>
  <div>
    <h3>Live Route Updates</h3>
    <p v-if="update">
      {{ update.start }} → {{ update.end }} :
      {{ update.path.join(" → ") }} ({{ update.distance }})
    </p>
  </div>
</template>

<script setup>
import { io } from "socket.io-client";
import { ref, onMounted } from "vue";

const update = ref(null);

onMounted(() => {
  const socket = io("http://localhost:5000");

  socket.on("route_update", (data) => {
    update.value = data;
  });
});
</script>