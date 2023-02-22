<template>
  <div class="table-wrap" :style="getItemStyle">
    <table class="w-100 table-wrap__table" border="0" cellspacing="1px" cellpadding="0">
      <thead>
        <tr>
          <th v-for="(item, key, index) in tableData[0]" :key="index">
            <div class="table-wrap__th">
              <p contenteditable="true" @input="onKeyChange($event, key)">{{ key }}</p>
              <el-popover
                  v-if="isActive"
                  popper-class="table-column-popper"
                  placement="right"
                  trigger="click">
                <div class="func-list">
                  <div class="item" @click.stop="handleAddColumn(index)">插入列</div>
                  <div class="item" @click.stop="handleRemoveColumn(key)">删除列</div>
                </div>
                <div slot="reference" class="table-wrap__add"></div>
              </el-popover>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index" class="table-wrap__tr">
          <td v-for="(child, itemKey, itemIndex) in item" :key="itemIndex">
            <el-input v-model="item[itemKey]" class="table-wrap__td" />
            <el-popover
                v-if="isActive"
                popper-class="table-column-popper"
                placement="right"
                trigger="click">
              <div class="func-list">
                <div class="item" @click.stop="handleAddRow(index)">插入行</div>
                <div class="item" @click.stop="handleRemoveRow(index)">删除行</div>
              </div>
              <div slot="reference" class="table-wrap__insert" />
            </el-popover>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="table-wrap__place" />
  </div>
</template>

<script>
export default {
  props: {
    elementId: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false
    },
    borderStyle: {
      type: String,
      default: ''
    },
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: -1,
      hoverIndex: -1,
      rowPopperVisible: false
    }
  },
  computed: {
    getItemStyle() {
      const { borderStyle } = this
      return {
        '--table-border-style': borderStyle
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
    onValueChange(e, key, index) {
      const value = e.target.innerText
      console.log(value)
      this.$store.commit('components/SET_TABLE_ROW_VALUE', { key, value, currentIndex: index })
    },
    onmouseleave() {
      this.hoverIndex = -1
    },
    onKeyChange(e, k) {
      const newKey = e.target.innerText
      this.$store.commit('components/SET_TABLE_COLUMN_KEY', { oldKey: k, newKey })
    },
    onmouseenter(e, index) {
      this.hoverIndex = index
    },
    handleAddRow(index) {
      this.$store.commit('components/ADD_TABLE_ROW', { insertIndex: index + 1 })
    },
    handleAddColumn(index) {
      this.$store.commit('components/ADD_TABLE_COLUMN', { insertIndex: index + 1 })
    },
    handleRemoveRow(index) {
      this.$store.commit('components/REMOVE_TABLE_ROW', { removeIndex: index })
    },
    handleRemoveColumn(key) {
      this.$store.commit('components/REMOVE_TABLE_COLUMN', { removeKey: key })
    }
  }
}
</script>

<style lang="scss">
.table-column-popper {
  padding: 5px 0;
  .func-list {
    .item {
      line-height: 32px;
      cursor: pointer;
      padding: 0 15px;
      &:hover {
        color: $skyBlue;
      }
    }
  }
}
.table-wrap {
  width: 100%;
  --table-border-color: #000;
  position: relative;

  &__place {
    height: 30px;
  }
  &__tr {
    position: relative;
  }
  &__insert {
    width: 100%;
    height: 1px;
    background-color: $skyBlue;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    &:hover {
      height: 4px;
    }
  }

  &__add {
    position: absolute;
    top: 0;
    right: -2px;
    z-index: 100;
    width: 2px;
    height: 100%;
    background-color: $skyBlue;
    cursor: pointer;
    &:hover {
      width: 6px;
    }
  }
  th {
    .table-wrap__th {
      padding: 10px 15px;
      position: relative;
      border: 1px var(--table-border-style) var(--table-border-color);
      border-right: 0;
    }
    &:last-child {
      .table-wrap__th {
        border-right: 1px var(--table-border-style) var(--table-border-color);
      }
    }
  }
  td {
    .el-input {
      .el-input__inner {
        border: 0;
        color: #000000;
        background-color: transparent;
        padding: 0;
        height: auto;
        line-height: 1;
      }
    }
    .table-wrap__td {
      padding: 10px 15px;
      position: relative;
      border: 1px var(--table-border-style) var(--table-border-color);
      border-top: 0;
      border-right: 0;
    }
    &:last-child {
      .table-wrap__td {
        border-right: 1px var(--table-border-style) var(--table-border-color);
      }
    }
  }

}
</style>
