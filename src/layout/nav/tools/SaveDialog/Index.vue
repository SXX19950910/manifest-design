<template>
  <el-dialog class="save-template-dialog" :visible.sync="visible" width="460px" append-to-body title="保存模板">
    <div class="content-area">
      <div class="name">模板名称：</div>
      <el-input v-model="name" type="text" size="small"></el-input>
    </div>
    <div slot="footer" class="dialog-footer-area">
      <el-button type="primary" size="small" @click="handleSaveTemplate">保 存</el-button>
      <el-button size="small" @click="handleCancel">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        name: '',
      };
    },
    methods: {
      handleSaveTemplate() {
        const payload = {
          name: this.name,
        };
        this.$store.dispatch('components/saveTemplate', payload);
        this.$message.success('模板保存成功！');
        this.handleCancel();
      },
      handleCancel() {
        this.visible = false;
      },
      init() {
        this.visible = true;
      },
    },
  };
</script>

<style lang="scss">
  .save-template-dialog {
    .content-area {
      .name {
        margin: 0 0 15px 0;
      }
    }
  }
</style>
