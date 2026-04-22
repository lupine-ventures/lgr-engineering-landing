import type { Metadata } from "next";

const planHero =
  "https://images.squarespace-cdn.com/content/v1/67ba28a272ed484a70709855/9860e7e0-b0b6-4188-9687-90f9e20b3f60/2304+W+8th+St+Tap+Plan+AW+Approved+2024+104396.jpg?format=2500w";

const logo = "/lrg-logo-blanconegro.png";

const diagram =
  "https://images.squarespace-cdn.com/content/v1/67ba28a272ed484a70709855/545b3109-992c-4944-aab8-ad4108461335/Austin+Water+Diagram.png?format=1500w";

const fieldImages = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/67ba28a272ed484a70709855/271ff96b-5c04-4ffc-892e-8d68e2cef317/Corporation+Stop.jpg?format=1000w",
    label: "Corporation stop",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/67ba28a272ed484a70709855/aecd2e76-0c99-465a-a3f8-9c99d5a2f2fd/Water+Tap.jpg?format=1000w",
    label: "Water tap",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/67ba28a272ed484a70709855/32a06123-c636-4dc8-9c82-cfd3b175c662/Flowable+Fill.jpg?format=1000w",
    label: "Flowable fill",
  },
];

const services = [
  {
    title: "Site evaluation",
    body: "Property conditions, available service, and utility constraints are reviewed before a plan set is drafted.",
  },
  {
    title: "Austin Water compliance",
    body: "Commercial and residential tap plans are prepared around Austin Water specifications, details, and local code.",
  },
  {
    title: "Submittal support",
    body: "LRG manages the path from initial consultation to approved plans, including coordination with city officials.",
  },
];

const steps = [
  "Review the site and service need",
  "Draft the water and wastewater tap plan",
  "Coordinate comments and city requirements",
  "Deliver an approved plan set ready for the next trade",
];

export const metadata: Metadata = {
  title: "Water and Wastewater Tap Plans | LRG Engineering",
  description:
    "City of Austin-compliant water and wastewater tap plans from LRG Engineering.",
};

export default function TapPlans() {
  return (
    <main>
      <section className="hero" aria-label="LRG Engineering tap plans">
        <img className="heroImage" src={planHero} alt="" />
        <div className="heroShade" />
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="/" aria-label="LRG Engineering home">
            <img src={logo} alt="LRG Engineering" />
          </a>
          <div className="navLinks">
            <a href="/">Home</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="/#about">About</a>
            <a href="/team">Team</a>
            <a href="#contact">Contact</a>
          </div>
          <details className="mobileMenu">
            <summary aria-label="Open navigation menu">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </summary>
            <div className="mobileMenuLinks">
              <a href="/">Home</a>
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="/#about">About</a>
              <a href="/team">Team</a>
              <a href="#contact">Contact</a>
            </div>
          </details>
        </nav>

        <div className="heroContent" id="top">
          <p className="eyebrow">Austin water and wastewater tap plans</p>
          <h1>Plan sheets that move cleanly from service need to city approval.</h1>
          <p className="heroCopy">
            LRG Engineering prepares City of Austin-compliant commercial and
            residential tap plans, coordinating details so your project can keep
            moving.
          </p>
          <div className="heroActions">
            <a className="button primary" href="mailto:luis@lrgengineering.com">
              Start a tap plan
            </a>
            <a className="button secondary" href="tel:+15127674181">
              Call 512.767.4181
            </a>
          </div>
        </div>
      </section>

      <section className="intro" aria-label="Service summary">
        <p>New water and wastewater service connections.</p>
        <span>Commercial and residential projects across Austin.</span>
      </section>

      <section className="section services" id="services">
        <div className="sectionHeader">
          <p className="eyebrow">Our services</p>
          <h2>Focused civil engineering for the tap-plan bottleneck.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="service" key={service.title}>
              <span aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split section" id="process">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>From rough service question to stamped city-ready drawings.</h2>
          <p className="muted">
            Tap plans sit between site conditions, utility standards, and city
            review. LRG is the partner that turns those moving parts into a
            coordinated plan set.
          </p>
        </div>
        <ol className="timeline">
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="proof section" aria-label="Austin Water plan details">
        <div className="proofText">
          <p className="eyebrow">Austin Water details</p>
          <h2>Designed around the details reviewers expect to see.</h2>
          <p>
            Plan exhibits, field conditions, and utility components are brought
            into one clear story before submittal.
          </p>
        </div>
        <figure className="diagram">
          <img src={diagram} alt="Austin Water tap plan diagram" />
        </figure>
      </section>

      <section className="fieldStrip" aria-label="Tap plan field examples">
        {fieldImages.map((image) => (
          <figure key={image.label}>
            <img src={image.src} alt={image.label} />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Need a tap plan?</p>
          <h2>Send the project address. LRG will help map the next step.</h2>
        </div>
        <div className="contactPanel">
          <a href="mailto:luis@lrgengineering.com">luis@lrgengineering.com</a>
          <a href="tel:+15127674181">(512) 767-4181</a>
          <p>2204 Western Trails Blvd, Suite 101<br />Austin, TX 78745</p>
        </div>
      </section>
    </main>
  );
}
