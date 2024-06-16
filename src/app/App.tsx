import { TodoList } from 'components/Todo';
import { TodoProvider } from 'context/TodoContext';
import './styles/index.scss';

function App() {
    return (
        <div className='app'>
            <TodoProvider>
                <TodoList />
            </TodoProvider>
        </div>
    );
}

export default App;
