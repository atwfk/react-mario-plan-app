import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import Spinner from "../layout/spinner/Spinner";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth, loading } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    let Component = (
      <form className="white" onSubmit={this.handleSubmit}>
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            className="materialize-textarea"
            id="content"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    );
    if (loading) {
      Component = <Spinner />;
    }
    return <div className="container">{Component}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.project.isLoading,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
