import { array, object, string } from 'yup'

import { TextSchema } from '@shared/validation/schemas'

import type { ObjectSchema } from 'yup'

import type { ITodoCreatePort } from '@entities/todo/model'

export const todoCreateSchema: () => ObjectSchema<ITodoCreatePort> = () => object().shape({
  text: TextSchema,
  categoryArrIds: array().of(string().required()).optional()
})
