export interface IUserState {
  adminId: string;
  adminName: string;
  adminAvatar: IAdminAvatar;
  adminRole: IItemRole[];
}

export interface permissionPayload {
  adminRole: IItemRole[];
}

export interface IAdminAvatar {
  name: string,
  identify: string,
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