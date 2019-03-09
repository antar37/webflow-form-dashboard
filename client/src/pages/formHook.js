import React, { Component } from 'react';
import API from "../utils/API";

class formHook extends Component {
   state = {
      log: []
    };
  
    componentDidMount() {
      this.loadLog();
    }
  
    loadLog = () => {
      API.getLog()
        .then(res =>
          this.setState({ log: res.data })
        )
        .catch(err => console.log(err));
    };
   render() {
      return (
         <>
            <h1>Post Log</h1>
            {this.state.log.length ? (
               <>
                  {this.state.log.map(log => (
                     <>
                        <p>{log.title}</p>
                        <p>{log.message}</p>
                     </>
                  ))}
               </>
            ) : (
               <h3>I got nothing...</h3>
            )}
         </>
      );
   }
}

export default formHook;