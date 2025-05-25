import './styles/taskList.css'
import Task from './Task.jsx';

export default function TaskList() {
    return (
        <div className="task-list-box">
            <div className="task-list-header">
                <h2>Hoje</h2>
                <span>(5 tarefas)</span>
            </div>
            <div className="task-list">
                <Task title="Finalizar a homepage do projeto"/>
                <Task title="Subir para o github"/>
                <Task title="Não chorar"/>
                <Task title="Arrumar a cama"/>
                <Task title="Derrubar o facebook"/>
            </div>
        </div>
    );
}