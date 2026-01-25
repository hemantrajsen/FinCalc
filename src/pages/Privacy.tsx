import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 24 January 2026</p>

          <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
            <p>
              This Privacy Policy explains how ArthaCalc collects, uses, and protects information when
              you use this website.
            </p>
            <h2>Information we collect</h2>
            <ul>
              <li>
                <strong>Usage data:</strong> basic analytics such as pages visited and approximate
                device information.
              </li>
              <li>
                <strong>Calculator inputs:</strong> values you enter are processed in your browser.
                We do not intentionally store your inputs on our servers.
              </li>
            </ul>
            <h2>Cookies</h2>
            <p>
              We may use cookies or similar technologies to remember preferences and understand how
              the site is used.
            </p>
            <h2>Third-party services</h2>
            <p>
              If we use third-party analytics or advertising, those providers may collect
              information according to their own policies.
            </p>
            <h2>Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us via the
              information provided on the website.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
