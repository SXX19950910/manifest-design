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
        <el-form-item label="打印张数">
          <el-input-number v-model="form.printNumber" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" icon="el-icon-s-promotion" @click="handlePreview" size="small">预览模板</el-button>
        <el-button type="primary" size="small" @click="handlePrint">浏览器打印</el-button>
        <el-button type="primary" size="small" @click="handlePluginPrint">Lodop插件打印</el-button>
        <el-button size="small" @click="handleCancel">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TemplateImage from '@/components/TemplateImage'
import { PRINT_TYPE } from '@/config/print'
import Design from '@/core'
export default {
  components: {
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
    generateUrl(options = {}) {
      const { printType } = options
      const template = JSON.parse(JSON.stringify(this.$store.getters.templateList[this.activeIndex]))
      const { form } = this
      const query = {
        templateName: template.name,
        printType
      }
      for (const key in form) {
        if (Object.hasOwn(form, key) && form[key]) {
          query[key] = form[key]
        }
      }
      return this.$router.resolve({ name: 'Preview', query })
    },
    handlePluginPrint() {
      const path = this.generateUrl({ printType: PRINT_TYPE.LODOP })
      window.open(path.href, '_blank')
    },
    handlePreview() {
      const path = this.generateUrl()
      window.open(path.href, '_blank')
    },
    handlePrint() {
      const path = this.generateUrl({ printType: PRINT_TYPE.BROWSER })
      window.open(path.href, '_blank')
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