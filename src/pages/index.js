/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';



class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eur: "",
      usd: "",
    };
  }
  Calcular(){

    var myHeaders = new Headers();

    var myInit = { method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default' };
  var data = {
    //symbols: 'USD',
    //date: '2018-08-23'

  };
    fetch('http://data.fixer.io/api/lastest?access_key=bccf73e34c3b762a1dfef225d7819280&date=2018-08-23', myInit)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }

  render() {
    return <main>

      <div style={{
        backgroundColor: '#286a1b',

        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center'

      }}>

        <div>
          <input  style={{
            margin: '1em 1.5em',
            textAlign: 'center'
          }} placeholder={"USD"} disabled={true}
          value={this.state.usd}
          />

          <input  style={{
            margin: '1em 1.5em',
            textAlign: 'center'
          }} placeholder={"EU"}
          value={this.state.eur}
          />

        </div>
        <div>
          <button
            style={{
              backgroundColor: '#496624',
              border: 'none',
              color: '#fff',
              padding: '.5em 2em'
            }} onClick={this.Calcular}>
            CALCULATE</button>
        </div>

      </div>
    </main>;
  }
}

/*
const IndexPage = props =>
  (<main>

    <div style={{
      backgroundColor: '#286a1b',

      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
      textAlign: 'center'

    }}>

      <div>
        <input  style={{
          margin: '1em 1.5em',
          textAlign: 'center'
        }} placeholder={"USD"} disabled={true}/>

        <input  style={{
          margin: '1em 1.5em',
          textAlign: 'center'
        }} placeholder={"EU"}
        />

      </div>
      <div>
        <button
          style={{
            backgroundColor: '#496624',
            border: 'none',
            color: '#fff',
            padding: '.5em 2em'
          }} onClick={this.Calcular}>
          CALCULATE</button>
      </div>

    </div>
  </main>);
*/
export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
