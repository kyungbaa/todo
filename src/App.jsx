import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
function App() {
  const [filter, setFilter] = useState(Filters[0]);
  return (
    <div>
      <Header
        filter={filter}
        filters={Filters}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </div>
  );
}
const Filters = ['all', 'active', 'completed'];
export default App;
