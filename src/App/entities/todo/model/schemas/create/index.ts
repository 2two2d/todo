import { array, object, string } from 'yup'

import { TextSchema } from '@shared/validation/schemas'

import type { ObjectSchema } from 'yup'

import type { ITodoCreatePort } from '@entities/todo/model'

export const todoCreateSchema: () => ObjectSchema<ITodoCreatePort> = () => object().shape({
  text: TextSchema,
  categories_ids: array().of(string().required()).optional()
})
