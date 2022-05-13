import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

export default class SurveyNew extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { new: true};
  // }

  state = { showReview: false };

  render() {
    return (
      <>
        {this.state.showReview ? (
          <SurveyFormReview
            onSurveySubmit={() => this.setState({ showReview: false })}
          />
        ) : (
          <SurveyForm
            onSurveySubmit={() => this.setState({ showReview: true })}
          />
        )}
      </>
    );
  }
}
