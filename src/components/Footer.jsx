import MenuItem from './MenuItem.jsx'

import './styles/footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="menu">
                <MenuItem icon="house"/>
                <MenuItem icon="check"/>
                <MenuItem icon="briefcase"/>
            </div>
        </footer>
    );
}