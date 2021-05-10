<template>
  <div class="rectangle-warp" :style="getStyle">
  </div>
</template>

<script>
  export default {
    props: {
      elementId: {
        type: String,
        default: '',
      },
      borderWidth: {
        type: Number,
        default: 1,
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
        const { borderWidth, lineType } = this;
        return {
          border: `1px ${lineType} #000`,
          borderWidth: `${borderWidth}px`,
        };
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
  .rectangle-warp {
    min-width: 20px;
    min-height: 20px;
    height: 100%;
  }
</style>
