import '../components/Content.scss';
import React, { useEffect } from 'react';
import redshoe from '../images/nike.png';
import blueshoe from '../images/nike-b.png';
import lightblueshoe from '../images/nike-s.png';
import greenshoe from '../images/nike-g.png';
import ScrollReveal from 'scrollreveal';

function Content() {

  useEffect( () => {

    const sr = ScrollReveal( {

      distance: '100px',
      duration: 1800,
      reset: true

    } );
     
    sr.reveal(`.right`, {origin: 'left', interval: 300});

  });

  return (
    <section className='content'>

      <div className="left">

        <div className="middle-container">

          <h1 className="title"><span>NIKE</span>  <br/> SPORTS AIR</h1>
          <h3 className="sub-title">The Nike Air Zoom Vomero 15 is Back Updating Cushioning And a Tough Outside For Traction.</h3>
          <h2 className="price">$150</h2>
          <button className="add-btn">ADD TO CART</button>

        </div>

      </div>

      <div className="right">

        <div className="upperbox">
          <img src={redshoe}/>
        </div>

        <div className="lowerbox">
          <img src={blueshoe}/>
          <img src={lightblueshoe}/>
          <img src={redshoe}/>
          <img src={greenshoe}/>
        </div>

      </div>

    </section>
  );
}

export default Content;
