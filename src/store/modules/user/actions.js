export default {
    async updateProfile(context, payload) {
        let response = await fetch(`${context.rootGetters.baseURL}/user/current`,{
            body: JSON.stringify(
                {
                    ...payload
                }),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${context.getters.token}`
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
        const url = `${context.rootGetters.baseUrl}/user/current`
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${context.getters.token}`
            },
        });

        const responseInfo = await response.json();
        if(!response.ok) {
            throw new Error("No se pudo ingresar nuevamente"); //esta bien asi el msg?
        }
        context.commit("setUserData",responseInfo);
    }
}