<template>
  <div class="barcode-wrap">
    <img ref="img" class="barcode" :class="elementId" :style="getStyle" alt="barcode" src draggable="false" />
    <var-text v-if="displayValue === '1'" :style="getStyle" class="barcode-text" :text="data"></var-text>
  </div>
</template>

<script>
  import barcode from 'jsbarcode';
  // import { on, off } from '@/utils/dom.js';
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
      currentComponent() {
        return this.storeList.find((item) => item.id === this.activeComponent.id);
      },
      getStyle() {
        const { props = {} } = this.activeComponent
        return {
          maxWidth: '100%',
          verticalAlign: 'middle',
          userSelect: 'none',
          fontSize: props.fontSize + 'px'
        };
      },
    },
    mounted() {
      this.init();
    },
    methods: {
      complete() {
        this.$emit('complete');
      },
      init() {
        this.complete();
        const { elementId, bodyHeight, lineWidth, format, data } = this;
        console.log(format)
        barcode(`.${elementId}`, data, {
          format,
          width: lineWidth,
          height: bodyHeight,
          textMargin: 10,
          displayValue: false,
          fontSize: 40
        });
      },
    },
  };
</script>

<style lang="scss">
  .barcode-wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .barcode {
      max-width: 100%;
      vertical-align: middle;
      user-select: none;
    }
    .barcode-text {
      font-weight: normal;
    }
  }
</style>
