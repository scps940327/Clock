import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
   constructor() {
      super();
      this.state = {
         hour: new Date().getHours(),
         minute: new Date().getMinutes(),
         second: new Date().getSeconds()
      }

      setInterval(function(){
         var dateObject = new Date();
         this.setState({
            hour: dateObject.getHours() + dateObject.getMinutes()/60,
            minute: dateObject.getMinutes(),
            second: dateObject.getSeconds()
         }
      );}.bind(this),1000);
   }
   render() {
      return (
         <div className="clock">
            <div id="hour_pointer" className="clock_pointer" style={{transform: 'rotate(' + this.state.hour*30 + 'deg)'}}></div>
         	<div id="minute_pointer" className="clock_pointer" style={{transform: 'rotate(' + this.state.minute*6 + 'deg)'}}></div>
            <div id="second_pointer" className="clock_pointer" style={{transform: 'rotate(' + this.state.second*6 + 'deg)'}}></div>
         </div>
      );
   }
}

export default Clock;
ReactDOM.render(<Clock />, document.getElementById('root'));