export default {
    async signUp(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                ...payload,
                firstName: "",
                lastName: "",
                gender: "other",
                birthdate: 0,
                metadata: null
            })
        })
        context.commit("user/setUserData", payload);
        let responseInfo = await response.json();
        let errorMsg = "";
        if (!response.ok) {
            if (responseInfo.code === 2) {
                errorMsg = "Este mail ya esta registrado.";
            } else {
                errorMsg = responseInfo.description;
            }
            throw new Error(errorMsg);
        }
    },
    async signIn(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                username: payload.username,
                password: payload.password
            })
        })
        let responseInfo = await response.json();
        let errorMsg = "";
        if (!response.ok) {
            if (responseInfo.code === 4) {
                errorMsg = "Usuario o contraseña incorrecta.";
            } else if (responseInfo.code === 8) {
                errorMsg = "Error en verificación de mail.";
            } else {
                errorMsg = responseInfo.description;
            }
            throw new Error(errorMsg);
        }
        localStorage.setItem('token', responseInfo.token);
        const usAuthorization = {
            token: responseInfo.token
        }
        context.commit('setUser', usAuthorization);
        let url = `${context.getters.baseUrl}/users/current`;
        response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${context.getters.getToken}`
            }
        });
        responseInfo = await response.json();
        if (!response.ok) {
            throw new Error("No se pudieron recuperar los datos después de iniciar sesión");
        }
    },
    async logOut(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/users/logout`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
                'accept': `application/json`
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        localStorage.removeItem('token');
        const usAuthorization = {
            token: null
        }
        context.commit('user/resetData');
        context.commit('setUser', usAuthorization);
    },
    async autoLogIn(context, payload) {
        const token = localStorage.getItem('token');
        if (token) {
            context.commit('setUser', {
                token: token
            });
            let url = `${context.getters.baseUrl}/users/current`;
            let response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${context.getters.getToken}`
                }
            });
            let responseInfo = await response.json();
            if (!response.ok) {
                throw new Error("Error al iniciar sesión automáticamente");
            }
            context.commit('user/setUserData', responseInfo);
        }
    },
    async verifyAccount(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/users/verify_email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: payload.email,
                code: payload.code,
            })
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    },
    async resendVerification(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/users/resend_verification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: payload.email,
            })
        });
        await context.commit('user/setUserData', payload);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    }

}