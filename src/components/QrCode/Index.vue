<script>
  import _ from 'lodash';
  import { updateQrcode } from '@/utils/update';
  import scheme from '@/config/scheme';
  export default {
    props: {
      elementId: {
        type: String,
        default: '',
      },
      options: {
        type: Object,
        default() {
          return {}
        }
      },
      data: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
      };
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
      init() {
        const config = _.cloneDeep({
          id: this.elementId,
          data: this.data,
          options: this.options
        })
        updateQrcode(config.id, config.data, config.options)
        this.$nextTick(() => {
          this.$emit('complete')
        })
      },
    },
    render(createElement) {
      return scheme.qrcode(createElement, this)
    }
  };
</script>

<style lang="scss">
  .qr-code-warp {
    .qr-code {
      max-width: 100%;
      vertical-align: middle;
      user-select: none;
    }
  }
</style>
