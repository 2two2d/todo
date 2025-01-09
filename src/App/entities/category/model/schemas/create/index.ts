import { object } from 'yup'

import { ColorSchema, NameSchema } from '@shared/validation/schemas'

import type { ObjectSchema } from 'yup'

import type { ICategoryCreatePort } from '@entities/category/model'

export const categoryCreateSchema: () => ObjectSchema<ICategoryCreatePort> = () => object().shape({
  name: NameSchema,
  color: ColorSchema
})
