import "./App.css";
import Celcius from "./components/Celcius";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button} from "reactstrap";
import React from "react";
import { Component} from "react";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }

  arttirma(){
    this.setState({
      count: this.state.count + 1
    });
  }

  azaltma(){
    this.setState({
      count: this.state.count - 1
    });
  }

  reset(){
    this.setState({
      count: 0
    });
  }

  render(){
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Derece Çevrimi Uygulaması</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p >Anlık Sıcaklık : {this.state.count}</p>
          </Col>
        </Row>
        <Row className="buton">
          <Button onClick={()=>{this.arttirma()}} color="success">Sıcaklığı Arttır</Button>
          <Button onClick={()=>{this.azaltma()}} color="danger">Sıcaklığı Azalt</Button>
          <Button onClick={()=>{this.reset()}} >Resetle</Button>
        </Row>
        <Row className="dereceler">
          <Col><Celcius count={this.state.count} /></Col>
          <Col><Fahrenheit count={this.state.count}/></Col>
          <Col><Kelvin count={this.state.count}/></Col>
        </Row>
      </Container>
    </div>
  );
}
}

export default App;
