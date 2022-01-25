import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Поле олжно быть почтой').required('Обязательное поле'),
  password: yup
    .string()
    .min(4, 'Минимум 4 символа')
    .required('Обзательное поле, минимум 4 символа'),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email('Поле должно быть почтой').required('Обязательное поле'),
  password: yup
    .string()
    .min(4, 'Минимум 4 символа')
    .required('Обзательное поле, минимум 4 символа'),
  fullName: yup
    .string()
    .min(6, 'Минимум 6 символов')
    .required('Обзательное поле, минимум 6 символов'),
});
