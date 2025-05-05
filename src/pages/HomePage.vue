<script setup lang="ts">
import topNav from '@/components/topNav.vue'
import Button from '@/components/cButton.vue'
import mainFooter from '@/components/mainFooter.vue'
import { ref,onMounted } from 'vue'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroTitle = ref(null)

onMounted(() => {
  const heroTitleSplit = new SplitType('.heroReveal', {
  types: 'chars',
  tagName: 'span',
  })
  const openTl = gsap.timeline ({
     duration: 0.5,
      ease: "power1.out"
  })

  openTl.fromTo(heroTitleSplit.chars,
  {
    y: -50,
    opacity:0,
  },
  {
    y:0,
    opacity:1,
    stagger: 0.03,
    delay: 0.4,
    duration: 0.1,
  })
  openTl.fromTo ('.heroDescription',{
    y:50,
    opacity:0,
  },
{
    y:0,
    opacity:1,
    duration: 0.5,
    delay: 0.2,
})
openTl.fromTo('.heroBtn',{
    y:50,
    opacity:0,
  },{
    y:0,
    opacity:1,
    duration: 0.5,
    delay: 0.2,
  })
  openTl.fromTo('.heroVideoWrapper',{
    y: 50,
    opacity:0,
  },{
    y:0,
    opacity:1,
    duration: 0.5,
    delay: 0.2,
  })
  openTl.fromTo ('.homeNav',{
    y: -50,
    opacity:0,
  },{
    y:0,
    opacity:1,
    duration: 0.5,
    delay: 0.2,
  },"<")
  const videoScroll = gsap.to('.heroVideoWrapper', {
    scale: 1.1,
    duration: 0.5
  })
  ScrollTrigger.create({
    trigger: '.heroVideoWrapper',
    start: '20% 50%',
    end: 'bottom 30%',
    animation: videoScroll,
    toggleActions: 'play reverse play reverse'
  })
  gsap.to('.heroTextWrapper',{
    scrollTrigger: {
      trigger: '.skillSection',
      start: 'top center',
      end: 'top 50%',
      scrub: 1,
    },
    opacity: 0.4,
    ease: 'power1.out',
    delay: 0.2,
  })

  // skillSection
  const skillCardTl = gsap.timeline({
    duration: 1,
  })
  skillCardTl.fromTo('#s01',{
    rotate: 0,
    x: 100,
    opacity: 0,
  },
  {
    x: -20,
    rotate: 2,
    duration: 0.5,
    delay: 0.2,
    opacity: 1,
  })
  skillCardTl.fromTo('#s02',{
    rotate: 0,
    x: 100,
    opacity: 0,
  },
  {
    x: -10,
    rotate: 2,
    duration: 0.5,
    delay: 0.2,
    opacity: 1,
  })
  skillCardTl.fromTo('#s03',{
    rotate: 0,
    x: 100,
    opacity: 0,
  },
  {
    x: -30,
    rotate: -1,
    duration: 0.5,
    delay: 0.2,
    opacity: 1,
  })
  skillCardTl.fromTo('#s04',{
    rotate: 0,
    x: 100,
    opacity: 0,
  },
  {
    x: -20,
    rotate: -3,
    duration: 0.5,
    delay: 0.2,
    opacity: 1,
  })
  skillCardTl.fromTo('#s05',{
    rotate: 0,
    x: -100,
    opacity: 0,
  },
  {
    x: 20,
    rotate: -2,
    duration: 0.5,
    delay: 0.2,
    opacity: 1,
  })
  skillCardTl.fromTo('#s06',{
    rotate: 0,
    x:-100,
    opacity: 0,
  },
  {
    rotate: -2,
    x: 20,
    duration: 0.5,
    delay: 0.2,
    opacity: 1,
  })
  skillCardTl.fromTo('#s07',{
    rotate: 0,
    x:-100,
    opacity: 0,
  },
  {
    rotate: 2,
    x: 20,
    duration: 0.5,
    delay: 0.2,
    opacity: 1,
  })
  skillCardTl.fromTo('#s08',{
    rotate: 0,
    x:-100,
    opacity: 0,
  },
  {
    x: 20,
    rotate: 4,
    duration: 0.5,
    delay: 0.2,
    opacity: 1,
  })
  ScrollTrigger.create({
    trigger: '.skillSection',
    start: '30% center',
    end: '50% center',
    animation: skillCardTl,
    scrub: 1,
  })

  // skillTitle
  const skillTitleText = new SplitType('.skillTitle', {
    types: 'chars',
  })
  const skillTitleAnimate = gsap.fromTo(skillTitleText.chars, {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.03,
    duration: 0.5,
    delay: 0.2,
  })
  ScrollTrigger.create({
    trigger: '.skillSection',
    start: '50% center',
    end: '50% center',
    animation: skillTitleAnimate,
    scrub: 1.5,
  })
  // skillDescription
  const skillDescriptionText = new SplitType('.skillDescription', {
    types: 'words',
  })
  const skillDescriptionAnimate = gsap.fromTo(skillDescriptionText.words, {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.03,
    duration: 0.5,
    delay: 0.2,
  })
  ScrollTrigger.create({
    trigger: '.skillSection',
    start: '50% center',
    end: '50% center',
    animation: skillDescriptionAnimate,
    scrub: 2,
  })
  // ProjectSection
  const projectTitleAnimate = gsap.fromTo('.projectTitle', {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.5,
    delay: 0.2,
  })

  ScrollTrigger.create({
    trigger: '.projectSection',
    start: 'top center',
    end: '50% 50%',
    animation: projectTitleAnimate,
    scrub: 1,
  })
  const projectButtonAnimate = gsap.fromTo('.projectBtn', {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.5,
    delay: 0.2,
  })
  ScrollTrigger.create({
    trigger: '.projectSection',
    start: 'top center',
    end: '50% 50%',
    animation: projectButtonAnimate,
    scrub: 1,
  })
  // projectCard
  const projectCardTl = gsap.timeline({
    duration: 2,
    delay: 2,
    stagger: 1,
    ease: "power2.out"
  })
  projectCardTl.fromTo('#Prj02', {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  })
  projectCardTl.fromTo('#Prj01', {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
  })
  projectCardTl.fromTo('#Prj03', {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
  },"<")

  projectCardTl.fromTo('.projectCardTitleWrapper',{
    y: 100,
    opacity: 0,
    duration: 2,
  },
  {
    y: 0,
    delay: 1,
    opacity: 1,
  },"<")

  ScrollTrigger.create({
    trigger: '.projectSection',
    start: '30% center',
    end: '50% 100%',
    animation: projectCardTl,
    scrub: 2,
  })

  // AboutSection
  const projectDescriptionColor = gsap.to('.projectCardDescription',{
    color: '#B5B5B5',
    duration: 1,
    ease: 'power1.out',
  })
  const projectTitleColor = gsap.to ('.projectCardTitle',{
    color: '#fff',
    duration: 1,
    ease: 'power1.out',
  })
  const projectCardImgColor = gsap.to ('.projectCardImg',{
    backgroundColor: '#4A4A4A',
    duration: 1,
    ease: 'power1.out',
  })
  const sectionBackground = gsap.to ('.homePage',{
    backgroundColor: '#303030',
    duration: 1,
    ease: 'power1.out',
  })
  const aboutTitleColor = gsap.to('.aboutTitle',{
    color: '#fff',
    duration: 1,
    ease: 'power1.out',
  })
  const aboutDescriptionColor = gsap.to('.aboutDescription',{
    color: '#B5B5B5',
    duration: 1,
    ease: 'power1.out',
  })
  const skillTagColor = gsap.to('.skillTag',{
    backgroundColor: '#4A4A4A',
    borderColor: '#616161',
    duration: 1,
    ease: 'power1.out',
  })
  const skillTagTextColor = gsap.to('.tagText',{
    color: '#fff',
    duration: 1,
    ease: 'power1.out',
  })
  const skillTagIconColor = gsap.to('.skillTagIcon',{
    color: '#fff',
    duration: 1,
    ease: 'power1.out',
  })
  const aboutImageColor = gsap.to('.aboutImgWrapper',{
    backgroundColor: '#4A4A4A',
    duration: 1,
    ease: 'power1.out',
  })
  ScrollTrigger.create({
    trigger: '.aboutSection',
    start: '30% center',
    end: '50% 50%',
    animation: projectCardImgColor,
    scrub: 1,
  })
  ScrollTrigger.create ({
    trigger: '.aboutSection',
    start: '30% center',
    end: '50% 50%',
    animation: projectDescriptionColor,
    scrub: 1,
  })
  ScrollTrigger.create({
    trigger: '.aboutSection',
    start: '30% center',
    end: '50% 50%',
    animation: projectTitleColor,
    scrub: 1,
  })
  ScrollTrigger.create({
    trigger: '.aboutSection',
    start: '30% center',
    end: '50% 50%',
    animation: sectionBackground,
    scrub: 1,
  })
  ScrollTrigger.create({
    trigger: '.aboutSection',
    start: '40% center',
    end: '50% 50%',
    animation: aboutTitleColor,
    scrub: 1,
  })
  ScrollTrigger.create({
    trigger: '.aboutSection',
    start: '40% center',
    end: '50% 50%',
    animation: aboutDescriptionColor,
    scrub: 1,
  })
  ScrollTrigger.create({
    trigger: '.aboutSection',
    start: '40% center',
    end: '50% 50%',
    animation: skillTagColor,
    scrub: 1,
  })
  ScrollTrigger.create({
    trigger: '.aboutSection',
    start: '40% center',
    end: '50% 50%',
    animation: skillTagTextColor,
    scrub: 1,
  })
  ScrollTrigger.create({
    trigger: '.aboutSection',
    start: '40% center',
    end: '50% 50%',
    animation: skillTagIconColor,
    scrub: 1,
  })
  ScrollTrigger.create({
    trigger: '.aboutSection',
    start: '40% center',
    end: '50% 50%',
    animation: aboutImageColor,
    scrub: 1,
  })
  const aboutDescriptionTextSplit = new SplitType('.aboutDescription',{
    types: 'lines',
  })
  const aboutDescriptionTextAnimate = gsap.fromTo (aboutDescriptionTextSplit.lines,{
    y: 50,
    opacity: 0,
  },{
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.5,
  })

  const aboutSectionTl = gsap.timeline ({
    duration: 1,
  })

  aboutSectionTl.fromTo ('.aboutTitle',{
    y: 50,
    opacity: 0,
  },
  {
    y:0,
    opacity: 1,
    delay: 0.2,
  })
  ScrollTrigger.create({
    animation: aboutSectionTl,
    scrub:1,
    trigger: '.aboutSection',
    start: 'top center',
    end: 'center center',
    markers: true,
  })
  ScrollTrigger.create ({
    animation: aboutDescriptionTextAnimate,
    toggleActions: 'play complete restart reverse',
    trigger: '.aboutSection',
    start: 'top center',
    end: 'center center',
  })
  // ExpSection
  const expSectionBackground = gsap.to ('.homePage',{
    backgroundColor: '#F3F3F3',
    duration: 1,
    ease: 'power1.out',
  })
  const expCardColor = gsap.to('.expCard',{
    backgroundColor: '#EBEBEB',
    duration: 1,
    ease: 'power1.out',
  })
  const expTitleColor = gsap.to('.expTitle',{
    color: '#303030',
    duration: 1,
    ease: 'power1.out',
  })
  ScrollTrigger.create({
    trigger: '.expSection',
    start: '20% center',
    end: '40% 50%',
    animation: expSectionBackground,
    scrub: 1,
  })
  ScrollTrigger.create({
    trigger: '.expSection',
    start: '20% center',
    end: '40% 50%',
    animation: expCardColor,
    scrub: 1,
  })
  ScrollTrigger.create({
    trigger: '.expSection',
    start: '20% center',
    end: '40% 50%',
    animation: expTitleColor,
    scrub: 1,
  })
})
</script>

