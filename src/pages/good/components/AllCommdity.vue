<template>
	<div class="Allcommd">
		<el-tabs v-model="activeName" type="border-card" >
		<el-tab-pane label="全部" name="first">
			<onSale :list='list'></onSale>
		</el-tab-pane>
		<el-tab-pane label="销售中" name="second">
			<onSale></onSale>
		</el-tab-pane>
		<el-tab-pane label="已售罄" name="third">
			<onSale></onSale>
		</el-tab-pane>
		<el-tab-pane label="仓库中" name="fourth">
		<onSale></onSale>
		</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	//import {mapActions , mapMutations ,mapState} from 'vuex'

	export default {
		components:{
			//...mapState('good', [])
		},
		data() {
		return {
			//list:[],
			activeName: 'second'
		}
		}
		// mounted() {
		// 	this.getList()
		// },
		// methods: {
		// 	...mapMutations('good' , ['getGoodList'] ),
		// 	...mapActions('good',['getList'])
		// }
	};
</script>

<style lang="scss" scoped>
	.Allcommd{
		margin-top:20px ;
	}
</style>
