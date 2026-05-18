import * as migration_20260409_155706_initial from './20260409_155706_initial';
import * as migration_20260518_113039_add_user_role from './20260518_113039_add_user_role';
import * as migration_20260518_113611_add_default_role_value from './20260518_113611_add_default_role_value';
import * as migration_20260518_114028_add_name_fields from './20260518_114028_add_name_fields';
import * as migration_20260518_114610_remove_name_fields from './20260518_114610_remove_name_fields';

export const migrations = [
  {
    up: migration_20260409_155706_initial.up,
    down: migration_20260409_155706_initial.down,
    name: '20260409_155706_initial',
  },
  {
    up: migration_20260518_113039_add_user_role.up,
    down: migration_20260518_113039_add_user_role.down,
    name: '20260518_113039_add_user_role',
  },
  {
    up: migration_20260518_113611_add_default_role_value.up,
    down: migration_20260518_113611_add_default_role_value.down,
    name: '20260518_113611_add_default_role_value',
  },
  {
    up: migration_20260518_114028_add_name_fields.up,
    down: migration_20260518_114028_add_name_fields.down,
    name: '20260518_114028_add_name_fields',
  },
  {
    up: migration_20260518_114610_remove_name_fields.up,
    down: migration_20260518_114610_remove_name_fields.down,
    name: '20260518_114610_remove_name_fields'
  },
];
