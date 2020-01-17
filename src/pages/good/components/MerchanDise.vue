<template>
	<div class="from-ipt">
		<el-row class='row'>
			<el-col :span="2">
				<span>商品名：</span>
			</el-col>
			<el-col :span="5">
				<el-input  placeholder="" size='small'></el-input>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
	data() {
		return {
		input: ''
		}
	}
	}
</script>

<style>
	.from-ipt{
		span{
			display: block;
			text-align: center;
			height: 30px;
			line-height:30px ;
			float:right ;
		}
	}
</style>
