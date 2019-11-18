import React from 'react';
import ReactDOM from 'react-dom';
import './components/App/App.scss';
import './components/Moviedetails/Movie.scss';
import App from './components/App/App';

class Mainfile extends React.Component{
  render(){
      return(
          <div className="myresume"> 
              <App/>
          </div>
      )
  }
}

ReactDOM.render(<Mainfile/>,document.getElementById('root'));