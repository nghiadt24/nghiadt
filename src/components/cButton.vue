<script setup >

defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: true,
  }
})

</script>

<template>
  <div class="cBtnWrapper">
    <button
        :class="['cBtn', variant]"
        :disabled="disabled"
      >
        {{ text }}
      <div class="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">

.cBtnWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 16px;
  border: 0.5px solid #FFF;
  background: linear-gradient(94deg, #FFF 1.51%, #D9D4D4 105.62%);
}
.cBtn {
  background: var(--Button-button-bg-primary, #303030);
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 12px;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;
}

.cBtn .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 8px;
  right: 0.3em;
  transition: all 0.3s;
}

.cBtn:hover .icon {
  width: calc(100% - 0.6em);
}

.cBtn .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: var(--button-icon-secondary, #616161);
}

.cBtn:hover .icon svg {
  transform: translateX(0.1em);
}

.cBtn:active .icon {
  transform: scale(0.95);
}


</style>
