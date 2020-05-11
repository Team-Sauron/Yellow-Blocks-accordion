import React from 'react';
import {MdFileDownload} from 'react-icons/md';

class Build extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoSelected: 'item1',
    };
    this.handleClick = this.handleClick.bind(this)
  };

  handleClick(e) {
    e.preventDefault();
    if (e.target !== undefined) {
      this.setState({ infoSelected: e.target.getAttribute('data') });
    }
  }

  render() {
    const ft = { this.props.ft} ;
    return (  
        <>
               
        <div className="t5">{ft.t5}

          <div id="show">Showing 1 results of 1</div>
        </div>
        <div className='only-border'>
            <div className="top-section">
                <img className="img9" src={ft.img9}/>
                <div className="infosec">
                    <div className="sub8">{ft.sub8}</div>
                    <div className="sub9">{ft.sub9}</div>
                    <div className="launch">Launch year</div>
                    <div className="year">{ft.year}</div>
                </div>
            </div>


            <div className="select">Select the instructions you want: </div>

            <div>
            <div className="middle-section">    
                <div className="item" data='item1' onClick={this.handleClick}>
                    <img className={ft[this.state.infoSelected]['A'] === ft.item1.A ? 'img-On' : 'img-Off'} src= {ft.item1.A} data='item1' />
                    <div className={ft[this.state.infoSelected]['C'] === ft.item1.C ? 'des-On' : 'des-Off'} data='item1' >{ft.item1.C}</div>
                </div> 

                <div className="item" id="testimg" data='item2' onClick={this.handleClick}>          
                    <img className={ft[this.state.infoSelected]['A'] === ft.item2.A ? 'img-On' : 'img-Off'} src= {ft.item2.A} data='item2' />
                    <div className={ft[this.state.infoSelected]['C'] === ft.item2.C ? 'des-On' : 'des-Off'} data='item2'>{ft.item2.C} </div>
                </div> 

                <div className="item" data='item3' onClick={this.handleClick}>
                    <img className={ft[this.state.infoSelected]['A'] === ft.item3.A ? 'img-On' : 'img-Off'} src= {ft.item3.A} data='item3'/>
                    <div className={ft[this.state.infoSelected]['C'] === ft.item3.C ? 'des-On' : 'des-Off'} data='item3'>{ft.item3.C}</div>
                </div> 

                <div className="item" data='item4' onClick={this.handleClick}>
                    <img className={ft[this.state.infoSelected]['A'] === ft.item4.A ? 'img-On' : 'img-Off'} src= {ft.item4.A} data='item4' />
                    <div className={ft[this.state.infoSelected]['C'] === ft.item4.C ? 'des-On' : 'des-Off'} data='item4'>{ft.item4.C}</div>
                </div> 

                <div className="item" data='item5' onClick={this.handleClick}>
                    <img className={ft[this.state.infoSelected]['A'] === ft.item5.A ? 'img-On' : 'img-Off'} src= {ft.item5.A} data='item5' />
                    <div className={ft[this.state.infoSelected]['C'] === ft.item5.C ? 'des-On' : 'des-Off'} data='item5' >{ft.item5.C}</div>
                </div> 

                <div className="item" data='item6' onClick={this.handleClick}>
                    <img className={ft[this.state.infoSelected]['A'] === ft.item6.A ? 'img-On' : 'img-Off'} src= {ft.item6.A} data='item6' />
                    <div className={ft[this.state.infoSelected]['C'] === ft.item6.C ? 'des-On' : 'des-Off'} data='item6'>{ft.item6.C}</div>
                </div> 

                <div className="item" data='item7' onClick={this.handleClick}>
                    <img className={ft[this.state.infoSelected]['A'] === ft.item7.A ? 'img-On' : 'img-Off'} src= {ft.item7.A} data='item7' />
                    <div className={ft[this.state.infoSelected]['C'] === ft.item7.C ? 'des-On' : 'des-Off'} data='item7'>{ft.item7.C}</div>
                </div> 

                <div className="item" data='item8' onClick={this.handleClick}>
                    <img className={ft[this.state.infoSelected]['A'] === ft.item8.A ? 'img-On' : 'img-Off'} src= {ft.item8.A} data='item8' />
                    <div className={ft[this.state.infoSelected]['C'] === ft.item8.C ? 'des-On' : 'des-Off'} data='item8'>{ft.item8.C}</div>
                </div> 

                <div className="item" data='item9' onClick={this.handleClick}>
                    <img className={ft[this.state.infoSelected]['A'] === ft.item9.A ? 'img-On' : 'img-Off'} src= {ft.item9.A} data='item9' />
                    <div className={ft[this.state.infoSelected]['C'] === ft.item9.C ? 'des-On' : 'des-Off'} data='item9'>{ft.item9.C}</div>
                </div> 

                <div className="item" data='item10' onClick={this.handleClick}>
                    <img className={ft[this.state.infoSelected]['A'] === ft.item10.A ? 'img-On' : 'img-Off'}  src= {ft.item10.A} data='item10'/>
                    <div className={ft[this.state.infoSelected]['C'] === ft.item10.C ? 'des-On' : 'des-Off'} data='item10'>{ft.item10.C}</div>
                </div> 

            </div>
            </div>
            <div className='bottom-Section'>

                <img className="img-select" src= {ft[this.state.infoSelected]['A']}/>

                <div className="info-select">
                    <div className="infostatic">File size</div>
                        <div className="des-middle">{ft[this.state.infoSelected]['B']}</div>
                     <div className="infostatic">Description</div>
                        <div className="des-last1">{ft[this.state.infoSelected]['C']}</div>
                    <div className="infostatic">Print Versions</div>
                         <ul>
                         <li>{ft[this.state.infoSelected]['D']}</li>
                         <li>{ft[this.state.infoSelected]['E']}</li>
                        </ul>
                <button className='button2'>Download PDF {<MdFileDownload />}</button>    
                </div>
            </div>
        </div>
        </>



     );
    }
  }

export default Build;