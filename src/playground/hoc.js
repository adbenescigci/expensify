// HOC

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p> This is  high order {props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> test </p>}
            <WrappedComponent {...props}/>
        </div>    
    )
}

const requireAuthentication = (WrappedComponent) =>{
    return (props) => (
        <div>
         {props.isAuth? <WrappedComponent {... props}/> : <p> You are not authenticated</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication (Info)

//ReactDOM.render(<AdminInfo isAdmin = {false} info='test'/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth = {true} info='test'/>, document.getElementById('app'))