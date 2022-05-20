<template>
  <div class="batch-print-wrap pd-20px">
    <div class="list-area flex">
      <el-carousel class="w-100" height="calc(100vh - 150px)" :autoplay="false" trigger="click" type="card" @change="onTemplateChange">
        <el-carousel-item v-for="(item, index) in $store.getters.templateList" :key="index">
          <template-image :class="{ 'active': activeIndex === index }" :template="item"></template-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="bottom-handle justify-center flex">
      <el-button type="primary" size="small" @click="handleShowSet">选用此模板</el-button>
    </div>
    <el-dialog width="620px" :visible.sync="visible" title="配置参数">
      <el-form ref="form" :model="form" label-position="top" label-width="120px" size="small">
        <el-form-item v-for="item in vars" :key="item" :prop="item" :label="`变量(${item})`">
          <el-input v-model="form[item]" placeholder="请输入要在模板上面显示的内容" />
        </el-form-item>
        <el-form-item label="打印张数(批量打印开发中...)">
          <el-input-number v-model="form.printNumber" />
        </el-form-item>
        <design-template ref="designTemplate" v-if="previewTemplate" :template="previewTemplate" />
        <el-link type="primary" icon="el-icon-s-promotion" @click="handlePreview">预览模板</el-link>
      </el-form>
      <div slot="footer">
        <el-button type="primary" size="small" @click="handleSubmit">确认</el-button>
        <el-button size="small" @click="handleCancel">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TemplateImage from '@/components/TemplateImage'
import Design from '@/core'
import DesignTemplate from "@/components/DesignTemplate";
export default {
  components: {
    DesignTemplate,
    TemplateImage
  },
  data() {
    return {
      activeIndex: 0,
      visible: false,
      previewTemplate: '',
      form: {
        printNumber: 1
      },
      vars: []
    }
  },
  created() {

  },
  methods: {
    createForm() {
      this.vars.map(item => {
        this.$set(this.form, item, '')
      })
    },
    onTemplateChange(data) {
      this.activeIndex = data
    },
    handleShowSet() {
      this.visible = true
      const template = this.$store.getters.templateList[this.activeIndex]
      this.vars = Design.getTemplateVars(template)
      this.previewTemplate = ''
      this.$nextTick(() => {
        this.createForm()
      })
    },
    handleCancel() {
      this.visible = false
    },
    handleSubmit() {
    },
    handlePreview() {
      this.previewTemplate = JSON.parse(JSON.stringify(this.$store.getters.templateList[this.activeIndex]))
      this.$nextTick(() => {
        this.$refs.designTemplate.setPrintVariables(this.form)
        this.$refs.designTemplate.preview()
      })
    }
  }
}
</script>

<style lang="scss">
.batch-print-wrap {
  .list-area {
    .template-image-wrap {
      .template-wrap {
        border: 1px solid $border;
        background-color: white;
      }
      &.active {
        .template-wrap {
          border: 1px solid $skyBlue;
        }
      }
    }
  }
  .bottom-handle {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    border-top: 1px solid $border;
  }
}
</style>