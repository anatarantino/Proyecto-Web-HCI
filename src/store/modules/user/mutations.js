export default {
    setUserData(state, payload) {
        state.name = payload.name;
        state.lastName = payload.lastName;
        state.email = payload.email;
        state.avatarUrl = payload.avatarUrl ? payload.avatarUrl : "";
    },
    resetDate(state) {
        state.name= "";
        state.lastName="";
        state.email="";
        state.avatarUrl="";
    }
}