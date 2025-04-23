<script setup></script>

<template>
  <div class="container mx-auto gap-2 AboutContainer">
    <div class="AboutCard grid grid-cols-12">
      <div class="col-span-7 AboutCardLeft">
        <div class="AboutCardLText">
          <h1 class="AboutCardTitle">SVN Poppins</h1>
          <p class="AboutCardDescription">
            Hi there! I'm Alex, a passionate advocate for human rights and social justice. I believe
            in the power of empathy and understanding to bring about positive change in our
            communities. Let's work together to create a more inclusive world!
          </p>
        </div>
      </div>
      <div class="col-span-5 AboutCardRight">
        <div class="AboutCardRightTextWrap">
          <div class="ContactText">
            <h1 class="ContactTitle">SVN Poppins</h1>
            <p class="ContactDescription">nguyenvana@gmail.com</p>
          </div>
          <div class="ContactText">
            <h1 class="ContactTitle">SVN Poppins</h1>
            <p class="ContactDescription">nguyenvana@gmail.com</p>
          </div>
        </div>
        <div class="AboutCardRightTextWrap">
          <div class="ContactText">
            <h1 class="ContactTitle">SVN Poppins</h1>
            <p class="ContactDescription">nguyenvana@gmail.com</p>
          </div>
          <div class="ContactText">
            <h1 class="ContactTitle">SVN Poppins</h1>
            <p class="ContactDescription">nguyenvana@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.AboutCardLeft {
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
  margin-right: 12px;
}
.AboutCardRight {
  padding: 32px;
  border-radius: 24px;
  border: 4px solid #fff;
  background-color: #fbfbfb;
  box-shadow:
    0px -1px 4px 0px rgba(0, 0, 0, 0.02),
    0px 5px 9px -3px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 12px;
}
.AboutCardRightTextWrap {
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.ContactText {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.AboutCardTitle {
  color: var(--Page-color-text, #303030);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px; /* 166.667% */
  text-transform: capitalize;
}
.ContactTitle {
  color: var(--Page-color-text, #303030);
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 136.364% */
  text-transform: capitalize;
}

.AboutCardDescription {
  color: var(--Page-color-text-secondary, #616161);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 200% */
  text-transform: capitalize;
}
.ContactDescription {
  color: var(--Page-color-text-secondary, #616161);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
}
</style>
