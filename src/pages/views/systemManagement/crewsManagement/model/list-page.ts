interface IUserGroup {
  id: string;
  name: string;
}

interface IRoles {
  id: number;
  name: string;
}

interface IOperate {
  operate: number;
  verify: number;
}

export interface IQuery {
  limit: number;
  page: number;
  search: string;
}

export class CrewsItem {
  id: string = '';
  cellphone: string = '';
  realName: string = '';
  updateTime: number = 1;
  status: number = 1;
  userGroup: IUserGroup = {id: '', name: ''};
  roles: IRoles = {id: 1, name: ''};
  operate: IOperate = {operate: 1, verify: 1};
  statusType(): string {
    if(this.status) {
      return 'success'
    }else {
      return 'danger'
    }
  };
  statusText(status: number): string {
    if(status) {
      return '启用'
    }else {
      return '禁用'
    }
  }
}

export class CrewsList {
  public deviceType: string = 'mobile'
  public listLoading: boolean = false // 状态
  public crewsList: CrewsItem[] = []
  public status: number = 0
  public total: number = 0
  public query: IQuery = {limit: 10, page: 1, search: ''}
}