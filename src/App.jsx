import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';
function App() {
  const [filter, setFilter] = useState(Filters[0]);
  return (
    <DarkModeProvider>
      <div className="wrap">
        <Header
          filter={filter}
          filters={Filters}
          onFilterChange={(filter) => setFilter(filter)}
        />
        <TodoList filter={filter} />
      </div>
    </DarkModeProvider>
  );
}
const Filters = ['all', 'active', 'completed'];
export default App;
