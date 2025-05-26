import './styles/Cadastro.css';

export default function Cadastro() {
    return (
        <div className="cadastro-page">
            <div className="cadastro-box">
                <div className="cadastro-header">
                    <h1>Cadastre-se</h1>
                </div>
                <div className="cadastro-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="name" id="input-email" placeholder="Seu apelido"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="input-email" placeholder="Digite seu melhor email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="input-password" placeholder="Sua senha" />
                    </div>
                    <div className="form-group">
                        <button type="submit" id="btn-cadastro">Cadastrar</button>
                    </div>
                </div>
                <div className="cadastro-footer">
                    <p>Já tem uma conta? <a href="/login">Entre</a></p>
                </div>
            </div>
        </div>
    );
}