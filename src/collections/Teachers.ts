import type { CollectionConfig } from 'payload'

export const Teachers: CollectionConfig = {
  slug: 'teachers',

  admin: {
    useAsTitle: 'fullName',
  },

  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',

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
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'hireDate',
      type: 'date',
      required: true,
    },
    {
      name: 'terminationDate',
      type: 'date',
      required: false,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Terminated', value: 'terminated' },
        { label: 'Vacation', value: 'vacation' },
      ],
      required: true,
    },
    {
      name: 'salary',
      type: 'number',
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
