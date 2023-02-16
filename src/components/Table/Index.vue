<template>
  <div class="table-wrap">
    <table class="w-100 table-wrap__table" border="1" cellspacing="1px" cellpadding="0">
      <thead>
        <tr>
          <th v-for="(item, key, index) in tableData[0]" :key="index">
            <div class="table-wrap__th">
              <p contenteditable="true">{{ key }}</p>
              <div v-if="isActive" class="table-wrap__add">+</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td v-for="(child, itemKey, itemIndex) in item" :key="itemIndex">
            <p class="table-wrap__td" contenteditable="true">
              {{ item[itemKey] }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="isActive" class="table-wrap__insert" @click.stop="handleAddRows">+</div>
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
      hoverIndex: -1
    }
  },
  computed: {
    getItemStyle() {
      const {borderStyle} = this
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
    onValueChange(e) {
      console.log(e)
    },
    onmouseleave() {
      this.hoverIndex = -1
    },
    onmouseenter(e, index) {
      this.hoverIndex = index
    },
    handleAddRows() {
      console.log(this.$store.getters.storeList)
    }
  }
}
</script>

<style lang="scss">
.table-wrap {
  width: 100%;
  --table-border-color: transparent;
  position: relative;

  &__place {
    height: 30px;
  }

  &__insert {
    width: 16px;
    height: 16px;
    background-color: $skyBlue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    position: absolute;
    bottom: 22px;
    right: -10px;
    z-index: 100;
  }

  &__add {
    width: 16px;
    height: 16px;
    background-color: $skyBlue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    transform:  translate(0, -50%);
    right: -10px;
    z-index: 100;
    font-weight: normal;
  }
  th {
    .table-wrap__th {
      padding: 10px 15px;
      position: relative;
      border: 1px solid var(--table-border-color);
      border-right: 0;
    }
    &:last-child {
      .table-wrap__th {
        border-right: 1px solid var(--table-border-color);
      }
    }
  }
  td {
    .table-wrap__td {
      padding: 10px 15px;
      position: relative;
      border: 1px solid var(--table-border-color);
      border-top: 0;
      border-right: 0;
    }
    &:last-child {
      .table-wrap__td {
        border-right: 1px solid var(--table-border-color);
      }
    }
  }

}
</style>
