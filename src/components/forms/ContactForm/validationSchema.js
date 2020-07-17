import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muy corto.')
    .max(50, 'Muy largo.')
    .required('El campo nombre es requerido'),
  email: Yup.string()
    .email('No es un email válido.')
    .required('El campo email es requerido'),
  message: Yup.string()
    .required('El campo mensaje es requerido'),
})

export default validationSchema
