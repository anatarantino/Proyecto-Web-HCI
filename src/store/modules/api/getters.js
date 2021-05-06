export default {
    isOK(state) {
        return !!state.token;
    },
    baseUrl(state) {
        return state.baseUrl;
    },
    getToken(state){
        return state.token;
    }
}