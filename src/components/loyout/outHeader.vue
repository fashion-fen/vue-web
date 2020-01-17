<template>
	<div class="header">
		<div v-if="$route.path==='/'">
			<div class="header-left">
				<span v-text="userinfo.username"></span>
				<el-tag effect='plain' @click='cc'>试用期</el-tag>
				<el-tag color='white'>SVIP</el-tag>
				<el-tag color='white'>有赞担保</el-tag>
			</div >
			<div class="header-right" @click='logout' >
				<span>fashion</span>
				<i class="fa fa-user-circle" ></i>
			</div>
		</div>
		<div v-else-if="$route.path==='/Publish'">
			<a @click="goods">商品管理</a>
			<span>/</span>
			<span>发布商品</span>
		</div>
		<div v-else>商品管理</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	//computed 计算属性 
	computed:{
		...mapState('user' , ['userinfo'])
	},
	methods:{
		cc(){
			alert('试你大爷')
		},
		logout(){
			
			this.$confirm('你确定要退出？','提示', {
				confirmButtonText:'确定',
				cancelButtonText:'取消',
				type:'warning'
			}).then(()=>{
				localStorage.removeItem('isLogin')
				localStorage.removeItem('token')
				this.$router.replace('/login')
				this.$message({
					type:'success',
					message: '退出成功!'
				})
			})
		},
		goods(){
			this.$router.push('/good')
		}
	}
}	
	
</script>
 
<style lang="scss" scoped>
	.header {
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 1);
	overflow: hidden;
	line-height: 60px;
	font-size: 12px;
	box-sizing: border-box;
	padding: 0 10px;
	.header-left {
		float: left;
		cursor: pointer;
		>span:nth-child(1) {
		color: #323232;
		font-size: 16px;
		font-weight: bold;
		}
	}
	.header-right{
		margin-right: 5%;
		float: right;
		font-size:20px;
		.fa{
			font-size: 30px;
			line-height: 60px;
			
		}
	}
	}
</style>
