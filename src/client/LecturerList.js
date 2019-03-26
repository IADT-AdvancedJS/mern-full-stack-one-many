import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lecturer from './Lecturer';
import axios from 'axios';
import './app.css';

class LecturerList extends Component {
  constructor(props) {
    super(props);

    this.state = { lecturers: [] };
  }

  componentDidMount() {
    axios.get('api/lecturers')
      .then(response => {
        this.setState({ lecturers: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    
    const lecturerList = this.state.lecturers.map(u => (
      <Lecturer
        key={u._id}
        id={u._id}
        name={u.name}
        email={u.email}
        office={u.office}
      />
    ));

    return (
      <div>
        <h2>All Lecturers</h2>
        <div>{lecturerList}</div>
      </div>
    );
  }
}

export default LecturerList;
