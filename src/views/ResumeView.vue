<script setup>
  import resumeContent from "../data/resume.js";

  import ContentCardSlotted from "../components/ContentCardSlotted.vue";
  import ResSection from "../components/resume/ResSection.vue";
</script>

<template>
  <section class="container">
    <h2>Resume</h2>

    <div class="mobile-message">
      <small>* Mobile styles are a work in progress!!!</small>
    </div>

    <div class="res-body">
      <ContentCardSlotted style="padding: 12px">
        <template #card-content>
          <section class="resume-header">
            <div class="resume-header__l">
              <div>+1 (563) 505-3678</div>
              <div>westseii8919@gmail.com</div>
            </div>

            <div class="resume-header__mid">
              <h2>Scott E. West</h2>
            </div>

            <div class="resume-header__r">
              <div>linkedin.com/in/scott-west</div>
              <div>github.com/westseii</div>
              <div>scottwest.dev</div>
            </div>
          </section>
        </template>
      </ContentCardSlotted>

      <ContentCardSlotted
        :key="resumeSection.id"
        v-for="resumeSection in resumeContent"
      >
        <template #card-content>
          <ResSection :resume-data="resumeSection" />
        </template>
      </ContentCardSlotted>
    </div>
  </section>
</template>

<style scoped>
  .container {
    width: 100%;
  }

  .resume-header {
    align-items: center;
    display: flex;
  }
  .resume-header__l {
    width: 30%;
  }
  .resume-header__mid {
    text-align: center;
    width: 40%;
  }
  .resume-header__r {
    text-align: right;
    width: 30%;
  }

  .mobile-message {
    color: orangered;
    display: none;
  }

  @media screen and (max-width: 704px) {
    .mobile-message {
      display: block;
    }
  }
</style>
