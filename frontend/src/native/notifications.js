import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

// Fixed ID so re-running setup never creates a duplicate alarm.
const DAILY_REMINDER_ID = 1001;
const REMINDER_HOUR = 21; // 9 PM local device time
const REMINDER_MINUTE = 0;

// Schedules a recurring, OS-level local notification reminding the user to
// log today's payments. This is fired by Android's own alarm scheduler
// (not a server push), so it keeps firing every night even with no network
// connection and survives device reboots.
export async function setupDailyReminder() {
  if (!Capacitor.isNativePlatform()) return;

  try {
    const current = await LocalNotifications.checkPermissions();
    let granted = current.display === 'granted';

    if (!granted) {
      const requested = await LocalNotifications.requestPermissions();
      granted = requested.display === 'granted';
    }
    if (!granted) return;

    const pending = await LocalNotifications.getPending();
    const alreadyScheduled = pending.notifications.some((n) => n.id === DAILY_REMINDER_ID);
    if (alreadyScheduled) return;

    await LocalNotifications.schedule({
      notifications: [
        {
          id: DAILY_REMINDER_ID,
          title: 'Expensico',
          body: "Please update today's payments in your Expensico.",
          schedule: {
            on: { hour: REMINDER_HOUR, minute: REMINDER_MINUTE },
            allowWhileIdle: true
          }
        }
      ]
    });
  } catch (err) {
    console.error('Failed to schedule daily reminder:', err);
  }
}
