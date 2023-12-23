import axios from 'axios';
// 导入 element-plus 中的消息和弹框组件
import { ElMessage } from 'element-plus';
 
// 取消请求的标记
// let cancelToken = null;
 
// 创建 Axios 实例
const service = axios.create({
	// baseURL: import.meta.env.VITE_API_URL, // 设置基础 URL
	baseURL: '', // 设置基础 URL
	timeout: 10000, // 设置超时时间
	headers: { 'Content-Type': 'application/json' }, // 设置请求头
});
 
// 请求拦截器
service.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么？
		const token = localStorage.getItem('token');
		if (token) config.headers['token'] = token;
 
		// // 如果存在上一次的请求，则取消它
		// if (cancelToken) cancelToken.cancel('取消请求');
		// // 如果存在上一次的请求，则取消它
		// cancelToken = axios.CancelToken.source();
		// config.cancelToken = cancelToken.token; // 设置取消请求的 token
 
		return config;
	},
	(error) => {
		// 对请求错误做些什么？
		return Promise.reject(error);
	}
);
 
// 响应拦截器
service.interceptors.response.use(
	(response) => {
		// 对响应成功数据做点什么？
		const res = response.data;
		if (res.code && res.code !== 200) {
			// 处理一些常见的错误情况
			// if (res.code === 401 || res.code === 4001) {
			// 	// 退出登录并跳转到登录页
			// 	localStorage.removeItem('token');
			// 	window.location.href = '/home';
			// 	ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
			// 		.then(() => {})
			// 		.catch(() => {});
			// }
			return Promise.reject(response);
		} else {
			return response.data;
		}
	},
	(error) => {
		// 对响应错误数据做点什么？
		console.log('！这里输出==>：', error);
		// 需要根据不同的错误码进行不同的处理，和后端约定好
		let errorMessage;
		/* 
			axios.isCancel(error) 是 Axios 库中的一个方法，用于判断一个错误对象是否是由于请求取消导致的。
			当使用 axios.CancelToken 取消请求时，会抛出一个带有一个 message 属性的错误对象。
			axios.isCancel(error) 的作用就是判断这个错误对象的类型，如果是由请求取消导致的错误，则返回 true，否则返回 false。
		    console.log('打印cancelToken.cancel('xxx')传入来的值', error.message);
	    */
		if (axios.isCancel(error)) {
			ElMessage.error(error.message || '请求被取消'); // 显示错误消息
		} else {
			// 书写else是为了return Promise.reject(error);在抛一次错
			const describeForNameMap = [
				[
					() => error.message.indexOf('timeout') !== -1,
					() => (errorMessage = '网络超时 🤖'),
				],
				[
					() => error.message === 'Network Error',
					() => (errorMessage = '网络连接错误 🤪'),
				],
				[
					() => error.response?.data,
					() => (errorMessage = error.response.statusText),
				],
			];
			// 获取符合条件的子数组
			const getDescribe = describeForNameMap.find((item) => item[0]());
			// 执行子数组中的函数
			getDescribe && getDescribe[1]();
			ElMessage.error(errorMessage); // 显示错误消息
			// 抛错请求异常上面的、这里的错误信息是英文的
			return Promise.reject(error);
		}
	}
);
 
// 导出 service将其命名为axios , 同时还导出了一个名为cancelToken的变量（取消请求）
export { service as axios };