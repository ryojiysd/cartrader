<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>

<script setup>
const route = useRoute();
const car = await useFetchCar(route.params.id);

const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.name),
});

definePageMeta({
  layout: "custom",
});
</script>
