<script></script>

<template>
  <section class="mainFooter container mx-auto">
    <div class="footerWrapper">
      <div class="footerTitleWrapper">
        <h2 class="footerTitle">
          Let’s build something <br />
          great together.
        </h2>
        <p class="footerDescription">Have a project in mind or just want to connect?</p>
        <button class="button">
          Send me a message
          <i class="ph ph-chat-teardrop-dots icon" style="font-size: 24px"></i>
        </button>
      </div>
      <div class="footerCPR">
        <p class="footerCPRText">© 2025 Dinh Trong Nghia. All rights reserved.</p>
        <p class="footerCPRText">Design and develop with figma,vue and love ❤️</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.button {
  position: relative;
  transition: all 0.3s ease-in-out;
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background: var(--Gray---color-gray-14, #4a4a4a);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 2px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button:hover .icon {
  transform: translate(4px);
}

.button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}

.mainFooter {
  height: 80vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 64px 0;
}
.footerCPRText {
  color: #c8c8c8;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 15  0% */
  text-transform: capitalize;
}
.footerCPR {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.footerDescription {
  color: var(--Gray---color-gray-11, #b5b5b5);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.footerTitle {
  color: var(--Button-button-text-normal, #fff);
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 112.5% */
  text-transform: capitalize;
}
.footerTitleWrapper {
  padding: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.footerWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px;
  border-radius: 24px;
  background: var(--Gray---color-gray-15, #303030);
  height: 100%;
}
</style>
