<script setup></script>

<template>
  <div class="header-background">
    <div class="header-gradient">
      <div class="container">
        <slot name="wei-header-top"></slot>

        <slot name="wei-header-mid"></slot>

        <slot name="wei-header-btm"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .header-background {
    background: var(--wei-color-background);

    background-image: url("../assets/screenshots/source-duel-hal-1.jpg");
    background-position: center;
    background-size: cover;
  }

  .header-gradient {
    background: linear-gradient(180deg, transparent calc(100% - 50px), var(--wei-color-background));
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
