<template>
  <el-form class="barcode-menu-warp" :model="form" label-position="top">
    <el-tabs v-model="tab" type="border-card">
      <el-tab-pane label="内容" name="content">
        <el-form-item label="条形码格式">
          <el-select v-model="currentComponent.props.format" class="w-100" size="small" filterable @change="debounceUpdate">
            <el-option v-for="item in formatOptions" :key="item.value" :value="item.value" :label="item.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="是否显示值">
          <el-select v-model="currentComponent.props.displayValue" class="w-100" size="small" filterable @change="debounceUpdate">
            <el-option v-for="item in selectOptions" :key="item.value" :value="item.value" :label="item.label" />
          </el-select>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label="样式" name="style">
        <el-form-item label="线宽">
          <el-input-number v-model="currentComponent.props.lineWidth" class="w-100" :min="1" :max="10" label="描述文字" size="small" @change="debounceUpdate"></el-input-number>
        </el-form-item>
        <el-form-item label="字体大小">
          <el-select v-model="currentComponent.props.fontSize" class="w-100" size="small" @change="debounceUpdate">
            <el-option v-for="item in fontSizeOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="条形码高度">
          <el-input-number v-model="currentComponent.props.bodyHeight" class="w-100" :min="1" :max="100" label="描述文字" size="small" @change="debounceUpdate"></el-input-number>
        </el-form-item>
      </el-tab-pane>
    </el-tabs>
  </el-form>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { debounce } from 'throttle-debounce';
  export default {
    data() {
      return {
        tab: 'content',
        form: {
        },
        debounceUpdate: Function,
        formatOptions: [
          {
            label: 'CODE128',
            value: 'CODE128',
          },
          {
            label: 'CODE128A',
            value: 'CODE128A',
          },
          {
            label: 'CODE128B',
            value: 'CODE128B',
          },
          {
            label: 'CODE128C',
            value: 'CODE128C',
          },
          {
            label: 'Pharmacode',
            value: 'pharmacode',
          },
        ],
        selectOptions: [
          {
            label: '是',
            value: '1',
          },
          {
            label: '否',
            value: '0',
          },
        ],
        fontSizeOptions: [
          {
            label: '12px',
            value: 12,
          },
          {
            label: '14px',
            value: 14,
          },
          {
            label: '16px',
            value: 16,
          },
          {
            label: '18px',
            value: 18,
          },
          {
            label: '24px',
            value: 24,
          },
          {
            label: '30px',
            value: 30,
          },
          {
            label: '36px',
            value: 36,
          },
        ],
      };
    },
    computed: {
      ...mapGetters(['activeComponent', 'storeList']),
      currentComponent() {
        const { id = '' } = this.activeComponent;
        return this.storeList.find((item) => item.id === id);
      },
    },
    mounted() {
      this.debounceUpdate = debounce(300, this.handleUpdateBarcode);
    },
    methods: {
      init() {
        // doing
      },
      handleUpdateBarcode() {
        this.$store.dispatch('components/updateBarcode');
      },
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";
  .barcode-menu-warp {
    width: 300px;
    height: calc(100% - 53px);
    display: flex;
    flex-direction: column;
    /*justify-content: space-between;*/
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
