import { useState } from "react";
import ReminderList from "./ReminderList";
import AddReminder from "./AddReminder";
// import bgImage from '../assets/back.jpeg'; // Adjust the path as necessary

function Rem() {
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    setReminders([...reminders, { id: Date.now(), ...reminder }]);
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div
      className="min-h-full bg-cover bg-center flex flex-col items-center py-4 px-2"
    //   style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Medication Reminder
        </h2>
        <AddReminder onAdd={addReminder} />
        <ReminderList reminders={reminders} onDelete={deleteReminder} />
      </div>
    </div>
  );
}

export default Rem;