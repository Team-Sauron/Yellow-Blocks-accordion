import React from 'react';
import {MdFileDownload} from 'react-icons/md';

class Build extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selected: this.props.cImg,
            infoSelected: 'item1'
        }
        this.handleClick = this.handleClick.bind(this)
    }      
 
    handleClick(e) {
        e.preventDefault();
        console.log(e.target)
        var string = e.target.getAttribute('data');
        if ( string !== undefined) {
            this.setState({infoSelected: e.target.getAttribute('data')});
        }       
    }


  render() { 
      console.log(this.state.infoSelected);
      const ft = this.props.ft 
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
                <div className="item" onClick={this.handleClick}>
                    <img className="img-item" src= {ft.item1.A} data='item1' />
                    <div className="des-item" data='item1' >{ft.item1.C}</div>
                </div> 

                <div className="item" onClick={this.handleClick}>          
                    <img className="img-item" src= {ft.item2.A} data='item2' />
                    <div className="des-item" data='item2'>{ft.item2.C} </div>
                </div> 
                <div className="item" onClick={this.handleClick}>
                    <img className="img-item" src= {ft.item3.A} data='item3'/>
                    <div className="des-item" data='item3'>{ft.item3.C}</div>
                </div> 
                <div className="item" onClick={this.handleClick}>
                    <img className="img-item" data='item4'src= {ft.item4.A}/>
                    <div className="des-item" data='item4'>{ft.item4.C}</div>
                </div> 
                <div className="item" onClick={this.handleClick}>
                    <img className="img-item" data='item5' src= {ft.item5.A}/>
                    <div className="des-item" data='item5' >{ft.item5.C}</div>
                </div> 
                <div className="item" onClick={this.handleClick}>
                    <img className="img-item" data='item6' src= {ft.item6.A}/>
                    <div className="des-item" data='item6'>{ft.item6.C}</div>
                </div> 
                <div className="item" onClick={this.handleClick}>
                    <img className="img-item" data='item7' src= {ft.item7.A}/>
                    <div className="des-item" data='item7'>{ft.item7.C}</div>
                </div> 
                <div className="item" onClick={this.handleClick}>
                    <img className="img-item" data='item8' src= {ft.item8.A}/>
                    <div className="des-item" data='item8'>{ft.item8.C}</div>
                </div> 
                <div className="item" onClick={this.handleClick}>
                    <img className="img-item" data='item9' src= {ft.item9.A}/>
                    <div className="des-item" data='item9'>{ft.item9.C}</div>
                </div> 
                <div className="item" onClick={this.handleClick}>
                    <img className="img-item" data='item10'src= {ft.item10.A}/>
                    <div className="des-item" data='item10'>{ft.item10.C}</div>
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