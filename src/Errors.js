/* eslint react/prop-types: 0 */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import logoLine from "./logos/logo-line-white.svg";

export const UNKNOWN_ELECTION_ERROR = "E1";
export const ONGOING_ELECTION_ERROR = "E2";
export const NO_VOTE_ERROR = "E3";
export const ELECTION_NOT_STARTED_ERROR = "E4";
export const ELECTION_FINISHED_ERROR = "E5";
export const INVITATION_ONLY_ERROR = "E6";
export const UNKNOWN_TOKEN_ERROR = "E7";
export const USED_TOKEN_ERROR = "E8";
export const WRONG_ELECTION_ERROR = "E9";

export const redirectError = () => {};

export const errorMessage = (error, t) => {
  if (error.startsWith(UNKNOWN_ELECTION_ERROR)) {
    return t("Oops... The election is unknown.");
  } else if (error.startsWith(ONGOING_ELECTION_ERROR)) {
    return t(
      "The election is still going on. You can't access now to the results."
    );
  } else if (error.startsWith(NO_VOTE_ERROR)) {
    return t("No votes have been recorded yet. Come back later.");
  } else if (error.startsWith(ELECTION_NOT_STARTED_ERROR)) {
    return t("The election has not started yet.");
  } else if (error.startsWith(ELECTION_FINISHED_ERROR)) {
    return t("The election is over. You can't vote anymore");
  } else if (error.startsWith(INVITATION_ONLY_ERROR)) {
    return t("You need a token to vote in this election");
  } else if (error.startsWith(USED_TOKEN_ERROR)) {
    return t("You seem to have already voted.");
  } else if (error.startsWith(WRONG_ELECTION_ERROR)) {
    return t("The parameters of the election are incorrect.");
  }
};

export const Error = props => (
  <Container>
    <Row>
      <Link to="/" className="d-block ml-auto mr-auto mb-4">
        <img src={logoLine} alt="logo" height="128" />
      </Link>
    </Row>
    <Row className="mt-4">
      <Col className="text-center">
        <h4>{props.value}</h4>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col className="text-center">
        <Link to="/" className="btn btn-secondary">
          Back to home page
        </Link>
      </Col>
    </Row>
  </Container>
);
