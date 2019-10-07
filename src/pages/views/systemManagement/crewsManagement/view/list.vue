<template>
  <div class="container">
    <el-table
      :data="model.crewsList"
      style="width: 100%"
    >
      <el-table-column
        prop="realName"
        label="人员名称"
        width="180"
      />
      <el-table-column
        prop="userGroup.name"
        label="委办局"
        width="180"
      />
      <el-table-column
        prop="cellphone"
        label="电话"
      />
      <el-table-column
        label="状态"
      >
        <template slot-scope="scope">
          <el-button
            plain
            :type="scope.row.statusType()"
          >
            {{ scope.row.statusText(scope.row.status) }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="更新时间"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | formatTime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-dropdown>
            <span class="el-dropdown-link">
              操作<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>重置密码</el-dropdown-item>
              <el-dropdown-item>查看详情</el-dropdown-item>
              <el-dropdown-item>{{ scope.row.statusText(!scope.row.status) }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from '../service/list-services'
import { CrewsList } from '../model/list-page'
import OperateStore from '@/pages/common/service/operate-store'
@Component
export default class CrewsListManagement extends Vue {
  private model: CrewsList = {
    deviceType: '',
    listLoading: false,
    query: {
      limit: 10,
      page: 1,
      search: '',
    },
    crewsList: [],
    status: 0,
    total: 0
  }
  private service: Service = new Service(this.model)
  private async created(): Promise<any> {
    this.service.operateStore(new OperateStore())
    await this.service.selectCrews()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>