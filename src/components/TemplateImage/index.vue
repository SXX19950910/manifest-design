<template>
  <div ref="template" class="template-image-wrap">
    <design-template :template="template" />
    <div class="text-center mt-20">{{ template.name }}</div>
  </div>
</template>

<script>
import DesignTemplate from '@/components/DesignTemplate';
export default {
  name: 'TemplateImage',
  components: {
    DesignTemplate
  },
  props: {
    template: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      imgData: ''
    }
  },
  created() {
    console.log(this.template)
  },
  mounted() {
  },
  methods: {
    init() {
      this.painting()
    },
    async painting() {
    }
  }
}
</script>

<style lang="scss">
.template-image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>