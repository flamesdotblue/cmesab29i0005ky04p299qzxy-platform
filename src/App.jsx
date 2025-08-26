import React from 'react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <div className="nasa-worm" aria-hidden>NASA</div>
          <span className="brand-sub">National Aeronautics and Space Administration</span>
        </div>
        <nav className="links">
          <a href="#missions">Missions</a>
          <a href="#discoveries">Discoveries</a>
          <a href="#images">Galleries</a>
          <a href="#about">About</a>
        </nav>
        <div className="actions">
          <button className="btn btn-outline">News</button>
          <button className="btn btn-primary">Explore</button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="spline-wrap" aria-hidden>
        <Spline scene="https://prod.spline.design/ns1MlpZQDFS29uiL/scene.splinecode" />
        <div className="vignette" />
        <div className="noise" />
      </div>

      <div className="hero-content">
        <h1>
          Cosmic Horizons
          <span className="accent"> Black Hole Initiative</span>
        </h1>
        <p className="lead">
          A gateway to the unknown. Explore the physics of spacetime, singularities, and the luminous halos of accretion.
        </p>
        <div className="cta">
          <a className="btn btn-primary" href="#learn">Learn More</a>
          <a className="btn btn-ghost" href="#watch">Watch Visualizations</a>
        </div>
        <div className="badges">
          <span>Real-time 3D</span>
          <span>Interactive</span>
          <span>WebGL</span>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden>
        <span>Scroll</span>
        <div className="mouse">
          <div className="wheel" />
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  )
}
