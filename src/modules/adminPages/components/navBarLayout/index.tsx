import { useLocation, useNavigate } from "react-router-dom";
import { collorPallete } from "../../../../assets/colors/colors";
import { Main, NavBar, Logo, NavbarItens } from "./style";
import { LinkInPage } from "../../../../shared/components/linkInPage";
import { AiOutlineLogout } from "react-icons/ai";
import { useAuth } from "../../../../shared/hooks/useAuth";

interface NavBarLayoutProps {
  children: React.ReactNode;
}

export function NavBarLayout({ children }: NavBarLayoutProps) {
  // const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    pathName: string
  ) => {
    e.preventDefault();

    navigate(`/${pathName}`);
  };

  const handleLogout = () => {
    localStorage.clear();    
    navigate("/");
  };

  return (
    <Main>
      <NavBar>
        <NavbarItens>
          <Logo>
            Licitação<b style={{ color: collorPallete.yellow }}>.arq</b>
          </Logo>
        </NavbarItens>
        <NavbarItens>
          <LinkInPage onClick={(e) => handleClick(e, "clients")}>
            Clients
          </LinkInPage>
          <LinkInPage onClick={(e) => handleClick(e, "products")}>
            Products
          </LinkInPage>
          <LinkInPage onClick={handleLogout}>
            <AiOutlineLogout />
          </LinkInPage>
        </NavbarItens>
      </NavBar>
      {children}
    </Main>
  );
}
