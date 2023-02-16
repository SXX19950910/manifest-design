<template>
  <div class="app-warp">
    <header-nav />
    <div class="body-area">
      <v-split v-model="split" min="200px" max="800px" @on-move-end="onSplitEnd">
        <left-menu slot="left" class="left-menu" />
        <board ref="board" slot="right" class="view-box" />
      </v-split>
      <right-menu ref="right" class="right-menu" @page-size-change="onPageSizeChange" />
    </div>
  </div>
</template>

<script>
  import { HeaderNav, LeftMenu, RightMenu, Board } from '@/layout/index.js';
  import { on, off } from '@/utils/dom.js';
  import { mapGetters } from 'vuex';
  export default {
    components: {
      HeaderNav,
      LeftMenu,
      RightMenu,
      Board,
    },
    data() {
      return {
        split: '200px',
      }
    },
    computed: {
      ...mapGetters(['templateList', 'activeComponent']),
    },
    mounted() {
      this.init();
      on(document, 'click', this.handleCancelCurrent);
    },
    destroyed() {
      off(document, 'click', this.handleCancelCurrent);
    },
    methods: {
      init() {
        this.$store.dispatch('components/clearStoreList');
        this.generateTemplate();
      },
      generateTemplate() {
        const { id = '' } = this.$route.query;
        if (id) {
          const template = this.templateList.find((item) => item.name === id);
          if (template) {
            this.$store.dispatch('components/clearStoreList');
            this.$store.dispatch('components/updateStoreList', template.data);
            const pageSize = template.options ? [template.options.width, template.options.height] : null
            if (pageSize) {
              this.$store.dispatch('components/setPageSize', pageSize)
              this.$refs.right.setValueByPageSize(pageSize)
            }
          }
        } else {
          this.$store.dispatch('components/hideStoreLoading')
        }

      },
      handleCancelCurrent() {
        this.$store.dispatch('components/setActive', '');
      },
      onSplitEnd() {
        const $board = this.$refs.board
        $board.initDragBasic()
      },
      onPageSizeChange() {
        this.onSplitEnd()
      }
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";
  .app-warp {
    width: 100%;
    .body-area {
      height: calc(100vh - 32px);
      display: flex;
      flex-wrap: nowrap;
      position: relative;
      color: #333;
      width: 100%;
      .left-menu {
        flex-shrink: 0;
        background-color: white;
        position: relative;
        z-index: 90;
        user-select: none;
      }
      .view-box {
        width: 100%;
        background-color: #e9eef3;
        color: #333;
        height: 100%;
        position: relative;
        background-image: linear-gradient(45deg,#f5f5f5 25%,rgba(0,0,0,0) 0,rgba(0,0,0,0) 75%,#f5f5f5 0),linear-gradient(45deg,#f5f5f5 25%,rgba(0,0,0,0) 0,rgba(0,0,0,0) 75%,#f5f5f5 0);
        background-size: 20px 20px;
        background-position: 0 0,10px 10px;
      }
      .right-menu {
        flex-shrink: 0;
        background-color: white;
        width: 250px;
        position: relative;
        height: 100%;
        z-index: 90;
        overflow: auto;
        .el-tabs--border-card {
          box-shadow: none;
          border: 0;
          border-top: 1px solid $border;
        }
      }
    }
  }
</style>
