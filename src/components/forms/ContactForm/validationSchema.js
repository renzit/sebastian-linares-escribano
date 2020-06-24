import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muy corto!')
    .max(50, 'Muy largo!')
    .required('Por favor, el nombre es requerido!'),
  email: Yup.string()
    .email('Por favor ingresa un email válido!')
    .required('Por favor, el email es requerido!'),
  message: Yup.string()
    .required('Por favor, el mensaje es requerido!'),
})

export default validationSchema
