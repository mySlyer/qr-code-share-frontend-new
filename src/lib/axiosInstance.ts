import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000 * 60,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;

// axiosInstance.interceptors.request.use(
// 	config => {
// 		const token = localStorage.getItem('token');
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}
// 		console.log('Sending request:', config);
// 		return config;
// 	},
// 	error => {
// 		console.error('Request error:', error);
// 		return Promise.reject(error);
// 	}
// );

// axiosInstance.interceptors.response.use(
// 	response => {
// 		console.log('Received response:', response);
// 		return response.data;
// 	},
// 	error => {
// 		console.error('Response error:', error);
// 		if (error.response) {
// 			const status = error.response.status;
// 			if (status === 401) {
// 				// 处理未授权错误
// 			} else if (status === 404) {
// 				// 处理未找到资源错误
// 			} else if (status === 500) {
// 				// 处理服务器内部错误
// 			}
// 		}
// 		return Promise.reject(error);
// 	}
// );
