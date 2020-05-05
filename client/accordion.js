import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from'react-player';
import styled from 'styled-components';

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
            features: 'https://cdn.pixabay.com/photo/2016/09/06/12/53/bank-1649027_960_720.jpg',
            video: 'https://youtu.be/c3pM_CkPME4'
        }
    }
    
     
   



    render () {
        return (
            <>
            <h1>
                Features
            </h1>
           
            <div className="sections">
                <div className="item-a">Title1</div>
                <div>
                <img className="item-b" src={this.state.features}/>
                </div>
                <div>Title2</div>
                <div>
                <ReactPlayer url={this.state.video}/>
                </div>

            
            </div>
        </>
        
        
        
        
        
        );
    }
}


ReactDOM.render(<Accordion />, document.getElementById('accordion'))
