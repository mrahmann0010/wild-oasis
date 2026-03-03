import Navigation from "./Navigation";
import Logo from "./logo";
import HeaderScroll from "./HeaderScroll";

export default function Header() {
  return (
    <HeaderScroll>
      <Logo />
      <Navigation />
    </HeaderScroll>
  );
}
