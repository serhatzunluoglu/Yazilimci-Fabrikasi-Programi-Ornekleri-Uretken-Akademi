import React, { Component } from "react";
import axios from "axios";
import { Table, Row, Col, Container} from "reactstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        console.log(response);
        this.setState({
          users: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: true,
          error: error.message,
        });
      });
  }

  render() {
    const { users, loading, error } = this.state;

    // const users= this.state.users;
    // const loading= this.state.loading;
    // const error= this.state.error;

    if (loading === true) {
      return <p>Loading...</p>;
    }

    if (error === true) {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        <Container>
          <Row>
            <Col>
            <h1>Kullanıcı Listesi</h1>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Telefon</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <th>{user.id}</th>
                      <td>{user.username}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
