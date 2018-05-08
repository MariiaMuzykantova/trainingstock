import React from 'react';
import moment from 'moment';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'; // Import css
//import FullCalendar from 'fullcalendar-reactwrapper'; // ... and fullcalendar-reactwrapper.

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todaydate: moment().startOf('today'),
      events: []
    }
  }

  componentDidMount() {
    $(document).ready($(function () {
      // page is now ready, initialize the calendar...
      
        // put your options and callbacks here
        $.ajax({
          url: "https://customerrest.herokuapp.com/gettrainings/",
        method: "GET",
        datatype: "json",
        data: {
          "$where" : "date > '" + moment().subtract(31, 'days').format("YYYY-MM-DDT00:00:00") + "'",
        }
      }).done(function(response) {
        // Parse our events into an event object for FullCalendar
        var events = [];
        $.each(response, function(idx, e) {
          events.push({
            start: e.date,
            end: e.date,
            title: e.activity + " (CUSTOMER: " + e.customer.firstname + " " + e.customer.lastname + ") "
          });
        });
        $('#calendar').fullCalendar({
          events: events,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          defaultView: 'agendaWeek',
        selectable: true,
        selectHelper: true,
        allDaySlot: true,
        editable: true
        });
      })
    }))
  }
  render() {
    return (
      <div id="calendar"></div>
    );
  }
}
export default MyApp;
