import * as Accordion from "@radix-ui/react-accordion";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/agently-640x400.jpg";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { installLinks } from "../config/installLinks";
import chromeStoreIcon from "../../assets/330px-Google_Chrome_Web_Store_icon.png";
import vscodeIcon from "../../assets/vscode.png";
import chromePin from "../../assets/chrome-pin.jpg";
import agentlyVid from "../../assets/agently-vid.mp4";
import agentlyGif from "../../assets/output.gif";
import agentlyQueue from "../../assets/agently-queue-2.mp4";

const accordionItems = [
  {
    value: "item-1",
    title: "What should I install first?",
    body: "You can start with either.",
  },
  {
    value: "item-2",
    title: "Do I need both extensions?",
    body: "Yes. You need both extensions. The Chrome extension captures context and sends it to the VS Code extension, which is where LLMs can turn it into code.",
  },
  {
    value: "item-3",
    title: "I have port conflicts. What do I do?",
    body: "You can change port numbers in both Chrome and VS Code extension settings. Default port used is 43110. If you change them, just make sure they match.",
  },
  {
    value: "item-4",
    title: "How much does it cost?",
    body: "Agently is free to use. If that changes, we'll be sure to let you know in advance.",
  },
  {
    value: "item-5",
    title: "Do you collect any personal data?",
    body: "Agently does not collect any personal data or text prompts you send. Your privacy is important!",
  },
  {
    value: "item-6",
    title: "Do you collect analytics data?",
    body: "Yes, we collect Agently dialog/drawer open events and button press events to track overall usage. No personal data is collected.",
  },
];

export function DocsPage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <AppShell>
      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxSrc(null)}>
          <button
            className="lightbox-close"
            aria-label="Close"
            onClick={() => setLightboxSrc(null)}
          >
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt="Fullscreen preview"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <section className="docs-hero">
        <div className="docs-hero__content">
          <span className="eyebrow">Documentation</span>
          <h1>
            Install... <br /> Launch... <br />
            Use Agently...
          </h1>
        </div>
        <div className="docs-hero__visual">
          <img src={backgroundImage} alt="Agently interface backdrop" />
        </div>
      </section>

      <section className="docs-section">
        <Tabs.Root className="docs-tabs" defaultValue="install">
          <Tabs.List
            className="docs-tabs__list"
            aria-label="Documentation sections"
          >
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
              <p>Add the extensions to your browser and code editor.</p>
              <ol className="docs-list">
                <li>
                  Install the Chrome extension from Chrome Web Store. <br />
                  Once installed, pin the Agently extension in Chrome so it's easy to
                  access. You can always <code>SHIFT + LeftClick</code> to open
                  Agently.
                </li>
                <Button asChild variant="secondary">
                  <a
                    href={installLinks.chrome}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={chromeStoreIcon}
                      alt=""
                      aria-hidden="true"
                      className="button__icon"
                    />
                    Install Chrome Extension
                  </a>
                </Button>
                <br />
                <br />
                <img
                  width={500}
                  src={chromePin}
                  alt=""
                  aria-hidden="true"
                  className=""
                />
                <br /> <br />
                <li>
                  Install the VS Code extension from the Visual Studio Code
                  Marketplace.
                </li>
                <Button asChild variant="secondary">
                  <a
                    href={installLinks.vscode}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={vscodeIcon}
                      alt=""
                      aria-hidden="true"
                      className="button__icon"
                    />
                    Install VS Code Extension
                  </a>
                </Button>
                <br /> <br />
                You can also search for "Agently" in the marketplace directly
                from the VS Code extensions tab.
                <br />
                <br />
                Once installed, press <code>CMD + SHIFT + P</code> and type
                "Agently:" to see all available commands after installation.
              </ol>
            </div>
          </Tabs.Content>

          <Tabs.Content className="docs-tabs__content" value="workflow">
            <div className="docs-copy">
              <h2>Use the Modal</h2>
              <p>
                Press <code>SHIFT + LeftClick</code> anywhere in the browser to
                open the Agently modal. The extension will automatically capture
                the element below the cursor to send with your prompt to VS
                Code.
              </p>
              <div
                className="hero-layout__video"
                style={{ marginTop: "2rem", placeSelf: "center" }}
              >
                <video src={agentlyVid} controls muted loop playsInline>
                  Sorry, your browser does not support embedded videos.
                </video>
              </div>
              <br />
              <br />
              <br />
              <h2>Use Right/Bottom Docks</h2>
              <p>
                You can open the Agently panel from the Chrome toolbar. You can switch between right dock and bottom dock views. In dock views, you have the option to select the DOM element you want to add into the prompt context.
              </p>
              <div
                className="hero-layout__video media-preview"
                style={{ marginTop: "2rem", placeSelf: "center" }}
              >
                <button
                  className="media-preview__maximize"
                  aria-label="View fullscreen"
                  onClick={() => setLightboxSrc(agentlyGif)}
                >
                  ⛶
                </button>
                <img
                  src={agentlyGif}
                  alt="Agently modal workflow"
                  style={{ width: "100%", borderRadius: 18 }}
                />
              </div>
              <h2>Import Prompts and Prompt Queue</h2>
              <p>You can import your prompts from a JSON file. That means you can repeat the same known prompts for consistent results across projects. <br/><br/>
              The first item on your queue will be processed immediately; the remaining will be added to the VS Code Agently extension prompt queue. <br/><br/>
              You can open the prompts queue in VS Code by opening the command palette <code>CMD + SHIFT + P</code> and searching for <code>Agently: Open Prompts Queue</code>. <br/><br/>
              You can execute prompts in the queue by pressing the "Run" button next to each prompt. This will send the prompt along with the captured context to your IDE for processing.
              </p>
              <pre><code>{`{
  "prompts": [
    "create 5 cards with the following headers...",
    "when cards are clicked they should open a drawer...",
    "make sure all cards have border radius of 10px and a shadow effect of primary color with 20% opacity",
  ]
}`}</code></pre>
              
              <div
                className="hero-layout__video media-preview"
                style={{ marginTop: "2rem", placeSelf: "center" }}
              >
                <video src={agentlyQueue} controls muted loop playsInline>
                  Sorry, your browser does not support embedded videos.
                </video>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content className="docs-tabs__content" value="faq">
            <div className="docs-copy">
              <Accordion.Root
                className="docs-accordion"
                type="single"
                collapsible
                defaultValue="item-1"
              >
                {accordionItems.map((item) => (
                  <Accordion.Item
                    key={item.value}
                    className="docs-accordion__item"
                    value={item.value}
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="docs-accordion__trigger">
                        🔸 {item.title}
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
