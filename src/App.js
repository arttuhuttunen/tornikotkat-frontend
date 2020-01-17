import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ViewContainer from './ViewContainer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/esittely'>
            <Esittely />
          </Route>
          <Route path='/lippukunta'>
            <Lippukunta />
          </Route>
          <Route path='/'>
            <Etusivu />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


function Etusivu() {
  return (
    <div>
      <ViewContainer>
      <h1>Etusivu </h1>
      </ViewContainer>
      
    </div>
  )
}

function Esittely() {
  return (
    <div>
      <ViewContainer>
      <h1>Esittely </h1>
      Miten p&auml;&auml;sen mukaan?
<p>&nbsp;</p>
<p>Iloiseen joukkoomme p&auml;&auml;sev&auml;t kaikki yli 7-vuotiaat tai t&auml;n&auml; vuonna 7 t&auml;ytt&auml;v&auml;t pojat. Vauhdikasta toimintaa ja haastavia teht&auml;vi&auml; l&ouml;ytyy kaikenik&auml;isille. </p>
<p>Toimintaamme voi tulla mukaan milloin tahansa, p&auml;&auml;s&auml;&auml;nt&ouml;isesti otamme uusia j&auml;seni&auml; vastaan syksyisin aina koulujen alkaessa. </p>
<p>Tervetuloa mukaan reippaaseen joukkoomme!</p>
<p>Ota yhteytt&auml; lippukunnanjohtajaan:</p>
<p><br />
    </p>

      </ViewContainer>
    </div>
  )
}

function Lippukunta() {
  return (
    <div>
      <ViewContainer>
      <h1>Lippukunta </h1>
      <p>Partiolippukunta Tornikotkat ry on maapartiotoimintaan keskittyv&auml; poikalippukunta. Tornikotkat on perustettu vuonna 1937 Aimo Virtasen toimesta. Tornikotkat ovat alusta alkaen kokoontuneet kolollaan Martin seurakuntatalolla.</p>
<p>Lippukunnassa toimii t&auml;ll&auml; hetkell&auml; kolme sudenpentulaumaa, nelj&auml; vartiota ja yksi vaeltajaryhm&auml;. My&ouml;s johtajaik&auml;iset kokoontuvat s&auml;&auml;nn&ouml;llisesti suunnittelemaan ja toteuttamaan toimintaa. J&auml;seni&auml; lippukunnassamme on noin sata. </p>
<p>Tornikotkat on alueensa elinvoimaisin ja aktiivisin lippukunta. Tarjoamme j&auml;senillemme mielek&auml;st&auml; ja laadukasta toimintaa ymp&auml;ri vuoden. Vaalimme pitki&auml; perinteit&auml;mme ja panostamme erityisesti er&auml;henkiseen toimintaan. Luonto ja luonnossa liikkuminen on jokaisen tornikotkan syd&auml;nt&auml; l&auml;hell&auml;! </p>
<p>Tornikotkien taustayhteis&ouml; toimii Martin seurakunta, jonka alaisiin lippukuntiin kuuluvat my&ouml;s sisarlippukuntamme Tuulihaukat ja Tornip&auml;&auml;skyt. </p>
      </ViewContainer>
    </div>
  )
}

export default App;
