<script setup></script>

<template>
  <div class="container text">
    <p>Oi! I see you looking down here...</p>
  </div>
</template>

<style scoped>
  .container {
    margin: auto;
    max-width: 704px;
    padding: 12px 0;
    width: 100%;
  }

  .text {
    text-align: center;
  }

  @media screen and (max-width: 704px) {
    .container {
      padding: 12px;
    }
  }
</style>
