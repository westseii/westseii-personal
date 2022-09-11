<script setup>
  import { externalLinks } from "./modules/useful.js";

  import WeiFooter from "./components/WeiFooter.vue";
  import WeiHeader from "./components/WeiHeader.vue";
  import WeiHeaderTitle from "./components/WeiHeaderTitle.vue";

  // Header title display text
  const headerTitle = "Scott E. West";
</script>

<template>
  <!-- Everything within the div.page container will take up 100% of the vertical space -->
  <div class="page">
    <!-- The header element is semantic only; no styles applied -->
    <header>
      <WeiHeader>
        <template #wei-header-top>
          <div class="wei-header--top">
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
          <div class="wei-header--mid">
            <WeiHeaderTitle :header-title="headerTitle" />
          </div>
        </template>

        <template #wei-header-btm>
          <div class="wei-header--btm">
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
    max-width: 704px;
    width: 100%;
  }
  .footer {
    background: linear-gradient(180deg, transparent, var(--wei-color-divider) 24px);
  }

  /* ext link styles; WeiHeader slot */

  .wei-header--top {
    display: flex;
    height: 50px;
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

  /* title styles; WeiHeader slot */

  .wei-header--mid {
    align-items: center;
    display: flex;
    height: 100px;

    margin-bottom: 8px;
  }

  /* router link styles; WeiHeader slot */

  .wei-header--btm {
    align-items: flex-end;
    display: flex;
    height: 50px;

    margin-bottom: -8px;
  }

  .router-link {
    color: var(--wei-color-link);
    font-size: 2.1rem;
    text-decoration: none;
  }
  .router-link:hover {
    filter: brightness(1.33);
  }
  .router-link:nth-child(n + 2) {
    margin-left: 24px;
  }

  /* responsive */

  @media screen and (max-width: 704px) {
    .main {
      padding: 0 12px;
    }

    .wei-header--top {
      height: unset;
    }
    .wei-header--mid {
      display: none;
    }
    .wei-header--btm {
      align-items: flex-start;
      flex-direction: column;
      height: unset;
    }

    .router-link {
      padding: 6px 0;
    }
    .router-link:first-child {
      padding-top: 0;
    }
    .router-link:nth-child(n + 2) {
      margin-left: unset;
    }
    .router-link:last-child {
      padding-bottom: 0;
    }
  }
</style>
