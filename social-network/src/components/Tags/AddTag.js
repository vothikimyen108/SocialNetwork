import React, { useState } from "react";
import ReactDOM from "react-dom";
import { WithContext as ReactTags } from "react-tag-input";
import styles from "./ReactTags.module.css";
import tagApi from "../../api/tagApi";
const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

class AddTag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentWillMount() {
    this.renderMyData();
  }

  renderMyData() {
    const fetchCallAPi = async () => {
      try {
        //gọi từ axios
        const response = await tagApi.getTags();

        const newsTag = [];
        for (let variable of response) {
          newsTag.push({ id: variable.content, text: variable.content });
        }
        this.setState({
          suggestions: newsTag,
        });

        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchCallAPi();
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
    this.props.handleDelete(i);
  }

  handleAddition(tag) {
    this.setState((state) => ({ tags: [...state.tags, tag] }));
    this.props.changeTags(tag);
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
    this.props.handleDrag(tag, currPos, newPos);
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div className={styles.ReactTags}>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters}
        />
      </div>
    );
  }
}

export default AddTag;
