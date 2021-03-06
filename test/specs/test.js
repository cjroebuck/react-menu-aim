/*eslint no-unused-expressions:0 */
'use strict';

import React from 'react/addons';
import spies from 'chai-spies';
import Menu from '../../demo/js/Menu.js';
import menuData from '../../demo/js/menuData';

chai.use(spies);

//Delay karma test execution
window.__karma__.loaded = () => {};

function injectCSS() {
  var link = document.createElement('link');
  link.href = 'base/demo/style.css';
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  link.onload = () => {
    window.__karma__.start();
  };
}

injectCSS();
const expect = chai.expect;

describe('ReactMenuAim', () => {
  let node;

  beforeEach(() => {
    node = React.render(<Menu menuData={menuData} />, document.body);
  });

  afterEach(() => {
      console.log('after');

    React.unmountComponentAtNode(document.body);
    node = null;
  });

  it('should mount without error', () => {
    var DOM = document.querySelector('.menu-container');
    expect(DOM).to.exist;
  });
});
