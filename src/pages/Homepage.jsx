import './styles/homepage.css';
import Header from '../components/Header.jsx';
import TaskList from '../components/TaskList.jsx';
export function Homepage() {
    return (
        <div className="homepage">
            <Header name="Amália"/>
            <TaskList name="Hoje"/>
        </div>
    );
}

export default Homepage;