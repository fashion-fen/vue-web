<template>
	<div class="form-box">
		<el-row class='row'>
			<el-col :span="3">
				<span>商品名称：</span>
			</el-col>
			<el-col :span="5">
				<el-input v-model="value.name" placeholder="请输入内容" size='small'></el-input>
			</el-col>
			<el-col :span="3">
				<span>商品分组：</span>
			</el-col>
			<el-col :span="5">
					<el-select v-model="value.group_no" placeholder="请选择"  size='small' >
						<el-option
							v-for="(item , idx) in goodGroupList"
							:key="idx"
							:label="item.label"
							:value="item.id" >
						</el-option>
					</el-select>
			</el-col>
			
			<el-col :span="3">
				<span>商品类型：</span>
			</el-col>
			<el-col :span="5">
					<el-select v-model="value.type_no" placeholder="请选择"  size='small'>
						<el-option
							v-for="(item , idx) in goodTypeList"
							:key="idx"
							:label="item.label"
							:value="item.id">
						</el-option>
					</el-select>
			</el-col>
		</el-row>
		
		<el-row class='row'>
			<el-col :span="3">
				<span>销量：</span>
			</el-col>
			<el-col :span="5">
				<div class="foo">
					<div>
						<el-input v-model="value.sale_min"  size='small'></el-input>
					</div>
					<div>
						<b>一</b>
					</div>
					<div>
						<el-input v-model="value.sale_max"  size='small'></el-input>
					</div>
				</div>
			</el-col>
			<el-col :span="3">
				<span>价格（元）：</span>
			</el-col>
			<el-col :span="5">
					<div class="foo">
						<div>
							<el-input v-model="value.price_min"  size='small'></el-input>
						</div>
						<div>
							<b>一</b>
						</div>
						<div>
							<el-input v-model="value.price_max"  size='small'></el-input>
						</div>
					</div>
			</el-col>
			
			<el-col :span="3">
				<span>库存扣减方式：</span>
			</el-col>
			<el-col :span="5">
					<el-select v-model="value.deduction_no" placeholder="请选择"  size='small'>
						<el-option key='1' label='全部' value='0'></el-option>
						<el-option key='2' label='拍下扣减库存' value='1'></el-option>
						<el-option key='3' label='付款扣减库存' value='2'></el-option>
					</el-select>
			</el-col>
		</el-row>
		
		<el-row  class='row'>
			<div>
				<el-col :span="3">
					<span> .&nbsp;</span>
				</el-col>
				<el-col  :span="4">
				<el-button type="primary" size='small' @click='filterHandle'>筛选</el-button>
				<el-button size='small '>导出</el-button>
				</el-col>
				<el-col :span="4">
					<span> 查看已导出列表&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重置筛选条件</span>
				</el-col>
				
			</div>
		</el-row>
	</div>
</template>

<script>
	import { goodGroupList , goodTypeList } from '@/utils/map'
	
	export default {
		props:{
			value:{
				type:Object,
				required:true
			}
		},
		data() {
			return {
				goodTypeList,
				goodGroupList
			}
		},
		methods:{
			//子组件点击事件
			filterHandle(){
				//触发父组件的自定义事件
				this.$emit('filter')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.form-box{
		margin-top:20px ;
		box-sizing: border-box;
		background: rgb(242,243,245);
		.row{
			padding-top: 20px;
			padding-bottom: 10px;
			span{
				display: inline-block;
				text-align:center ;
				float: right;
				font-size:14px ;
				line-height: 30px;
			}
			.foo{
				&>div{
					display: inline-block;
					
				}
				&>div:nth-child(1) {
					width: 40%;
				}
				&>div:nth-child(2) {
					width: 20%;
					text-align: center;
					
					
				}
				&>div:nth-child(3) {
					width: 40%;
					
				}
			}
		}
	
	}
</style>
