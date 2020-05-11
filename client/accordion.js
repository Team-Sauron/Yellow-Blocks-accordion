import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Features from './components/features.jsx';
import Build from './components/buildinstructions.jsx';
import Delivery from './components/delivery.jsx';
import {BsPlusCircle} from 'react-icons/bs';
import {AiOutlineMinusCircle} from 'react-icons/ai';



class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            features: [],
            ftIsOpen: false,
            bIsOpen: false,
            dIsOpen : false,
            cImg: '',
        }
       
    }

    componentDidMount() {
    const loc = window.location.href
    const id = loc.slice(-1)
   
    var they = this
   axios.get(`http://localhost:3004/api/accordion/${id}`)
        .then(function (response) {
            they.setState({features: response.data.features})
            they.setState({cImg: response.data.features.item1.A})
           
        })
        .catch(function (error) {
            console.log(error);
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
                        <button className="button" id ='mainft' onClick={this.handleClick.bind(this)}>
                            <div className='features' >Features<div id='symbol'>{<BsPlusCircle />}</div>
                            </div>
                            </button>
                        </div>
                    </div>
                )}

                {this.state.ftIsOpen && (
                    <div>
                        <div className="ftOpen">
                        <button className="button" id ='mainft' onClick={this.handleClick.bind(this)}>
                            <div className='features' >Features<div id='symbol'>{<AiOutlineMinusCircle />}</div>
                            </div>
                            </button>
                        </div>
                        < Features ft={this.state.features}/>
                    </div>
                )}
            </div>
            <div>
                {!this.state.bIsOpen && (
                    <div>
                        <div className="ftOpen" id="building">
                        <button className="button"  onClick={this.handleClickb.bind(this)}>
                            <div className='features'>Building Instructions<div id='symbol'>{<BsPlusCircle />}</div>
                            </div>
                        </button>
                    </div>
                </div>
                )}

                {this.state.bIsOpen && (
                    <div>
                        <div className="ftOpen">
                        <button className="button" onClick={this.handleClickb.bind(this)}>
                        <div className='features'>Building Instructions<div id='symbol'>{<AiOutlineMinusCircle />}</div>
                        </div>
                        </button>
                        < Build ft={this.state.features} cImg={this.state.cImg} />
                    </div>
                    </div>
                )}
            </div>
            <div>
                {!this.state.dIsOpen && (
                    <div>
                        <div className="ftOpen">
                        <button className="button" onClick={this.handleClickd.bind(this)}>
                        <div className='features'>Deliveries and Returns<div id='symbol'>{<BsPlusCircle />}</div>
                        </div>
                        </button>
                    </div>
                    </div>
                )}

                {this.state.dIsOpen && (
                    <div>
                        <div className="ftOpen">
                        <button className="button" onClick={this.handleClickd.bind(this)}>
                            <div className='features'>Deliveries and Returns<div id='symbol'>{<AiOutlineMinusCircle />}</div>
                        </div>
                        </button>
                        < Delivery ft={this.state.features}/>
                    </div>
                    </div>
                )}
            </div>
                
          </>
        );
    }
}

ReactDOM.render(<Accordion />, document.getElementById('accordion'))
