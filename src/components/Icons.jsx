import React from 'react';
import './styles.css'; // Import your CSS file

// Import your images
import htmlLogo from './images/html.png';
import cssLogo from './images/css.png';
import jsLogo from './images/js.png';
import reactLogo from './images/React.png';
import angularLogo from './images/angular.png';
import figmaLogo from './images/figma.png';
import photoshopLogo from './images/photoshop.png';
import muiLogo from './images/mui.png';
import tailwindLogo from './images/tailwind.png';
import premiereProLogo from './images/premierePro.png';

const Scroll = ({ time, children }) => {
  return (
    <div className="scroll" style={{ '--time': `${time}s` }}>
      {children}
    </div>
  );
};

const ImgBoxScroll = ({ time, children }) => {
  return (
    <div className="scroll imgBox" style={{ '--time': `${time}s` }}>
      {children}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Scroll time={20}>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premiere Pro</span>
          <span>Figma</span>
          <span>Angular</span>
          <span>Node JS</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premiere Pro</span>
          <span>Figma</span>
          <span>Angular</span>
          <span>Node JS</span>
        </div>
      </Scroll>

      <Scroll time={30}>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premiere Pro</span>
          <span>Figma</span>
          <span>Angular</span>
          <span>Node JS</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premiere Pro</span>
          <span>Figma</span>
          <span>Angular</span>
          <span>Node JS</span>
        </div>
      </Scroll>

      {/* Repeat this pattern for other Scroll components */}

      <ImgBoxScroll time={25}>
        <div>
          <img src={htmlLogo} alt="HTML" />
          <img src={cssLogo} alt="CSS" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={reactLogo} alt="ReactJS" />
          <img src={angularLogo} alt="Angular" />
          <img src={figmaLogo} alt="Figma" />
          <img src={photoshopLogo} alt="Photoshop" />
          <img src={muiLogo} alt="Material-UI" />
          <img src={tailwindLogo} alt="Tailwind CSS" />
          <img src={premiereProLogo} alt="Premiere Pro" />
        </div>
        <div>
          <img src={htmlLogo} alt="HTML" />
          <img src={cssLogo} alt="CSS" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={reactLogo} alt="ReactJS" />
          <img src={angularLogo} alt="Angular" />
          <img src={figmaLogo} alt="Figma" />
          <img src={photoshopLogo} alt="Photoshop" />
          <img src={muiLogo} alt="Material-UI" />
          <img src={tailwindLogo} alt="Tailwind CSS" />
          <img src={premiereProLogo} alt="Premiere Pro" />
        </div>
      </ImgBoxScroll>
    </>
  );
};

export default App;