<template>
  <topNav class="homeNav" />
  <div class="homePage">
    <section class="heroSection container w-full mx-auto">
    <div class="heroGrid">
      <div class="heroTextWrapper">
        <h1 class="heroTitle" ref="heroTitle">
          <span class="heroReveal">Crafting Intuitive</span><br />
          <span class="HeroTitleHighlight heroReveal" style="color: #8a8a8a"> User Interface </span> <span class="heroReveal">Design</span>
        </h1>
        <p class="heroDescription">
          I design intuitive interfaces that balance aesthetics and usability. Whether it’s for
          startups or established brands, I help build digital products that are engaging,
          accessible, and conversion-friendly.
        </p>
        <Button class="heroBtn" text="Get in touch" variant="primary" />
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
        <div class="cardWrapper" id="s01">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-browser"></i>
            </div>
            <h3 class="skillCardTitle">Web & Mobile Interface Design</h3>
          </div>
        </div>
        <div class="cardWrapper" id="s02">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-layout"></i>
            </div>
            <h3 class="skillCardTitle">User Research & Wireframing</h3>
          </div>
        </div>
        <div class="cardWrapper" id="s03">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-tree-view"></i>
            </div>
            <h3 class="skillCardTitle">Design Systems & Prototyping</h3>
          </div>
        </div>
        <div class="cardWrapper" id="s04">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-hand-pointing"></i>
            </div>
            <h3 h3 class="skillCardTitle">Usability Testing & Interaction Design</h3>
          </div>
        </div>
      </div>
      <div class="skillTitleWrapper">
        <h2 class="skillTitle">Crafting Meaningful Experiences</h2>
        <p class="skillDescription">
          I believe that great design is not just about aesthetics, but about solving real problems
          and enhancing user journeys. With a strong foundation in design systems, user-centered
          thinking, and market insights, I have helped businesses transform ideas into functional,
          beautiful, and effective digital products.
        </p>
      </div>
      <div class="skillCardWrapper">
        <div class="cardWrapper" id="s05">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-code"></i>
            </div>
            <h3 class="skillCardTitle">HTML5, CSS3, SCSS</h3>
          </div>
        </div>
        <div class="cardWrapper" id="s06">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-devices"></i>
            </div>
            <h3 class="skillCardTitle">Responsive Web Development</h3>
          </div>
        </div>
        <div class="cardWrapper" id="s07">
          <div class="skillCard">
            <div class="skillCardIcon">
              <i class="ph-duotone ph-file-js"></i>
            </div>
            <h3 class="skillCardTitle">Basic JavaScript & React Components</h3>
          </div>
        </div>
        <div class="cardWrapper" id="s08">
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
        <Button text="Find all" class="projectBtn" variant="primary" />
      </div>
      <div class="projectCardRow grid grid-col-12 gap-4">
        <div class="projectCard" id="Prj01">
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
        <div class="projectCard" id="Prj02">
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
        <div class="projectCard" id="Prj03">
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
  <section class="aboutSection container w-full mx-auto">
    <div class="aboutGrid grid grid-cols-12">
      <div class="aboutTitleWrapper col-span-8">
        <h2 class="aboutTitle">About Me</h2>
        <p class="aboutDescription">
          Hello, I’m Dinh Trong Nghia — a UI/UX Designer with nearly 5 years of experience crafting
          digital interfaces and user experiences for websites, mobile applications, and digital
          platforms. I believe that great design is not just about aesthetics, but about solving
          real problems and enhancing user journeys. With a strong foundation in design systems,
          user-centered thinking, and market insights, I have helped businesses transform ideas into
          functional, beautiful, and effective digital products. In every project, I prioritize
          listening, understanding client needs, and keeping users at the core of every design
          decision.
        </p>
        <h2 class="aboutTitle">What can I do</h2>
        <div class="skillTagWrapper grid grid-cols-4 gap-2 w-full">
          <div class="skillTag">
            <div class="skillTagIcon">
              <i class="ph-duotone ph-layout"></i>
            </div>
            <p class="tagText">User Research</p>
          </div>
          <div class="skillTag">
            <div class="skillTagIcon">
              <i class="ph-duotone ph-magic-wand"></i>
            </div>
            <p class="tagText">Visual Design</p>
          </div>
          <div class="skillTag">
            <div class="skillTagIcon">
              <i class="ph-duotone ph-cursor-click"></i>
            </div>
            <p class="tagText">Interaction Design</p>
          </div>
          <div class="skillTag">
            <div class="skillTagIcon">
              <i class="ph-duotone ph-selection-background"></i>
            </div>
            <p class="tagText">Design Systems</p>
          </div>
          <div class="skillTag">
            <div class="skillTagIcon">
              <i class="ph-duotone ph-test-tube"></i>
            </div>
            <p class="tagText">Usability Testing</p>
          </div>
          <div class="skillTag">
            <div class="skillTagIcon">
              <i class="ph-duotone ph-devices"></i>
            </div>
            <p class="tagText">Responsive Layout</p>
          </div>
          <div class="skillTag">
            <div class="skillTagIcon">
              <i class="ph-duotone ph-code"></i>
            </div>
            <p class="tagText">Front-end Development</p>
          </div>
          <div class="skillTag">
            <div class="skillTagIcon">
              <i class="ph-duotone ph-handshake"></i>
            </div>
            <p class="tagText">Team Collaboration</p>
          </div>
        </div>
      </div>
      <div class="aboutImgWrapper col-span-4">
        <img
          class="aboutImg"
          src="https://content.pancake.vn/web-media/80/99/71/1f/d24fb234a595327ebcb0254edc880e59baf8e093aa5532033f36a948-w:536-h:628-l:324179-t:image/png.png"
          alt=""
        />
      </div>
    </div>
  </section>
  <section class="expSection container w-full mx-auto">
    <div class="expGrid grid grid-cols-12">
      <h2 class="expTitle w-full">Experiences</h2>
      <div class="expCardWrapper col-span-full">
        <div class="expCard">
          <div class="expCardTitleWrapper">
            <img
              src="https://content.pancake.vn/web-media/db/84/68/fa/e24d30ad0ecfb2a7dfab9cd4d2dff3fc234805537cee67e961a99cc0-w:64-h:64-l:5254-t:image/png.png"
              alt=""
            />
            <h3 class="expCardTitle">Solar Inc</h3>
          </div>
          <div class="expCardDetailWrapper">
            <h3 class="expCardPosition">Internship UI/UX Designer</h3>
            <p class="expCardDate">Jul 2019 - Oct 2019</p>
          </div>
        </div>
        <div class="expCard">
          <div class="expCardTitleWrapper">
            <img
              src="https://content.pancake.vn/web-media/1b/62/ce/b2/367a49581808d256d9cabd40f8a93354e3b822aba0d0d3847fe01e96-w:64-h:64-l:2477-t:image/png.png"
              alt=""
            />
            <h3 class="expCardTitle">Amela Technology</h3>
          </div>
          <div class="expCardDetailWrapper">
            <h3 class="expCardPosition">UI Designer</h3>
            <p class="expCardDate">Sep 2020 - May 2021</p>
          </div>
        </div>
        <div class="expCard">
          <div class="expCardTitleWrapper">
            <img
              src="https://content.pancake.vn/web-media/43/6d/68/e9/4ed33d9e8ff260a3356ed46618166efcc1019678c6d8349eeb6a6866-w:64-h:64-l:2649-t:image/png.png"
              alt=""
            />
            <h3 class="expCardTitle">Tripath Vietnam</h3>
          </div>
          <div class="expCardDetailWrapper">
            <h3 class="expCardPosition">Product Designer</h3>
            <p class="expCardDate">May 2021 - Nov 2021</p>
          </div>
        </div>
        <div class="expCard">
          <div class="expCardTitleWrapper">
            <img
              src="https://content.pancake.vn/web-media/be/19/f2/d7/917e0a6d9a58f8d3bb9139047f18ec4721d9d7ff7fbfe42a4e6b9f44-w:64-h:64-l:2175-t:image/png.png"
              alt=""
            />
            <h3 class="expCardTitle">Techlab</h3>
          </div>
          <div class="expCardDetailWrapper">
            <h3 class="expCardPosition">Product Designer</h3>
            <p class="expCardDate">Nov 2021 - Mar 2023</p>
          </div>
        </div>
        <div class="expCard">
          <div class="expCardTitleWrapper">
            <img
              src="https://content.pancake.vn/web-media/6a/79/a8/5d/28f068c00d4e78640bf252e0f6eef0500c416e35c625998a6baca7e4-w:64-h:64-l:5209-t:image/png.png"
              alt=""
            />
            <h3 class="expCardTitle">Pancake</h3>
          </div>
          <div class="expCardDetailWrapper">
            <h3 class="expCardPosition">Product Designer</h3>
            <p class="expCardDate">Mar 2023 - Now</p>
          </div>
        </div>
      </div>
      <div class="eduWrapper col-span-full">
        <h2 class="expTitle w-full">Education</h2>
      </div>
      <div class="eduCardWrapper">
        <div class="eduCard">
          <div class="eduCardTitleWrapper">
            <img
              src="https://content.pancake.vn/web-media/58/c7/50/a9/85c73a1c9199fb417e1979b7e1e9382f38d820353ca5b7aa12013df5-w:64-h:64-l:3293-t:image/png.png"
              alt=""
            />
            <div class="eduCardDetail">
              <h3 class="expCardTitle">FPT Arena Media</h3>
              <p class="expCardDate">2018-2020</p>
            </div>
          </div>
          <div class="eduCardIcon">
            <i class="ph ph-arrow-right"></i>
          </div>
        </div>
        <div class="eduCard">
          <div class="eduCardTitleWrapper">
            <img
              src="https://content.pancake.vn/web-media/3b/52/1b/6f/e3beba150787c8f7d9814a4a777d2b8a4fe6333cdc8249647baf8d33-w:64-h:64-l:2266-t:image/png.png"
              alt=""
            />
            <div class="eduCardDetail">
              <h3 class="expCardTitle">Google UX Design</h3>
              <p class="expCardDate">2023</p>
            </div>
          </div>
          <div class="eduCardIcon">
            <i class="ph ph-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  <mainFooter />
