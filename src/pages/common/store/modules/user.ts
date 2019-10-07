import { MutationTree, Module, ActionTree, GetterTree } from 'vuex'
import { signOut } from '@/pages/common/api/auth'
// import { userMock } from '../translater/mock'

import { userType } from '../mutation-types'
import { RootState, IUserState, IItemRole } from '../type'
import configCode from '@/bases/config/configCode'

const { HTTP_RESPONSE_STATUS_SUCCESS } = configCode

const { SET_ADMIN_ID, SET_ADMIN_AVATAR, SET_ADMIN_NAME, SET_ADMIN_ROLEID } = userType

const state: IUserState = {
  adminId: '',
  adminName: '',
  adminAvatar: {
    name: '',
    identify: ''
  },
  adminRole: [
    {
      id: 1,
      children: []
    }
  ],
}

const mutations: MutationTree<IUserState> = {
  'INIT_MODULES_STATE'(state) {
    state.adminId = ''
    state.adminName = ''
    state.adminAvatar = {
      name: '',
      identify: ''
    }
    state.adminRole = []
  },
  [SET_ADMIN_ID](state, payload: { adminId: string }) {
    state.adminId = payload.adminId
  },
  [SET_ADMIN_AVATAR](state, payload: { adminAvatar: { name: string, identify: string} }) {
    state.adminAvatar = payload.adminAvatar
  },
  [SET_ADMIN_NAME](state, payload: { adminName: string }) {
    state.adminName = payload.adminName
  },
  [SET_ADMIN_ROLEID](state, payload: {adminRole: IItemRole[] }) {
    state.adminRole = payload.adminRole
  }
}

const actions: ActionTree<IUserState, RootState> = {
  GetUserInfo({ commit }, { data }) {
    return new Promise(resolve => {
      commit({
        type: 'SET_ADMIN_ID',
        adminId: data.id
      })
      commit({
        type: 'SET_ADMIN_NAME',
        adminName: data.realName
      })
      commit({
        type: 'SET_ADMIN_AVATAR',
        adminAvatar: data.avatar
      })
      commit({
        type: 'SET_ADMIN_ROLEID',
        adminRole: data.adminRole
      })
      return resolve(state)
    })
  },

  SignOut() {
    return new Promise((resolve, reject) => {
      signOut().then(
        (response: any) => {
          const status = parseInt(response.data.status as string, 10)
          if (status === HTTP_RESPONSE_STATUS_SUCCESS) {
            resolve()
          }
          resolve()
        },
        (error: any) => {
          reject(error)
        }
      )
    })
  },

  ClearVuexCache({ commit }) {
    return new Promise((resolve, reject) => {
      commit('app/INIT_MODULES_STATE', {}, { root: true })
      commit('cache/INIT_MODULES_STATE', {}, { root: true })
      commit('errorLog/INIT_MODULES_STATE', {}, { root: true })
      commit('oss/INIT_MODULES_STATE', {}, { root: true })
      // commit('permission/INIT_MODULES_STATE', {}, { root: true })
      commit('tagsView/INIT_MODULES_STATE', {}, { root: true })
      commit('INIT_MODULES_STATE')
    })
  }
}


const getters: GetterTree<IUserState, RootState> = {
  adminId: (state) => state.adminId,
  adminAvatar: (state) => state.adminAvatar,
  adminName: (state) => state.adminName,
  adminRole: (state) => state.adminRole,
}
export const user: Module<IUserState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
