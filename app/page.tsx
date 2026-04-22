const skylineHero =
  "https://images.unsplash.com/photo-1557335200-a65f7f032602?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=3000";

const logo = "/lrg-logo-blanconegro.png";

const services = [
  {
    title: "Land Planning",
    description:
      "Early site planning that balances access, grading, utilities, drainage, and jurisdiction requirements before design decisions get expensive.",
    href: "#contact",
    action: "Discuss a project",
  },
  {
    title: "Predevelopment & Feasibility",
    description:
      "Practical due diligence to identify constraints, approval paths, utility needs, floodplain concerns, and civil scope before purchase or kickoff.",
    href: "#contact",
    action: "Discuss a project",
  },
  {
    title: "Subdivisions",
    description:
      "Subdivision layout and civil plan support for private developments that need clear coordination between lots, access, utilities, and review comments.",
    href: "#contact",
    action: "Discuss a project",
  },
  {
    title: "Site Plans",
    description:
      "Civil site design packages for grading, paving, drainage, utilities, and local review, prepared with permitting and construction in mind.",
    href: "#contact",
    action: "Discuss a project",
  },
  {
    title: "Water and Wastewater Tap Plans",
    description:
      "Dedicated Austin-area tap plan support with utility details, field conditions, and plan documentation organized for the approval process.",
    href: "/tap-plans",
    action: "View specialty page",
  },
  {
    title: "Drainage and Water Quality Plans",
    description:
      "Drainage, detention, and water quality design that helps projects manage runoff, meet local criteria, and avoid late-stage redesigns.",
    href: "#contact",
    action: "Discuss a project",
  },
  {
    title: "Floodplain Studies and Modeling",
    description:
      "Floodplain evaluation and hydraulic modeling support for sites where flood risk, elevations, or regulatory boundaries shape the project.",
    href: "#contact",
    action: "Discuss a project",
  },
  {
    title: "Permitting",
    description:
      "Responsive permit coordination and comment-response support to keep civil plans moving through Austin-area review channels.",
    href: "#contact",
    action: "Discuss a project",
  },
  {
    title: "Erosion Hazard Zone Plans",
    description:
      "Plan support for erosion-sensitive sites, connecting slope, drainage, and review requirements into a buildable civil path.",
    href: "#contact",
    action: "Discuss a project",
  },
];

const approach = [
  {
    title: "Private-client focus",
    body: "Design and permitting support for owners, builders, developers, and consultants working across the Greater Austin Area.",
  },
  {
    title: "Civil plans with review in mind",
    body: "LRG prepares the site, utility, drainage, floodplain, and permitting documents local reviewers expect to see.",
  },
  {
    title: "Direct professional guidance",
    body: "Luis R. Granillo, P.E. leads the work with a practical eye for site constraints, sequencing, and jurisdiction requirements.",
  },
];

const aboutHighlights = [
  "Private development and owner-led projects",
  "Greater Austin review and permitting context",
  "Direct guidance from Luis R. Granillo, P.E.",
];

export default function Home() {
  return (
    <main>
      <section className="hero homeHero" aria-label="LRG Engineering civil engineering">
        <img className="heroImage" src={skylineHero} alt="" />
        <div className="heroShade" />
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="LRG Engineering home">
            <img src={logo} alt="LRG Engineering" />
          </a>
          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#about">About</a>
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
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="/team">Team</a>
              <a href="#contact">Contact</a>
            </div>
          </details>
        </nav>

        <div className="heroContent" id="top">
          <p className="eyebrow">Civil engineering in Greater Austin</p>
          <h1>Full-service civil engineering for private projects in Central Texas.</h1>
          <p className="heroCopy">
            LRG Engineering provides design, planning, permitting, and utility
            engineering support with the direct attention of a local professional
            engineer.
          </p>
          <div className="heroActions">
            <a className="button primary" href="mailto:luis@lrgengineering.com">
              Email Luis
            </a>
            <a className="button secondary" href="tel:+15127674181">
              Call 512.767.4181
            </a>
          </div>
        </div>
      </section>

      <section className="intro" aria-label="Firm registration">
        <p>LRG Engineering, LLC</p>
        <span>TBPE Firm # F-24758</span>
      </section>

      <section className="section aboutSummary" id="about" aria-labelledby="about-summary-title">
        <div className="aboutSummaryHeader">
          <p className="eyebrow">About LRG Engineering</p>
          <h2 id="about-summary-title">
            Local civil engineering guidance before the site decisions get expensive.
          </h2>
        </div>
        <div className="aboutSummaryBody">
          <p>
            LRG helps owners, builders, developers, and consultants understand
            site constraints early, then turns those decisions into coordinated
            civil plans, permitting documents, and review responses.
          </p>
          <ul>
            {aboutHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <a href="/team">Meet the team</a>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="sectionHeader">
          <p className="eyebrow">Services</p>
        </div>
        <div className="serviceList">
          {services.map((service) => (
            <details className="serviceRow" key={service.title}>
              <summary>
                <span>{service.title}</span>
                <small>Expand service</small>
              </summary>
              <div className="serviceDetail">
                <p>{service.description}</p>
                <a href={service.href}>{service.action}</a>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="split section" aria-label="LRG Engineering approach">
        <div>
          <p className="eyebrow">How LRG works</p>
          <h2>Practical civil engineering with exceptional service and support.</h2>
          <p className="muted">
            From predevelopment questions to detailed civil plan sets, LRG helps
            clients understand constraints, coordinate requirements, and keep
            projects moving through the local approval path.
          </p>
        </div>
        <div className="approachStack">
          {approach.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featuredService" aria-label="Water and wastewater tap plans">
        <div className="featuredServiceInner">
          <div>
            <p className="eyebrow">Specialty service</p>
            <h2>Water and wastewater tap plans for Austin projects.</h2>
            <p>
              The Tap Plan material now lives inside this site as a focused page
              with field photos, Austin Water detail context, and the dedicated
              tap-plan process.
            </p>
          </div>
          <a className="button primary" href="/tap-plans">
            View Tap Plans
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Talk through the site, scope, and next approval step.</h2>
        </div>
        <div className="contactPanel">
          <p>Luis R. Granillo, P.E.</p>
          <a href="mailto:luis@lrgengineering.com">luis@lrgengineering.com</a>
          <a href="tel:+15127674181">(512) 767-4181</a>
          <p>2204 Western Trails Blvd, Suite 101<br />Austin, TX 78745</p>
        </div>
      </section>
    </main>
  );
}
