<template>
  <div class="component-menu-warp">
    <el-collapse v-model="menu" class="collapse-menu">
      <el-collapse-item v-for="(item, index) in componentList" :key="index" :title="item.title" :name="item.title">
        <template v-if="item.list && item.list.length > 0">
          <draggable class="component-list" v-bind="dragOptions" :component-data="getComponentData" @end="onEnd">
            <div v-for="(tag, index) in item.list" :key="tag.id" class="item" :data-component-id="tag.id">
              <span class="name">{{ tag.title }}</span><i :class="tag.icon"></i>
            </div>
          </draggable>
        </template>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import draggable from 'vuedraggable';
  export default {
    components: {
      draggable,
    },
    data() {
      return {
        menu: ['地址信息', '商品标签信息', '构图元素'],
      };
    },
    computed: {
      ...mapGetters(['componentList']),
      dragOptions() {
        return  {
          sort: false,
          group: {
            name: 'component',
            pull: 'clone',
            put: false,
          },
        };
      },
      getComponentData() {
        return {
          // on: {
          //   change(a, b, c) {
          //   },
          //   input(a, b, c) {
          //   }
          // },
          // attr: {},
          // value: '',
        };
      },
    },
    methods: {
      onEnd(evt) {
        // doing
      },
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";
  .component-menu-warp {
    .collapse-menu {
      .el-collapse-item__header {
        background-color: $lightBackground;
        padding: 0 15px;
        transition: .3s ease all;
        height: 36px;
        line-height: 36px;
        &:hover {
          color: $skyBlue;
        }
      }
      .component-list {
        padding: 15px;
        .item {
          cursor: pointer;
          padding: 5px;
          border: 1px solid $border;
          margin-bottom: 10px;
          border-radius: 2px;
          color: $generalFontColor;
          transition: .3s ease all;
          display: flex;
          align-items: center;
          justify-content: space-between;
          &:hover {
            color: $skyBlue;
            border: 1px solid $skyBlue;
            i {
              color: $skyBlue;
            }
          }
          i {
            font-size: 16px;
            color: $info;
          }
        }
      }
    }
  }
</style>
