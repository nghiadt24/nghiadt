<script setup>
import Button from '../components/Button.vue'
</script>

<template>
  <section class="HomeMainSect container mx-auto">
    <div class="flex flex-col justify-center HomeContainer">
      <div class="HeaderImageWrapper grid grid-cols-4">
        <img
          src="https://content.pancake.vn/web-media/35/a0/c7/09/1bdeb84240befc35e8757f7a1db906c46c550d9d3d7e7107736a2e92-w:1680-h:346-l:609691-t:image/png.png"
          alt="Header Image"
          class="HeaderImage col-span-4 w-full h-auto"
        />
      </div>
      <div class="NameCard grid grid-cols-12">
        <div class="NameWrapper col-span-8">
          <img
            src="https://content.pancake.vn/web-media/39/04/a9/53/8f490b83b69eabbd7b646617a212ec116ffb2bcfe47f7355af03c404-w:170-h:170-l:3726-t:image/png.png"
            alt=""
            class="NameImage"
          />
          <div class="NameText">
            <h1 class="NameTitle">Contempt for human</h1>
            <p class="NameDescription">contempt for human</p>
          </div>
        </div>
        <div class="NameButtonWrapper col-span-2">
          <Button variant="primary"><i class="fi fi-rr-comment"></i>Get in touch</Button>
          <Button variant="secondary"><i class="fi fi-rr-envelope-dot"></i>Secondary Button</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.HomeContainer {
  margin-top: 32px;
}
.NameCard {
  padding: 32px;
  border-radius: 24px;
  border: 4px solid #fff;
  background-color: #fbfbfb;
  box-shadow:
    0px -1px 4px 0px rgba(0, 0, 0, 0.02),
    0px 5px 9px -3px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.NameWrapper {
  display: flex;
  align-items: center;
  gap: 32px;
}
.NameTitle {
  color: var(--Page-color-text, #303030);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
}
.NameDescription {
  color: var(--Page-color-text, #303030);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
}
.NameButtonWrapper {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
}
</style>
