import React from 'react';
import ReactPlayer from'react-player';

const Features = ({ft}) => {
       console.log(ft)
     return (   
        <>
        <div className="header">Features</div>
        <div className="sections">
                
                <img className="image1" src={ft.img1}/>
                <div className="t1">
                   <p>{ft.t1}</p>
                    <p id='des1'>{ft.des1}</p> 
                </div>
                <div className="t2">{ft.t2}</div>
                <div className="v1"><ReactPlayer url={ft.vid1}/></div>
            </div>

                <div className="t3">{ft.t3}</div>

            <div className="6grid">
                <img className="img2" src={ft.img2}></img>
                <div className="sub1">{ft.sub1}</div>
                <div className="des3">{ft.des3}</div>

                <img className="img3" src={ft.img3}></img>
                <div className="sub2">{ft.sub2}</div>
                <div className="des4">{ft.des4}</div>

                <img className="img4" src={ft.img4}></img>
                <div className="sub3">{ft.sub3}</div>
                <div className="des5" >{ft.des5}</div>
                
                <img className="img5" src={ft.img5}></img>
                <div className="sub4">{ft.sub4}</div>
                <div className="des6">{ft.des6}</div>

                <img className="img6" src={ft.img6}></img>
                <div className="sub5">{ft.sub5}</div>
                <div className="des7">{ft.des7}</div>

                <img className="img7" src={ft.img7}></img>
                <div className="sub6">{ft.sub6}</div>
                <div className="des8">{ft.des8}</div>
                        
            </div>
          </> 

     );
    
}


export default Features;