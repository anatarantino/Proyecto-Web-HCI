export default {
    async updateProfile(context, payload) {
        let response = await fetch(`${context.rootGetters.baseUrl}/users/current`,{
            body: JSON.stringify(
                {
                    ...payload
                }),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${context.getters.getToken}`
            }
        });
        let responseInfo = await response.json();
        if(!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        context.commit("setUserData",responseInfo);
    },

    async restoreValues(context) {
        const url = `${context.rootGetters.baseUrl}/users/current`
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${context.getters.getToken}`
            },
        });

        const responseInfo = await response.json();
        if(!response.ok) {
            throw new Error("No se volver pudo a ingresar.");
        }
        context.commit("setUserData",responseInfo);
    }
}