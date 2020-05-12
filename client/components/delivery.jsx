import React from 'react';

const Delivery = ({ft}) => (
  <>
    <div className="delivery">
      <ul>
        <li>{ft.des49}</li>
        <br />
        <li>{ft.des50}</li>
        <br />
        <li>{ft.des51}</li>
        <br />
        <li>{ft.des52}</li>
      </ul>
      <div>
        Some exclusions apply. Visit our
        <a href="http://localhost:3004/?id=4">Deliveries and Returns</a>
        page for more information.
      </div>
    </div>
  </>
);

export default Delivery;