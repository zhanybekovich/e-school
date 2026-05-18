import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  labels: {
    singular: 'Пользователь',
    plural: 'Пользователи',
  },
  auth: true,
  fields: [
    {
      type: 'select',
      name: 'role',
      required: true,
      label: 'Роль',
      defaultValue: 'student',
      options: [
        { label: 'Студент', value: 'student' },
        { label: 'Преподаватель', value: 'teacher' },
        { label: 'Админ', value: 'admin' },
        { label: 'Менеджер', value: 'manager' },
      ],
    },
  ],
}
