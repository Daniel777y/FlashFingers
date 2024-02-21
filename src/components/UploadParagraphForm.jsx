import React, { Component } from "react";
import PropTypes from "prop-types";

export default class UploadParagraphForm extends Component {
  constructor(props) {
    super(props);
  }
  onUpload = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    e.target.querySelector("input[name=paragraph]").value = "";
    const data = Object.fromEntries(formData);
    if (!data.paragraph || data.paragraph.length > 200) {
      alert('Text length cannot exceed 200 characters.');
      return;
    }
    //console.log(data.paragraph);
    this.props.onUploadParagraph(data.paragraph);
  };
  render() {
    return (
      <div>
        <form action="/" onSubmit={this.onUpload}>
          <label className="mb-1 form-label">
            <p className="mt-2">Please enter your own text (no more than 200 characters):</p>
            <input
              type="text"
              className="form-control"
              name="paragraph"
              autoComplete="off"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>
      </div>
    );
  }
}

UploadParagraphForm.propTypes = {
  onUploadParagraph: PropTypes.func.isRequired,
};
