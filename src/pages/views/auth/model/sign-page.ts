export interface IUserState {
    adminId: string;
    adminName: string;
    adminAvatar: string;
    adminRole: IItemRole[];
  }
export interface permissionPayload {
    adminRole: IItemRole[];
  }
export interface IItemRole {
    id: number;
    children: IElementRole[];
  }

export interface routesPayload {
    _permission: IPermission;
  }

export interface IPermission {
    modelPermission: number[];
    modelOperationPermission: {
        [propName: string]: string[];
    };
  }

export interface IElementRole {
    webName: number;
  }