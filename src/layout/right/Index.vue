<template>
  <el-form class="props-menu-warp" :model="form" @click.stop>
    <div class="title-area">{{ activeComponent.title || '模板设计' }}</div>
    <component ref="menu" :is="activeComponent.classify" :component="activeComponent" />
    <el-form-item label="纸张尺寸">
      <el-select v-model="form.pageSize" class="w-100" size="small" @change="onPageSizeChange">
        <el-option v-for="item in pageSizeOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        form: {
          pageSize: 'a3'
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
          if ($menu) {
            $menu.init();
          }
        });
      },
    },
    methods: {
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
    }
    .el-tabs {
      .el-tabs__content {
        padding: 0;
      }
    }
  }
</style>
