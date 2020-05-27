<template>
  <img ref="img" class="qr-code-warp" alt="qr" draggable="false" :style="getStyle" src />
</template>

<script>
  import QrCode from 'qrcode';
  import { on, off } from '@/utils/dom.js';
  export default {
    props: {
      elementId: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
      };
    },
    destroyed() {
      // const that = this;
      // off(that.$refs.img, 'onload', that.complete)
    },
    computed: {
      getStyle() {
        return {
          maxWidth: '100%',
          verticalAlign: 'middle',
          userSelect: 'none',
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
        const that = this;
        const $img = this.$refs.img;
        that.complete();
        QrCode.toDataURL('http://192.168.11.80:8080/', { errorCorrectionLevel: 'H', type: 'image/jpeg',  color: {} }, (err, res) => {
          if (err) {
            throw err;
          }
          $img.src = res;
        });
      },
    },
  };
</script>

<style lang="scss">
  .qr-code-warp {
  }
</style>
