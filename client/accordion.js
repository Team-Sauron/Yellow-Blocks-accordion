import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Features from './components/features.jsx';
import Build from './components/buildinstructions.jsx'

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
            features: [],
            isOpen: false
        };
       
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

    handleClick() {
        this.setState(state=> ({
            isOpen: !state.isOpen
        }));
    }
    
    render () {
       
        return (
            <>
            <div>
                {!this.state.isOpen && (
                    <div>
                        <div className="ftOpen">Features
                        <button onClick={this.handleClick.bind(this)}>X</button>
                        </div>
                    </div>
                )}

                {this.state.isOpen && (
                    <div>
                        <div className="ftOpen">Features
                        <button onClick={this.handleClick.bind(this)}>X</button>
                        </div>
                        < Features ft={this.state.features}/>
                    </div>
                )}
                

                < Build ft={this.state.features}/>
            </div>
          </>
        );
    }
}

ReactDOM.render(<Accordion />, document.getElementById('accordion'))
