import React from 'react';
//import {BrowserRouter,Route } from 'react-router-dom';
import {Router,Route , Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';
 

//
//import {HashRouter,Route ,Link} from 'react-router-dom';
//import {MemoryRouter,Route ,Link} from 'react-router-dom';
// const PageOne = () =>{
//     return <div>PageOne
// <Link to ="/pagetwo">navigate to page two</Link>
//     </div>
// }
// const PageTwo = () =>{
//     return <div>PageTwo
//         <button>Click</button>
//         <Link to ="/">navigate to page one</Link>
//     </div>
// }
//


const App = () => {
    return ( <div className="ui container">
    
          <div>
          {/* <BrowserRouter history ={history}> */}
           <Router history = {history}> 
                <div>
                <Header/>
                <Switch>
                <Route path = "/"  exact component={StreamList}/> 
                <Route path = "/streams/new"  exact  component={StreamCreate}/>
                <Route path = "/streams/edit/:id"  exact  component={StreamEdit}/>
                <Route path = "/streams/delete/:id"  exact  component={StreamDelete}/>
                <Route path = "/streams/:id"  exact  component={StreamShow}/>
                </Switch>
                </div>
            </Router> 

            {/* <BrowserRouter> 
                <Route path = "/" exact  component={PageOne}/> 
                <Route path = "/pagetwo"   component={PageTwo}/>
            </BrowserRouter>  */}
            
            {/* <HashRouter> 
                <Route path = "/" exact  component={PageOne}/> 
                <Route path = "/pagetwo"   component={PageTwo}/>
            </HashRouter>  */}

            {/* <MemoryRouter> 
                <Route path = "/" exact  component={PageOne}/> 
                <Route path = "/pagetwo"   component={PageTwo}/>
            </MemoryRouter>  */}
        </div>
        </div> );
}

export default App;