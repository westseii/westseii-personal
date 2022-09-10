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
    background: #000;

    background-image: url("../assets/screenshots/source-gc2-1.jpg");
    background-position: center;
    background-size: cover;
    border-bottom: solid 2px var(--wei-color-divider);
    box-shadow: inset 0 -160px 48px -100px #000;
  }

  .container {
    display: flex;
    flex-direction: column;

    margin: auto;
    max-width: 768px;
    padding: 12px 0;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .header-background {
      background-image: url("../assets/screenshots/source-googly-1.jpg");
    }

    .container {
      padding: 12px;
    }
  }
</style>
