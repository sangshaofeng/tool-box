<template>
  <div class="wrapper">
    <a-card title="图片压缩工具">
      <a-upload
        name="avatar"
        listType="picture-card"
        class="avatar-uploader"
        :fileList="fileList"
        @change="handleFileChange"
      >
        <div v-if="fileList.length < 1">
          <a-icon type="plus" />
          <div class="ant-upload-text">上传图片</div>
        </div>
      </a-upload>
    </a-card>
  </div>
</template>

<script>
import { ImageCompress } from '@/utils'

export default {
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    handleFileChange({ fileList }) {
      this.fileList = fileList
    }
  }
}
</script>

<style lang="css" scoped >

</style>
