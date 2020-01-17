<template>
	<div class="tab" >
		<div v-for="(item , idx) in list"
		:key='idx'
		:class="{'on' : item.id == value }"
		@click="tabs(item.id)">
			<p v-text="item.title"></p>
			<span v-text="item.texts"></span>
		</div>
		
	</div>
</template>
 
<script>
	export default{
		props:{
			list:{
				type:Array,
				required: true
				
			},
			value:{
				type:String,
				required:false,
				default:'0'
			}
		},
		methods:{
			tabs(id){
				this.$emit('input',id)
			}
		}
	}
</script>

<style lang="scss" scoped>

	.tab{
		margin-top: 20px;
		background: white;
		//overflow: hidden;
		&>div{
			margin-right: 15px;
			float: left;
			width: 118px;
			height: 50px;
			text-align: center;
			border: 1px solid #C0C4CC;
			&>p{
				margin: 3px 0 0 0 ;
			}
			&>span{
				height: 15px;
				line-height: 15px;
				width: 100%;
				font-size: 12px;
				color: #C0CCDA;
				padding: 0;
			}
		}
		&>div.on{
			border: 1px solid rgb(51,136,255);
			color: rgb(51,136,255);
		}
	}
	.tab:after{
		content: '';
		display: block;
		clear: both;
	}
</style>
