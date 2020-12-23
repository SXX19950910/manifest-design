<template>
  <img ref="img" class="barcode" :class="elementId" :style="getStyle" alt="barcode" src draggable="false" />
</template>

<script>
  import barcode from 'jsbarcode';
  import { on, off } from '@/utils/dom.js';
  import { mapGetters } from 'vuex';
  export default {
    props: {
      elementId: {
        type: String,
        default: '',
      },
      component: {
        type: Object,
        default() {
          return {};
        },
      },
      bodyHeight: {
        type: Number,
        default: 40,
      },
      lineWidth: {
        type: Number,
        default: 2,
      },
      format: {
        type: String,
        default: 'CODE128',
      },
      displayValue: {
        type: String,
        default: '1',
      },
      data: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters(['activeComponent', 'storeList']),
      // 获取到当前组件的实例
      currentComponent() {
        return this.storeList.find((item) => item.id === this.activeComponent);
      },
      getStyle() {
        return {
          maxWidth: '100%',
          verticalAlign: 'middle',
          userSelect: 'none',
        };
      },
    },
    destroyed() {
      // this.clearListener();
    },
    mounted() {
      this.init();
    },
    methods: {
      complete() {
        this.$emit('complete');
      },
      clearListener() {
        const that = this;
        off(that.$refs.img, 'load', that.complete);
      },
      init() {
        this.complete();
        const { elementId, bodyHeight, lineWidth, displayValue, format, data } = this;
        barcode(`.${elementId}`, data, {
          format,
          width: lineWidth,
          height: bodyHeight,
          textMargin: 10,
          displayValue: displayValue === '1',
        });
      },
    },
  };
</script>

<style lang="scss">
  .barcode {
    max-width: 100%;
    vertical-align: middle;
    user-select: none;
  }
</style>
