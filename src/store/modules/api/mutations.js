export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.AutoLogout = false;
    },
    setAutoLogout(state) {
        state.AutoLogout = true;
    }
};