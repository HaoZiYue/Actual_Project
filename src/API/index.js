import ajax from './ajax';
import axios from 'axios'
export const getSearchItem = ()=>ajax({
  url:'/search',
  method:'GET'
})
export const getScrollNav = ()=>ajax({
  url:'/getnav'
})
export const getIndexDataList = ()=>ajax({
  url:'/getindexdata'
})
export const getCateListData = ()=>ajax({
  url:'/getcateNavListData'
})
export const getCateRinghtListData = ()=>ajax({
  url:'/getlist'
})
export const getWorthyNav = () =>axios.get('/wangyi/topic/v1/know/navWap.json')
export const getWaterFallData = ()=>axios.get('/wangyi/topic/v1/find/recManual.json')
export const getPageWaterData = (page,size)=>axios.get('/wangyi/topic/v1/find/recAuto.json',{params:{page,size}})