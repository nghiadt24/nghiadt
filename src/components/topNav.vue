<script setup>

</script>

<template>
  <header class="topNav">
    <div class="navContainer container w-full mx-auto">
      <div class="navGrid grid grid-cols-12">
        <div class="profile col-span-8">
          <img src="https://content.pancake.vn/web-media/dd/df/40/0b/98b2a96a08fdc10784efdcf798d06448b826dcf2b3f25ff91098afd4-w:72-h:72-l:1631-t:image/png.png" alt="" class="profileImg ư" />
          <div class="profileName">
            <h2 class="name">John Doe</h2>
            <h4 class="jobTitle">UI/UX Designer</h4>
          </div>
        </div>
        <div class="col-span-4 contactWrap">
          <div class="hireStatus">
            <div class="statusDot"></div>
            <p class="statusText">Available for hire</p>
          </div>
          <div class="divider"></div>
          <div class="ContactButtonWrap">
            <button class="contactButton"> <i class="ph-duotone ph-telegram-logo" style="color:#616161"></i> </button>
            <button class="contactButton"> <i class="ph-duotone ph-linkedin-logo" style="color:#616161"></i> </button>
            <button class="contactButton"> <i class="ph-duotone ph-behance-logo" style="color:#616161"></i> </button>
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
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--Button-button-stroke-secondary, #8A8A8A);
  background: var(--Button-button-bg-secondary, #FFF);
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
.statusDot {
    width: 8px;
    height: 8px;
    background: var(--Green---color-green-09, #6AB04C);
    border-radius: 50%;
  }
  .statusText {
    color: var(--Green---color-green-09, #6AB04C);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .hireStatus {
    border-radius: 57px;
    background: var(--Green---color-green-02, #DBEBDA);
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 6px;
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
