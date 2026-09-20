import { useEffect, useState } from 'react'
import './index.css'

import logo from './Assets/Logo.png'
import hero from './Assets/hero.jpg'
import coconutTree from './Assets/pexels-photo-7676720.jpeg'
import harvest from './Assets/photo-1580984969064-9a264d75832c.jpg'
import plantation from './Assets/Coconut-The_Wonder_Fruit-1920x1280-940x627-1.jpeg'
import freshCoconut from './Assets/img-coconut-1.png'
import rawCoconut from './Assets/isaac-n-c-hL9pRezOKwc-unsplash.png'
import coconutMilk from './Assets/coconut-milk-bg.png'
import coconutOil from './Assets/Minyak-Kelapa-Murni-1.png'

const products = [
  { name: 'Fresh Coconut', description: 'Whole coconuts selected for freshness, appearance, and dependable handling.', image: freshCoconut },
  { name: 'Mature Coconut', description: 'Naturally mature coconuts suited to food processing and ingredient production.', image: rawCoconut },
  { name: 'Coconut Milk', description: 'A practical coconut ingredient for culinary and food manufacturing applications.', image: coconutMilk },
  { name: 'Virgin Coconut Oil', description: 'Coconut oil prepared for businesses seeking a versatile plant-based product.', image: coconutOil },
]

const navItems = [['About', '#about'], ['Products', '#products'], ['Process', '#process'], ['Contact', '#contact']]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeMenu)
    return () => window.removeEventListener('keydown', closeMenu)
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Global Cendana Ekspor, home">
          <img src={logo} alt="" />
          <span>Global Cendana<br />Ekspor</span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-contact" href="https://api.whatsapp.com/send?phone=6285217713066" target="_blank" rel="noreferrer">Start a conversation</a>
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((value) => !value)}>
          <span /><span />
        </button>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <img className="hero-image" src={hero} alt="Container ships being loaded at an export terminal" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="hero-kicker">Indonesian coconut supplier</p>
            <h1 id="hero-title">From tropical soil<br />to global supply.</h1>
            <p className="hero-intro">PT Global Cendana Ekspor connects Indonesia's coconut produce with buyers who value clear communication and careful product handling.</p>
            <a className="primary-link" href="#products">View our products <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note"><span>Based in</span><strong>Pekanbaru, Riau</strong></div>
        </section>

        <section className="intro-section" id="about">
          <div className="section-index">01 / Who we are</div>
          <div className="intro-copy">
            <h2>Built close to the source.</h2>
            <p className="lead">We work from Indonesia, where coconuts are part of the landscape, the local economy, and everyday life.</p>
            <div className="copy-columns">
              <p>Our role is straightforward: prepare coconut products for commercial buyers and make the path from initial enquiry to shipment easier to follow.</p>
              <p>We focus on practical coordination, product clarity, and lasting supplier relationships. Each conversation starts with the buyer's actual requirements.</p>
            </div>
          </div>
        </section>

        <section className="story-strip" aria-label="Coconut sourcing in Indonesia">
          <figure className="story-main"><img src={coconutTree} alt="A person standing beneath tall coconut palms" /></figure>
          <div className="story-quote">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>A good export relationship begins before anything is packed.</blockquote>
            <p>It starts by listening, confirming the details, and keeping both sides informed.</p>
          </div>
          <figure className="story-detail"><img src={harvest} alt="Fresh green coconuts after harvest" /></figure>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading">
            <div className="section-index">02 / Product range</div>
            <h2>Coconut products for<br />commercial needs.</h2>
            <p>Ask us about product specifications, packing options, quantities, and current availability.</p>
          </div>
          <div className="product-list">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image-wrap"><img src={product.image} alt={product.name} /><span>0{index + 1}</span></div>
                <h3>{product.name}</h3><p>{product.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="process-image"><img src={plantation} alt="Coconuts growing on a palm tree" /></div>
          <div className="process-copy">
            <div className="section-index light">03 / How we work</div>
            <h2>A clear route from enquiry to dispatch.</h2>
            <ol>
              <li><span>01</span><div><strong>Share your requirement</strong><p>Tell us the product, intended market, quantity, and packing needs.</p></div></li>
              <li><span>02</span><div><strong>Confirm the details</strong><p>We review availability and align the commercial and product specifications.</p></div></li>
              <li><span>03</span><div><strong>Prepare the order</strong><p>Products are coordinated for packing and shipment according to the agreed terms.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div><div className="section-index">04 / Contact</div><h2>Planning your next coconut order?</h2></div>
          <div className="contact-copy">
            <p>Send us the product and quantity you need. We will continue the conversation directly.</p>
            <div className="contact-actions">
              <a className="contact-button" href="https://api.whatsapp.com/send?phone=6285217713066" target="_blank" rel="noreferrer">Message on WhatsApp</a>
              <a className="text-link" href="tel:+6285217713066">+62 852 1771 3066</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><img src={logo} alt="" /><p>Indonesian coconut products<br />for international buyers.</p></div>
        <address>Jl. Bukit Pasir No. 02<br />Tenayan Raya, Pekanbaru<br />Riau, Indonesia</address>
        <div className="footer-meta">
          <a href="tel:+6285217713066">+62 852 1771 3066</a>
          <a href="https://instagram.com/globalcendanaekspor" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://youtube.com/@globalcendanaekspor" target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} PT Global Cendana Ekspor</p>
      </footer>
    </div>
  )
}

export default App
