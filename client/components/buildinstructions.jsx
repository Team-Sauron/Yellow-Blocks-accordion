import React from 'react';

const Build = ({ft}) => {
          
    
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
                <div className="item">
                <img className="img-item" src= {ft.img10}/>
                <div className="des-item">{ft.des10}</div>
                </div> 
                <div className="item">          
                <img className="img-item" src= {ft.img11}/>
                <div className="des-item">{ft.des14}</div>
                </div> 
                <div className="item">
                <img className="img-item" src= {ft.img12}/>
                <div className="des-item">{ft.des18}</div>
                </div> 
                <div className="item">
                <img className="img-item" src= {ft.img13}/>
                <div className="des-item">{ft.des22}</div>
                </div> 
                <div className="item">
                <img className="img-item" src= {ft.img14}/>
                <div className="des-item">{ft.des26}</div>
                </div> 
                <div className="item">
                <img className="img-item" src= {ft.img15}/>
                <div className="des-item">{ft.des30}</div>
                </div> 
                <div className="item">
                <img className="img-item" src= {ft.img16}/>
                <div className="des-item">{ft.des34}</div>
                </div> 
                <div className="item">
                <img className="img-item" src= {ft.img17}/>
                <div className="des-item">{ft.des38}</div>
                </div> 
                <div className="item">
                <img className="img-item" src= {ft.img18}/>
                <div className="des-item">{ft.des42}</div>
                </div> 
                <div className="item">
                <img className="img-item" src= {ft.img19}/>
                <div className="des-item">{ft.des46}</div>
                </div> 
            </div>
            </div>
            {/*<div className='bottom-Section'>
                <img className="img-select" src= {ft.img19}/>
                <div className="file">File size</div>
                    <div className="des-middle">{ft.des9}</div>
                <div className="description">Description</div>
                    <div className="des-last1">{ft.des46}</div>
                <div className="print">Print Versions</div>
                    <ul>
                    <li className="des-last2">HOLA</li>
                    <li className="des-last3">HOLA</li>
                    </ul>
    </div>*/}
        </div>
        </>



     );
    }

export default Build;