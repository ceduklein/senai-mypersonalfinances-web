import React from 'react';
import { withRouter } from 'react-router-dom';

import Card from '../components/card';
import FormGroup from '../components/formGroup';

export default withRouter( class SignIn extends React.Component {

  state = {
    email: '',
    password: ''
  }

  login = () => {
    console.log('email: ', this.state.email);
    console.log('password: ', this.state.password);
  }

  goToSignUp = () => {
    this.props.history.push('/signup');
  }

  
  render() {
    return(
      <div className="row">
        <div className="col-md-6" style={ { position: 'relative', left: '300px' } }>
          <div className="bs-docs-section">
            <Card title="Sign In">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup htmlFor="exampleInputEmail" label="Email: *">
                        <input 
                          type="email"
                          value={this.state.email}
                          onChange={e => this.setState({email: e.target.value})}
                          className="form-control"
                          id="exampleInputEmail" 
                          aria-describedby="emailHelp"
                          placeholder="Digite seu email"
                        />
                      </FormGroup>

                      <FormGroup htmlFor="exampleInputPassword" label="Senha: *">
                        <input 
                          type="password"
                          value={this.state.password}
                          onChange={e => this.setState({password: e.target.value})}
                          className="form-control"
                          id="exampleInputPassword" 
                          placeholder="Digite sua senha"
                        />
                      </FormGroup>
                      <button onClick={this.login} className="btn btn-success">Entrar</button>
                      <span style={{marginLeft:'160px', fontSize: '14px'}}> Não possui cadastro? </span>
                      <button 
                        onClick={this.goToSignUp} 
                        className="btn btn-danger"
                        style={{float: 'right'}}>Cadastre-se</button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

    )
  }
})