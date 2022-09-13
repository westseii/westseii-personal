<template>
  <div class="container text">
    <h3>Oi! I see you looking down here...</h3>
    <WeiRule />

    <small>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, similique perspiciatis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci tempore, praesentium
        suscipit beatae officia excepturi voluptatem vero dolorum maiores? Enim, ipsum officiis
        nulla omnis deserunt beatae illum inventore optio, nihil rerum, obcaecati quisquam?
      </p>
      <p>Lorem, ipsum.</p>
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
