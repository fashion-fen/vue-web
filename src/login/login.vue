<template>
	<div>
		<h1>login</h1>
		<el-button type="primary" @click='login'>主要按钮</el-button>
	</div>
</template> 

<script>
	//import { fetchLogin } from '@/utils/api'
	import { mapActions, mapMutations } from 'vuex'
	export default {
		data:function(){
			return {
				username:'1917',
				password : ''
			}
		},
		methods:{
			...mapActions('user', ['userLogin']),
			...mapMutations('user' , ['updateUserinfo']),
			login(){
				const data={
					username:this.username,
					password:this.password
				}
				this.$http.fetchLogin(data).then(res=>{
					console.log('登录', res )
					localStorage.setItem('token',res.token)
					localStorage.setItem('isLogin' ,1)
					this.updateUserinfo(res)
					this.$router.replace('/')
				})
			}
		}
	}
</script>

<style>
</style>
