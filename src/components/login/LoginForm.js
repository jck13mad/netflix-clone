function LoginForm() {
    return (
        <div className="login-body">
            <div className="login-body__form">
                <h1>Sign In</h1>
                <div className="login-body__input mb-16">
                    <input type="text" placeholder="Email or phone number" />
                </div>
                <div className="login-body__input">
                    <input type="password" placeholder="Password" />
                </div>
                <button className="login-body__submit-btn">Sign In</button>
                <div className="login-body__options">
                    <span>Remember Me</span>
                    <span className="login-body__need-help">Need Help?</span>
                </div>
                <div className="login-body__footer">
                    <div className="login-body__fb">
                        <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-logo__blue_57.png" alt="fb" />
                        <span>Login with Facebook</span>
                    </div>
                    <div className="login-body__new-to-nl">
                        <span>New to Netflix?</span>
                        <span className="login-body__sign-up">Sign Up Now</span>
                    </div>
                    <div className="login-body__google_captcha">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <span className="login-body__learn-more">Learn More.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;