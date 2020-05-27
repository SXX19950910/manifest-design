<template>
  <div class="rectangle-warp" :style="getStyle">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        elementId: {
          type: String,
          default: '',
        },
      };
    },
    computed: {
      getStyle() {
        return {
          minWidth: '20px',
          minHeight: '20px',
          height: '100%',
          border: '1px solid #000',
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
    /*min-width: 20px;*/
    /*min-height: 20px;*/
    /*height: 100%;*/
    /*border: 1px solid #000;*/
  }
</style>
