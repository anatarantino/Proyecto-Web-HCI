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
        context.commit("user/setUserData", responseInfo);
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
    },
    async categoriesData(context, payload) {
        const categories = [
            {
                name: "Brazos"
            },
            {
                name: "Glúteos"
            },
            {
                name: "Abdominales"
            },
            {
                name: "Funcional"
            }
        ]

        for (let category of categories) {
            let response = await fetch(`${context.getters.baseUrl}/categories`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${context.getters.getToken}`
                },
                body: JSON.stringify({
                    ...category
                })
            });
            const responseInfo = await response.json();
            if (!response.ok) {
                console.log(responseInfo);
                throw new Error(response.statusText);
            }
        }
    },
    async getCategories(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/categories`, {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`
            }
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async removeRoutine(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    },
    async removeExerciseFromCycle(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/cycles/${payload.cycleId}/exercises/${payload.exerciseId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    },
    async addExerciseToCycle(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/cycles/${payload.cycleId}/exercises/${payload.exerciseId}`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    order: payload.order,
                    duration: payload.duration,
                    repetitions: payload.repetitions
                })
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async addExercise(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/exercises`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: payload.name,
                    detail: payload.detail,
                    type: "exercise",
                    metadata: null
                })
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async deleteExercise(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/exercises/${payload.exerciseId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    },
    async modifyExercise(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/exercises/${payload.exerciseId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: payload.name,
                detail: payload.detail,
                type: "exercise",
                metadata: null
            })
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async createRoutine(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/routines`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...payload,
                metadata: null
            }) //estar atentas a si se esta creando bien
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async getCycleExercises(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/cycles/${payload.cycleId}/exercises/?` + new URLSearchParams({
            ...payload
        }), {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
                'Content-Type': 'application/json'
            },
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async getRoutineCycleById(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles/${payload.cycleId}`, {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
            },
            body: JSON.stringify({
                routineId: payload.routineId,
                cycleId: payload.cycleId
            })
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async getRoutineCycles(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles/?` + new URLSearchParams({
            ...payload
        }), {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
            },
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async getExercises(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/exercises`, {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`
            }
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async getCurrentUserRoutines(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/users/current/routines/?` + new URLSearchParams({
            ...payload
        }), {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
            },
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async getRoutines(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/routines?` + new URLSearchParams({
            ...payload
        }), {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
            },
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async getFavourites(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/favourites?` + new URLSearchParams({
            ...payload
        }), {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
            },
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async addToFavourite(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/favourites/${payload.routineId}/`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
            }
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async removeFromFavourite(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/favourites/${payload.routineId}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
            }
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async getRoutineById(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}?`, {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
            },
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async rateRoutine(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/reviews/${payload.routineId}`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                routineId: payload.routineId,
                score: payload.score,
                review: ''
            })
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    },
    async isFavourite(context, payload) {
        let routinesInfo;
        try {
            routinesInfo = await context.dispatch("getFavourite", {
                orderBy: `id`,
                direction: `desc`
            });
        } catch (e) {
            throw new Error(e);
        }
        const routines = routinesInfo.content;
        for (const routine of routines) {
            if (routine.id === payload.routineId) {
                return true;
            }
        }
        return false;
    },
    async createCycle(context, payload) {
        let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${context.getters.getToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: payload.name,
                detail: '',
                type: payload.type,
                order: payload.order,
                repetitions: payload.repetitions,
                metadata: null
            })
        });
        let responseInfo = await response.json();
        if (!response.ok) {
            console.log(responseInfo);
            throw new Error(responseInfo.message);
        }
        return responseInfo;
    }
}



