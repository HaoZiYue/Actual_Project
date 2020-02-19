import ajax from './ajax';

export const getSearchItem = ()=>ajax({
  url:'/search',
  method:'GET'
})
export const getScrollNav = ()=>ajax({
  url:'/getnav'
})
