import React from 'react';
import { Link } from 'react-router-dom';

class Lecturer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>{this.props.name}</p>
          <p>Office: {this.props.office}</p>
          <p>Email: {this.props.email}</p>

          <Link to={`/module/${this.props.id}`}>
            <button type="button">
                  View modules taught
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Lecturer;
