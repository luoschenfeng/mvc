import { translatorObjToClass } from '@/bases/utils/translate-to-class'
import { selectCrews } from '../api/crewsManegement'
import { IQuery, CrewsItem } from '../model/list-page'
export default async function listDataClass(query: IQuery) {
  let res = await selectCrews(query)
  let data = {
    list: res.data.data.list,
    status: res.data.status,
    total: res.data.data.total
  }
  data.list = data.list.map((item: CrewsItem) => {
    return translatorObjToClass(item, CrewsItem)
  })
  return data
}