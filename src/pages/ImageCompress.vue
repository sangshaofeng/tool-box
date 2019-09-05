<template>
  <div class="wrapper">
    <a-card>
      <a-upload
        name="avatar"
        listType="picture-card"
        class="avatar-uploader"
      >
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
        <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
    </a-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped >

</style>
