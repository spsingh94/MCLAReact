import React from "react";
import styles from "./signupC.module.css";

// import { Link } from "react-router-dom";
// reactstrap components

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
} from "reactstrap";

// core components

function SignupC(props) {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <div className={`${styles.section} ${styles.sectionSignup}`}>
        <div className={styles.container}>
          <Row className={styles.row}>
            <Card className={styles.cardSignup} data-background-color="blue">
              <Form action="" className={styles.form} method="">
                <CardHeader
                  className={`${styles.textCenter} ${styles.cardHeader}`}
                >
                  <CardTitle
                    className={`${styles.cardTitle} ${styles.titleUp}`}
                    tag="h3"
                  >
                    Sign Up
                  </CardTitle>
                  <div className={styles.socialLine}>
                    <Button
                      className={`${styles.btnneutral} ${styles.btnicon} ${styles.btnround} ${styles.btnGH}`}
                      color="github"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-github btngithub"></i>
                    </Button>
                    <Button
                      className={`${styles.btnneutral} ${styles.btnicon} ${styles.btnround} ${styles.btnG}`}
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus btngoogle"></i>
                    </Button>
                    <Button
                      className={`${styles.btnneutral} ${styles.btnicon} ${styles.btnround} ${styles.btnL}`}
                      color="linkedin"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className={styles.cardBody}>
                  <InputGroup className={styles.inputGroup}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="far fa-user-circle"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup className={styles.inputGroup}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last Name..."
                      type="text"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup className={styles.inputGroup}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="far fa-user-circle"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="text"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/login-page"
              outline
              size="lg"
              // tag={Link}
            >
              View Login Page
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupC;
