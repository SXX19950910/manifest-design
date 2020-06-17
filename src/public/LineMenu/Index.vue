<template>
  <el-form :mode="form" class="line-menu-warp" label-position="top">
    <el-tabs v-model="tab" type="border-card">
      <el-tab-pane label="样式" name="style">
        <el-form-item  label="线条宽度">
          <el-input-number v-if="isXLine" v-model="currentComponent.props.height" class="w-100" :min="1" size="small" :max="10" label="描述文字"></el-input-number>
          <el-input-number v-else-if="isYLine" v-model="currentComponent.props.width" class="w-100" :min="1" size="small" :max="10" label="描述文字"></el-input-number>
        </el-form-item>
      </el-tab-pane>
    </el-tabs>
  </el-form>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        tab: 'style',
        form: {
          borderWidth: '',
        },
      };
    },
    computed: {
      ...mapGetters(['activeComponent', 'storeList']),
      currentComponent() {
        const { id = '' } = this.activeComponent;
        return this.storeList.find((item) => item.id === id);
      },
      isXLine() {
        const { type = '' } = this.currentComponent;
        return type === 'XLineUi';
      },
      isYLine() {
        const { type = '' } = this.currentComponent;
        return type === 'YLineUi';
      },
    },
    methods: {
      init() {
        // doing
      },
    },
  };
</script>

<style lang="scss">
  .line-menu-warp {
    width: 300px;
    height: calc(100% - 53px);
    display: flex;
    flex-direction: column;
  }
</style>
