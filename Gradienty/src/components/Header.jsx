// import { Link } from "react-router-dom";

// export default function Header({ logo, nav }) {
//   return (
//     <header style={{ backgroundColor:"var(--color-bg)", padding: "1rem 10%",color:'var(--color-text)', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//       <Link to="/">
//         <img src={logo} alt="logo" style={{ height: "40px" }} />
//       </Link>
//       <nav>
//         {nav?.map((item, i) => (
//           <Link key={i} to={item.route} style={{ margin: "0 1rem", color: "var(--color-text)", textDecoration: "none" }}>
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </header>
//   );
// }

// 📁 src/components/layouts/HeaderPrimary.jsx
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderContainer = styled.header`
  width: 100%;
  background: var(--color-bg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 18px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 35px;
    height: 35px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  a {
    color: var(---color-text);
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s ease;

    &:hover {
      color: #6a4cff;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid transparent;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  ${(props) =>
    props.primary
      ? `
    background: var(--color-primary);
    color: var(--color-text);
    &:hover {
      background: #5a3fee;
    }
  `
      : `
    background: transparent;
    border-color: var(--color-primary);
    color: var(--color-text);
    &:hover {
      background: #6a4cff;
      color: white;
    }
  `}
`;

export default function Header() {
  return (
    <HeaderContainer>
      {/* Left: Logo */}
      <Logo>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAABJlBMVEX/////GEn/4WHgDkX/AEf/6GL/nlb7vAXgAEL65ejiPVr7ugD/5un/EUb/Pl3/42TfADnpc4b/AD78xy3pEUbeAEj/dYn/1mH80HL8wgD/+eb/S0z/3+P/ADXeAC7/4Ff/KlHvgyvhKUv/9Mz/tsDytb/3Fkj/54f/7q7/9tT/AE3/yV3dACi+BkD+1En/rbjpa0740dT/653/6pT//PH92Iv+5bL+6MD93pn7wjb/AC391X3/5HP8zmj8qRvmU0vzoTvtrlfrazrzqX3/mqn98vT/UW/8xk7uhpj/XnzlRGn5yXb3sTP9rz7/2dH2UkzkR07+XUb/eVL/ilTuP07tg1H+Zzn2lSjynlf/t1n/q1noWDz/NUXPNUXebS3uu1vzdzD91TG9PCPiAAAHeElEQVR4nO2bbVubSBSGAySCTlOswOokKlUrmmjwLbpNq7G1tm63tm631uy2tlv//5/YMwOEGUISQsiV+cDzoVcl8HDPOWfODEYKhVy5cuXKlStXrlxTVrNS2z48OtzeqDTHs9mgNrXxbAJtbOm2r63D1I7Nw63ARd/aGBuqcmrLoYCsksoFmFib01QuoTZ01o6CHY0cseaRHXWRxwpYLWLnWW6PZrIdhaIutfRUzdNeP2I5SiYhf7Emp+kLfzveEcAS52Cjr8WIMWfUzxJMD5M5HA6wSEsVV1ld0ySJ7JdAzyFtdfXNIXUdPsn55tJjkDaLR6GHDp2B3EPXQ1t9yHBrTHOh1xGL8Hr5KCXWVujqGipCqmq4Ngs2kKvGQtlgQBwMN7x8a2wsAxEoRP91wxEPmpDhFNRll16r0n+NzLB0l1j6IkPugvWPVzdWuuwFunt9N15psYLa0lXkAVHxYEG83i7vXV7uHbz1fwxi5UMFlxIXNbg0bW0FM9H2/Y5Pfj953qLpVF2/xvx47b17sQLandtjY6XrrkqT33oOlx77owtc085Ef8heDtGVt1o0K2ctMnzD9kdNuC5XyhKVtvoHofJDZRskUq0zf4fVvEJMFpOvFBE1GSxkhG2q8pLmxfVHXSlsLki+TGV+s1Dx4+HS014yF7YQg5V6UTxlsJbYDyoklUj1A1Z7z2L9WfFDpRKoFtd0lxis07RUQXGR2kJn/EcnlItUmG649YBKchRFcQ3dryqETvirzlC3tsZYqiveuPRIEqk2ruhRaK8qDrE0RbGwqpOqIuUYKZ8KPeqbjrFB9VqETt2OI581d7wp6aIQiwTLwsj1JuBOtHqO6Uj0sdoDUQWCAbJVjDHqaZ3HfjfC9SKV5ECwNMDyFB1HoYbARvUt0wTr0bKvDztU123Qx09w4KASqrmkGmTG4+oN1TnVX9ggUpeawXnEaHZ29tNH4nLtOX6Y9e/wKDHUwbunXUmhyhL8PKMzOoXFktSXzCvopVRyq9X+TK2ceUixsh7V3EEyqs2FclcSp3JxpsTcnhY2cpk9RcDF7BOgv6i4fV/0vByQqRE8rSvodEn0NAITqvg3T0XWOrkHiuiKPU9WMfpcZ3wcU2GkzSdK4Yu+VDfsnSEKqnq9GEsluy3uuKHiapG14rh2k4Tr2UpfLJZBl2G2t2OZqK65MMLEuOe8HAZrdSys4hc2hTLMwF9X8bEi1Ff7/Nm4XefczKyw7hfZ2xoIr90uyn21ePuVq3uE7zguJyMsbhaS23SU6iCsqvIPe4GB2nwazYywuLtCuSvOYCxH4csL33FV72SCxTUHEqwLRRqCpe3z7StSXdlg/cveAyahYg7BgjT9x16DsJQ9FotAg2VJw7HOueqKFP1oWJux7ZRv8LDoWMpQLEfRmAOQxc4YWIWVuMWn+I3Bgo3OmmUmwOpORrJ6u6jNOoYlv5uEqrAXx8V2eJLD78mwvJ4KgTLINpprEUGD0Fb3EmEVnj1eeAHi6IpclajtdcUBLLlUKukxgsMyTeL5ohddsimFB6EqGyxtdRe0up5sAwGaPSDaXDdD3XpYNGQwDzuNhgJH9/f3XxkxegUfmKbSaPxYpMHCbUR2jPg746jM0bscJN8H+nBzWrhABNmgcAj/bDQsetxaC/bIjKDy6GeNRoO0CB3DKMgDNaSe2c/MzY4IFIP1teQVFXnYshH+AdEKsNQe+VgNDwuK6qLRuMCTwCILItlnqjqt+AYTrYFYryFaRvsW/gcnQrPLGIvOdPzzJ6KrLmokSaKPZcOPkE8LnnuywHr0OJyKxW8QpYdfltWBrbuBO5aiOd4H3O7eV2mGLMqOBXpNTif4inWTTbQiWLrdBu9fD7ps0GgMxSKNSYKVlAyCBvaic6tkjDVT0tGtBcszJluU70mw4NZOcQdSXvVBLCZWmWE93MHwnXrHMFAiLIeesuPitSL/pJMl1pcH2C1psOB8Jr+JuUmCRc6uXqkqWZ8dbSJYUvkuWM/aGJ5ilARJJKp2t/A9AcsEq6v6PYYl10mIVb/r7pSjXNliSfUObpPKSYQl1cMtljlRLIjAfXivYViszIliSew9R8GSJovFIY6C5YiJxaVRICxJUCxTTCxHTCwmXDnWcCxHTCxJUCxNTCwzx8qxcqwcq58EbadiYgm6Jgq6gxATS9DdqSYkFvugKBCWmM+Jgj5Va0JiccESBounEgZrwr92S4kVCZYgWFEqQbB6fgMuBFbvFwYiYMV8jSEAVk9hCYEVRyUAVhzV9LHivh+bPlYs1NSx4mM1bazeLxJFwOoXq+li9YWaJlZsv5o61kCqqWH1L6spYsX+kcHUsQYncCpYemmmb7eaHpZuG2uWYFg6eZkNi4UFTC55bUwoLPLOpvcq4kSxCu+TY0GcbBoo9o/wJoS11/f1hwgWYVKZdzYni1V4vJAEy3b510iTYj1JSVU4eDqUy1zD/uu2I2JpuwlfO4rR7PvyykK8yuWyMw+K/0vK+WFaVRL+JXO8li9/i9GTUG+WYvTmyTBdLo9DlStXrly5cuXKlWtM/Q8qmi+JolPtXQAAAABJRU5ErkJggg==" alt="Logo" />
       Lootably
      </Logo>

      {/* Center: Navigation */}
      <Nav>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
      </Nav>

      {/* Right: Buttons */}
      <ButtonGroup>
        <Button whileTap={{ scale: 0.95 }}>Login</Button>
        <Button primary whileTap={{ scale: 0.95 }}>
          Sign Up
        </Button>
      </ButtonGroup>
    </HeaderContainer>
  );
}
