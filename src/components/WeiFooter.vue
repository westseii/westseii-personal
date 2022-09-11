<template>
  <div class="container">
    <p>Oi! I see you looking down here...</p>
  </div>
</template>

<style scoped>
  .container {
    color: var(--wei-color-link);

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
