import type { Metadata } from "next";

const logo = "/lrg-logo-blanconegro.png";

const team = [
  {
    name: "Lauren Rein, P.E.",
    src: "/team/team-03.jpg",
    alt: "Lauren Rein, P.E. outdoors in an LRG Engineering shirt",
  },
  {
    name: "Luis R. Granillo, P.E.",
    src: "/team/team-02.jpg",
    alt: "Luis R. Granillo, P.E. smiling outdoors",
  },
  {
    name: "David Tapia, E.I.T.",
    src: "/team/team-01.jpg",
    alt: "David Tapia, E.I.T. in a black polo outdoors",
  },
];

export const metadata: Metadata = {
  title: "Team | LRG Engineering",
  description:
    "Meet the LRG Engineering team serving private civil engineering projects across Greater Austin and Central Texas.",
};

export default function TeamPage() {
  return (
    <main>
      <section className='hero teamHero' aria-label='LRG Engineering team'>
        <img
          className='heroImage teamHeroImage'
          src='/team/team-03.jpg'
          alt=''
        />
        <div className='heroShade' />
        <nav className='nav' aria-label='Primary navigation'>
          <a className='brand' href='/' aria-label='LRG Engineering home'>
            <img src={logo} alt='LRG Engineering' />
          </a>
          <div className='navLinks'>
            <a href='/'>Home</a>
            <a href='/#services'>Services</a>
            <a href='/#about'>About</a>
            <a href='/tap-plans'>Tap Plans</a>
            <a href='#top'>Team</a>
            <a href='#contact'>Contact</a>
          </div>
          <details className='mobileMenu'>
            <summary aria-label='Open navigation menu'>
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </summary>
            <div className='mobileMenuLinks'>
              <a href='/'>Home</a>
              <a href='/#services'>Services</a>
              <a href='/#about'>About</a>
              <a href='/tap-plans'>Tap Plans</a>
              <a href='#top'>Team</a>
              <a href='#contact'>Contact</a>
            </div>
          </details>
        </nav>

        <div className='heroContent' id='top'>
          <h1>The people behind LRG Engineering.</h1>
          <p className='heroCopy'>
            A focused Austin civil engineering team helping private clients move
            from early site questions to coordinated plan approval.
          </p>
          <div className='heroActions'>
            <a className='button primary' href='mailto:luis@lrgengineering.com'>
              Email the team
            </a>
            <a className='button secondary' href='tel:+15127674181'>
              Call 512.767.4181
            </a>
          </div>
        </div>
      </section>

      <section className='intro teamIntro' aria-label='Team focus'>
        <p>Local engineering support, handled closely.</p>
        <span>Planning / civil design / permitting / review coordination</span>
      </section>

      <section
        className='section teamSection'
        aria-label='LRG Engineering portraits'
      >
        <div className='sectionHeader'>
          <p className='eyebrow'>Meet LRG</p>
          <h2>
            A small team built for practical answers and steady execution.
          </h2>
        </div>
        <div className='teamGrid'>
          {team.map((member) => (
            <figure className='teamPortrait' key={member.src}>
              <img src={member.src} alt={member.alt} />
              <figcaption>{member.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className='split section teamApproach'
        aria-label='LRG Engineering team approach'
      >
        <div>
          <p className='eyebrow'>Working style</p>
          <h2>Clear communication from feasibility through approval.</h2>
        </div>
        <div className='approachStack'>
          <article>
            <h3>Site-first thinking</h3>
            <p>
              LRG starts with the real project constraints, then turns them into
              civil plans that reviewers, owners, and builders can act on.
            </p>
          </article>
          <article>
            <h3>Local review awareness</h3>
            <p>
              The team works across Central Texas requirements for site plans,
              utilities, drainage, floodplain work, and tap-plan approvals.
            </p>
          </article>
          <article>
            <h3>Responsive support</h3>
            <p>
              Clients get practical guidance on scope, sequencing, and the next
              approval step instead of a handoff-heavy process.
            </p>
          </article>
        </div>
      </section>

      <section className='contact' id='contact'>
        <div>
          <p className='eyebrow'>Contact</p>
          <h2>
            Bring the site, schedule, and questions. LRG will help sort the
            path.
          </h2>
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
