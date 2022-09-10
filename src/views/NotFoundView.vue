<script setup>
  const origin = location.origin;
</script>

<template>
  <section>
    <h2>Oops...</h2>
    <p>The following URL doesn't exist!</p>
    <p>{{ origin }}{{ $route.path }}</p>
  </section>
</template>
