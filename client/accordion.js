import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from'react-player';

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
           
            <div>
                <h1>Features</h1>
                <div>Title1</div>
                <img src={this.state.features}/>
                <div>Title2</div>
                <ReactPlayer url={this.state.video}/>
            
            </div>
        
        
        
        
        
        
        );
    }
}


ReactDOM.render(<Accordion />, document.getElementById('accordion'))
