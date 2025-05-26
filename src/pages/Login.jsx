import './styles/login.css';

export default function Login() {
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-header">
                    <h1>LOGIN</h1>
                </div>
                <div className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="input-email" placeholder="Digite seu melhor email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="input-password" placeholder="Sua senha" />
                        <span>Esqueceu sua senha? <a href="/recuperar-senha">Recuperar senha</a></span>
                    </div>
                    <div className="form-group">
                        <button type="submit" id="btn-login">Entrar</button>
                    </div>
                </div>
                <div className="login-footer">
                    <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
                </div>
            </div>
        </div>
    );
}