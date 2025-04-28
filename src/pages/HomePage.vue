<script setup lang="ts">
import topNav from '@/components/topNav.vue'
import Button from '@/components/cButton.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
</script>

<template>
  <topNav />
  <section class="heroSection container w-full mx-auto">
    <div class="heroGrid">
      <div class="heroTextWrapper">
        <h1 class="heroTitle">
          Crafting Intuitive <br />
          <span class="HeroTitleHighlight" style="color: #8a8a8a"> User Interface </span> Design
        </h1>
        <p class="heroDescription">
          I design intuitive interfaces that balance aesthetics and usability. Whether it’s for
          startups or established brands, I help build digital products that are engaging,
          accessible, and conversion-friendly.
        </p>
        <Button text="Get in touch" variant="primary" />
      </div>
      <div class="heroVideoWrapper">
        <video class="heroVideo" autoplay loop muted playsinline>
          <source
            src="https://content.pancake.vn/web-media/59/fd/91/65/7efaa07112736d73d20ce1cecbd79293d6fff3d102e1b8a0f705bfeb-w:0-h:0-l:24186108-t:video/mp4.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </section>
  <section class="skillSection container w-full mx-auto">
    <div class="grid grid-cols-3 grid-rows-1 gap-4 skillGrid">
      <div class="skillCardWrapper">
        <div class="cardWrapper" id="a01">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-browser"></i>
            </div>
            <h3 class="skillCardTitle">Web & Mobile Interface Design</h3>
          </div>
        </div>
        <div class="cardWrapper">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-layout"></i>
            </div>
            <h3 class="skillCardTitle">User Research & Wireframing</h3>
          </div>
        </div>
        <div class="cardWrapper">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-tree-view"></i>
            </div>
            <h3 class="skillCardTitle">Design Systems & Prototyping</h3>
          </div>
        </div>
        <div class="cardWrapper">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-hand-pointing"></i>
            </div>
            <h3 h3 class="skillCardTitle">Usability Testing & Interaction Design</h3>
          </div>
        </div>
      </div>
      <div class="skillTitleWrapper">
        <h2 class="skillTitle">My Skills</h2>
        <p class="skillDescription">
          I believe that great design is not just about aesthetics, but about solving real problems
          and enhancing user journeys. With a strong foundation in design systems, user-centered
          thinking, and market insights, I have helped businesses transform ideas into functional,
          beautiful, and effective digital products.
        </p>
      </div>
      <div class="skillCardWrapper">
        <div class="cardWrapper">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-code"></i>
            </div>
            <h3 class="skillCardTitle">HTML5, CSS3, SCSS</h3>
          </div>
        </div>
        <div class="cardWrapper">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-devices"></i>
            </div>
            <h3 class="skillCardTitle">Responsive Web Development</h3>
          </div>
        </div>
        <div class="cardWrapper">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-file-js"></i>
            </div>
            <h3 class="skillCardTitle">Basic JavaScript & React Components</h3>
          </div>
        </div>
        <div class="cardWrapper">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-handshake"></i>
            </div>
            <h3 class="skillCardTitle">Handoff & Collaboration with Developers</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="projectSection container w-full mx-auto">
    <div class="projectGrid">
      <div class="projectTitleRow">
        <h2 class="projectTitle">My Projects</h2>
        <Button text="Find all" variant="primary" />
      </div>
      <div class="projectCardRow grid grid-col-12 gap-4">
        <div class="projectCard">
          <div class="projectCardImg">
            <img
              src="https://content.pancake.vn/web-media/3d/e3/17/a6/2697dc6be85cf23ee9ad92dea102aa4e73f4eb29a7ad0c4990421f5e-w:512-h:620-l:122431-t:image/png.png"
              alt=""
            />
          </div>
          <div class="projectCardTitleWrapper">
            <h3 class="projectCardTitle">Project Title</h3>
            <p class="projectCardDescription">This is a description of the project.</p>
          </div>
        </div>
        <div class="projectCard">
          <div class="projectCardImg">
            <img
              src="https://content.pancake.vn/web-media/cd/51/31/2f/cd1ab2c4f7319e1c52d9ca781d0504176b501af9fc6b804006534968-w:512-h:620-l:227572-t:image/png.png"
              alt=""
            />
          </div>
          <div class="projectCardTitleWrapper">
            <h3 class="projectCardTitle">Project Title</h3>
            <p class="projectCardDescription">This is a description of the project.</p>
          </div>
        </div>
        <div class="projectCard">
          <div class="projectCardImg">
            <img
              src="https://content.pancake.vn/web-media/d2/89/b5/4e/29d5ab1e39621664e2755d3b4738d5acf5d19707632d4f744429fc22-w:512-h:620-l:117764-t:image/png.png"
              alt=""
            />
          </div>
          <div class="projectCardTitleWrapper">
            <h3 class="projectCardTitle">Project Title</h3>
            <p class="projectCardDescription">This is a description of the project.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projectSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100vh;
}
.projectGrid {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
.projectCardDescription {
  color: var(--Page-color-text-secondary, #616161);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-transform: capitalize;
}
.projectCardTitle {
  color: var(--Gray---color-gray-16, #1a1a1a);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 166.667% */
  text-transform: capitalize;
}
.projectCardImg {
  display: flex;
  padding: 4px;
  border-radius: 16px;
  background: var(--Gray---color-gray-01, #fff);
  align-items: center;
  justify-content: center;
}
.projectCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
}
.projectCardRow {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
}
.projectTitle {
  color: var(--Gray---color-gray-15, #303030);
  text-align: center;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  text-transform: capitalize;
}
.projectTitleRow {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.cardWrapper {
  transition: all 0.5s;
  display: flex;
  padding: 8px;
  border-radius: 24px;
  border: 0.8px solid #fff;
  background: linear-gradient(176deg, #fff -75.22%, #e2e2e2 231.16%);
  &:hover {
    border: 0.8px solid var(--Button-button-stroke-secondary, #8a8a8a);
    box-shadow: 0px 2px 6.8px 0px rgba(0, 0, 0, 0.13);
  }
}
.skillSection {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skillTitleWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  max-width: 70%;
}
.skillCardWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.skillGrid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
}
.skillCardTitle {
  color: var(--Page-color-text-secondary, #616161);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  text-transform: capitalize;
}
.skillCardIcon i {
  color: var(--Gray---color-gray-12, #8a8a8a);
  font-size: 32px;
}
.skillCardIcon {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 120px;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid var(--Card-card-stroke-normal, #ebebeb);
  box-shadow: 0px 4px 8.8px 13px #fff inset;
  background-image: url('https://content.pancake.vn/web-media/53/f8/8b/27/dc61b6e49443e86687400c5d1df4633eb866bd3ea5b18008be164467-w:234-h:202-l:1815-t:image/png.png');
  background-size: cover;
  background-position: center;
  background-repeat: initial;
}
.skillCard {
  display: flex;
  padding: 16px 32px 16px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: #fff;
}
.skillDescription {
  color: var(--Page-color-text-secondary, #616161);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  text-transform: capitalize;
  text-align: center;
}
.skillTitle {
  color: var(--Gray---color-gray-15, #303030);
  text-align: center;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  text-transform: capitalize;
}
.heroVideo {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.heroVideoWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #fff;
  max-width: 1132px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #3e3e3e;
    transform: scale(1.05);
  }
}
.heroTextWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
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
  color: var(--Gray---color-gray-16, #1a1a1a);
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 5 00;
  line-height: 82px;
  max-width: 880px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.heroTitleHighlight {
  color: var(--Gray---color-gray-12, #8a8a8a) !important;
}
</style>
