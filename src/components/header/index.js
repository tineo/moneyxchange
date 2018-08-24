import React from 'react';

import './_header.scss';

const Header = () =>
  (<header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content2">

            <img src={'http://www.eccount.com/wp-content/uploads/2015/11/Manage-your-Money.png'} width={100} height={100}/>

            <nav className="header-nav2">
              <ul className="header-nav-list">
                <li className="header-nav-list-item">
                  <a href="#features">Link1</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#features">Link2</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#features">Link3</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#howto">Link4</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
