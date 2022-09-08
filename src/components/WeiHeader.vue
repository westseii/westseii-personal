<template>
  <div class="wei-header">
    <div class="container">
      <slot name="wei-header-top"></slot>

      <slot name="wei-header-mid"></slot>

      <slot name="wei-header-btm"></slot>
    </div>
  </div>
</template>

<style scoped>
  .wei-header {
    background: #000;

    background-image: url("../assets/screenshots/source-googly-1.jpg");
    background-position: center;
    background-size: cover;
    border-bottom: solid 1px hsl(270, 50%, 33%);
    box-shadow: inset 0 -24px 48px 24px #000;
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
    .container {
      padding: 12px;
    }
  }
</style>
