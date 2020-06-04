import React from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends React.Component{
    constructor()
    {
        super();
        this.state={
            robots:[],
            searchField:''
        }
    }
    render(){
        const filteredRobots=this.state.robots.filter(robot=>
            {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            }
            );
        if(this.state.robots.length === 0){
            return <h1>LOADING</h1>
        }
        else{
        return(
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
        );
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));
        
    }



    onSearchChange=(event)=>{
        
        this.setState({searchField:event.target.value});  
    }



    
}


export default App;