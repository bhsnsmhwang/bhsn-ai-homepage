export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            BHSN.AI
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Location
              </a>
            </li>
            <li>
              <a href='http://3.35.184.180/' className='page-scroll'>
                BHSN.co.kr
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}