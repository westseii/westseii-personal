<script setup>
  import { externalLinks } from "./modules/useful.js";

  import WeiFooter from "./components/WeiFooter.vue";
  import WeiHeader from "./components/WeiHeader.vue";
  import WeiHeaderTitle from "./components/WeiHeaderTitle.vue";

  // Header title display text
  const headerTitle = "Scott e. West";
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
    margin: auto auto 50px auto;
    max-width: 704px;
    width: 100%;

    position: relative;
  }
  .footer {
    background: linear-gradient(180deg, transparent, var(--wei-color-card) 50px);
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
    height: 76px;
    justify-content: center;

    margin-bottom: 12px;
  }

  /* router link styles; WeiHeader slot */

  .wei-header--btm {
    align-items: flex-end;
    display: flex;
    height: 50px;

    margin-bottom: -12px;
  }

  .router-link {
    color: var(--wei-color-link);
    font-size: 2.1rem;
    text-decoration: underline;
    text-shadow: 3px 3px 3px var(--wei-color-background);
    transition: all 0.125s, padding 0s;
  }
  .router-link:not(.router-link-active) {
    filter: brightness(0.67);
  }
  .router-link:hover {
    filter: brightness(1.33);
  } /* built in vue router class */
  .router-link-active {
    filter: brightness(1.33);
    transform: translateY(-3px);
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
      justify-content: flex-start;
    }
    .wei-header--mid {
      display: none;
    }
    .wei-header--btm {
      flex-direction: column;
      height: unset;
    }

    .router-link {
      padding: 6px 0;
    } /* built in vue router class */
    .router-link-active {
      transform: translateX(-12px);
    }
  }
</style>
