<template>
  <div class="table-wrap flex">
    <div
        v-for="(item, index) in rows"
        :key="index"
        class="table-wrap__item"
        :style="getItemStyle"
        :class="{ 'active': hoverIndex === index, 'prev': hoverIndex - 1 === index, 'first': hoverIndex === 0 }"
        @mouseenter="onmouseenter($event, index)"
        @click.stop="handleClickItem(index)">
      <div class="item-label">
        {{ item.label }}
        <div v-if="currentIndex === index" class="drag-btn" @click.stop></div>
      </div>
      <div class="item-value">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elementId: {
      type: String,
      default: '',
    },
    borderStyle: {
      type: String,
      default: ''
    },
    rows: {
      type: Array,
      default() {
        return [
          {
            label: '姓名',
            value: '时'
          },
          {
            label: '年龄',
            value: '20'
          },
          {
            label: '身高',
            value: '180'
          }
        ]
      }
    }
  },
  data() {
    return {
      currentIndex: -1,
      hoverIndex: -1
    }
  },
  computed: {
    getItemStyle() {
      const { borderStyle } = this
      return {
        borderStyle
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$emit('complete')
    },
    handleClickItem(index) {
      this.hoverIndex = index
      this.currentIndex = index
    },
    onmouseenter(e, index) {
      this.hoverIndex = index
    }
  }
}
</script>

<style lang="scss">
.table-wrap {
  width: 100%;
  --table-border-color: #000;
  &__item {
    border: 1px var(--table-border-color);
    border-left: 1px solid transparent;
    flex: 1;
    &.active {
      border-color: $skyBlue;
      border-left: 1px solid transparent;
      .item-label {
        border-color: $skyBlue;
      }
    }
    &.active.first {
      border-left: 1px solid $skyBlue;
    }
    &.prev {
      border-right: 1px solid $skyBlue;
    }
    .item-label,.item-value {
      padding: 10px 15px;
    }
    .item-label {
      position: relative;
      border-bottom: 1px solid var(--table-border-color);
      .drag-btn {
        width: 12px;
        height: 12px;
        background-color: $skyBlue;
        border-radius: 100%;
        position: absolute;
        top: 50%;
        right: -6px;
        transform: translate(0, -50%);
        cursor: col-resize;
      }
    }
    &:first-child {
      border-left: 1px solid var(--table-border-color);
    }
  }
}
</style>
