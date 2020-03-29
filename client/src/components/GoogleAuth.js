import React from 'react';


import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

// this is not using Redux
// class GoogleAuth extends React.Component{

//     state = {isSignedIn : null};
//     componentDidMount(){
//         window.gapi.load('client:auth2' , () =>{
//             window.gapi.client.init({
//                 clientId : '548147403800-qhiek0431mroa1d8vv1n8rb65p6dvg2r.apps.googleusercontent.com' ,
//                 scope: 'email'
//             }).then( () =>{

//                 this.auth = window.gapi.auth2.getAuthInstance();
//                  this.setState({ isSignedIn : this.auth.isSignedIn.get()}) 
                
//                 this.auth.isSignedIn.listen(this.onAuthChange);
//             });
//         });
//     }
//     onAuthChange = () =>{
//         this.setState({ isSignedIn : this.auth.isSignedIn.get()}) ;
//     }

//     onSignInClick= () => {
//         this.auth.signIn();
//     }

//     onSignOutClick = () => {
//         this.auth.signOut();

//     }
//     renderAuthButton() {
//     if  (this.state.isSignedIn === null){
//         return null;
//     } else  if (this.state.isSignedIn){
//         return (<button onClick = {this.onSignOutClick} className="ui red google button"> 
//          {/* no parenthesis on onsignin because we dont want this to execute when page loads */}
//             <i className = "google icon"> SignOut </i>
//             </button>
//             )
//     }
//     return (<button onClick = {this.onSignInClick} className="ui red google button">
//     <i className = "google icon">SignIn with Google</i>
//     </button>
//     )
// }    
// render(){ 
//        return <div>   {this.renderAuthButton()}         </div>
// }

// }

// export default GoogleAuth;


// This is using redux , Action Creators are managing access to gapi
class GoogleAuth extends React.Component{
       componentDidMount(){
        window.gapi.load('client:auth2' , () =>{
            window.gapi.client.init({
                clientId : '548147403800-qhiek0431mroa1d8vv1n8rb65p6dvg2r.apps.googleusercontent.com' ,
                scope: 'email'
            }).then( () =>{

                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get()) 
                //this.setState({ isSignedIn : this.auth.isSignedIn.get()}) 
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (isSignedIn) =>{

        if  (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
        //this.setState({ isSignedIn : this.auth.isSignedIn.get()}) ;
    }

    onSignInClick= () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();

    }
    renderAuthButton() {
    if  (this.props.isSignedIn === null){
        return null;
    } else  if (this.props.isSignedIn){
        return (<button onClick = {this.onSignOutClick} className="ui red google button"> 
         {/* no parenthesis on onsignin because we dont want this to execute when page loads */}
            <i className = "google icon"> SignOut </i>
            </button>
            )
    }
    return (<button onClick = {this.onSignInClick} className="ui red google button">
    <i className = "google icon">SignIn with Google</i>
    </button>
    )
}    
render(){ 
       return <div>   {this.renderAuthButton()}         </div>
}

}

const mapStateToProps = (state) =>{
    return {isSignedIn : state.auth.isSignedIn };
}
export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth);