</template>

<style scoped lang="scss">

.eduCardWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
}
.eduCardIcon {
  color: #616161;
  font-size: 24px;
}
.eduCardDetail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4px;
}
.eduCardTitleWrapper {
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
}
.eduCard {
  width: 100%;
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  border: 1px dashed var(--Input-input-stroke-normal, #8a8a8a);
  background: var(--Gray---color-gray-07, #ebebeb);
}
.expSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100vh;
}
.expCardDate {
  color: var(--Page-color-text-secondary, #616161);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  text-transform: capitalize;
}
.expCardPosition {
  color: var(--Page-color-text, #303030);
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 166.667% */
  text-transform: capitalize;
}
.expCardDetailWrapper {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
}
.expCardTitle {
  color: var(--Page-color-text-secondary, #616161);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 166.667% */
  text-transform: capitalize;
}
.expCardTitleWrapper {
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
}
.expCard {
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: #4A4A4A;
}
.expTitle {
  color: #fff;
  text-align: start;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  text-transform: capitalize;
}
.expGrid {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 24px;
  width: 100%;
}
.expCardWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
}
.aboutImg {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 24px;
}
.aboutImgWrapper {
  justify-content: center;
  align-items: center;
  border-radius: 16px;
}
.aboutSection {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100vh;
}
.aboutGrid {
  column-gap: 24px;
}
.aboutTitleWrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.skillTagIcon {
  font-size: 32px;
  color: #616161;
}
.tagText {
  color: var(--Page-color-text-secondary, #616161);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  text-transform: capitalize;
}
.skillTag {
  display: flex;
  padding: 8px 8px;
  align-items: center;
  justify-content: start;
  gap: 8px;
  border-radius: 8px;
  border: 1px dashed var(--Input-input-stroke-normal, #8a8a8a);
  background: var(--Page-page-bg-light-gray, #f3f3f3);
}
.aboutDescription {
  color: var(--Page-color-text-secondary, #616161);
  text-align: start;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.aboutTitle {
  color: var(--Gray---color-gray-15, #303030);
  text-align: start;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  text-transform: capitalize;
}
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
  font-size: 28px;
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
  transform-origin: center center;
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
  color: var(--Gray---color-gray-12, #8A8A8A);
  font-family: 'Raleway', sans-serif;
  text-align: center;
  text-align: center;
  font-size: 38px;
  font-style: italic;
  font-weight: 500;
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
.heroReveal {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.heroTitleHighlight {
  color: var(--Gray---color-gray-12, #8a8a8a) !important;
}
</style>
