import axios from 'axios';

axios.defaults.baseURL = "http://react.zbztb.cn/site/";

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    console.log(response);
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export const getGoods=()=>axios.get("goods/gettopdata/goods");


