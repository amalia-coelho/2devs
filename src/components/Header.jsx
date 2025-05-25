import './styles/header.css';

export default function Header({name}) {
    return (
        <header>
            <div className="greetings">
                <h2>Boa noite {name}</h2>
                <h2>{time()}</h2>                
            </div>
        </header>
    );
}