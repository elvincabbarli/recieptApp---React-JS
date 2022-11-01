import Pages from "./pages/Pages";
import './index.css'
import Category from "./components/Category";
import { BrowserRouter , Link } from 'react-router-dom'
import Search from "./components/Search";
import { GiKnifeFork} from 'react-icons/gi'
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      < BrowserRouter >
      < Nav>
      <GiKnifeFork />
        < Logo to={'/'}>Delisiousss</Logo>
      </Nav>
      < Search />
      < Category />
      < Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two' , cursive;

  `;

  const Nav = styled.div`
    padding: 3rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg{
      font-size: 2rem;
    }
  `





export default App;
