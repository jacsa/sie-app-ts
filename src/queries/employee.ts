import { gql } from '@apollo/client';

interface CreateEmpleadoInput {
    puestoid: Number,
    clave: String,
    nombre: String,
    busqueda: String,
    apellido_paterno: String,
    apellido_materno: String,
    unidadadministrativaid: Number,
    usuarioid: String,
    estatus: Boolean,
    foto: String,
    documentoid: String,
    telefono: String,
    email: String,
    direccion: String,
    iniciales: String
}

const ADD_EMPLOYEE = gql`
 mutation AddEmployee($input: CreateEmpleadoInput) {
    addEmpleado(input: $input ) {
        id
    }
}`;

export {
    ADD_EMPLOYEE
};