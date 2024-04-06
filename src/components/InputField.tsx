import { useState } from "react";

interface Props {
  handleAdd: (todo: string) => void;
}

const InputField: React.FC<Props> = ({ handleAdd }) => {
  const [todo, setTodo] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      handleAdd(todo);
      setTodo("");
    }
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        className="input_box"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
