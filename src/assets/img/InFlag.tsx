const InFlag = () => (
  <div className="flag-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="flag-icons-in"
      className="rounded-flag-icon"
      viewBox="80 0 480 480"
    >
      <path fill="#f93" d="M0 0h640v160H0z"></path>
      <path fill="#fff" d="M0 160h640v160H0z"></path>
      <path fill="#128807" d="M0 320h640v160H0z"></path>
      <g transform="matrix(3.2 0 0 3.2 320 240)">
        <circle r="20" fill="#008"></circle>
        <circle r="17.5" fill="#fff"></circle>
        <circle r="3.5" fill="#008"></circle>
        <g id="in-d">
          <g id="in-c">
            <g id="in-b">
              <g id="in-a" fill="#008">
                <circle r="0.9" transform="rotate(7.5 -8.8 133.5)"></circle>
                <path d="M0 17.5.6 7 0 2l-.6 5z"></path>
              </g>
              <use
                xlinkHref="#in-a"
                width="100%"
                height="100%"
                transform="rotate(15)"
              ></use>
            </g>
            <use
              xlinkHref="#in-b"
              width="100%"
              height="100%"
              transform="rotate(30)"
            ></use>
          </g>
          <use
            xlinkHref="#in-c"
            width="100%"
            height="100%"
            transform="rotate(60)"
          ></use>
        </g>
        <use
          xlinkHref="#in-d"
          width="100%"
          height="100%"
          transform="rotate(120)"
        ></use>
        <use
          xlinkHref="#in-d"
          width="100%"
          height="100%"
          transform="rotate(-120)"
        ></use>
      </g>
    </svg>
  </div>
);
export default InFlag;
