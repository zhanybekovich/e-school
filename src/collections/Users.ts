import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      type: 'select',
      name: 'role',
      options: [
        { label: 'Student', value: 'student' },
        { label: 'Teacher', value: 'teacher' },
        { label: 'Admin', value: 'admin' },
        { label: 'Manager', value: 'manager' },
      ],
    },
  ],
}
