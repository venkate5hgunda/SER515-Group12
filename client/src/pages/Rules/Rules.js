import React from 'react';
import '../../App.css';
import './Rules.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import Application1 from '../Rules/Application1';
import Format1 from '../Rules/Format1';
import General1 from '../Rules/General1';
import Hotel1 from '../Rules/Hotel1';
import Registration1 from '../Rules/Registration1';
import Selection1 from '../Rules/Selection1';
import Web1 from '../Rules/Web1';

function Rules() {
 return (
  <div className="rar-details">
   
   <Tabs defaultActiveKey="application" id="rules-and-regulations" className="mb-6">
    <Tab eventKey="application" title="Application">
     <Application1 />
    </Tab>
    <Tab eventKey="Bracketing/Team Selection" title="Bracketing/Team Selection">
     <Selection1 />
    </Tab>
    <Tab eventKey="Format" title="Format">
     <Format1 />
    </Tab>
    <Tab eventKey="General" title="General">
     <General1 />
    </Tab>
    <Tab eventKey="Hotels/Travel" title="Hotels/Travel">
     <Hotel1 />
    </Tab>
    <Tab eventKey="Registration" title="Registration">
     <Registration1 />
    </Tab>
    <Tab eventKey="Web Site" title="Web Site">
     <Web1 />
    </Tab>
   </Tabs>
  </div>
 );
}

export default Rules;