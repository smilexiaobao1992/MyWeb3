import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('4646189735');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
const GaPage = () => {
    return <h1>This is your GA page</h1>;
  };
  
export default GaPage;
