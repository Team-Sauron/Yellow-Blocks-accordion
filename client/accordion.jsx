/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import Features from './components/features.jsx';
import Build from './components/buildinstructions.jsx';
import Delivery from './components/delivery.jsx';
import styles from '../public/style.css';


class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      ftIsOpen: true,
      bIsOpen: false,
      dIsOpen: false,
      cImg: '',
    };
  }

  componentDidMount() {
    const loc = window.location.href;
    let id = 1;
    const query = url.slice(url.indexOf('?'));
    const params = new URLSearchParams(query);
    if (params.get('pid' !== null) {
      id = params.get('pid');
    })

    const that = this;
    axios.get(`http://3.23.173.204:3004/api/accordion/${id}`)
      .then((response) => {
        that.setState({ features: response.data.features });
        that.setState({ cImg: response.data.features.item1.A });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClick() {
    this.setState((state) => ({ ftIsOpen: !state.ftIsOpen }));
  }

  handleClickb() {
    this.setState((state) => ({ bIsOpen: !state.bIsOpen }));
  }

  handleClickd() {
    this.setState((state) => ({ dIsOpen: !state.dIsOpen }));
  }

  render() {
    const { features } = this.state;
    const { bIsOpen } = this.state;
    const { ftIsOpen } = this.state;
    const { cImg } = this.state;
    const { dIsOpen } = this.state;

    return (
      <>
        <div>
          {!ftIsOpen && (
            <div>
              <div className="ftOpen">
                <button className="button" type="button" id="mainft" onClick={this.handleClick.bind(this)}>
                  <div className="features">
                    Features
                    <div id="symbol"><BsPlusCircle /></div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {ftIsOpen && (
            <div>
              <div className="ftOpen">
                <button className="button" type="button" id="mainft" onClick={this.handleClick.bind(this)}>
                  <div className="features">
                    Features
                    <div id="symbol"><AiOutlineMinusCircle /></div>
                  </div>
                </button>
              </div>
              <Features ft={features} />
            </div>
          )}
        </div>
        <div>
          {!bIsOpen && (
            <div>
              <div className="ftOpen" id="building">
                <button className="button" type="button" onClick={this.handleClickb.bind(this)}>
                  <div className="features">
                    Building Instructions
                    <div id="symbol"><BsPlusCircle /></div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {bIsOpen && (
            <div>
              <div className="ftOpen">
                <button className="button" type="button" onClick={this.handleClickb.bind(this)}>
                  <div className="features">
                    Building Instructions
                    <div id="symbol"><AiOutlineMinusCircle /></div>
                  </div>
                </button>
                <Build ft={features} cImg={cImg} />
              </div>
            </div>
          )}
        </div>
        <div>
          {!dIsOpen && (
            <div>
              <div className="ftOpen">
                <button className="button" type="button" onClick={this.handleClickd.bind(this)}>
                  <div className="features">
                    Deliveries and Returns
                    <div id="symbol"><BsPlusCircle /></div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {dIsOpen && (
            <div>
              <div className="ftOpen">
                <button className="button" type="button" onClick={this.handleClickd.bind(this)}>
                  <div className="features">
                    Deliveries and Returns
                    <div id="symbol"><AiOutlineMinusCircle /></div>
                  </div>
                </button>
                <Delivery ft={features} />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

ReactDOM.render(<Accordion />, document.getElementById('accordion'));
