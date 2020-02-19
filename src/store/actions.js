import {getSearchItem,getScrollNav} from '../API/index';
import {SAVE_SEARCHITEMS,SAVE_SCROLLNAV} from './mutations-type';
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
  }
}