import React from 'react';
import logo from './bsp_logo.png';
import './App.css';

class App extends React.Component {

  constructor(props) {               //constructor
    super(props);
    this.state = {
      newItem : "",
      list : []
    }
  }

  addItem(todoValue) {                 //method
    if(todoValue !== "") {
      const newItem = {
        id : Date.now(),
        value : todoValue,
        isDone : false
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
          list,
          newItem: ""
      });
    }
  }

 //method for delete item

 deleteItem(id) {
   const list = [...this.state.list];
   const updatedlist = list.filter(item => item.id !== id);

   //we never update the things directly, ie:- we never change state
   // directly, so we use this.setstate here.

   this.setState({list: updatedlist});
 }

updateInput(input) {
  this.setState({newItem: input});
}

  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title"> <u> ToDO App </u> </h1>

        <div className="container">
         <div className="add"> Add an Item :- </div>
           
           <input 
              type ="text"
              className="input-text"
              placeholder="Write a ToDO"
              required
              value={this.state.newItem}
              onChange={e => this.updateInput(e.target.value)}
            />

            <button className="add-btn"
            onClick={() =>  this.addItem(this.state.newItem)}
            disabled = {!this.state.newItem.length}
            >
               ADD ToDo
            </button>

            <div className="list">
              <ul>

              {this.state.list.map(item => {
                 return(
                  <li key={item.id}>
                    <input
                      type = "checkbox"
                      name = "isDone"
                      //checked = {item.isDone}
                      onChange = {() => {} }
                    />

                  {item.value}

                  <button className="btn"
                  onClick= { () => {this.deleteItem(item.id)}}
                  > Delete 
                  </button>
                  </li>
                 );
              })}
              </ul>
            </div>

        </div>
      </div>
    );
  }

}

export default App


            // <li>
            //   <input type="checkbox" name="" id="" />
            //    Record YouTube Videos
            //    <button className="btn"> Delete</button>
            // </li> 

            // <br />   for break lines