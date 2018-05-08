import React from 'react';
import SkyLight from 'react-skylight';
import moment from 'moment';
import * as FontAwesome from 'react-icons/lib/fa';

class Edittraining extends React.Component {
constructor(props) {
    super(props);
    //this.state = {date: this.props.training.date, duration: this.props.training.duration, activity: this.props.training.activity, customerid: this.props.training.customerid}
    this.state = {id: this.props.training.id, date: this.props.training.date, duration: this.props.training.duration, activity: this.props.training.activity}
    console.log(this.props.link);
    console.log(this.props.training);
    
}

handleChange = (event) => {
    this.setState ({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault();

    const training = {date: this.state.date, duration: this.state.duration, activity: this.state.activity};
        this.props.updateTraining(this.state.id, training);
        this.simpleDialog.hide();
    }

  render() {

    return (
      <div>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Edit training">

          <form>
              <div className = "form-group">
                 <input placeholder = "Date" value = {this.state.date} className = "form-control" name = "date" onChange={this.handleChange}/>
              </div>
              <div className = "form-group">
                 <input placeholder = "Duration" value = {this.state.duration} className = "form-control" name = "duration" onChange={this.handleChange}/>
              </div>
              <div className = "form-group">
                 <input placeholder = "Activity" value = {this.state.activity} className = "form-control" name = "activity" onChange={this.handleChange}/>
              </div> 
              <button className = "btn btn-primary" onClick={this.handleSubmit}>Save <FontAwesome.FaFloppyO /></button>
              </form>
        </SkyLight>
        <button className = "btn btn-primary" onClick={() => this.simpleDialog.show()}>Edit training <FontAwesome.FaBook /></button>
      </div>
    )
  }
}

export default Edittraining;
