import * as Notifications from 'expo-notifications'

export const scheduleDailyNotification = async (notificationText) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Daily Reminder',
      body: notificationText,
    },
    trigger: {
      hour: 12,
      minute: 0,
      repeats: true,
    },
  })
}
