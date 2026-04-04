import * as Separator from "@radix-ui/react-separator";
import { Link } from "react-router-dom";
import chromeStoreIcon from "../../assets/330px-Google_Chrome_Web_Store_icon.png";
import vscodeIcon from "../../assets/vscode.png";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { StoreCard } from "../components/StoreCard";
import { installLinks } from "../config/installLinks";

import agentlyVid from "../../assets/agently-vid.mp4";

const featureItems = [
  "Capture ideas in Chrome, let VS Code work on them out of sight.",
  "Lightweight setup with two straightforward installs - low to no configuration required.",
  "Use docs and support pages when you need help.",
];

const workflowCards = [
  {
    eyebrow: "No more",
    title: "Workflow drag",
    variant: "pain",
    items: [
      "Hunting through your IDE, then manually pasting code into your VS Code LLM chat.",
      "Jumping between browser and editor just to verify changes and prompt again.",
      "Losing important context as you move between different parts of the workflow.",
      "Retyping the same prompts across projects instead of saving and reusing them.",
    ],
  },
  {
    eyebrow: "More of",
    title: "Flow state",
    variant: "gain",
    items: [
      "Use `shift + click` on a DOM element to target it and send the prompt into your IDE without leaving Chrome.",
      "Reach the full power of your coding LLM without being stuck inside the editor all day.",
      "Speak prompts directly to Agently for faster context-aware actions.",
      "Build entire app flows through Agently's smoother browser-to-IDE handoff.",
      "Import and reuse prompts across projects to keep your best work at your fingertips - Agently will queue them for you in VS Code so you can execute them one by one.",
    ],
  },
];

export function HomePage() {
  return (
    <AppShell>
      <section className="hero-section hero-section--simple">
        <div className="hero-layout">
          <div className="hero-section__copy hero-section__copy--simple">
            <span className="eyebrow">Chrome extension + VS Code companion</span>
            <h1 className="hero-title">
              Prompt your <span className="hero-title__accent">IDE</span> without
              leaving your <span className="hero-title__accent">BROWSER</span> 🤯
            </h1>
            <p className="hero-text">
              Agently adds DOM context to your text prompts for explicit targeting
              of elements then sends the prompt to your IDE with{" "}
              <span className="hero-title__accent">
                <b>ZERO</b>
              </span>{" "}
              friction.
            </p>
            <div className="hero-actions">
              <Button asChild variant="secondary">
                <a href={installLinks.chrome} target="_blank" rel="noreferrer">
                  <img
                    src={chromeStoreIcon}
                    alt=""
                    aria-hidden="true"
                    className="button__icon"
                  />
                  Install Chrome Extension
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={installLinks.vscode} target="_blank" rel="noreferrer">
                  <img
                    src={vscodeIcon}
                    alt=""
                    aria-hidden="true"
                    className="button__icon"
                  />
                  Install VS Code Extension
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
          <div className="hero-layout__video">
            <video
              src={agentlyVid}
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              Sorry, your browser does not support embedded videos.
            </video>
          </div>
        </div>
      </section>
      <Separator.Root
        className="section-separator"
        decorative
        orientation="horizontal"
      />
      <section className="workflow-contrast">
        {workflowCards.map((card) => (
          <article
            key={card.title}
            className={`workflow-card workflow-card--${card.variant}`}
          >
            <span className="workflow-card__eyebrow">{card.eyebrow}</span>
            <h3>{card.title}</h3>
            <ul className="workflow-card__list">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <div className="footer-actions">
        <Button asChild variant="ghost">
          <Link to="/docs">Read docs</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/support">Support & FAQ</Link>
        </Button>
        <Button asChild variant="ghost">
          <a href="https://github.com/daskabe/agently-web/issues/new/choose" target="_blank" rel="noreferrer">
        Bugs & Feature Requests
          </a>
        </Button>
      </div>
    </AppShell>
  );
}
