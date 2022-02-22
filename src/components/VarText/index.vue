<template>
  <span class="var-text-wrap">
    <template v-for="item in textData">
      <span v-if="!item.key" :key="item.index">{{ item.value }}</span>
      <span v-else class="var" :key="item.index" :data-field-key="item.key" @click.stop="handleTapText">{{ item.value }}</span>
    </template>
  </span>
</template>

<script>
import { getStringVars } from '@/utils/index.js'
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data: []
    }
  },
  computed: {
    textData() {
      return getStringVars(this.text)
    }
  },
  methods: {
    handleTapText() {
      //
    }
  }
}
</script>

<style lang="scss">
.var-text-wrap {
  .var {
    cursor: pointer;
    &:hover {
      color: $skyBlue;
      text-decoration: underline;
    }
  }
}
</style>
