<script setup>
 import topNav from '@/components/topNav.vue';
</script>

<template>
  <topNav />
  <section class="heroSection container w-full mx-auto">
    <div class="heroGrid">
      <div class="heroTextWrapper ">
        <h1 class="heroTitle">Crafting Intuitive <br>
         <span class="HeroTitleHighlight"> User Interface </span> Design</h1>
        <p class="heroDescription">I design intuitive interfaces that balance aesthetics and usability. Whether it’s for startups or established brands, I help build digital products that are engaging, accessible, and conversion-friendly.

</p>
        <button class="heroButton">Get in Touch</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.heroGrid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.heroDescription {
    color: var(--Page-color-text-secondary, #616161);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-transform: capitalize;
    max-width: 880px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .heroTitle {
    color: var(--Gray---color-gray-16, #1A1A1A);
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 82px;
    max-width: 880px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .heroTitleHighlight {
    color: var(--Gray---color-gray-12, #8A8A8A);
  }
</style>
