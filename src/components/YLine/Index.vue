<template>
  <div class="y-line-warp" :style="getStyle"></div>
</template>

<script>
  export default {
    props: {
      elementId: {
        type: String,
        default: '',
      },
      width: {
        type: [String, Number],
        default: 0,
      },
      height: {
        type: [String, Number],
        default: 0,
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
        const { width, lineType } = this;
        style.width = `${width}px`
        style.minHeight = '100%'
        if (lineType === 'solid') {
          style.backgroundColor = '#000'
        } else if (lineType === 'dashed') {
          style.borderLeft = `${width}px ${lineType} #000`
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
  .y-line-warp {
  }
</style>
