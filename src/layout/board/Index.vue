<template>
  <div class="board-warp">
    <div class="view-wrapper" :style="view">
      <div class="canvas-wrapper" :style="viewStyle">
        <drag-canvas ref="canvas" class="board-canvas" />
      </div>
    </div>
  </div>
</template>

<script>
  import DragCanvas from '@/components/DragCanvas/Index.vue';
  import { ToolsDrawer } from '@/public';
  export default {
    props: {
      //
    },
    components: {
      DragCanvas,
      ToolsDrawer,
    },
    data() {
      return {
        view: {
          width: '',
          height: ''
        }
      };
    },
    computed: {
      viewStyle() {
        return {
          width: `${this.$store.state.components.page.width}px`,
          height: `${this.$store.state.components.page.height}px`
        }
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.setViewStyle()
      },
      initDragBasic() {
        this.$refs.canvas.onWindowResize()
      },
      setViewStyle() {
        this.view.width = `${window.screen.width}px`
        this.view.height = `${window.screen.height}px`
      }
    }
  };
</script>

<style lang="scss">
  .board-warp {
    position: relative;
    overflow: auto;
    .canvas-wrapper {
      width: 500px;
      height: 500px;
      background-color: white;
      border-radius: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px rgba(0, 21, 41, 0.08);;
    }
    .board-canvas {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
