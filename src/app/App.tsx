import { TodoList } from 'components/Todo';
import { TodoProvider } from 'context/TodoContext';
import './styles/index.scss';

function App() {
    return (
        <div className='app'>
            <h1 className='title'>Костыли для моей памяти.</h1>
            <TodoProvider>
                <TodoList />
            </TodoProvider>
        </div>
    );
}

export default App;
