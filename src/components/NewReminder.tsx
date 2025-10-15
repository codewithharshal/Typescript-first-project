import { useState, type JSX } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

const NewReminder = ({ onAddReminder }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return; // prevent empty submissions
    onAddReminder(title);
    setTitle(""); // clear input after adding
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title" className="form-label">
        Reminder Title
      </label>
      <input
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary my-3 rounded-pill">
        Add Reminder
      </button>
    </form>
  );
};

export default NewReminder;
