export interface ICrewsList {
  id: string;
  cellphone: string;
  realName: string;
  updateTime: number;
  status: number;
  userGroup: IUserGroup;
  roles: IRoles;
  operate: IOperate;
}

interface IUserGroup {
  id: string;
  name: string;
}

interface IRoles {
  id: number;
  nme: string;
}

interface IOperate {
    operate: number;
    verify: number;
}

export default class OrderList {
  public deviceType: string = 'mobile'
  public listLoading: boolean = false // 状态
}