<template>
	<div class="aside">
		<div class="navs1">
			<i class="fa fa-thumbs-up fa-2x"></i>
		</div>
		<div v-for='(item , idx) in navs' :key='idx'>
			<!--active-class是路由模块的router-link组件中的属性，用来做选中样式的切换；  -->
			<router-link  :to="item.path"  active-class='nav_on' tag="span">
				<div class="nav">
					<i class="fa" :class="item.icon"></i>
					<span v-text="item.text"></span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){ 
			return{
				navs:[
					{path:'/shop',text:'店铺',icon:'fa-thumbs-up'},
					{path:'/good',text:'商品',icon:'fa-thumbs-up'},
					{path:'/order',text:'订单',icon:'fa-thumbs-up'},
					{path:'/user',text:'客户',icon:'fa-thumbs-up'}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.aside{
			box-sizing: border-box;
			padding: 10px 0;
			width: 100%;
			background:rgb(68,68,68);
			height: 100%;
			color: red;
			text-align: center;
			
		}
		.navs1{
			
			margin: 0 auto;
			width: 35px;
			height: 35px;
			border-radius:50% ;
			background: white;
			line-height: 35px;
		}
		.nav {
			
			color: #aaa;
			margin: 5px 0;
			line-height: 50px;
			text-align: center;
			font-size: 14px;
			cursor: pointer;
			> span {
				padding-left: 5px;
			}
		}
		.nav:hover {
			background: rgba(102, 102, 102, 1);
			color: white;
		}
		.nav_on .nav{
		background: white;
		color: black;
		}
		
</style>
