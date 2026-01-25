import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 24 January 2026</p>

          <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
            <p>
              These Terms of Service govern your use of ArthaCalc. By using the site, you agree to
              these terms.
            </p>
            <h2>Educational use</h2>
            <p>
              The calculators and results are provided for informational purposes only and do not
              constitute financial, tax, or legal advice.
            </p>
            <h2>No warranties</h2>
            <p>
              ArthaCalc is provided "as is" without warranties of any kind. We do not guarantee the
              accuracy, completeness, or suitability of the results for your situation.
            </p>
            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, ArthaCalc will not be liable for any damages
              arising from your use of the site.
            </p>
            <h2>Changes</h2>
            <p>
              We may update these terms from time to time. Continued use of the site means you
              accept the updated terms.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
