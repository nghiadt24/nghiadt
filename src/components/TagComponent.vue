<script>
import { defineComponent } from 'vue'
import PhosphorIcons from '@phosphor-icons/vue'

export default defineComponent({
  name: 'TagComponent',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Tag',
    },
    icon: {
      type: String,
      required: false,
      default: 'Tag',
    },
    iconWeight: {
      type: String,
      required: false,
      default: 'regular',
      validator: (value) => ['thin', 'light', 'regular', 'bold', 'fill'].includes(value),
    },
  },
  computed: {
    iconComponent() {
      // Convert to PascalCase and append 'Icon' for Phosphor Icons naming convention
      const iconName =
        this.icon
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join('') + 'Icon'

      return PhosphorIcons[iconName] || PhosphorIcons.TagIcon
    },
  },
})
</script>

<template>
  <div class="tag-container">
    <component :is="iconComponent" :size="16" :weight="iconWeight" class="tag-icon" />
    <span class="tag-text">{{ text }}</span>
  </div>
</template>

<style scoped>
.tag-container {
  display: inline-flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 4px 8px;
  gap: 6px;
  font-size: 14px;
}

.tag-icon {
  color: #444;
}

.tag-text {
  color: #333;
}
</style>
