<script setup>
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
})
</script>

<template>
  <button :class="['btn', variant]" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
.btn {
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: var(--spc-8, 8px) var(--spc-16, 16px);
  transition: background-color 0.2s ease-in-out;
  gap: var(--spc-8, 8px);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
.content i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.btn.primary {
  border: 1px solid #4a4a4a;
  background: var(--Button-button-bg-primary, #303030);
  color: var(--Button-button-text-normal, #fff);
}
.btn.secondary {
  border: 1px solid var(--Button-button-stroke-secondary, #8a8a8a);
  background: var(--Button-button-bg-secondary, #fff);
  color: var(--Button-button-text-secondary, #303030);
}
</style>
