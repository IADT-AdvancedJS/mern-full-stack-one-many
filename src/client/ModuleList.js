import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './app.css';

class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = { modules: [] };
  }

  componentDidMount() {
    axios.get(`api/lecturers/${this.props.match.params.id}/modules`)
      .then(response => {
        this.setState({ modules: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    const moduleList = this.state.modules.map(u => (
      <Module
        key={u._id}
        id={u._id}
        name={u.name}
        credits={u.credits}
        weeks={u.weeks}
      />
    ));

    return (
      <div>
        {moduleList.length ?
          <div>
            <h2>All Modules</h2>
            <div>{moduleList}</div></div> :
          <h2>No Modules</h2> }
      </div>
    );
  }
}

const Module = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Credits: {props.credits}</p>
      <p>Runs for {props.weeks} weeks</p>
    </div>
  );
};

export default ModuleList;
