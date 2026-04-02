import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/backgroundLarge.jpg';
import { AppShell } from '../components/AppShell';
import { Button } from '../components/Button';
import { installLinks } from '../config/installLinks';

const accordionItems = [
  {
    value: 'item-1',
    title: 'What should I install first?',
    body:
      'Start with Chrome if your team captures prompts during research, then add the VS Code extension to complete the handoff into implementation.',
  },
  {
    value: 'item-2',
    title: 'Do I need both installs?',
    body:
      'No. Each surface can stand alone, but the workflow is strongest when both are installed and used together.',
  },
  {
    value: 'item-3',
    title: 'Where do I update the real marketplace URLs?',
    body:
      'Replace the placeholder values in src/config/installLinks.ts with your published store listing URLs.',
  },
];

export function DocsPage() {
  return (
    <AppShell>
      <section className="docs-hero">
        <div className="docs-hero__content">
          <span className="eyebrow">Documentation</span>
          <h1>Everything a new user needs to install, launch, and understand Agently.</h1>
          <p>
            This page gives you a clean starter structure for installation links,
            onboarding notes, workflow guidance, and FAQ content.
          </p>
          <div className="hero-actions">
            <Button asChild>
              <a href={installLinks.chrome} target="_blank" rel="noreferrer">
                Chrome Store
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={installLinks.vscode} target="_blank" rel="noreferrer">
                VS Code Marketplace
              </a>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/">Back home</Link>
            </Button>
          </div>
        </div>
        <div className="docs-hero__visual">
          <img src={backgroundImage} alt="Agently interface backdrop" />
        </div>
      </section>

      <section className="docs-section">
        <Tabs.Root className="docs-tabs" defaultValue="install">
          <Tabs.List className="docs-tabs__list" aria-label="Documentation sections">
            <Tabs.Trigger className="docs-tabs__trigger" value="install">
              Install
            </Tabs.Trigger>
            <Tabs.Trigger className="docs-tabs__trigger" value="workflow">
              Workflow
            </Tabs.Trigger>
            <Tabs.Trigger className="docs-tabs__trigger" value="faq">
              FAQ
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content className="docs-tabs__content" value="install">
            <div className="docs-copy">
              <h2>Install guide</h2>
              <p>
                Publish your real listing URLs, then keep this section focused on the
                fastest possible setup path for a new user.
              </p>
              <ol className="docs-list">
                <li>Install the Chrome extension from the web store.</li>
                <li>Install the VS Code extension from the marketplace.</li>
                <li>Open the product, sign in if needed, and confirm the pair is working.</li>
              </ol>
            </div>
          </Tabs.Content>

          <Tabs.Content className="docs-tabs__content" value="workflow">
            <div className="docs-copy">
              <h2>Suggested workflow</h2>
              <p>
                Use the browser for collecting intent and context, then let VS Code be
                the place where prompts become implementation work.
              </p>
              <ol className="docs-list">
                <li>Capture useful context while researching in the browser.</li>
                <li>Send or recreate the prompt inside the editor with minimal friction.</li>
                <li>Refine the result inside your existing coding flow.</li>
              </ol>
            </div>
          </Tabs.Content>

          <Tabs.Content className="docs-tabs__content" value="faq">
            <div className="docs-copy">
              <h2>Frequently asked questions</h2>
              <Accordion.Root
                className="docs-accordion"
                type="single"
                collapsible
                defaultValue="item-1"
              >
                {accordionItems.map((item) => (
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
          </Tabs.Content>
        </Tabs.Root>
      </section>
    </AppShell>
  );
}
