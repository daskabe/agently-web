import * as Accordion from '@radix-ui/react-accordion';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/backgroundLarge.jpg';
import { AppShell } from '../components/AppShell';
import { Button } from '../components/Button';

const faqItems = [
  {
    value: 'item-1',
    title: 'Where should I report a bug?',
    body:
      'Use the GitHub issue tracker so bugs, reproduction steps, and follow-up discussion stay in one visible place for the project.',
  },
  {
    value: 'item-2',
    title: 'What details help the team investigate faster?',
    body:
      'Include what you were trying to do, what happened instead, your browser or editor version, and any screenshots or console errors you can share.',
  },
  {
    value: 'item-3',
    title: 'Can I request a feature there too?',
    body:
      'Yes. Feature requests, workflow ideas, and product feedback can all go into GitHub issues so they can be discussed and prioritized in the open.',
  },
];

export function SupportPage() {
  return (
    <AppShell>
      <section className="support-hero">
        <div className="support-hero__content">
          <span className="eyebrow">Support</span>
          <h1>Find quick answers, then reach the team through the project issue tracker.</h1>
          <p>
            This support page gives users a simple place to check common questions and
            open a GitHub issue when they need help, want to report a bug, or have an
            idea to share.
          </p>
          <div className="hero-actions">
            <Button asChild>
              <a
                href="https://github.com/daskabe/agently-web/issues"
                target="_blank"
                rel="noreferrer"
              >
                Open issue tracker
              </a>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/docs">Read docs</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/">Back home</Link>
            </Button>
          </div>
        </div>

        <div className="support-hero__visual">
          <div className="support-card">
            <span className="eyebrow">Issue Tracking</span>
            <h3>GitHub is the main support channel.</h3>
            <p>
              Open a new issue for bugs, feature requests, installation trouble, or
              anything else you want the maintainers to see.
            </p>
            <a
              className="support-link"
              href="https://github.com/daskabe/agently-web/issues"
              target="_blank"
              rel="noreferrer"
            >
              github.com/daskabe/agently-web/issues
            </a>
          </div>

          <div className="docs-hero__visual">
            <img src={backgroundImage} alt="Agently support backdrop" />
          </div>
        </div>
      </section>

      <section className="support-stack">
        <div className="support-card">
          <h2>Frequently asked questions</h2>
          <Accordion.Root
            className="docs-accordion"
            type="single"
            collapsible
            defaultValue="item-1"
          >
            {faqItems.map((item) => (
              <Accordion.Item key={item.value} className="docs-accordion__item" value={item.value}>
                <Accordion.Header>
                  <Accordion.Trigger className="docs-accordion__trigger">
                    {item.title}
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="docs-accordion__content">
                  <p>{item.body}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        <div className="support-card">
          <h2>Need more help?</h2>
          <p>
            If the FAQ does not cover your situation, open an issue and include as much
            context as you can. That gives the team a durable thread to respond in and
            makes repeated problems easier to track.
          </p>
          <p className="support-note">
            Link:{" "}
            <a
              className="support-link"
              href="https://github.com/daskabe/agently-web/issues"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/daskabe/agently-web/issues
            </a>
          </p>
        </div>
      </section>
    </AppShell>
  );
}
