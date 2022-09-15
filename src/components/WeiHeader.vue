<script setup></script>

<template>
  <div class="header-background">
    <div class="container">
      <slot name="wei-header-top"></slot>

      <slot name="wei-header-mid"></slot>

      <slot name="wei-header-btm"></slot>
    </div>
  </div>
</template>

<style scoped>
  .header-background {
    background: var(--wei-color-background);

    background-image: url("../assets/screenshots/source-duel-hal-1.jpg");
    background-position: center;
    background-size: cover;
    box-shadow: inset 0 -150px 25px -100px var(--wei-color-background);
  }

  .container {
    display: flex;
    flex-direction: column;

    margin: auto;
    max-width: 704px;
    padding: 12px 0;
    width: 100%;
  }

  @media screen and (max-width: 704px) {
    .container {
      padding: 12px;
    }
  }
</style>
