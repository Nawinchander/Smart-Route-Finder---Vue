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

import RouteForm from "../components/RouteForm.vue";
import RouteResult from "../components/RouteResult.vue";
import GraphView from "../components/GraphView.vue";

const result = ref(null);

const fetchRoute = async ({ start, end }) => {
  result.value = await getRoute(start, end);
};
</script>


