export default {
    addEntradaEnCalor(state, payload) {
        state.EntradaEnCalor.push(payload);
    },
    addEjercitacion(state, payload) {
        state.Ejercitacion.push(payload);
    },
    addEnfriamiento(state, payload) {
        state.Enfriamiento.push(payload);
    },
    deleteEntradaEnCalor(state, payload) {
        let i=0;
        for(let ex of state.EntradaEnCalor){
            if(ex.id === payload.id){
                state.EntradaEnCalor.splice(i,1);
                return;
            }
            i++;
        }
    },
    deleteEjercitacion(state, payload) {
        let i=0;
        for(let ex of state.Ejercitacion){
            if(ex.id === payload.id){
                state.Ejercitacion.splice(i,1);
                return;
            }
            i++;
        }
    },
    deleteEnfriamiento(state, payload) {
        let i=0;
        for(let ex of state.Enfriamiento){
            if(ex.id === payload.id){
                state.Enfriamiento.splice(i,1);
                return;
            }
            i++;
        }
    },
    resetEjercicios(state) {
        state.EntradaEnCalor = [];
        state.Ejercitacion = [];
        state.Enfriamiento = [];
    }
}