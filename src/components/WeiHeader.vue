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

    /* pass this in as a prop later on; randomize banner img */
    background-image: url("../assets/screenshots/source-gc2-1.jpg");
    background-position: center;
    background-size: cover;
    box-shadow: inset 0 -100px 50px -50px var(--wei-color-background);
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
