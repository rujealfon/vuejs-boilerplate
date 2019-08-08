import { UserService, AuthenticationError } from "../../services/user";
import { TokenService } from "../../services/storage";
import router from "../../router";

const state = {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationSuccess: false,
  authenticationErrorCode: 0,
  authenticationError: ""
};

const getters = {
  loggedIn: state => {
    return state.accessToken ? true : false;
  },

  authenticationErrorCode: state => {
    return state.authenticationErrorCode;
  },

  authenticationError(state) {
    return state.authenticationError;
  },

  authenticationSuccess(state) {
    return state.authenticationSuccess;
  },

  authenticating: state => {
    return state.authenticating;
  }
};

const mutations = {
  loginRequest(state) {
    state.authenticating = true;
    state.authenticationError = "";
    state.authenticationErrorCode = 0;
  },

  loginSuccess(state, accessToken) {
    state.accessToken = accessToken;
    state.authenticationSuccess = true;
    state.authenticating = false;
  },

  loginError(state, { errorCode, errorMessage }) {
    state.authenticating = false;
    state.authenticationErrorCode = errorCode;
    state.authenticationError = errorMessage;
  },

  logoutSuccess(state) {
    state.accessToken = "";
  }
};

const actions = {
  async login({ commit }, { email, password }) {
    commit("loginRequest");
    try {
      const token = await UserService.login(email, password);
      commit("loginSuccess", token);

      // Redirect the user to the page he first tried to visit or to the home view
      //console.log('before redirect');
      router.push(router.history.current.query.redirect || "/");
      return true;
    } catch (e) {
      if (e instanceof AuthenticationError) {
        commit("loginError", {
          errorCode: e.errorCode,
          errorMessage: e.message
        });
      }
      return false;
    }
  },

  logout({ commit }) {
    UserService.logout();
    commit("logoutSuccess");
    router.push("/login");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
