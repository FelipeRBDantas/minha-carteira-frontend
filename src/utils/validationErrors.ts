import { addNotifications, clearNotifications } from "@store/modules/app/notifications/action";

export default async function getValidationErrors(values: any, schema: any) {
  clearNotifications();

  let newValues = {};

  Object.values(values).forEach( (item: any, index: number) => {
    const key = Object.keys(values)[index];

    if (typeof item === 'string') {
      newValues = { ...newValues, [key]: item.replace(/[_.-]+/g, '') };
    } else {
      newValues = { ...newValues, [key]: item };
    }
  });

  try {
    await schema.validate(newValues, { abortEarly: false });

    return true;
  } catch (error: any) {
    let errors: any = {};

    const notifications: string[] = [];

    error.inner.forEach((innerError: any) => {
      errors = { ...errors, [innerError.path]: innerError.message };

      notifications.push(innerError.message);
    });

    addNotifications({ errors: notifications });

    return errors;
  }
}
