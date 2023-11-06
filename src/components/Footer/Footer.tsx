const Footer = () => {
    return (
        <>
           <div className="container" style={{backgroundColor: '#262730', minWidth: '100%', padding: '20px'}}>
  <footer className="py-5" style={{color: 'white'}}>
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </footer>
</div>
        </>
    );
}

export default Footer;