import React from 'react';
//Hook que

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media); //mostra o tamanho da tela igual ao @media
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch); //escuta se o tamanho da tela mudou
    return () => {
      window.removeEventListener('resize', changeMatch); //remove o evento
    };
  }, [media]);
  return match;
};

export default useMedia;
