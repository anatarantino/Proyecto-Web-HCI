export default {
    getCycles(state) {
        return {
            EntradaEnCalor: state.EntradaEnCalor,
            Ejercitacion: state.Ejercitacion,
            Enfriamiento: state.Enfriamiento,
            roundsEntradaEnCalor: state.roundsEntradaEnCalor,
            roundsEjercitacion: state.roundsEjercitacion,
            roundsEnfriamiento: state.roundsEnfriamiento
        };
    }
}