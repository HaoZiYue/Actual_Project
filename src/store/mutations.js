import {SAVE_SEARCHITEMS,SAVE_SCROLLNAV,SAVE_INDEXDATA,SAVE_CATELIST} from './mutations-type'
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
  }
}