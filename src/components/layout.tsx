import Link from "next/link";

const Navi = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export const Layout = ({ children }) => {
  return (
    // <LayoutWrapper>
    // <Navi>{/* <BodyWrapper>{children}</BodyWrapper> */}</Navi>
    // </LayoutWrapper>
  );
};
