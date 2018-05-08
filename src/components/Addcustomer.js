import React from 'react';
import SkyLight from 'react-skylight';
import * as FontAwesome from 'react-icons/lib/fa';

class Addcustomer extends React.Component {
constructor(props) {
    super(props);
    this.state = {firstname: '', lastname: '', streetaddress: '', city: '', email: '', phone: '', trainings: ''}
}

handleChange = (event) => {
    this.setState ({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault();
  
    const newCustomer = {firstname: this.state.firstname, lastname: this.state.lastname, streetaddress: this.state.streetaddress, city: this.state.city, email: this.state.email, phone: this.state.phone};
        this.props.addCustomer(newCustomer);
        this.simpleDialog.hide();
    }

  render() {

    return (
      <div>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Please, add a new customer here">

          <form>
              <div className = "form-group">
                 <input placeholder = "First name" className = "form-control" name = "firstname" onChange={this.handleChange}/>
              </div>
              <div className = "form-group">
                 <input placeholder = "Last name" className = "form-control" name = "lastname" onChange={this.handleChange}/>
              </div>
              <div className = "form-group">
                 <input placeholder = "Street address" className = "form-control" name = "streetaddress" onChange={this.handleChange}/>
              </div>
              <div className = "form-group">
                 <input placeholder = "City" className = "form-control" name = "city" onChange={this.handleChange}/>
              </div>
              <div className = "form-group">
                 <input placeholder = "Email" className = "form-control" name = "email" onChange={this.handleChange}/>
              </div>
              <div className = "form-group">
                 <input placeholder = "Phone number" className = "form-control" name = "phone" onChange={this.handleChange}/>
              </div>
              <button className = "btn btn-primary" onClick={this.handleSubmit}>Save <FontAwesome.FaFloppyO /></button>
              </form>
        </SkyLight>
        <button style ={{margin: 10}} className = "btn btn-primary" onClick={() => this.simpleDialog.show()}>Add customer <FontAwesome.FaPlus /></button>
      </div>
    )
  }
}

export default Addcustomer;
