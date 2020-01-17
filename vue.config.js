
module.exports = {
	 //反向代理
  devServer:{
	//改变端口号
	port: 9000 ,
	// Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作.
	proxy:{
		'/youzan': {
		target: 'http://10.36.136.170:9999',
		changeOrigin: true
		}
	}
  }
}