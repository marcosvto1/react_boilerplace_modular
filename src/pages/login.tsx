import React, { useState } from 'react'
import Layout from '../shared/layout/layout'
import logo from '../assets/imgs/login2.svg';
import { login } from '../modules/users/redux/operators/login';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { UsersState } from '../modules/users/redux/states';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router';

type Props = {

}

const LoginPage: React.FC<any> = (props) => {

  const dispach: Dispatch<any> = useDispatch();
  const userState: UsersState = useSelector((state: UsersState) => state);

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  function updateFormField(name: string, value: string) {
    setForm({
      ...form,
      [name]: value
    });
  }

  function isFormValid() {
    if (!!form.username === false) {
      toast.error('Yeaaaah, you forgot to include username', {
        autoClose: 3000
      });
      return false;
    }

    if (!!form.password === false) {
      toast.error('Yeaaaah, you forgot to include username', {
        autoClose: 3000
      });
      return false;
    }

    return true;
  }

  function handleSubmit() {
    if (isFormValid()) {
      dispach(login(form.username, form.password));
    }
  }

  const isLoggedIn = userState.isAuthenticated;
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return (<Redirect to={{ pathname: '/' }}></Redirect>);
  }

  return (
    <Layout>
      <div className="login-page">
        <div className="login-content">
          <div className="login-content-logo">
            <img src={logo} width={400} />
          </div>
          <div className="login-content-form">
            <div className="input-control">
              <label>Username</label>
              <input type="text" placeholder="Username" className="text-input" onChange={(e) => updateFormField('username', e.target.value)}></input>
            </div>
            <div className="input-control">
              <label>Password</label>
              <input type="password" placeholder="Password" className="text-input" onChange={(e) => updateFormField('password', e.target.value)}></input>
            </div>
            <div className="mt-2">
              {userState.isFetchingUser && <div>Validando Usuário</div>}
              <button className="btn" onClick={handleSubmit}>
                Enviar
            </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// function mapStateToProps ({users}: {users: UsersState}) {
//   return {
//     users
//   }
// }

// function mapActionCreators

// export default withUserService(LoginPage);
export default LoginPage;