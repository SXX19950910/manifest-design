<template>
  <el-form v-if="currentComponent" class="qr-menu-warp" :model="form" label-position="top" @click.native.stop>
    <el-tabs v-model="tab" type="border-card">
      <el-tab-pane label="内容" name="content">
        <el-form-item label="条码值">
          <var-input v-model="currentComponent.props.data" @input="debounceUpdate"></var-input>
        </el-form-item>
        <el-form-item label="误差级别">
          <el-select v-model="currentComponent.props.options.errorCorrectionLevel" class="w-100" size="small" filterable @change="debounceUpdate">
            <el-option v-for="item in errorLevleOptions" :key="item.value" :value="item.value" :label="item.label" />
          </el-select>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label="样式" name="style">
        <el-form-item label="边距">
          <el-input-number class="w-100" v-model="currentComponent.props.options.margin" :min="0" :max="100" size="small" @focus="$eventBus.$emit('remove-keydown')" @change="debounceUpdate"></el-input-number>
        </el-form-item>
      </el-tab-pane>
    </el-tabs>
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex';
import { debounce } from 'throttle-debounce';
import { updateQrcode } from '@/utils/update';
export default {
  data() {
    return {
      tab: 'content',
      form: {
      },
      debounceUpdate: Function,
      errorLevleOptions: [
        {
          label: '低',
          value: 'L',
        },
        {
          label: '中',
          value: 'M',
        },
        {
          label: '偏高',
          value: 'Q',
        },
        {
          label: '高',
          value: 'H',
        }
      ],
    };
  },
  computed: {
    ...mapGetters(['activeComponent', 'storeList']),
    currentComponent() {
      return this.storeList.find((item) => item.id === this.activeComponent.id);
    },
  },
  mounted() {
    this.debounceUpdate = debounce(300, this.handleUpdateQrcode);
  },
  methods: {
    init() {
      // doing
    },
    handleUpdateQrcode() {
      updateQrcode(this.currentComponent.id, this.currentComponent.props.data, this.currentComponent.props.options)
    },
  },
};
</script>

<style lang="scss">
@import "./src/style/variable";
.barcode-menu-warp {
  height: calc(100% - 53px);
  display: flex;
  flex-direction: column;
  .bottom-handle {
    display: flex;
    align-items: center;
    padding: 14px;
    .el-button {
      width: 50%;
    }
  }
}
</style>
