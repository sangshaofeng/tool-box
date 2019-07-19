<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">ASCII编码查询表</h4>
            <p class="category">ASCII ((American Standard Code for Information Interchange): 美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统。</p>
          </md-card-header>
          <md-card-content>
            <md-table v-model="ascii" table-header-color="green">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="2进制">{{ item.b2 }}</md-table-cell>
                <md-table-cell md-label="8进制">{{ item.b8 }}</md-table-cell>
                <md-table-cell md-label="10进制">{{ item.b10 }}</md-table-cell>
                <md-table-cell md-label="16进制">{{ item.b16 }}</md-table-cell>
                <md-table-cell md-label="缩写/字符">{{ item.summ }}</md-table-cell>
                <md-table-cell md-label="解释">{{ item.expl }}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import ASCII from '@/assets/ascii.js'

export default {
  data() {
    return {
      ascii: []
    }
  },
  created() {
    this.ascii = ASCII
  }
}
</script>

<style lang="css" scoped >

</style>
