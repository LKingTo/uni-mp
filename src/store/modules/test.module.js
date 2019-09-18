import constants from '../../common/constants';

export default {
  state: {
    moduleDemo: 'store module demo',
  },
  getters: {
    moduleDemoGetter: state => state.moduleDemo,
  },
  mutations: {
    [constants.COMMIT_TEST]: (state, value) => {
      state.moduleDemo = value;
    },
  },
  actions: {
    [constants.ACTION_TEST]: ({ commit }, value) => {
      commit(constants.COMMIT_TEST, value);
    },
  },
};
