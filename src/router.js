import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home =() => import('@/home/Home.vue')
const shop =() =>import('@/pages/shop/shop.vue')
const good =() => import('@/pages/good/good.vue') 
const Publish = () => import('@/pages/good/Publish.vue')
const Login = () => import('@/login/login.vue')
const router= new VueRouter({
	mode:'hash',
	routes:[
		{path:'/shop', component:shop},
		{path:'/good' , component:good},
		{path:'/Publish' , component:Publish},
		{path:'/' , component:Home},
		{path:'/login' , components:{
			loginss: Login
		}},
		{path:'/*' , redirect:'/'}
	] 
})

//全局路由守卫
router.beforeEach((to,from , next) =>{
	const isLogin = localStorage.getItem('isLogin')
	console.log('isLogin' , isLogin)
	if(to.path === '/login'){
		next()
	}else{
		if(isLogin==1){
			next()
		}else{
			next('/login')
		}
	}	
})

	

export default router