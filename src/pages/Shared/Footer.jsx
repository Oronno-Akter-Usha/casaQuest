const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#09001d] text-white mt-10 grid grid-cols-2 lg:grid-cols-3  justify-between">
      <nav>
        <h6 className="footer-title">Navigations</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">FAQs</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Blog</a>
      </nav>
      <nav>
        <h6 className="footer-title">The Highlights</h6>
        <a className="link link-hover">Apartment</a>
        <a className="link link-hover">My Houses</a>
        <a className="link link-hover">Condos</a>
        <a className="link link-hover">Villas</a>
      </nav>
      <nav>
        <h6 className="footer-title">Agent & Agency</h6>
        <a className="link link-hover">Agency List</a>
        <a className="link link-hover">Agency Details</a>
        <a className="link link-hover">Agents List</a>
        <a className="link link-hover">Agent Details</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
