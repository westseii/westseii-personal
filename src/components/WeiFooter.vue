<script setup>
  import WeiRule from "./WeiRule.vue";
</script>

<template>
  <div class="container text">
    <p>Oi! I see you looking down here...</p>
    <WeiRule />

    <small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id ullam minus, quas eos rerum
        amet voluptate repellat, veniam eum quis neque quos doloremque, impedit dolor. Labore neque
        error nam delectus harum ipsam.
      </p>
    </small>
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
