<template>
  <draggable ref="board" class="drag-canvas-warp" :list="storeList" v-bind="getOptions">
    <div v-if="lineTop" class="x-help-line" :style="xStyle" />
    <div v-if="lineLeft" class="y-help-line" :style="yStyle" />
    <template v-for="item in storeList">
      <drag v-show="!$store.state.components.storeLoading" ref="drag" :default-x="item.position.clientX" :default-y="item.position.clientY" :aim-id="item.id" :update-id="item.updateId" :component-object="item" :key="item.id" :is-instance="item.instance" :default="item.default" @resize-end="onResizeEnd" @move-update="onMoveUpdate" @move-end="onMoveEnd" @move="onMove"/>
    </template>
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable';
  import { mapGetters } from 'vuex';
  import { on, off } from '@/utils/dom'
  import Design from '@/core';
  import { debounce, throttle } from 'throttle-debounce'
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
        isMove: false,
        throttleUpdateValve: Function,
        debounceResizeChange: Function,
        debounceKeyUp: Function
      };
    },
    computed: {
      ...mapGetters(['storeList', 'activeComponent', 'templateList', 'lineLeft', 'lineTop']),
      yStyle() {
        return {
          left: this.lineLeft + 'px'
        }
      },
      xStyle() {
        return {
          top: this.lineTop + 'px'
        }
      },
      getOptions() {
        return {
          group: {
            name: 'component',
            pull: false,
            put: true,
          },
          handle: '.handle',
          disabled: false,
          sort: false
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
      init() {
        this.addListener();
        this.$eventBus.$on('remove-keydown', () => {
          this.removeListener();
        })
        this.$eventBus.$on('add-keydown', () => {
          this.addListener();
        })
      },
      addListener() {
        this.throttleUpdateValve = throttle(100, this.updateValve)
        this.debounceResizeChange = debounce(300, this.onWindowResize)
        on(window, 'resize', this.debounceResizeChange)
        on(window, 'keyup', this.onDeleteKeyUp)
        on(window, 'keydown', this.onKeyDown)
      },
      updateValve(valve) {
        this.$store.dispatch('components/updateValve', valve)
      },
      onKeyDown(e) {
        // 键盘控制组件移动事件
        const { keyCode } = e
        const { id } = this.activeComponent
        this.throttleUpdateValve()
        const keysHandler = [
          {
            code: 38,
            handler: 'up'
          },
          {
            code: 40,
            handler: 'down'
          },
          {
            code: 37,
            handler: 'left'
          },
          {
            code: 39,
            handler: 'right'
          }
        ]
        if (id) {
          const $drag = this.$refs.drag.find((item) => item.aimId === id)
          const worker = keysHandler.find((item) => item.code === keyCode)
          if (worker && $drag[worker.handler]) {
            $drag[worker.handler]()
            e.preventDefault()
          }
        }
      },
      onDeleteKeyUp(e) {
        const isEditable = Design.isEditable(this.activeComponent.type)
        if (e.keyCode === 8) {
          !isEditable && this.$store.dispatch('components/removeActiveComponent')
        }
        this.updateValve(0)
      },
      removeListener() {
        off(window, 'resize', this.debounceResizeChange)
        off(window, 'keyup', this.onDeleteKeyUp)
        off(window, 'keydown', this.onKeyDown)
      },
      onWindowResize(e) {
        this.$store.dispatch('components/setLayoutData')
        const $dragList = this.$refs.drag
        if ($dragList && $dragList.length > 0) {
          $dragList.forEach((item) => {
            item.init()
          })
        }
      },
      onMove() {
        this.isMove = true
      },
      onMoveEnd() {
        this.isMove = false
        this.$store.dispatch('components/setLine')
      },
      onMoveUpdate(data) {
        this.isMove = false
        const { height, width, x, y, position, instance, id, rect } = data;
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
            rect
          },
        };
        if (update.id) this.$store.dispatch('components/updateComponent', update);
      },
      onResizeEnd() {
      //
      }
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
