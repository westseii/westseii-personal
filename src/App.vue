<script setup>
  import { externalLinks } from "./modules/useful.js";

  import WeiHeader from "./components/WeiHeader.vue";
  import WeiHeaderTitle from "./components/WeiHeaderTitle.vue";

  const headerTitle = "Scott E. West";
</script>

<template>
  <div class="page">
    <header class="header">
      <WeiHeader>
        <template #wei-header-top>
          <div class="wei-header__external">
            <a
              :href="link.href"
              :key="link.label"
              rel="noopener noreferrer"
              target="_blank"
              v-for="link in externalLinks"
            >
              <FontAwesomeIcon
                :icon="link.icon"
                :size="link.iconSize"
              />
            </a>
          </div>
        </template>

        <template #wei-header-mid>
          <div class="wei-header__title">
            <WeiHeaderTitle :header-title="headerTitle" />
          </div>
        </template>

        <template #wei-header-btm>
          <div class="wei-header__router-links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About Me</RouterLink>
            <RouterLink to="/">Stuff I've Made</RouterLink>
            <RouterLink to="/">Resume</RouterLink>
          </div>
        </template>
      </WeiHeader>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>

  <footer class="footer">
    <div class="footer__temp">
      <h3>footer__temp</h3>
      <WeiRule />

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
  </footer>
</template>

<style scoped>
  .page {
    min-height: 100vh;
  }

  .header,
  .main,
  .footer {
    overflow: auto;
  }
  .main,
  .footer {
    margin: auto;
    max-width: 768px;
    width: 100%;
  }

  /* ext link styles */

  .wei-header__external {
    display: flex;
    justify-content: flex-end;
  }
  .wei-header__external > a {
    color: hsl(270, 50%, 33%);
  }
  .wei-header__external > a:hover {
    filter: brightness(1.33);
  }
  .wei-header__external > a:nth-child(n + 2) {
    margin-left: 6px;
  }

  /* title styles */

  .wei-header__title {
    display: flex;
    justify-content: center;
  }

  /* router link styles */

  .wei-header__router-links {
    display: flex;
    justify-content: space-between;
  }
  .wei-header__router-links > * {
    color: hsl(270, 50%, 33%);
    font-size: 2.1rem;
    text-decoration: none;
    text-shadow: 2px 2px 2px #000;
  }
  .wei-header__router-links > *:hover {
    filter: brightness(1.33);
  }

  /* responsive */

  @media screen and (max-width: 768px) {
    .main,
    .footer {
      padding: 0 12px;
    }

    .wei-header__external {
      justify-content: center;
      margin: 24px 0;
    }
    .wei-header__external > a:nth-child(n + 2) {
      margin-left: 24px;
    }

    .wei-header__router-links {
      align-items: center;
      flex-direction: column;
    }
    .wei-header__router-links > * {
      padding: 6px;
    }
  }
</style>
