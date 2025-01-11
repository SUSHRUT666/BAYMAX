import ReminderItem from "./ReminderItem";

const ReminderList = ({ reminders, onDelete }) => {
  return (
    <div className="mt-6">
      {reminders.length > 0 ? (
        reminders.map((reminder) => (
          <ReminderItem key={reminder.id} reminder={reminder} onDelete={onDelete} />
        ))
      ) : (
        <p className="text-gray-600 text-center">No reminders yet. Add one above!</p>
      )}
    </div>
  );
};

export default ReminderList;
