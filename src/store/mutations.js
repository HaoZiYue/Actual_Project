import {SAVE_SEARCHITEMS,SAVE_SCROLLNAV,SAVE_INDEXDATA} from './mutations-type'
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
  }
}