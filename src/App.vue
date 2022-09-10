<script setup>
  import { externalLinks } from "./modules/useful.js";

  import WeiFooter from "./components/WeiFooter.vue";
  import WeiHeader from "./components/WeiHeader.vue";
  import WeiHeaderTitle from "./components/WeiHeaderTitle.vue";

  const headerTitle = "Scott E. West";
</script>

<template>
  <div class="page">
    <header class="header">
      <WeiHeader>
        <template #wei-header-top>
          <div class="wei-header-top">
            <a
              :href="link.href"
              :key="link.label"
              class="link-external"
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
          <div class="wei-header-mid">
            <WeiHeaderTitle :header-title="headerTitle" />
          </div>
        </template>

        <template #wei-header-btm>
          <div class="wei-header-btm">
            <RouterLink
              class="router-link"
              to="/"
              >Home</RouterLink
            >
            <RouterLink
              class="router-link"
              to="/about"
              >About Me</RouterLink
            >
            <RouterLink
              class="router-link"
              to="/portfolio"
              >Things I've Made</RouterLink
            >
            <RouterLink
              class="router-link"
              to="/resume"
              >Resume</RouterLink
            >
          </div>
        </template>
      </WeiHeader>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>

  <footer class="footer">
    <WeiFooter />
  </footer>
</template>

<style scoped>
  .page {
    min-height: 100vh;
  }

  .main {
    margin: auto;
    max-width: 768px;
    width: 100%;
  }
  .footer {
    background: linear-gradient(180deg, transparent, #000 333px);
  }

  /* ext link styles */

  .wei-header-top {
    display: flex;
    height: 48px;
    justify-content: flex-end;
  }
  .link-external {
    color: var(--wei-color-link);
  }
  .link-external:hover {
    filter: brightness(1.33);
  }
  .link-external:nth-child(n + 2) {
    margin-left: 12px;
  }

  /* title styles */

  .wei-header-mid {
    align-items: center;
    display: flex;
    height: 78px;
    /* justify-content: center; */
  }

  /* router link styles */

  .wei-header-btm {
    align-items: flex-end;
    display: flex;
    height: 48px;
    /* justify-content: space-evenly; */
  }
  .router-link {
    color: var(--wei-color-link);
    font-size: 2rem;
    text-decoration: none;
  }
  .router-link:hover {
    filter: brightness(1.33);
  }
  .router-link:nth-child(n + 2) {
    margin-left: 48px;
  }

  /* responsive */

  @media screen and (max-width: 768px) {
    .main {
      padding: 0 12px;
    }

    .wei-header-top {
      justify-content: center;
    }

    .wei-header-mid {
      height: unset;
    }

    .wei-header-btm {
      align-items: center;
      flex-direction: column;
      height: unset;
    }
    .router-link {
      padding: 12px;
      text-shadow: 2px 2px 2px #000;
    }
    .router-link:nth-child(n + 2) {
      margin-left: unset;
    }
    .router-link:last-child {
      margin-bottom: -12px;
    }
  }
</style>
