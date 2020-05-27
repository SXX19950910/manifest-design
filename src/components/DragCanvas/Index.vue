<template>
  <draggable ref="drag-board" class="drag-canvas-warp" :list="storeList" v-bind="getOptions" @add="onAdd">
    <template v-for="item in storeList">
      <drag :default-x="item.position.clientX" :default-y="item.position.clientY" :aim-id="item.id" :update-id="item.updateId" :component-object="item" :key="item.id" />
    </template>
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable';
  import { mapGetters } from 'vuex';
  export default {
    components: {
      draggable,
    },
    data() {
      return {
        list: [],
        left: '',
        right: '',
        top: '',
        bottom: '',
      };
    },
    computed: {
      ...mapGetters(['storeList']),
      getOptions() {
        return {
          group: {
            name: 'component',
            pull: false,
            put: true,
          },
          handle: '.handle',
          disabled: false,
          sort: false,
        };
      },
    },
    mounted() {
      this.init();
    },
    methods: {
      onAdd(el) {
        const { clientX, clientY } = el.originalEvent;
        const componentId = el.item.getAttribute('data-component-id');
        const props = {
          position: {
            clientX,
            clientY,
          },
        };
        const xArea = clientX < this.right && clientX > this.left;
        const yArea = clientY < this.bottom && clientX > this.top;
        if (xArea && yArea) {
          this.$store.dispatch('components/addComponent', { componentId, props });
        }
      },
      init() {
        const $board = this.$refs['drag-board'].$el;
        const { left, right, bottom, top } = $board.getBoundingClientRect();
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
      },
    },
  };
</script>

<style lang="scss">
  .drag-canvas-warp {
    * {
      user-select: none;
    }
    .item {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: -1;
    }
  }
</style>
