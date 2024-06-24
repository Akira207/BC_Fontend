import './LoginStyle.scss';
import { Link } from 'react-router-dom';

// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');

// registerLink.addEventListener('click', ()=> {
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', ()=> {
//     wrapper.classList.remove('active');
// });



function Login({  }) {
    return (
        <div className="bgrLogin">
            <header>
                <h2 className="logo">BC Online</h2>
                <nav className="navigation">
                    <Link to="/">
                        <button className="btnLogin-popup">Trở về</button>
                    </Link>
                </nav>
            </header>
            <div className="wrapper">
                <div className="form-box login">
                    <h2>Đăng nhập</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail" />
                            </span>
                            <input type="email" required="" />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed" />
                            </span>
                            <input type="password" required="" />
                            <label>Mật khẩu</label>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />
                                Lưu mật khẩu
                            </label>
                            <a href="#">Quên mật khẩu?</a>
                        </div>
                        <button type="submit" className="btn">
                            Đăng nhập
                        </button>
                        <div className="login-register">
                            <p>
                                Bạn không có tài khoản?{' '}
                                <a href="#" className="register-link">
                                    Đăng ký
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <h2>Đăng ký</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="person" />
                            </span>
                            <input type="text" required="" />
                            <label>Tên đăng nhập</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail" />
                            </span>
                            <input type="email" required="" />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed" />
                            </span>
                            <input type="password" required="" />
                            <label>Mật khẩu</label>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />
                                Bạn đã đọc và đồng ý với điều khoản của chúng tôi
                            </label>
                        </div>
                        <button type="submit" className="btn">
                            Đăng ký
                        </button>
                        <div className="login-register">
                            <p>
                                Bạn đã có tài khoản?
                                <a href="#" className="login-link">
                                    {' '}
                                    Đăng nhập
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
