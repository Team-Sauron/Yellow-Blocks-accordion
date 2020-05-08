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
            ftIsOpen: false,
            bIsOpen: false,
            dIsOpen : false,
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
            ftIsOpen: !state.ftIsOpen
        }));
    }

    handleClickb() {
        this.setState(state=> ({
            bIsOpen: !state.bIsOpen
        }));
    }

    handleClickd() {
        this.setState(state=> ({
            dIsOpen: !state.dIsOpen
        }));
    }
    
    render () {
       
        return (
            <>
            <div>
                {!this.state.ftIsOpen && (
                    <div>
                        <div className="ftOpen">
                        <button className="button" onClick={this.handleClick.bind(this)}>Features</button>
                        </div>
                    </div>
                )}

                {this.state.ftIsOpen && (
                    <div>
                        <div className="ftOpen">
                        <button className="button" onClick={this.handleClick.bind(this)}>Features</button>
                        </div>
                        < Features ft={this.state.features}/>
                    </div>
                )}
            </div>
            <div>
                {!this.state.bIsOpen && (
                    <div>
                        <div className="ftOpen">
                        <button className="button" onClick={this.handleClickb.bind(this)}>Building Instructions</button>
                        </div>
                    </div>
                )}

                {this.state.bIsOpen && (
                    <div>
                        <div className="ftOpen">
                        <button className="button" onClick={this.handleClickb.bind(this)}>Building Instructions</button>
                        </div>
                        < Build ft={this.state.features}/>
                    </div>
                )}
            </div>
            <div>
                {!this.state.dIsOpen && (
                    <div>
                        <div className="ftOpen">
                        <button className="button" onClick={this.handleClickd.bind(this)}>Deliveries and Returns</button>
                        </div>
                    </div>
                )}

                {this.state.dIsOpen && (
                    <div>
                        <div className="ftOpen">
                        <button className="button" onClick={this.handleClickd.bind(this)}>Deliveries and Returns</button>
                        </div>
                        < Build ft={this.state.features}/>
                    </div>
                )}
            </div>
                
          </>
        );
    }
}

ReactDOM.render(<Accordion />, document.getElementById('accordion'))
