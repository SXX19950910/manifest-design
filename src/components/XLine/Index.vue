<template>
  <div class="x-line-warp" :style="getStyle"></div>
</template>

<script>
  export default {
    props: {
      elementId: {
        type: String,
        default: '',
      },
      height: {
        type: [String, Number],
        default: 1,
      },
      width: {
        type: [String, Number],
        default: 100,
      },
      lineType: {
        type: String,
        default: 'solid'
      }
    },
    data() {
      return {
      };
    },
    computed: {
      getStyle() {
        const style = {}
        const { height, lineType } = this;
        style.width = '100%'
        style.borderTop = `${height}px`
        if (lineType === 'solid') {
          style.height = `${height}px`
          style.backgroundColor = '#000'
        } else if (lineType === 'dashed') {
          style.borderTop = `${height}px ${lineType} #000`
        }
        return style
      },
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.$emit('complete');
      },
    },
  };
</script>

<style lang="scss">
  .x-line-warp {
  }
</style>
