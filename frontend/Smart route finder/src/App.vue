<template>
  <h1>Smart Route Finder</h1>
  <RouteForm @onSearch="fetchRoute" />
  <RouteResult :result="result" />
  <LiveUpdates />
</template>

<script setup>
import { ref } from "vue";
import { getRoute } from "./api/routeService";

import RouteForm from "./Components/RouteForm.vue";
import RouteResult from "./Components/RouteResult.vue";
import LiveUpdates from "./Components/LiveUpdates.vue";

const result = ref(null);

const fetchRoute = async ({ start, end }) => {
  result.value = await getRoute(start, end);
};
</script>

<!-- <script setup></script>

<!-- <template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template> -->

<style scoped></style>


<template>
  <router-view />
</template>
 -->
