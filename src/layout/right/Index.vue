<template>
  <el-form class="props-menu-warp" :model="form" label-position="top" @click.stop>
    <div class="title-area">{{ activeComponent.title || '模板设计' }}</div>
    <component ref="menu" :is="activeComponent.classify" :component="activeComponent" />
    <template v-if="!activeComponent">
      <el-form-item label="纸张尺寸">
        <el-select v-model="form.pageName" class="w-100" size="small" @change="onPageSizeChange">
          <el-option v-for="item in pageSizeOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="自定义纸张（mm）">
        <div class="f-a-c">
          <span class="shrink-0 mr-15">宽度</span> <el-input-number v-model="form.width" class="w-100" min="100" max="10000" placeholder="宽度" size="small"></el-input-number>
        </div>
        <div class="f-a-c mt-20">
          <span class="shrink-0 mr-15">高度</span> <el-input-number v-model="form.height" class="w-100" min="100" max="10000" placeholder="宽度" size="small"></el-input-number>
        </div>
      </el-form-item>
      <div class="px-15 mt-20"><el-link type="primary" icon="el-icon-s-promotion" @click="handleSetCustomPageSize">应用尺寸</el-link></div>
    </template>
  </el-form>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        form: {
          width: 0,
          height: 0,
          pageName: 'a3'
        },
        pageSizeOptions: [
          {
            label: 'MY VIP（292px X 593px）',
            value: 'my',
            size: [292, 593]
          },
          {
            label: 'A3（297mm X 420mm）',
            value: 'a3',
            size: [500, 500]
          },
          {
            label: 'A4（210mm X 297mm）',
            value: 'a4',
            size: [600, 600]
          },
          {
            label: 'A5（148mm X 210mm）',
            value: 'a5',
            size: [800, 800]
          }
        ]
      };
    },
    computed: {
      ...mapGetters(['activeComponent', 'storeList']),
      currentComponent() {
        return this.storeList.find((item) => item.id === this.activeComponent);
      },
    },
    watch: {
      currentComponent() {
        this.$nextTick(() => {
          const $menu = this.$refs.menu;
          if ($menu) $menu.init();
        });
      },
    },
    methods: {
      handleSetCustomPageSize() {
        const { width, height } = this.form
        const name = `Custom(${width}mm * ${height}mm)`
        const non = this.pageSizeOptions.findIndex((item) => item.label === name) < 0
        if (!non) {
          this.$message.error('应用失败，纸张名称重复')
        } else {
          this.pageSizeOptions.push({ label: name, value: name, size: [width, height] })
          this.form.pageName = name
          this.onPageSizeChange(name)
        }
      },
      onPageSizeChange(value) {
        const size = this.pageSizeOptions.find((item) => item.value === value).size
        this.$store.dispatch('components/setPageSize', size)
        this.$emit('page-size-change', size)
      }
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";
  .props-menu-warp {
    .title-area {
      padding: 15px;
      background-color: $lightBackground;
      font-weight: bold;
    }
    .el-form-item {
      margin-bottom: 10px;
      padding: 0 15px;
      .f-a-c {
        color: #606266;
      }
    }
    .el-tabs {
      .el-tabs__content {
        padding: 0;
      }
    }
  }
</style>
