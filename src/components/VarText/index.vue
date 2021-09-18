<template>
  <span class="var-text-wrap">
    <template v-for="item in textData">
      <span v-if="!item.key" :key="item.index">{{ item.value }}</span>
      <span v-else type="info" :data-field-key="item.key">{{ item.value }}</span>
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
  }
}
</script>

<style lang="scss">

</style>
