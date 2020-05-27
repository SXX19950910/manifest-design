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
    },
    data() {
      return {
      };
    },
    computed: {
      getStyle() {
        const { width, height } = this;
        return {
          backgroundColor: '#000',
          width: `${width}px`,
          minHeight: `${height}px`,
          height: '100%',
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
  .y-line-warp {
    height: 100%;
  }
</style>
