import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from'react-player';
import styled from 'styled-components';
import axios from 'axios';
import $ from 'jquery';
import Features from './components/features.jsx'

/*const Header = styled.h1`
    font-family: Chilanka;
    `*/
/*const Sections = styled.div`
        display: grid | inline-grid;
    
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    `
*/
class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            features: []
        }
    }

componentDidMount() {
    const loc = window.location.href
    const id = loc.slice(-1)
   
    var they = this
   axios.get(`/api/accordion/${id}`)
        .then(function (response) {
            they.setState({features: response.data.features})
            console.log("HERE RES AXIOS ", response);
        })
        .catch(function (error) {
            console.log("AXIOS ERROR ",error);
          })
          .finally(function () {});
}
    
    render () {
        console.log("STATE ",this.state.features)
        return (
            <>
            <div>
                < Features ft={this.state.features}/>
            
            </div>
          </>
        );
    }
}

ReactDOM.render(<Accordion />, document.getElementById('accordion'))
