<template>
  <el-form :mode="form" class="rectangle-menu-warp" label-position="top">
    <el-tabs v-model="tab" type="border-card">
      <el-tab-pane label="样式" name="style">
        <el-form-item label="线条宽度">
          <el-input-number v-model="currentComponent.props.borderWidth" class="w-100" :min="1" size="small" :max="10" label="描述文字"></el-input-number>
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
    },
    methods: {
      init() {
        // doing
      },
    },
  };
</script>

<style lang="scss">
  .rectangle-menu-warp {
    width: 300px;
    height: calc(100% - 53px);
    display: flex;
    flex-direction: column;
  }
</style>
