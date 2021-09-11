import React from 'react';
import {FaBars} from 'react-icons/fa';
import {GrFormClose} from 'react-icons/gr';
import {Link, withRouter} from 'react-router-dom';
import {useGlobalContext} from '../Context';

const Topbar = ({location: {pathname}}) => {
  const {sidebar, closeSidebar} = useGlobalContext();
  return (
    <div className={`top ${sidebar ? 'show' : ''}`}>
      <button
        className="toggle-bar"
        style={{
          color: pathname !== '/' ? (sidebar ? 'white' : 'black') : 'white',
        }}
      >
        <FaBars />
      </button>
      <Link to="/">
        <h3
          className="liberzen"
          style={{
            color: pathname === '/' ? (sidebar ? 'black' : '#fbfbfb') : 'black',
          }}
        >
          LIBERZEN
        </h3>
      </Link>

      {sidebar ? (
        <GrFormClose
          onClick={closeSidebar}
          className={`xIcon ${sidebar ? 'show' : ''}`}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default withRouter(Topbar);
