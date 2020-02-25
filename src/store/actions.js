import {
  getSearchItem,
  getScrollNav,
  getIndexDataList,
  getCateListData,
  getCateRinghtListData,
  getWorthyNav,
  getWaterFallData,
  getPageWaterData} from '../API/index';
import {
  SAVE_SEARCHITEMS,
  SAVE_SCROLLNAV,
  SAVE_INDEXDATA,
  SAVE_CATELIST,
  SAVE_CATERIGHTLIST,
  SAVE_WORTHYNAV,
  SAVE_WATERFALLDATA,
  SAVE_PAGEWATERFALLDATA
} from './mutations-type';
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
  } ,
  async getWorthNavData({commit}){
    let result = await getWorthyNav();
    !!(result.data.code === '200') && commit(SAVE_WORTHYNAV,result.data.data);
  },
  async getWaterFallData({commit}){
    let result = await getWaterFallData();
    !!(result.data.code === '200') && commit(SAVE_WATERFALLDATA,result.data.data[0])
  },
  async getPagesData({commit,page,size}){
    let result = await getPageWaterData(page,size);
    !!(result.data.code === '200') && commit(SAVE_PAGEWATERFALLDATA,result.data.data.result)
  }
}