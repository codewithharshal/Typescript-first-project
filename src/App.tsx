import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import type { Reminder } from "./models/Reminder";
import ReminderServices from "./services/Reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const remindersFromService = await ReminderServices.getReminders();
    setReminders(remindersFromService);
  };

  const removeReminder = async (id: number) => {
    await ReminderServices.removeReminder(id);
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await ReminderServices.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
