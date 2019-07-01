const state = () => ({
	hasLogin:false
})

const mutations = {
	setHasLogin(state,hasLogin){
		state.hasLogin=hasLogin
	}
}

const actions = {
	getHasLogin(hasLogin){
		commit('setHasLogin',hasLogin)
	}
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
