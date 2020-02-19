import {SAVE_SEARCHITEMS,SAVE_SCROLLNAV} from './mutations-type'
export default{
  [SAVE_SEARCHITEMS](state,searchItem){
      state.searchList = searchItem
  },
  [SAVE_SCROLLNAV](state,navList){
    state.scrollNav = navList
  }
}