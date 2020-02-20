import ajax from './ajax';

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
