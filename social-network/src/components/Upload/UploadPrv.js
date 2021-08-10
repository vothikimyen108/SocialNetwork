import React, { Component } from "react";
import UploadPreview from "material-ui-upload/UploadPreview";

class UploadPrv extends Component {
  constructor() {
    super();
    this.state = {
      pictures: {},
    };
  }

  onChange = (pictures) => this.setState({ pictures });

  render() {
    return (
      <UploadPreview
        title="Picture"
        label="Add"
        initialItems={this.state.pictures}
        onChange={this.onChange}
      />
    );
  }
}
