import {getSearchItem,getScrollNav,getIndexDataList,getCateListData,getCateRinghtListData} from '../API/index';
import {SAVE_SEARCHITEMS,SAVE_SCROLLNAV,SAVE_INDEXDATA,SAVE_CATELIST,SAVE_CATERIGHTLIST} from './mutations-type';
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
  },
  async getCategoryListData({commit}){
    let result = await getCateListData();
    commit(SAVE_CATELIST,result)
  },
  async getCategoryRightListData({commit}){
    let result = await getCateRinghtListData();
    commit(SAVE_CATERIGHTLIST,result)
  } 
}