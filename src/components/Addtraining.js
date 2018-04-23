import React from 'react';
import SkyLight from 'react-skylight';

class Addtraining extends React.Component {
constructor(props) {
    super(props);
    this.state = {date: '', duration: '', activity: '', customerid: ''}
}

handleChange = (event) => {
    this.setState ({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault();
  // api want training data in following format:
    //{
    //"date":"2018-1-1"
    //"activity":"Spinning"
    //"duration" "50"
    // "customer":"https://customerrest.herokuapp.com/api/customers/2"
    //}
    // but we are only giving customer number in UI
    const newTraining = {date: this.state.date, duration: this.state.duration, activity: this.state.activity, customer:  "https://customerrest.herokuapp.com/api/customers/" + this.state.customerid };
        this.props.addTraining(newTraining);
        this.simpleDialog.hide();
    }

  render() {

    return (
      <div>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Hi, I'm a simple modal">

          <form>
              <div className = "form-group">
                 <input placeholder = "Date" className = "form-control" name = "date" onChange={this.handleChange}/>
              </div>
              <div className = "form-group">
                 <input placeholder = "Duration" className = "form-control" name = "duration" onChange={this.handleChange}/>
              </div>
              <div className = "form-group">
                 <input placeholder = "Activity" className = "form-control" name = "activity" onChange={this.handleChange}/>
              </div>
              <div className = "form-group">
                 <input placeholder = "Customer's ID" className = "form-control" name = "customerid" onChange={this.handleChange}/>
              </div>
             
              <button className = "btn btn-primary" onClick={this.handleSubmit}>Save</button>
              </form>
        </SkyLight>
        <button style ={{margin: 10}} className = "btn btn-primary" onClick={() => this.simpleDialog.show()}>Add training</button>
      </div>
    )
  }
}

export default Addtraining;
