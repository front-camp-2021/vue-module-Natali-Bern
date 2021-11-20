import { createStore } from 'vuex';
import actions from './actions/actions';
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

Vue.use(Vuex);

export default createStore({
  state: {
    products: [],
  },
  mutations,
  actions,
  getters,
});
