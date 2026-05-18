import type { CollectionConfig } from 'payload'

export const Teachers: CollectionConfig = {
  slug: 'teachers',

  admin: {
    useAsTitle: 'fullName',
  },

  labels: {
    singular: 'Преподаватель',
    plural: 'Преподаватели',
  },

  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      label: 'Пользователь',

      filterOptions: {
        role: {
          equals: 'teacher',
        },
      },
    },

    {
      name: 'firstName',
      type: 'text',
      required: true,
      label: 'Имя',
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      label: 'Фамилия',
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
      label: 'Полное имя',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Телефон',
    },
    {
      name: 'hireDate',
      type: 'date',
      required: true,
      label: 'Дата приема',
    },
    {
      name: 'terminationDate',
      type: 'date',
      required: false,
      label: 'Дата увольнения',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Активный', value: 'active' },
        { label: 'Уволен', value: 'terminated' },
        { label: 'В отпуске', value: 'vacation' },
      ],
      required: true,
      label: 'Статус',
    },
    {
      name: 'salary',
      type: 'number',
      label: 'Зарплата',
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        data.fullName = `${data.firstName} ${data.lastName}`

        return data
      },
    ],
  },
}
