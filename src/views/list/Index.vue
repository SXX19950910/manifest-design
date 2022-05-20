<template>
  <div id="list-warp">
    <div class="handle-area mb-20">
      <el-button type="primary" size="small" @click="handleGoCreate">创建模板</el-button>
      <el-badge value="New">
        <el-button class="ml-15" type="primary" size="small" @click="handleShowBatch">模板打印机</el-button>
      </el-badge>
    </div>
    <el-tabs class="tab-area" v-model="tab" type="border-card">
      <el-tab-pane name="usually" label="通用模板">
        <el-table class="table-box" :data="templateList">
          <el-table-column label="模板名称" prop="name">
            <template slot-scope="props">
              <el-link type="primary" @click="handleGoDetail(props.row)">{{ props.row.name }}</el-link>
            </template>
          </el-table-column>
          <el-table-column label="模板尺寸" prop="size" />
          <el-table-column label="类别" prop="classify" />
          <el-table-column label="操作">
            <template slot-scope="props">
              <el-link type="primary" @click="handleGoDetail(props.row)">
                <i class="el-icon-edit-outline fs-16" /> 修改
              </el-link>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane name="custom" label="自定义模板">
      </el-tab-pane>
    </el-tabs>
    <board v-show="false" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { Board } from '@/layout/index.js';
  export default {
    components: {
      Board,
    },
    data() {
      return {
        tab: 'usually',
        usuallyData: [
          {
            id: '7894561',
            name: '通用地址模板',
            size: '460*460',
            classify: '地址',
          },
        ],
      };
    },
    computed: {
      ...mapGetters(['templateList']),
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.$store.dispatch('components/clearStoreList');
      },
      handleGoDetail(item) {
        this.$router.push({ name: 'Edit', query: { id: item.name } });
      },
      handleGoCreate() {
        this.$router.push({ name: 'Edit' });
      },
      handleShowBatch() {
        this.$router.push({ name: 'Batch' })
      }
    },
  };
</script>

<style lang="scss">
  #list-warp {
    background-color: white;
    padding: 15px;
    .tab-area {
      box-shadow: none;
      border: 0;
      border-top: 1px solid #E4E7ED;
    }
  }
</style>
