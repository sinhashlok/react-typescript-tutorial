import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (todo: string) => {
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: todo,
          isDone: false,
        },
      ]);
    }
  };

  return (
    <div className="app">
      <span className="heading">Taskify</span>
      <InputField handleAdd={handleAdd} />
    </div>
  );
};

export default App;
