import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "react-router-dom";
import agently from "../../assets/agently.png";
import githubIcon from "../../assets/GitHub_Invertocat_White_Clearspace.png";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";

const faqItems = [
  {
    value: "item-1",
    title: "Where should I report a bug?",
    body: "Use the GitHub issue tracker so bugs, reproduction steps, and follow-up discussion stay in one visible place for the project.",
  },
  {
    value: "item-2",
    title: "What details help the team investigate faster?",
    body: "Include what you were trying to do, what happened instead, your browser or editor version, and any screenshots or console errors you can share.",
  },
  {
    value: "item-3",
    title: "Can I request a feature there too?",
    body: "Yes. Feature requests, workflow ideas, and product feedback can all go into GitHub issues so they can be discussed and prioritized in the open.",
  },
];

export function SupportPage() {
  return (
    <AppShell>
      <section className="support-hero">
        <div className="support-hero__content">
          <span className="eyebrow">   <img src={githubIcon} alt="GitHub" style={{ height: "2em", verticalAlign: "middle", marginLeft: "0.25em" }} />Support</span>
       
          <h1>
            Reach out through GitHub
          </h1>
          <div className="hero-actions">
            <Button asChild>

              <a
                href="https://github.com/daskabe/agently-web/issues/new?template=bug_report.md"
                target="_blank"
                rel="noreferrer"
              >
                Report a Bug
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href="https://github.com/daskabe/agently-web/issues/new?template=feature_request.md"
                target="_blank"
                rel="noreferrer"
              >
                Request New Feature
              </a>
            </Button>

            <Button asChild variant="secondary">
              <Link to="/docs">Read docs</Link>
            </Button>
          </div>
        </div>

        <div className="support-hero__visual">
          <div className="docs-hero__visual">
            <img src={agently} alt="Agently support backdrop" />
          </div>
        </div>
      </section>

      <section className="support-faq">
        <h1>Legal & Terms</h1>
        <h2>Privacy</h2>
        <p>
          Agently does not collect any personal data or text prompts you send.
          Your privacy is important!
        </p>
        <p>
          The only data collected is Agently dialog/drawer open events and button press events to track overall product usage.
        </p>
        <br />
        <h2>No Warranty and Responsibility</h2>
        <p>
          Agently is provided as-is without any guarantees. By using Agently, you acknowledge and agree that you are solely responsible for any outcomes resulting from its use. The developers of Agently are not liable for any damages, losses, or unintended consequences that may arise from using the tool. Always review and test generated code before running it in your environment.
        </p>
      </section>
    </AppShell>
  );
}
