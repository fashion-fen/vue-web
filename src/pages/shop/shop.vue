<template>
	<div>
		<template>
			<el-tabs v-model="activeName" >
			<el-tab-pane label="店铺主页" name="first">
				<TabContent1></TabContent1>
			</el-tab-pane>
			<el-tab-pane label="店铺导航" name="second">
				<TabContent2></TabContent2>
			</el-tab-pane>
			<el-tab-pane label="个人中心" name="third">
				<TabContent3></TabContent3>
			</el-tab-pane>
			</el-tabs>
		</template>
	</div>
</template>


<script>
import TabContent1 from './components/TabContent1'
import TabContent2 from './components/TabContent2'
import TabContent3 from './components/TabContent3'
	export default {
		components:{
			TabContent1,
			TabContent2,
			TabContent3
		},
		data() {
		return {
			activeName: 'first'
		};
		},
		methods: {
		
		}
	};
</script>

<style>
</style>
