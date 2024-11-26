import './index.scss';
import { useState } from 'react';

export default function Home() {

  const [active, setActive] = useState('Galáxias');

  const navItems = ['Galáxias', 'Astronomos', 'Planetas'];

  return (

    <div className='home-page'>

      <img src="/assets/images/uiverse-astro.jpg" alt="" />

      <header>

        {navItems.map(item => 

          <a
            key={item}
            className={`${active === item ? 'active-link' : 'link'}`}
            onClick={() => setActive(item)}>
            {item}
          </a>
  
        )}

      </header>

      {active == 'Galáxias' &&

        <div className='nav-galaxys'>

          

        </div>

      }

      

    </div>

  );

}

