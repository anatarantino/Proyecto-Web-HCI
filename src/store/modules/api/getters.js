export default {
    isOK(state) {
        return !!state.token;
    },
    AutoLogout(state) {
        return state.AutoLogout;
    }
}