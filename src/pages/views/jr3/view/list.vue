<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from '../service/list-service'
import OrderList from '../model/list-page'
import OperateStore from '@/pages/common/service/operate-store'
@Component
export default class ListManagement extends Vue {
  private tabPosition: string = 'top'

  private radioSelectList = [
    {
      value: null,
      label: '全部'
    }, {
      value: 0,
      label: '待付款'
    }, {
      value: 2,
      label: '待服务开始'
    }, {
      value: 4,
      label: '服务中'
    }, {
      value: 6,
      label: '待确认服务完成'
    }, {
      value: 8,
      label: '服务完成'
    }, {
      value: 10,
      label: '交易关闭'
    }
  ]

  private model: OrderList = {
    deviceType: '',
    listLoading: false, // 状态
    radio: '全部', // 类型
    query: {
      page: 1,
      size: 10,
      scene: '4'
    },
    total: 0,
    list: [], // 表格data
    startTime: null, // 订单创建起始时间
    endTime: null,
    parentCategory: [ // 服务商一级分类
      {
        value: null,
        label: '全部一级分类'
      }
    ],
    parentCategoryValue: '', //一级分类

    serviceCategory: [
      {
        value: null,
        label: '全部二级分类'
      }
    ],
    serviceCategoryValue: '', // 二级分类
    orderno: '',  // 订单编号

    sellerEnterprise: '', // 服务商企业名称
    sellerLoading: false, // 服务商关键词加载
    sellerEnterpriseList: [], // 服务商企业名称列表

    buyerEnterprise: '', // 买家企业
    buyerLoading: false, // 买家关键词加载
    buyerEnterpriseList: [] // 买家关键词列表
  }
  private service: Service = new Service(this.model)

  private startPickerOptions = {
    disabledDate: this.startDisable
  }
   private endPickerOptions = {
     disabledDate: this.endDisable
   }
   private startDisable(time: any) {
     return this.service.startDisable(time)
   }

   private endDisable(time: any) {
     return this.service.endDisable(time)
   }


   get deviceType(): string {
     return this.service.getDevice()
   }
   private created(): void{
     this.service.operateStore(new OperateStore())
     this.service.fetchDataTpl()
   }

   private radioChange(): void {
     this.service.radioChange()
   }

   private sellerRemoteMethod(query: string) {
     return this.service.sellerRemoteMethod(query)
   }
   private buyerRemoteMethod(query: string) {
     return this.service.buyerRemoteMethod(query)
   }

   private parentCategorySelectChange() {
     this.service.parentCategorySelectChange()
   }

   private handleSizeChange(val: number): void {
     this.service.handleSizeChange(val)
   }
   private handleCurrentChange(val: number): void {
     this.service.handleCurrentChange(val)
   }

   private search(): void {
     this.service.search()
   }
}



</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.el-tag {
  margin: 0 3px;
}
.text {
  font-size: 14px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.item {
  padding: 18px 0;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
<style>
.button-white span.el-radio-button__inner {
  background-color: rgba(0,0,0,0);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>

