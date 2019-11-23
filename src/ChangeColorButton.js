import React from 'react';

class ChangeColorButton extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
	 this.props.clickHandler();
     console.log('clicked');
  }
  // if you dont want to use handle click function, you ca pass this.props.handleClick to the onClick attribute of the button
  render() {
    return (
      <button onClick = {this.handleClick} >I dont like {this.props.currentColor}</button>
    );
  }
} 

export default ChangeColorButton;