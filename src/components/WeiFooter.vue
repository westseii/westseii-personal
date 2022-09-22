<script setup></script>

<template>
  <div class="container">
    <div class="center">Hello!</div>
    <br />

    <div><small>Created with Vue 3.2.38.</small></div>
    <div><small>Hosted on Google Firebase.</small></div>
    <div><small>Icons provided by Font Awesome.</small></div>
  </div>
</template>

<style scoped>
  .container {
    margin: auto;
    max-width: 704px;
    padding: 12px 0;
    width: 100%;
  }

  .center {
    text-align: center;
  }

  @media screen and (max-width: 704px) {
    .container {
      padding: 12px;
    }
  }
</style>
