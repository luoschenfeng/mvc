import CommonService from '@/pages/common/service/common-service'
import SelectCrewsClass from '../repository/list-repository'
import {  CrewsList } from '../model/list-page'
export default class Service extends CommonService {
  private model: CrewsList
  constructor(model: CrewsList) {
    super()
    this.model = model
  }
  public async selectCrews(): Promise<any> {
    this.openLoading()
    try {
      await this.initListData()
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
  private async initListData(): Promise<any> {
    await SelectCrewsClass(this.model.query).then(data => {
      this.model.crewsList = data.list
      this.model.total = data.total
      this.model.status = data.status
    })
  }
}