export default {
    getCycles(state) {
        return {
            EntradaEnCalor: state.EntradaEnCalor,
            Ejercitacion: state.Ejercitacion,
            Enfriamiento: state.Enfriamiento,
            roundsEntradaEnCalor: state.EntradaEnCalor,
            roundsEjercitacion: state.Ejercitacion,
            roundsEnfriamiento: state.Enfriamiento
        };
    }
}