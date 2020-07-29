import React, { useState } from 'react';
import boot from '../../../plugins/index'

const Hero = ({ children }) => {
    const [show, toggleShow] = useState(true);

    return (
      <>
        {!show && <boot.Button onClick={() => toggleShow(true)}>Show Toast</boot.Button>}
        <boot.Toast show={show} onClose={() => toggleShow(false)}>
          <boot.Toast.Header>
            <strong className="mr-auto">React-Bootstrap</strong>
          </boot.Toast.Header>
          <boot.Toast.Body>{children}</boot.Toast.Body>
        </boot.Toast>
      </>
    );
  };

export default Hero;
