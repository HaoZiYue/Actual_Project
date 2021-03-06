import {SAVE_SEARCHITEMS,SAVE_SCROLLNAV,SAVE_INDEXDATA,SAVE_CATELIST,SAVE_CATERIGHTLIST,SAVE_WORTHYNAV,SAVE_WATERFALLDATA,SAVE_PAGEWATERFALLDATA} from './mutations-type'
export default{
  [SAVE_SEARCHITEMS](state,searchItem){
      state.searchList = searchItem
  },
  [SAVE_SCROLLNAV](state,navList){
    state.scrollNav = navList;
    console.log(state.scrollNav)
  },
  [SAVE_INDEXDATA](state,indexData){
    state.indexData = indexData
  },
  [SAVE_CATELIST](state,cateList){
    state.cateListData = cateList
  },
  [SAVE_CATERIGHTLIST](state,cateRightList){
    state.cateRightList = cateRightList
  },
  [SAVE_WORTHYNAV](state,worthyNav){
    state.worthyNav = worthyNav
  },
  [SAVE_WATERFALLDATA](state,waterFall){
    state.waterFall = waterFall
  },
  [SAVE_PAGEWATERFALLDATA](state,pageData){
    state.waterFallPageData = pageData
  }
}