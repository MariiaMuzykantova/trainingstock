import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Addcustomer from "./Addcustomer";
import Editcustomer from "./Editcustomer";
import {CSVLink, CSVDownload} from 'react-csv';
import * as FontAwesome from 'react-icons/lib/fa';

class Customerslist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        this.loadCustomers();
    }

    loadCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(res => res.json())
        .then(resData => {
           this.setState({customers: resData.content});
        })
    }

    deleteCustomer = (value) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to delete a customer?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                  fetch(value, {method: 'DELETE'})
                  .then(res => this.loadCustomers())
                  toast.success("Customer is deleted !",
                  {position: toast.POSITION.TOP_RIGHT})
              }},
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          })
        }

        addCustomer = (newCustomer) => {

            fetch('https://customerrest.herokuapp.com/api/customers', {
                method: 'POST',
                headers : {'Content-Type': 'application/json'},
                body : JSON.stringify(newCustomer)})
            .then(res => this.loadCustomers())
            .catch(err => console.error(err))
        }

        updateCustomer = (link, customer) => {
         console.log(link)
            fetch(link, {
                method: 'PUT',
                headers : {'Content-Type': 'application/json'},
                body : JSON.stringify(customer)})
            .then(res => this.loadCustomers())
            .catch(err => console.error(err))
        }



    render() {

        return (

            <div className="container">
                <h2>My customers</h2>
                <div className = "row">
                <Addcustomer addCustomer={this.addCustomer}/>
                <CSVLink data={this.state.customers} >Download csv</CSVLink>
                </div>
                <ReactTable
                    data={this.state.customers}
                    filterable
                    columns={[{
                        columns: [
                            {
                                Header: "First name",
                                accessor: "firstname"
                            }, {
                                Header: "Lastname",
                                accessor: "lastname"
                            }, {
                                Header: "Street address",
                                accessor: "streetaddress"
                            }, {
                                Header: "City",
                                accessor: "city"
                            }, {
                                Header: "Email",
                                accessor: "email"
                            },
                            {
                                Header: "Phone number",
                                accessor: "phone"
                            },
                            // {
                            //     Header: "Customer's trainings",
                            //     accessor: "links[2].href"
                            // },
                            {
                                Header: "",
                                sortabele: false,
                                filterable: false,
                                accessor: "links[0].href",
                            Cell: ({value}) => (<button type="button" className="btn btn-danger" onClick={ () => {this.deleteCustomer(value)}}>Delete <FontAwesome.FaClose /></button>)
                            },
                            {
                                Header: "",
                                sortabele: false,
                                filterable: false,
                                width: 100,
                                accessor: "links[0].href",
                            Cell: ({row, value}) => (<Editcustomer updateCustomer = {this.updateCustomer} link = {value} customer = {row}/>)
                            }
                        ]
                    }
                ]}
                    defaultPageSize={10}
                    style={{
                        height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
                      }}
                    className="-striped -highlight"/>
                <br/>
                    <ToastContainer autoClose={1500}/>
            </div>

        )
    }
}

export default Customerslist;
