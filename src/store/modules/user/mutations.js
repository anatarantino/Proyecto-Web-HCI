export default {
    setUserData(state, payload) {
        state.username = payload.username;
        state.email = payload.email;
        state.avatarUrl = payload.avatarUrl ? payload.avatarUrl : "";
    },
    resetData(state) {
        state.username = "";
        state.email = "";
        state.avatarUrl = "";
    }
}