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
        state.EntradaEnCalor.splice(payload);
    },
    deleteEjercitacion(state, payload) {
        state.Ejercitacion.splice(payload);
    },
    deleteEnfriamiento(state, payload) {
        state.Enfriamiento.splice(payload);
    },
    resetEjercicios(state) {
        state.EntradaEnCalor = [];
        state.Ejercitacion = [];
        state.Enfriamiento = [];
    }
}