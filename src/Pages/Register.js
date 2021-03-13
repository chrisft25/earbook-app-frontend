import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import HTTP from "../Helpers/HTTP";

export default function Register() {
  const [countries, setCountries] = useState({});
  const [cities, setCities] = useState({});
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedCity, setSelectedCity] = useState();
  useEffect(() => HTTP.get("iso", setCountries), []);
  useEffect(() => {
    selectedCountry &&
      HTTP.post("cities", setCities, { country: selectedCountry });
  }, [selectedCountry]);
  return (
    <>
      <Container>
        <h1>Earbook</h1>
        <Row>
          <Col sm={12} md={6}>
            <Form>
              <Form.Group controlId="input.username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Choose your awesome nickname"
                />
              </Form.Group>
              <Form.Group controlId="input.email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="johndoe@example.com" />
              </Form.Group>

              <Form.Group controlId="input.password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Type your Password"
                />
              </Form.Group>
              <Form.Group controlId="input.confirm-password">
                <Form.Label>Confirm your password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm your password"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={12} md={6}>
            <Form>
              <Form.Group controlId="input.first-name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Tell us your name" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlId="input.last-name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tell us your last name"
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlId="input.address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Where do you live?" />
              </Form.Group>
              <Form.Group controlId="select.country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  {countries.data
                    ? countries.data.map((country, index) => (
                        <option key={index}>{country.name}</option>
                      ))
                    : null}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="select.states">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  {cities.data
                    ? cities.data.map((city, index) => (
                        <option key={index}>{city}</option>
                      ))
                    : null}
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
