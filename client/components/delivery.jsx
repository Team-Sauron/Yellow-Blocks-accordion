import React from 'react';

const Delivery = ({ft}) => {

    return(
        <>
        <div className='delivery'>
            <ul>
                <li>{ft.des49}</li>
                <li>{ft.des50}</li>
                <li>{ft.des51}</li>
                <li>{ft.des52}</li>
            </ul>
            <div> Some exclusions apply. Visit our <a href="http://localhost:3004/?id=4">Deliveries and Returns</a> page for more information.
            </div>
        </div>
        </>
    )
}

export default Delivery;