import request from '@/bases/utils/request'
import { ISelectCrewsParams } from '@/bases/interface/crewsManagement/api/common'

export function selectCrews(params: ISelectCrewsParams): Promise<any> {
  return request({
    url: 'api-test/crews',
    method: 'GET',
    params
  })
}