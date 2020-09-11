import React,{ Fragment }from 'react';
import GlobalStyle from './style.js';
import Header from './Common/Header/index.js';
import GlobalStyleFont from './Common/Statics/iconfont/iconfont.js'
import { Provider } from 'react-redux';
import store from './store/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';
import Login from './pages/login/index.js';




class App extends React.Component{
  render(){
    return(
      <Fragment>
        <Provider store={store}>
          
          
          <GlobalStyleFont />
            
            <BrowserRouter>
              <div>
                <Header />
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/detail/:id' component={Detail}></Route>
              </div>
            </BrowserRouter>
          <GlobalStyle />
          
          
          
        </Provider>
      </Fragment>
    )
  }

}

export default App;
