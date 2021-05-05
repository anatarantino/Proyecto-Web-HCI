export default {
    setUserData(state, payload) {
        state.user = payload.user;
        state.email = payload.email;
        state.avatarUrl = payload.avatarUrl ? payload.avatarUrl : "";
    },
    resetData(state) {
        state.user= "";
        state.email="";
        state.avatarUrl="";
    }
}