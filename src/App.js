import React from 'react';
// *********** Style import*********
import './App.css';

// *********** Components***********
import Navmenu from './Components/Navmenu/Navmenu'
import { Container, Row } from 'react-bootstrap';

const names = [{ name: 'Home', isActive: true, link: "'www.google.com'", dropDown: null },
{ name: 'Services', isActive: false, link: "/", dropDown: [{ subname: "For entrepreneurs", sublink: "/" }, { subname: "For students", sublink: "/" }, { subname: "For hobbyists", sublink: "/" }] },
{ name: 'Contact', isActive: false, link: "/", dropDown: null }]
// 

function App() {
  return (
    <Container>
      <Row>
        {names.map(el => <Navmenu name={el.name} isActive={el.isActive} link={el.link} dropDown={el.dropDown} />)}
      </Row>
    </Container>

  );
}

export default App;
