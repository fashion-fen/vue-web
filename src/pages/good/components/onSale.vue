<template>
	<div class="on_sale">
		<div class="sale">
			<el-checkbox v-model="checked"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当页全选</el-checkbox>
			<div><el-tag color='white' effect='plain'>下架</el-tag></div>
			<div><el-tag color='white'>改分组</el-tag></div>
			<div><el-tag color='white'>会员价</el-tag></div>
			<div><el-tag color='white'>批量设置</el-tag></div>
			
			<div class="tab">
				<el-table
				:data="list"
				style="width: 100%"
				:default-sort = "{prop: 'date', order: 'descending'}"
				>
				<el-table-column
				type="selection"
				width='80'>
				</el-table-column >
					<el-table-column
					fixed
					label="商品名"
					width="150 ">
					<template slot-scope="scope">
					<div class="good_item">
						<img :src="scope.row.src" alt="商品">
						<div v-text='scope.row.name'></div>
					</div>
					</template>
					</el-table-column>
				
				<el-table-column
				fixed
				prop="price"
				label="价格(元)"
				sortable
				width="100 ">
				</el-table-column>
				<el-table-column
				prop="visit_num"
				label="访问量"
				sortable
				width="120">
				</el-table-column>
				<el-table-column
				prop="inventory_num"
				label="库存"
				sortable
				width="120">
				</el-table-column>
				<el-table-column
				prop="sale_num"
				label="销量"
				sortable
				width="120">
				</el-table-column>
				<el-table-column
				prop="order"
				label="序号"
				sortable
				width="100">
				</el-table-column>
				<el-table-column
				prop="create_time"
				label="创建时间"
				sortable
				:formatter='timeHand'
				width="120">
				</el-table-column>
				<el-table-column
				prop="status_no"
				label="商品状态"
				sortable
				width="120">
				</el-table-column>
				<el-table-column
				fixed="right"
				label="操作"
				width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				</template>
				</el-table-column>
				</el-table>
			</div>
			
			
			
		</div>
	</div>
</template>

<script>
	import moment from 'moment'
	export default {
		props:{
			list:{
				type:Array,
				required:true
			}
		},
		data() {
			return {
			checked: true
			}
		},
		methods: {
			handleClick() {
			
			},
			
			formatter(row){
				return row.address
			},
			timeHand(row){
				return moment(row.create_time).format(' h:mm:ss');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.on_sale{
		background: white;
	}
	.sale{
		&>div{
			display: inline-block;
			margin-left:10px ;
			color: black;
		}
		.tab{
			margin-top:10px ;
		}
		
	}
		.good_item {
		text-align: center;
		&>img {
			display: inline-block;
			width: 30px;
			height: 40px;
			cursor: pointer;
		}
		}
</style>
