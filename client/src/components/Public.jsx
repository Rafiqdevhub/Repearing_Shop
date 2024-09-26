import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">EaseShope</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Foo City, EaseShope. Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          EaseShope. Repair
          <br />
          555 Foo Drive
          <br />
          Foo City, CA 12345
          <br />
          <a href="tel:+92XXXXXX">(XXX) XXXXXXX</a>
        </address>
        <br />
        <p>Owner: XYZ Khan</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
