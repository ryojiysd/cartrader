<template>
  <div>
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <CarDetailHero />
      <CarDetailAttributes />
      <CarDetailDescription />
      <CarDetailContact />
    </div>
  </div>
</template>

<script setup>
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const route = useRoute();
useHead({
  title: toTitleCase(route.params.name),
});
</script>
