import * as Separator from '@radix-ui/react-separator';
import { Link } from 'react-router-dom';
import heroWordmark from '../../assets/a-agently (1).png';
import promoImage from '../../assets/a-prompt-your-ide-faster-and.png';
import { AppShell } from '../components/AppShell';
import { Button } from '../components/Button';
import { StepCard } from '../components/StepCard';
import { StoreCard } from '../components/StoreCard';
import { installLinks } from '../config/installLinks';

const featureItems = [
  'Send polished prompts into your workflow without context switching.',
  'Pair browser research with editor execution using one lightweight setup.',
  'Keep onboarding simple with store-based installs for both surfaces.',
];

export function HomePage() {
  return (
    <AppShell>
      <section className="hero-section">
        <div className="hero-section__copy">
          <span className="eyebrow">Chrome extension + VS Code companion</span>
          <h1 className="hero-title">
            Prompt faster, move cleaner, and keep the handoff between browser and IDE
            feeling instant.
          </h1>
          <p className="hero-text">
            Agently gives teams a sharper way to capture ideas in the browser and push
            them into coding flow. Use the extension to collect context, then keep
            momentum inside VS Code with the paired install.
          </p>

          <div className="hero-actions">
            <Button asChild>
              <a href={installLinks.chrome} target="_blank" rel="noreferrer">
                Install for Chrome
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={installLinks.vscode} target="_blank" rel="noreferrer">
                Install for VS Code
              </a>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/docs">Read docs</Link>
            </Button>
          </div>

          <ul className="feature-list">
            {featureItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-section__art">
          <div className="hero-frame hero-frame--wordmark">
            <img src={heroWordmark} alt="Agently wordmark" />
          </div>
          <div className="hero-frame hero-frame--promo">
            <img src={promoImage} alt="Agently product preview" />
          </div>
        </div>
      </section>

      <Separator.Root className="section-separator" decorative orientation="horizontal" />

      <section className="content-grid">
        <div className="section-heading">
          <span className="eyebrow">Install where you work</span>
          <h2>Two touchpoints, one flow.</h2>
          <p>
            Agently is designed to feel cohesive across discovery, drafting, and code
            execution. Start with the extension or jump straight into the editor.
          </p>
        </div>

        <div className="store-grid">
          <StoreCard
            eyebrow="Browser"
            title="Chrome extension"
            description="Capture prompts, references, and quick actions while you browse."
            href={installLinks.chrome}
            cta="Open Chrome Store"
          />
          <StoreCard
            eyebrow="Editor"
            title="VS Code extension"
            description="Pick up the context inside your IDE and keep implementation moving."
            href={installLinks.vscode}
            cta="Open VS Code Marketplace"
          />
        </div>
      </section>

      <section className="content-grid content-grid--steps">
        <div className="section-heading">
          <span className="eyebrow">How it works</span>
          <h2>Set up in minutes.</h2>
        </div>

        <div className="steps-grid">
          <StepCard
            number="01"
            title="Install the browser extension"
            body="Add Agently from the Chrome Web Store so prompts and context are always one click away."
          />
          <StepCard
            number="02"
            title="Install the VS Code companion"
            body="Connect the editor side of the workflow so your browser context can turn into implementation quickly."
          />
          <StepCard
            number="03"
            title="Use the docs to guide rollout"
            body="Share setup steps, operating habits, and team conventions from one clean documentation page."
          />
        </div>
      </section>
    </AppShell>
  );
}
