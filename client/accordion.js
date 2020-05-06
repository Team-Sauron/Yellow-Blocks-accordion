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
                
                <img className="image1" src={this.state.features}/>
                <div className="title">
                   <p>Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out.</p>
                        <p id='subtitle'>Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too
                   joy promotion engrossed propriety. Me till like it sure no sons.</p> 
                </div>
                <div className="des">Title2</div>
                <div className="video1"><ReactPlayer  url={this.state.video}/></div>
            </div>

                <div className="t3">Ultimate Collector series LEGO Starwars imperial star destroyer</div>

            <div className="6grid">
                <img clasName="img2" src="https://randomwordgenerator.com/img/picture-generator/54e1d64a485baa14f1dc8460962e33791c3ad6e04e50744172287ed39648c7_640.jpg"></img>
                <div className="sub1">Ultimate Collector series LEGO Starwars imperial star destroyer</div>
                <div className="des3">Ultimate Collector series LEGO Starwars imperial star destroyer</div>

                <img clasName="img3" src="https://randomwordgenerator.com/img/picture-generator/57e8d0434250a414f1dc8460962e33791c3ad6e04e5074417d2e72d69e4bc3_640.jpg"></img>
                <div className="sub2">Ultimate Collector series LEGO Starwars imperial star destroyer</div>
                <div className="des4">Ultimate Collector series LEGO Starwars imperial star destroyer</div>

                <img clasName="img4" src="https://randomwordgenerator.com/img/picture-generator/train-1728537_640.jpg"></img>
                <div className="sub3">Ultimate Collector series LEGO Starwars imperial star destroyer</div>
                <div clasName="des5" >Ultimate Collector series LEGO Starwars imperial star destroyer</div>
                
                <img clasName="img5" src="https://randomwordgenerator.com/img/picture-generator/52e4d6404f55a914f1dc8460962e33791c3ad6e04e507441722872d79649c6_640.jpg"></img>
                <div className="sub4">Ultimate Collector series LEGO Starwars imperial star destroyer</div>
                <div className="des6">Ultimate Collector series LEGO Starwars imperial star destroyer</div>

                <img clasName="img6" src="https://randomwordgenerator.com/img/picture-generator/54e1dd47434faa0df7c5d57bc32f3e7b1d3ac3e45659764c7c2672dd92_640.jpg"></img>
                <div className="sub5">Ultimate Collector series LEGO Starwars imperial star destroyer</div>
                <div className="des7">Ultimate Collector series LEGO Starwars imperial star destroyer</div>

                <img clasName="img7" src="https://randomwordgenerator.com/img/picture-generator/54e5d0444f51a814f1dc8460962e33791c3ad6e04e50744172297cdd9f4dc2_640.jpg"></img>
                <div className="sub6">Ultimate Collector series LEGO Starwars imperial star destroyer</div>
                <div className="des8">Ultimate Collector series LEGO Starwars imperial star destroyer</div>
                        
            </div>

            
        </>
        
        
        
        
        
        );
    }
}

ReactDOM.render(<Accordion />, document.getElementById('accordion'))
