<!--进制转换页面-->
<template>
  <div class="wrapper">
    <a-card title="输入" class="card" :bordered="false">
      <div class="content-wrapper">
        <a-select
          v-model="radixInput"
          size="large"
          @change="radixInputChange">
          <a-select-option
            v-for="(item, index) in options"
            :key="index"
            :value="item.value">{{ item.text }}
          </a-select-option>
        </a-select>
        <a-input
          class="input"
          size="large"
          v-model="inputValue"
          :type="inputType"
          @change="onInput"
          clearable
          :placeholder="'输入一个 ' + radixInput + ' 进制的数字'"
        />
      </div>
    </a-card>
    <a-card title="输出" class="card" :bordered="false">
      <div class="content-wrapper">
        <a-select
          size="large"
          v-model="radixOutput"
          @change="radixOutputChange">
          <a-select-option
            v-for="(item, index) in options"
            :key="index"
            :value="item.value">{{ item.text }}
          </a-select-option>
        </a-select>
        <a-input
          class="input"
          size="large"
          v-model="outputValue"
          placeholder="输出值"
          disabled
        />
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'Radix',
  data() {
    return {
      inputType: 'number',
      radixInput: 10,
      radixOutput: 2,
      inputValue: '',
      outputValue: '',
      options: [
        { text: '2进制', value: 2 },
        { text: '8进制', value: 8 },
        { text: '10进制', value: 10 },
        { text: '16进制', value: 16 }
      ]
    }
  },
  methods: {
    onInput() {
      if (this.inputValue === '') {
        this.outputValue = ''
        return
      }
      this.validate().then(value => {
        this.outputValue = this.radixConvert(value, this.radixInput, this.radixOutput)
      })
    },

    radixInputChange() {
      this.inputValue = this.outputValue = ''
      if (this.radixInput == 16) {
        this.inputType = 'text'
      } else {
        this.inputType = 'number'
      }
    },

    radixOutputChange() {
      if (this.inputValue === '') {
        this.outputValue = ''
        return
      }
      this.outputValue = this.radixConvert(this.inputValue, this.radixInput, this.radixOutput)
    },

    validate() {
      return new Promise(resolve => {
        let isIllegal = false
        let s = this.inputValue
        s = s.split('')
        console.log(s)
        s.forEach((k, i) => {
          if (this.radixInput == 16) {
            if (!/^[0-9a-fA-F]/.test(k)) {
              isIllegal = true
              this.inputValue = s.slice(0, i).join('')
              return
            }
          } else {
            if (Number(k) >= this.radixInput || k === 'e') {
              isIllegal = true
              this.inputValue = s.slice(0, i).join('')
              return
            }
          }
        })
        resolve(this.inputValue)
      })
    },

    radixConvert(num, radixInput, radixOutput) {
      let s = num + ''
      let output = parseInt(s, radixInput).toString(radixOutput)
      return output
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  .card {
    margin-bottom: 20px;
    width: 100%;
    .content-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .input {
      margin-left: 10px;
    }
  }
}
</style>
