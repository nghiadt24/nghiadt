<script setup>

</script>

<template>
  <header class="topNav">
    <div class="navContainer container w-full mx-auto">
      <div class="navGrid grid grid-cols-12">
        <div class="profile col-span-8">
          <img src="https://content.pancake.vn/web-media/dd/df/40/0b/98b2a96a08fdc10784efdcf798d06448b826dcf2b3f25ff91098afd4-w:72-h:72-l:1631-t:image/png.png" alt="" class="profileImg ư" />
          <div class="profileName">
            <h2 class="name">Dinh Trong Nghia</h2>
            <h4 class="jobTitle">UI/UX Designer</h4>
          </div>
        </div>
        <div class="col-span-4 contactWrap">
          <button class="hireStatus">
            <div class="circle">
              <div class="dot"></div>
              <div class="outline"></div>
            </div>
            Available for works
          </button>
          <div class="divider"></div>
          <div class="ContactButtonWrap">
            <button class="contactButton"> <i class="ph-duotone ph-telegram-logo"></i> </button>
            <button class="contactButton"> <i class="ph-duotone ph-linkedin-logo"></i> </button>
            <button class="contactButton"> <i class="ph-duotone ph-behance-logo"></i> </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.topNav {
  padding: 16px 0px;
}
.ContactButtonWrap {
  display: flex;
  gap: 8px;
}
.contactButton {
  display: flex;
  padding: 8px;
  align-items: center;
  color: #616161;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--Button-button-stroke-secondary, #8A8A8A);
  background: var(--Button-button-bg-secondary, #FFF);
  transition: all 0.2s ease-in-out;
  &:hover {
    background: var(--Button-button-bg-primary, #303030);
    color: white;
    border-radius: 16px;
  }
  &:active {
    background: var(--Button-button-bg-secondary, #FFF);
    color: #616161;
    box-shadow: 0px 0px 0px 2px rgba(124, 124, 124, 0.25);
  }
}
.contactWrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
}
.divider {
  width: 1px;
  height: 40px;
  background: var(--Page-divider-normal, #CCC);
}
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 16px;
  height: 16px;
  border: solid 2px #178d00;
  border-radius: 50%;
  margin: 0 10px;
  background-color: transparent;
  animation: circle-keys var(--animation);
}

.circle .dot {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #178d00;
  animation: dot-keys var(--animation);
}

.circle .outline {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  animation: outline-keys var(--animation);
}
.circle:nth-child(2) {
  animation-delay: 0.3s;
}
.circle:nth-child(2) .dot {
  animation-delay: 0.3s;
}
.circle:nth-child(1) .outline {
  animation-delay: 0.9s;
}
.circle:nth-child(2) .outline {
  animation-delay: 1.2s;
}
@keyframes circle-keys {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes dot-keys {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes outline-keys {
  0% {
    transform: scale(0);
    outline: solid 20px var(--color);
    outline-offset: 0;
    opacity: 1;
  }

  100% {
    transform: scale(1);
    outline: solid 0 transparent;
    outline-offset: 20px;
    opacity: 0;
  }
}
  .hireStatus {
    --animation: 2s ease-in-out infinite;
    display: flex;
    align-items: center;
    column-gap: 2px;
    color: #178d00;
    background-color: var(--Green---color-green-02, #DBEBDA);
    border-radius: 100px;
    padding: 10px 16px;
    outline: none;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    position: relative;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
    }
    &:active {
      background-color: #e1f9dc;
      border: solid 2px #178d00;
    }
    }

  .profile {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  .profileName {
      display: flex;
      flex-direction: column;
      gap: 0px;
      justify-content: center;
      align-items: start;
    }
  .name {
    color: var(--Page-color-text, #303030);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 133.333% */
    text-transform: capitalize;
  }
  .jobTitle {
    color: var(--Page-color-text-secondary, #616161);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 144.444% */
    text-transform: capitalize;
  }

</style>
