<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">进制转换</h4>
            <p class="category">选择想要输入值的进制并输入值</p>
          </md-card-header>
          <md-card-content>
            <div class="_content">
              <div class="_left item">
                <div class="radio-options">
                  <md-radio v-model="binaryInput" value="2">2进制</md-radio>
                  <md-radio v-model="binaryInput" value="8">8进制</md-radio>
                  <md-radio v-model="binaryInput" value="10">10进制</md-radio>
                  <md-radio v-model="binaryInput" value="16">16进制</md-radio>
                </div>
                <md-field md-clearable>
                  <label>输入值</label>
                  <md-input
                    v-model="inputNumber"
                    type="number"
                    @input="onInputChange">
                  </md-input>
                </md-field>
              </div>
              <div class="_center">
                <md-icon>send</md-icon>
              </div>
              <div class="_right item">
                <div class="radio-options">
                  <md-radio v-model="binaryOutput" value="2">2进制</md-radio>
                  <md-radio v-model="binaryOutput" value="8">8进制</md-radio>
                  <md-radio v-model="binaryOutput" value="10">10进制</md-radio>
                  <md-radio v-model="binaryOutput" value="16">16进制</md-radio>
                </div>
                <md-field>
                  <label>转换后的值</label>
                  <md-input v-model="outputNumber" type="number" disabled></md-input>
                </md-field>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      binaryInput: '10',
      binaryOutput: '2',
      inputNumber: '',
      outputNumber: '',
    }
  },
  methods: {
    onInputChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="css" scoped >
._content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.item {
  padding: 20px 20px;
}
</style>
