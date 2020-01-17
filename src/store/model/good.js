import { fetchGoodList } from '@/utils/api'

const goodStore = {
	namespaced:true,
	state:{
		list:[]
	},
	mutations:{
		getGoodList(state , payload){
			state.list=payload
		}
	},
	actions:{
		getList(store){
			fetchGoodList().then(res=>{
				store.commit('getGoodList' , res.list)
			})
		}
	}
}
export default goodStore