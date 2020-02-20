import {getSearchItem,getScrollNav,getIndexDataList} from '../API/index';
import {SAVE_SEARCHITEMS,SAVE_SCROLLNAV,SAVE_INDEXDATA} from './mutations-type';
export default{
  async getSearchItems({commit}){
    let result = await getSearchItem();
    // console.log(result)
    
    !!(result.code === '200') && commit(SAVE_SEARCHITEMS,result)
  },
  async getScrollNavList({commit}){
    let result = await getScrollNav();
    console.log(result)
    commit(SAVE_SCROLLNAV,result)
  },
  async getIndexData({commit}){
    let result = await getIndexDataList()
    commit(SAVE_INDEXDATA,result)
  }
}