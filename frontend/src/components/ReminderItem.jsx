const ReminderItem = ({ reminder, onDelete }) => {
    return (
      <div className="bg-white p-4 mb-4 rounded-lg shadow-md flex justify-between items-center">
        <div>
          <p className="text-lg font-medium text-gray-900">{reminder.name}</p>
          <p className="text-sm text-gray-500">{reminder.time}</p>
        </div>
        <button
          onClick={() => onDelete(reminder.id)}
          className="text-red-600 hover:text-red-800 focus:outline-none"
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default ReminderItem;
  