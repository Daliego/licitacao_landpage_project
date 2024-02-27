import { useLocation, useNavigate } from "react-router-dom";
import { collorPallete } from "../../../../assets/colors/colors";
import { Main, NavBar, Logo, NavbarItens } from "./style";
import { LinkInPage } from "../../../../shared/components/linkInPage";
import { AiOutlineLogout } from "react-icons/ai";

interface NavBarLayoutProps {
  children: React.ReactNode;
}

export function NavBarLayout({ children }: NavBarLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("NavBarLayout");
  console.log(location.pathname);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    pathName: string
  ) => {
    e.preventDefault();
    console.log("click");
    navigate(`/${pathName}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
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
