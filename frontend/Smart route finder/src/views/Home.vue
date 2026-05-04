<template>
  <div>
    <h1>Smart Route Finder</h1>

    <RouteForm @onSearch="fetchRoute" />

    <RouteResult :result="result" />

    <GraphView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getRoute } from "../api/routeService";

import RouteForm from "../Components/routeForm.vue";
import RouteResult from "../Components/routeResult.vue";
import GraphView from "../Components/GraphView.vue";

const result = ref(null);

const fetchRoute = async ({ start, end }) => {
  result.value = await getRoute(start, end);
};
</script>


