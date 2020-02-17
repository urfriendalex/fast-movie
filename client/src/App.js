//@ts-check

import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './style/App.css'
import Error404 from './components/Error404'
import Nav from './components/Nav'
import AdminPanel from './components/AdminPanel';
import RandomMovie from './components/RandomMovie';
import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd';
import MovieEdit from './components/MovieEdit';
import UserList from './components/UserList';
import AwardList from './components/AwardList';
import AwardsMoviesList from './components/AwardsMoviesList'
import AwardsMoviesAdd from './components/AwardsMoviesAdd';


class App extends Component{
  constructor(props){
      super(props);
      this.state = {
          visible: false,
          loggedUser: [],
          isAdmin: true
      }
  }

  render() {
    return (
  <Router>
              <div className="App">
                  <Nav admin={this.state.isAdmin} />
                      <Switch>
                          <Route exact path='/' component={RandomMovie}/>
                          <Route exact path='/random-movie' component={RandomMovie}/>
                          <Route exact path='/movie-details' component={MovieDetails}/>
                          <Route exact path='/app' component={()=><h1 className="wip">WIP</h1>} />
                          <Route exact path='/admin' component={()=><AdminPanel />}/>
                          <Route exact path='/admin/movie-list' component={MovieList}/>
                          <Route exact path='/admin/add-movie' component={MovieAdd}/>
                          <Route exact path='/admin/edit-movie' component={MovieEdit}/>
                          <Route exact path='/admin/user-list' component={UserList}/>
                          <Route exact path='/admin/add-user' component={()=><h1  className="wip">WIP</h1>}/>
                          <Route exact path='/admin/edit-user' component={()=><h1 className="wip">WIP</h1>}/>
                          <Route exact path='/admin/award-list' component={AwardList}/>
                          <Route exact path='/admin/add-award' component={()=><h1 className="wip">WIP</h1>}/>
                          <Route exact path='/admin/edit-award' component={()=><h1 className="wip">WIP</h1>}/>
                          <Route exact path='/admin/add-movieaward' component={AwardsMoviesAdd}/>
                          <Route exact path='/admin/awardsmoives-list' component={AwardsMoviesList}/>
                          <Route exact path='/admin/test' component={()=><h1></h1>} />
                          <Route component={Error404}/>
                      </Switch>
                  </div>
    </Router>
    
    );
  }
}

export default App;
