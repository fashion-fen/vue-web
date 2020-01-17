<template>
	<div>
		<div class="butn">
			<el-button type="primary" size='small ' @click='skip' >主要按钮</el-button>
		</div>
		<!--@filter自定义事件  -->
		<FormFilter v-model='formParams' @filter='filterHandle'></FormFilter>
		
		<TabFiler v-model='TabIdx'></TabFiler>
		<!-- <AllCommdity></AllCommdity> -->
		<onSale :list='list'></onSale>
		
		<div class="block">
			<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[5, 10, 15, 20]"
			:page-size="5"
			layout="total, sizes, prev, pager, next, jumper"
			:total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	//晓引 api 方法	
	import { fetchGoodList } from '@/utils/api'
	const FormFilter = ()=>import('./components/FormFilter.vue')
	const TabFiler = () => import('./components/TabFiler.vue')
	//const AllCommdity = ()=>import('./components/AllCommdity.vue')
	const onSale = () => import('./components/onSale.vue')
	export default {
		//子组件
		components:{
			FormFilter,
			TabFiler,
			onSale
		},
		//总数据库
		data:function(){
			return {
				
				TabIdx:'-1',
				total:0,
				list:[],
				currentPage:0,
				formParams:{
					name:'',
					group_no:0,
					type_no:0,
					deduction_no:'0',
					sale_max:0,
					sale_min:0,
					price_max:0,
					price_min:0
				}
			}
		},
		//监听
		watch:{
			TabIdx(){
				this.changeList()
			},
		},
		//生命周期函数
		mounted() {
			//入参
			this.changeList()
		},
		//方法
		methods:{
			
			//掉接口
			changeList(){
				const params={
					status_no:this.TabIdx, 
					page:this.currentPage, //页数
					size:this.currentSize,//每页数量
					// name: this.formParams.name,
					// group_no: this.formParams.group_no,
					// type_no: this.formParams.type_no,
					// deduction_no:this.formParams.deduction_no,
					// sale_max:this.formParams.sale_max,
					// sale_min:this.formParams.sale_min,
					// price_max:this.formParams.price_max,
					// price_min:this.formParams.price_min
					...this.formParams
				}
				if(params.sale_max === 0) delete params.sale_max
				if(params.price_max === 0) delete params.price_max
				fetchGoodList(params).then(res=>{
					this.list=res.list
					this.total=res.total
				})
			},
			filterHandle(){
				//console.log('父组件 执行帅选')
				this.changeList()
			},
			handleSizeChange(val) {
				this.currentSize=val
				this.changeList()
			},
			handleCurrentChange(val) {
				this.currentPage=val
				this.changeList()
			},
			
			//发布商品 按键点击
			skip(){
				this.$router.push('./Publish')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.block{
		margin: 10px 15px;
		float: right;
	}
</style>
