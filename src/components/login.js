import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {    
        super(props);    
    }

    render() {
      return (
		<body className="login-content">
			<div className="login-panel">
				<form
				enctype="application/x-www-form-urlencoded"
						method="POST"
						action="/login_form"
						>
				<div className="title">XXX区块链后台管理平台<br/>管理员登录</div>
				<input id="email" type="text" name="email" placeholder="请输入用户名"/>
				<input id="password" type="password" name="password" placeholder="请输入密码"/>
				<div ></div>
				<input type="checkbox"  value="请输入密码" /><label>记住密码</label>
				<input type="submit" value="submit"/>
				</form>
				<div className="error-info"></div>
			</div>
			</body>
            );
        }
  }

export default Login;



