<template>
  <draggable ref="board" class="drag-canvas-warp" :list="storeList" v-bind="getOptions" @add="onAdd">
    <template v-for="item in storeList">
      <drag ref="drag" :default-x="item.position.clientX" :default-y="item.position.clientY" :aim-id="item.id" :update-id="item.updateId" :component-object="item" :key="item.id" :is-instance="item.instance" :default="item.default" @resize-end="onResizeEnd" @move-end="onMoveEnd"/>
    </template>
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable';
  import { mapGetters } from 'vuex';
  import { on, off } from '@/utils/dom'
  import { debounce } from 'throttle-debounce'
  export default {
    props: {
      //
    },
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
        visible: true,
        test: ''
      };
    },
    computed: {
      ...mapGetters(['storeList', 'activeComponent', 'templateList']),
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
          debounceResizeChange: Function,
          debounceKeyUp: Function
        };
      },
    },
    mounted() {
      this.init();
    },
    destroyed() {
      this.removeListener()
    },
    created() {
      //
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
        this.setLayoutData();
        this.addListener()
      },
      addListener() {
        this.debounceResizeChange = debounce(300, this.onWindowResize)
        on(window, 'resize', this.debounceResizeChange)
        on(window, 'keyup', this.onDeleteKeyUp)
      },
      onDeleteKeyUp(e) {
        if (e.keyCode === 8 && this.activeComponent) {
          this.$store.dispatch('components/removeActiveComponent')
        }
      },
      removeListener() {
        off(window, 'resize', this.debounceResizeChange)
      },
      onWindowResize() {
        console.log('进入')
        this.setLayoutData()
        const $dragList = this.$refs.drag
        if ($dragList && $dragList.length > 0) {
          $dragList.forEach((item) => {
            item.init()
          })
        }
      },
      setLayoutData() {
        const $board = this.$refs.board.$el
        const { left, right, bottom, top } = $board.getBoundingClientRect();
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
      },
      onMoveEnd(data) {
        const { height, width, x, y, position, instance, id } = data;
        const update = {
          id,
          update: {
            default: {
              height,
              width,
              x,
              y,
            },
            instance,
            position,
          },
        };
        // console.log(x, y)
        if (update.id) this.$store.dispatch('components/updateComponent', update);
      },
      onResizeEnd() {
      //
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
