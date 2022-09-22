<script setup>
  import resumeContent from "../data/resume.js";

  import ContentCardSlotted from "../components/ContentCardSlotted.vue";
  import ResEntry from "../components/resume/ResEntry.vue";
  import ResSection from "../components/resume/ResSection.vue";
</script>

<template>
  <section class="container">
    <h2>Resume</h2>

    <div class="mobile">
      <small>* Mobile styles are a work in progress!</small>
    </div>

    <div class="res-body">
      <ContentCardSlotted>
        <template #card-content>
          <section class="res-header">
            <div class="res-header__l">
              <div>+1 (563) 505-3678</div>
              <div>westseii8919@gmail.com</div>
            </div>

            <div class="res-header__mid">
              <h2>Scott E. West</h2>
            </div>

            <div class="res-header__r">
              <div>linkedin.com/in/scott-west</div>
              <div>github.com/westseii</div>
              <div>scottwest.dev</div>
            </div>
          </section>
        </template>
      </ContentCardSlotted>

      <ContentCardSlotted>
        <template #card-content>
          <ResSection :heading-text="'Education'">
            <template #res-entries>
              <ResEntry
                :entry-object="entryObject"
                v-for="entryObject in resumeContent.education.entries"
              />
            </template>
          </ResSection>
        </template>
      </ContentCardSlotted>

      <ContentCardSlotted>
        <template #card-content>
          <ResSection :heading-text="'Accomplishments'">
            <template #res-entries>
              <ResEntry
                :entry-object="entryObject"
                v-for="entryObject in resumeContent.accomplishments.entries"
              />
            </template>
          </ResSection>
        </template>
      </ContentCardSlotted>

      <ContentCardSlotted>
        <template #card-content>
          <ResSection :heading-text="'Technical Skills'">
            <template #res-entries>
              <ResEntry
                :entry-object="entryObject"
                v-for="entryObject in resumeContent.technicalSkills.entries"
              />
            </template>
          </ResSection>
        </template>
      </ContentCardSlotted>

      <ContentCardSlotted>
        <template #card-content>
          <ResSection :heading-text="'Other Work'">
            <template #res-entries>
              <ResEntry
                :entry-object="entryObject"
                v-for="entryObject in resumeContent.otherWork.entries"
              />
            </template>
          </ResSection>
        </template>
      </ContentCardSlotted>
    </div>
  </section>
</template>

<style scoped>
  .container {
    width: 100%;
  }

  .res-header {
    align-items: center;
    display: flex;
  }
  .res-header__l {
    width: 30%;
  }
  .res-header__mid {
    text-align: center;
    width: 40%;
  }
  .res-header__r {
    text-align: right;
    width: 30%;
  }

  .res-body {
  }

  .mobile {
    color: orangered;
    display: none;
  }

  @media screen and (max-width: 704px) {
    .mobile {
      display: block;
    }
  }
</style>
