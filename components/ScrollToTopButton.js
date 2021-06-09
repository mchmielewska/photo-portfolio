import { useEffect } from 'react';
import useRenderCompleted from '../hooks/isMounted';

const ScrollToTopButton = () => {
  const isMounted = useRenderCompleted();

  useEffect(() => {
    const button = document.getElementById('scroll-to-top');

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        button.style.display = 'flex';
      } else {
        button.style.display = 'none';
      }
    };

    window.onscroll = scrollFunction;
  }, [isMounted]);

  const goToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="go-to-top">
      <button onClick={() => goToTop()} id="scroll-to-top" title="Back to top">
        <svg>
          <path
            d="M26.477,10.274c0.444,0.444,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-8.047-8.047
	v26.555c0,0.619-0.492,1.111-1.111,1.111c-0.619,0-1.127-0.492-1.127-1.111V3.813l-8.031,8.047c-0.444,0.429-1.159,0.429-1.587,0
	c-0.444-0.444-0.444-1.143,0-1.587l9.952-9.952c0.429-0.429,1.143-0.429,1.571,0L26.477,10.274z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
