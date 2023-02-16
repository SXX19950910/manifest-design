<template>
  <div v-if="currentComponent" class="table-menu" @click.stop>
    <el-tabs v-model="tab" type="border-card">
      <el-tab-pane label="内容" name="content">
        <el-form class="mt-30" ref="content-form">
          <el-form-item label="列字段">
            <el-tag type="primary">我的</el-tag>
            <el-input v-if="isAdd" v-model="value" ref="add" class="ml-15 w-100p" size="small" @keydown.native.enter.prevent />
            <el-button v-else class="ml-15" icon="el-icon-plus" size="small" @click="handleShowAdd">添加字段</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="样式" name="style">
        <el-form class="mt-30" ref="style-form" size="small">
          <el-form-item label="边框线条">
            <el-select v-model="activeComponent.props.borderStyle">
              <el-option v-for="item in lineOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    component: {
      type: Object,
      default() {
        return {
        };
      },
    },
  },
  data() {
    return {
      tab: '标题',
      value: '',
      form: {
        content: '',
      },
      isAdd: false,
      lineOptions: [
        {
          label: '实线',
          value: 'solid'
        },
        {
          label: '虚线',
          value: 'dashed'
        },
        {
          label: '圆线',
          value: 'dotted'
        },
        {
          label: '双线',
          value: 'double'
        }
      ]
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
    this.init();
  },
  methods: {
    init() {
      this.tab = 'content';
    },
    handleShowAdd() {
      this.isAdd = true;
      this.$nextTick(() => {
        this.$refs.add.focus()
      })
    },
  },
};
</script>

<style lang="scss">
.table-menu {
  height: 100vh;
}
</style>
