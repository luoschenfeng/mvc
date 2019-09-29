import CommonService from '@/pages/common/service/common-service'
import { selectCrews } from '../api/crewsManegement'
import { ICrewsList, OrderList } from '../model/list-page'
export default class Service extends CommonService {
  private crewsMap: ICrewsList[] = []
  private model: OrderList
  constructor(model: OrderList) {
    super()
    this.model = model
  }
  public async fetchDataTpl() {
    this.openLoading()
    try {
      let category = await selectCrews({ limit: 10, search: '', page: 1 })
      this.categoryMap = category.data
      this.sortCategoryMap()
      this.buildParentCategory()
      this.initListData()
      this.closeLoading()
    } catch (err) {
      this.closeLoading()
    }
  }
  public openLoading(): void {
    this.model.listLoading = true
  }
  public closeLoading(): void {
    this.model.listLoading = false
  }
}