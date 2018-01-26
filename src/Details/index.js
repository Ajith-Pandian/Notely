import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { connect } from "react-redux";

import Header from "./Header";
import IconButton from "../Components/IconButton";
import Button from "../Components/Button";
import { updateTitleAndDescription } from "../Store/Actions/NotesActions";

class Editor extends Component {
  render() {
    let { title, description, onTitleChange, onDescriptionChange } = this.props;
    return (
      <View
        style={{
          marginTop: 10,
          paddingVertical: 10,
          paddingHorizontal: 20
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Title:</Text>
        <TextInput
          multiline
          placeholder="Title"
          onChangeText={title => onTitleChange(title)}
          value={title}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Description:</Text>
        <TextInput
          multiline
          placeholder="Description"
          onChangeText={description => onDescriptionChange(description)}
          value={description}
        />
      </View>
    );
  }
}
class Details extends Component {
  constructor(props) {
    super(props);
    let { navigation } = props;
    let note = navigation.state.params
      ? navigation.state.params.note
      : { id: 0, title: "Title", description: "Description" };
    let { id, title, description } = note;
    this.state = {
      isEdit: false,
      id,
      title,
      description,
      editedTitle: title,
      editedDescription: description
    };
  }
  render() {
    let { navigation, _updateTitleAndDescription } = this.props;
    let {
      isEdit,
      title,
      description,
      editedTitle,
      editedDescription
    } = this.state;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <Header
          title={title}
          isEdit={isEdit}
          onEditPress={() => this.setState({ isEdit: true })}
          onBackPress={() => navigation.goBack()}
          onSavePress={() =>
            this.setState(
              {
                title: editedTitle,
                description: editedDescription,
                isEdit: false
              },
              () => {
                let { id, title, description } = this.state;
                _updateTitleAndDescription(id, title, description);
              }
            )
          }
          onCancelPress={() => this.setState({ isEdit: false })}
        />
        {isEdit ? (
          <Editor
            title={editedTitle}
            description={editedDescription}
            onTitleChange={editedTitle => this.setState({ editedTitle })}
            onDescriptionChange={editedDescription =>
              this.setState({ editedDescription })
            }
          />
        ) : (
          <Text style={styles.sWelcome}>
            {description}
            {description}
          </Text>
        )}
      </ScrollView>
    );
  }
}
Details.navigationOptions = { header: null };

const mapStateToProps = ({ NotesReducer }) => {
  let { notes, isFiltered } = NotesReducer;
  return {
    notes,
    isFiltered
  };
};

const mapDispatchToProps = dispatch => ({
  _updateTitleAndDescription: (id, title, description) =>
    dispatch(updateTitleAndDescription(id, title, description))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);

const styles = StyleSheet.create({
  sContainer: {
    flex: 1
  },
  sWelcome: {
    fontSize: 20,
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 40
  }
});
