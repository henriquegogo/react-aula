export const NOTIFICATION_ACTION = 'NOTIFICATION_ACTION';

export function notification(message) {
  return { type: NOTIFICATION_ACTION, message: message, color: "black" };
}

export const warning = (message) => {
  return { type: NOTIFICATION_ACTION, message: message, color: 'green' };
}
