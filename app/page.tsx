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
    action: "More info",
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
    body: "Every project gets practical engineering direction around site constraints, sequencing, and jurisdiction requirements.",
  },
];

const aboutHighlights = [
  "Your first call for smarter site development.",
  "Bridging the gap between a vision and a viable site.",
  "Clear engineering direction for complex site decisions.",
  "Local expertise for a smoother path to permit.",
];

export default function Home() {
  return (
    <main>
      <section
        className='hero homeHero'
        aria-label='LRG Engineering civil engineering'
      >
        <img className='heroImage' src={skylineHero} alt='' />
        <div className='heroShade' />
        <nav className='nav' aria-label='Primary navigation'>
          <a className='brand' href='#top' aria-label='LRG Engineering home'>
            <img src={logo} alt='LRG Engineering' />
          </a>
          <div className='navLinks'>
            <a href='#services'>Services</a>
            <a href='#about'>About</a>
            <a href='/team'>Team</a>
            <a href='#contact'>Contact</a>
          </div>
          <details className='mobileMenu'>
            <summary aria-label='Open navigation menu'>
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </summary>
            <div className='mobileMenuLinks'>
              <a href='#services'>Services</a>
              <a href='#about'>About</a>
              <a href='/team'>Team</a>
              <a href='#contact'>Contact</a>
            </div>
          </details>
        </nav>

        <div className='heroContent' id='top'>
          <p className='eyebrow'>Civil engineering in Greater Austin</p>
          <h1>Full-service civil engineering in Central Texas.</h1>
          <p className='heroCopy'>
            LRG Engineering provides design, planning, permitting, and utility
            engineering support with the direct attention of local professional
            engineers.
          </p>
          <div className='heroActions'>
            <a className='button primary' href='mailto:info@lrgengineering.com'>
              Email Us
            </a>
            <a className='button secondary' href='tel:+15127674181'>
              Call 512.767.4181
            </a>
          </div>
        </div>
      </section>

      <section className='intro' aria-label='Firm registration'>
        <p>LRG Engineering, LLC</p>
        <span>TBPE Firm # F-24758</span>
      </section>

      <section
        className='section aboutSummary'
        id='about'
        aria-labelledby='about-summary-title'
      >
        <div className='aboutSummaryHeader'>
          <h2 id='about-summary-title'>
            Hands-on permit guidance for Austin-area site development.
          </h2>
        </div>
        <div className='aboutSummaryBody'>
          <p className='aboutSummaryLead'>
            We specialize in guiding projects through the City of Austin and
            surrounding jurisdictions&rsquo; permitting processes, providing
            hands-on support with site plan review and multi-agency coordination
            to move projects from concept to approval efficiently.
          </p>
          <ul className='aboutSummaryList'>
            {aboutHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className='section services' id='services'>
        <div className='sectionHeader'>
          <p className='eyebrow'>Services</p>
        </div>
        <div className='serviceList'>
          {services.map((service) => (
            <details className='serviceRow' key={service.title}>
              <summary>
                <span>{service.title}</span>
              </summary>
              <div className='serviceDetail'>
                <p>{service.description}</p>
                <a href={service.href}>{service.action}</a>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className='split section' aria-label='LRG Engineering approach'>
        <div>
          <h2>
            Practical civil engineering with exceptional service and support.
          </h2>
          <p className='muted'>
            From predevelopment questions to detailed civil plan sets, LRG helps
            clients understand constraints, coordinate requirements, and keep
            projects moving through the local approval path.
          </p>
        </div>
        <div className='approachStack'>
          {approach.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='contact' id='contact'>
        <div>
          <p className='eyebrow'>Contact</p>
          <h2>Talk through the site, scope, and next approval step.</h2>
        </div>
        <div className='contactPanel'>
          <div className='contactActions'>
            <a className='button primary' href='mailto:info@lrgengineering.com'>
              Email Us
            </a>
            <a className='button secondary' href='tel:+15127674181'>
              Call 512.767.4181
            </a>
          </div>
          <p>
            6000 Menchaca Rd
            <br />
            Building 1, Suite 11
            <br />
            Austin, TX 78745
          </p>
        </div>
      </section>
    </main>
  );
}
