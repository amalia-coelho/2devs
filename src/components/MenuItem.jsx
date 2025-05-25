import './styles/menuItem.css';

export default function MenuItem({icon, label}) {
    return (
        <div className="menu-box">
            <i className={`fa fa-${icon}`}></i>
        </div>
    );
}