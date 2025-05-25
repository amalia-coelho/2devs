import './styles/task.css'

export default function Task({title}) {
    return (
        <div className="task-box">
            <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <span>{title}</span>
        </div>
    );
}