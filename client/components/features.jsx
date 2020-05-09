import React from 'react';
import ReactPlayer from'react-player';

const Features = ({ft}) => {

     return (
        <>
        <div>
                <div className="section1">
                <div className="image1" style={{'backgroundImage': `url(${ft.img1})`}}>
                    <div className="t1">
                        <div>{ft.t1}</div>
                        <div id='des1'>{ft.des1}</div>
                    </div>
                </div>
                <div className="video-container">
                    <div className="t2">
                        <div>{ft.t2}</div>
                        <div id="des2">{ft.des2}</div>
                    </div>
                    <div className="v1"><ReactPlayer width={'auto'} height={'600px'} url={ft.vid1}/></div>
                </div>
            </div>

     
    
            <div className="t3">{ft.t3}</div>

                <div className="sixgrid">
                    <div className="grid">
                        <img className="img2" src={ft.img2}></img>
                        <div className="sub">{ft.sub1}</div>
                        <div className="des">{ft.des3}</div>
                    </div>
                    <div className="grid">
                        <img className="img2" src={ft.img3}></img>
                        <div className="sub">{ft.sub2}</div>
                        <div className="des">{ft.des4}</div>
                    </div>
                    <div className="grid">
                        <img className="img2" src={ft.img4}></img>
                        <div className="sub">{ft.sub3}</div>
                        <div className="des" >{ft.des5}</div>
                    </div>
                    <div className="grid">
                        <img className="img2" src={ft.img5}></img>
                        <div className="sub">{ft.sub4}</div>
                        <div className="des">{ft.des6}</div>
                    </div>
                    <div className="grid">
                        <img className="img2" src={ft.img6}></img>
                        <div className="sub">{ft.sub5}</div>
                        <div className="des">{ft.des7}</div>
                    </div>
                    <div className="grid">
                        <img className="img2" src={ft.img7}></img>
                        <div className="sub">{ft.sub6}</div>
                        <div className="des">{ft.des8}</div>
                    </div>

            </div>
            <div className="bottomSection">
                <div className="image2" style={{'background-image': `url(${ft.img8})`}}>
                    <div className="t4">
                        <div>{ft.t4}</div>
                         <div className="sub8">{ft.sub8}</div>
                    </div>
                </div>
                <div className="v2"><ReactPlayer width={'auto'} height={'400px'} url={ft.vid2}/></div>
            </div>

        </div>

          </>

     );

}


export default Features;