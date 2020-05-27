<template>
  <div v-if="currentComponent" class="props-menu-warp" @click.stop>
    <div class="title-area">{{ currentComponent.title }}</div>
    <component ref="menu" :is="currentComponent.classify" :component="currentComponent" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
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
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";
  .props-menu-warp {
    max-width: 300px;
    .title-area {
      padding: 15px;
      background-color: $lightBackground;
      font-weight: bold;
    }
    .el-form {
      .el-form-item {
        margin-bottom: 10px;
      }
    }
  }
</style>
