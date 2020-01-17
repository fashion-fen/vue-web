<template>
	<div class="app">
		<!-- 路由的顶级出口 -->
		<router-view v-if="$route.path==='/login'" name="loginss"></router-view>
		
		
		<el-container v-else class='app-container'>
		<!-- 导航 -->
		<el-aside width="120px">
			<outAside></outAside> 
		</el-aside>
		<el-container class='header-container'>
			<!-- 头部 -->
			<el-header class='headr-box'>
				<outHeader></outHeader>
			</el-header>
			<!-- 内容 -->
			<el-main >
				<outMain></outMain>
			</el-main>
		</el-container>
		</el-container>
	</div>
</template>

<script>

import outAside from '@/components/loyout/outAside'
import outMain from '@/components/loyout/outMain'
import outHeader from '@/components/loyout/outHeader'
export default {
  components:{
		outAside,
		outMain,
		outHeader
  }
}
</script>

<style lang="scss">
	html,body{
		margin: 0;
		padding: 0;
		height: 100%;
		background: rgb(247,248,250);
	}
	.app{
		height: 100%;
	}
	.headr-box{
		padding-left: 0 !important;
	}
	.header{
		height: 100%;
		background: white;
	}
	.app-container{
		height: 100%;
	}
	.header-container{
		height: 100%;
	}
	el-main{
		height: 100%;
		background: white;
	}
	
</style>
 