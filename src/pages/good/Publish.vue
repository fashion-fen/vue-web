<template>
	
	<div class="publist-consten">
		<div>
		<span>
			1.编辑基本信息
		</span>
		<div class="triangle"></div>
		<div class="triangle-right"></div>
		<span>
			2.编辑商品详情
		</span>
		</div>
		<div class="commodity">
			<b>商品类型</b>
		</div>
		<tabList v-model='tabs' :list='list'></tabList>
		<div class="informat">
			<b>
				基本信息
			</b>
		</div>
		<MerchanDise ></MerchanDise>
	</div>
</template>

<script>
	import tabList from './components/tabList.vue'
	import MerchanDise from './components/MerchanDise.vue'
	export default {
		components:{
			tabList,
			MerchanDise
		},
		
		data:function(){
			return{
				list:[
					{id:'0' , title:'实物商品' , texts:'（物流发货）'},
					{id:'1' , title:'虚拟商品' , texts:'（无需物流）'},
					{id:'2' , title:'电子卡件' , texts:'（物流发货）'},
					{id:'3' , title:'酒店商品' , texts:'（物流发货）'},
					{id:'4' , title:'蛋挞烘焙' , texts:'（同城配送）'}
				],
				tabs:'0'
				
			}
		}
	}
</script>

<style lang="scss" scoped>

	.publist-consten{
		height: 100%;
		background: white;
		&>div{
			position:relative;
			span{
				height: 45px;
				display: inline-block;
				width: 49%;
				text-align: center;
				line-height: 45px;
				
			}
			span:nth-child(1){
				background: rgb(51,136,255);
				color: white;
				margin-right: 7px;
			}
			span:nth-child(4){
				background:rgb(248,248,248);
				color: #BD63C5;
			}
			.triangle{
				z-index: 10;
				position:absolute;
				display: inline-block;
				top:0;
				left: 49%;
				width: 0;
				height: 0;
				border-top:22px solid transparent ;
				border-bottom:22px solid transparent;
				border-left: 8px solid rgb(51,136,255) ;
				

			}
			.triangle-right{
				position:absolute;
				display: inline-block;
				top:0;
				left: 49.6%;
				width: 0;
				height: 0;
				border-top:22px solid transparent ;
				border-bottom:22px solid transparent;
				border-left: 6px solid white;
			}
		}
		.commodity{
			margin-top: 20px;
			height: 38px;
			line-height: 38px;
			width: 100%;
			font-size: 16px;
			background: rgb(248,248,248);
			&>b{
				padding-left: 5px;
			}
		}
		.informat{
			margin-top: 20px;
			height: 38px;
			line-height: 38px;
			width: 100%;
			font-size: 16px;
			background: rgb(248,248,248);
			&>b{
				padding-left: 5px;
			}
		}
		
	}
	
</style>
