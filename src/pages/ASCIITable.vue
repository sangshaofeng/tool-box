<template>
  <div class="wrapper">
    <a-table :columns="columns" :dataSource="data" bordered :pagination="true">
      <div slot="filterDropdown" slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }" class='custom-filter-dropdown'>
        <a-input
          v-ant-ref="c => searchInput = c"
          :placeholder="`查询 ${column.title}`"
          :value="selectedKeys[0]"
          @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
          @pressEnter="() => handleSearch(selectedKeys, confirm)"
          style="width: 188px; margin-bottom: 8px; display: block;"
        />
        <a-button
          type='primary'
          @click="() => handleSearch(selectedKeys, confirm)"
          icon="search"
          size="small"
          style="width: 90px; margin-right: 8px"
        >查询</a-button>
        <a-button
          @click="() => handleReset(clearFilters)"
          size="small"
          style="width: 90px"
        >重置</a-button>
      </div>
      <a-icon slot="filterIcon" slot-scope="filtered" type='search' :style="{ color: filtered ? '#108ee9' : undefined }" />

      <template slot="customRender" slot-scope="text">
        <span v-if="searchText">
          <template v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">
            <mark v-if="fragment.toLowerCase() === searchText.toLowerCase()" :key="i" class="highlight">{{fragment}}</mark>
            <template v-else>{{fragment}}</template>
          </template>
        </span>
        <template v-else>{{text}}</template>
      </template>
    </a-table>
  </div>
</template>

<script>
import ASCII from '@/ASCII.js'
const columns = [
  { title: '2进制', dataIndex: 'b2', align: 'center' },
  { title: '8进制', dataIndex: 'b8', align: 'center' },
  {
    title: '10进制',
    dataIndex: 'b10',
    key: "b10",
    align: 'center',
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customRender',
    },
    onFilter: (value, record) => record.b10.toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus()
        })
      }
    },
  },
  { title: '16进制', dataIndex: 'b16', align: 'center' },
  { title: '缩写/字符',
    dataIndex: 'summ',
    key: 'summ',
    align: 'center',
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customRender',
    },
    onFilter: (value, record) => record.summ.toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus()
        },0)
      }
    },
  },
  { title: '描述', dataIndex: 'expl', align: 'center' },
]
export default {
  name: 'ASCII',
  data() {
    return {
      data: ASCII,
      columns,
      searchText: '',
      searchInput: null,
    }
  },
  methods: {
    handleSearch (selectedKeys, confirm) {
     confirm()
     this.searchText = selectedKeys[0]
   },
    handleReset (clearFilters) {
      clearFilters()
      this.searchText = ''
    },
  }
}
</script>

<style lang="css" scoped >
.custom-filter-dropdown {
  padding: 8px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
}

.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.ant-table-row td {
  background: #fff !important;
}
</style>
