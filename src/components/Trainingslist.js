import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Addtraining from "./Addtraining";
import Edittraining from "./Edittraining";
import {CSVLink, CSVDownload} from 'react-csv';

class Trainingslist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainings: [], id: ''
        };
    }

    componentDidMount() {
        this.loadTrainings();
    }

    loadTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(res => res.json())
        .then(resData => {
           this.setState({trainings: resData});
        })
    }

    deleteTraining = (value) => {
        const url = 'https://customerrest.herokuapp.com/api/trainings/' + value;
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to delete a training?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                  fetch(url, {method: 'DELETE'})
                  .then(res => this.loadTrainings())
                  toast.success("Training is deleted !",
                  {position: toast.POSITION.TOP_RIGHT})
              }},
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          })
        }

        addTraining = (newTraining) => {
            fetch('https://customerrest.herokuapp.com/api/trainings', {
                method: 'POST',
                headers : {'Content-Type': 'application/json'},
                body : JSON.stringify(newTraining)})
            .then(res => this.loadTrainings())
            .catch(err => console.error(err))
        }

        updateTraining = (link, training) => {
            const link1 = "https://customerrest.herokuapp.com/api/trainings/16";
            console.log(link);
            //const training1 = {date: "1", duration: "60", activity: "Box"};//, customer: "https://customerrest.herokuapp.com/api/customers/6"};
            const training1 = {date: "12", duration: "65", activity: "Bok", customer: "https://customerrest.herokuapp.com/api/customers/2"};
            fetch(link1, {
                method: 'PUT',
                headers : {'Content-Type': 'application/json'},
                body : JSON.stringify(training1)})
            .then(res => this.loadTrainings())
            .catch(err => console.error(err))
        }



    render() {

        return (

            <div className="container">
                <h2>Trainings</h2>
                <div className = "row">
                <Addtraining addTraining={this.addTraining}/>
                <CSVLink data={this.state.trainings} >Download csv</CSVLink>
                </div>
                <ReactTable
                    data={this.state.trainings}
                    filterable
                    columns={[{
                        columns: [
                            {
                                Header: "Date",
                                accessor: "date"
                            }, {
                                Header: "Duration",
                                accessor: "duration"
                            }, {
                                Header: "Activity",
                                accessor: "activity"
                            }, {
                                Header: "Customer's ID",
                                accessor: "customer.id" //how to add firstname as well?
                            },{
                                Header: "Customer",
                                accessor: "customer.lastname" //how to add firstname as well?
                            },
                            {
                                Header: "",
                                sortabele: false,
                                filterable: false,
                                accessor: "id",
                            Cell: ({value}) => (<button type="button" className="btn btn-danger" onClick={ () => {this.deleteTraining(value)}}>Delete</button>)
                            },
                            {
                                Header: "",
                                sortabele: false,
                                filterable: false,
                                width: 100,
                                accessor: "links[0].href",
                            Cell: ({row, value}) => (<Edittraining updateTraining = {this.updateTraining} link = {value} training = {row}/>)
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

export default Trainingslist;
