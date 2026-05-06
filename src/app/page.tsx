export default function Home() {
  return (
    <div className="relative z-[1] mx-auto w-full max-w-[720px] px-5 pb-20 pt-14 sm:px-7">
      <header className="flex items-center justify-between border-b-2 border-[var(--ink)] pb-[18px] font-serif opacity-0 [animation:rise_0.8s_ease-out_0.1s_forwards]">
        <div className="text-[22px] font-black italic tracking-[-0.02em]">
          The Ledger<span className="text-[var(--ember)]">.</span>
        </div>
        <div className="font-sans text-[11px] uppercase tracking-[0.18em] text-[var(--ink-mute)]">
          Personal Finance · 2026
        </div>
      </header>

      <div className="mt-12 inline-flex items-center gap-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ember)] opacity-0 [animation:rise_0.8s_ease-out_0.25s_forwards] before:h-px before:w-8 before:bg-[var(--ember)] before:content-['']">
        Debt Strategy
      </div>

      <h1 className="mt-6 font-serif text-[clamp(38px,6vw,58px)] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--ink)] opacity-0 [animation:rise_0.9s_ease-out_0.35s_forwards]">
        If the minimum payment is all you can manage,{" "}
        <em className="font-medium italic text-[var(--ember)]">read this first.</em>
      </h1>

      <p className="mt-6 max-w-[95%] font-serif text-[20px] leading-[1.45] text-[var(--ink-soft)] opacity-0 [animation:rise_0.8s_ease-out_0.5s_forwards] sm:text-[20px]">
        Most people stuck on credit card minimums aren't bad with money — they're
        trapped in math. Here's what actually moves the needle, and the
        trapdoors to avoid on the way out.
      </p>

      <div className="mt-10 flex items-center gap-4 border-b border-[var(--rule)] pb-8 text-[13px] text-[var(--ink-mute)] opacity-0 [animation:rise_0.8s_ease-out_0.65s_forwards]">
        <span>
          <strong className="font-semibold text-[var(--ink)]">
            The Ledger Editorial
          </strong>
        </span>
        <span className="h-[3px] w-[3px] rounded-full bg-[var(--ink-mute)]" />
        <span>5 min read</span>
        <span className="h-[3px] w-[3px] rounded-full bg-[var(--ink-mute)]" />
        <span>Updated this week</span>
      </div>

      <article className="mt-10 opacity-0 [animation:rise_0.9s_ease-out_0.8s_forwards]">
        <p className="font-serif text-[18px] leading-[1.65] text-[var(--ink)] [margin-bottom:22px] first-letter:float-left first-letter:pr-[10px] first-letter:pt-[6px] first-letter:font-serif first-letter:text-[64px] first-letter:font-bold first-letter:leading-[0.9] first-letter:text-[var(--ember)]">
          Credit card APRs sitting near 28% don't punish bad spenders — they
          punish slow payers. Pay only the minimum on a $10,000 balance and
          you'll spend the better part of two decades watching interest eat your
          paycheck. The good news: there are exactly three repayment paths that
          consistently work, and one industry-wide warning sign that saves
          people thousands.
        </p>

        <h2 className="mt-11 font-serif text-[26px] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--ink)]">
          The two repayment methods, head to head
        </h2>

        <p className="mt-[18px] font-serif text-[18px] leading-[1.65] text-[var(--ink)]">
          Before considering any outside help, most people should try one of two
          structured payoff frameworks. Both work. They just optimize for
          different things.
        </p>

        <div className="my-9 grid grid-cols-1 overflow-hidden rounded border border-[var(--ink)] bg-[var(--paper-deep)] sm:grid-cols-[1fr_auto_1fr]">
          <div className="p-6">
            <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ember)]">
              Method 01
            </div>
            <div className="mt-2 font-serif text-[22px] font-bold leading-[1.1] tracking-[-0.01em]">
              Avalanche
            </div>
            <div className="mt-2 font-sans text-[14px] leading-[1.5] text-[var(--ink-soft)]">
              Attack the highest-APR card first. Mathematically the cheapest
              path — you'll pay the least interest overall.
            </div>
          </div>

          <div className="flex items-center justify-center bg-[var(--ink)] px-3.5 py-2 font-serif text-[14px] font-medium italic tracking-[0.05em] text-[var(--paper)] sm:px-3.5 sm:py-0 sm:text-[18px]">
            vs.
          </div>

          <div className="p-6">
            <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ember)]">
              Method 02
            </div>
            <div className="mt-2 font-serif text-[22px] font-bold leading-[1.1] tracking-[-0.01em]">
              Snowball
            </div>
            <div className="mt-2 font-sans text-[14px] leading-[1.5] text-[var(--ink-soft)]">
              Knock out the smallest balance first. Costs slightly more in
              interest, but the early wins keep most people going.
            </div>
          </div>
        </div>

        <p className="font-serif text-[18px] leading-[1.65] text-[var(--ink)] [margin-bottom:22px]">
          If you've started and stopped repayment plans before, the snowball
          wins on momentum. If you can stay disciplined without the dopamine,
          avalanche is cheaper.{" "}
          <strong className="font-semibold text-[var(--ink)]">
            A 0% balance transfer card
          </strong>{" "}
          can supercharge either approach — just remember the 3–5% transfer fee,
          and have a real plan to clear the balance before the promo rate ends.
        </p>

        <h2 className="mt-11 font-serif text-[26px] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--ink)]">
          When budgeting alone isn't enough
        </h2>

        <p className="mt-[18px] font-serif text-[18px] leading-[1.65] text-[var(--ink)] [margin-bottom:22px]">
          Balance transfers, consolidation loans, and credit counseling are the
          standard playbook. But if your debt grew from something structural —
          a medical bill, a layoff, inflation outpacing wages, a divorce — those
          tools sometimes can't dig you out fast enough. That's where formal{" "}
          <strong className="font-semibold text-[var(--ink)]">
            debt relief programs
          </strong>{" "}
          enter the picture, typically running 24–48 months and using an
          FDIC-insured dedicated savings account to negotiate settlements with
          creditors.
        </p>

        <p className="font-serif text-[18px] leading-[1.65] text-[var(--ink)] [margin-bottom:22px]">
          The catch: the industry attracts predators. Knowing how to spot them
          is half the battle.
        </p>

        <section className="my-9 rounded-r bg-[var(--paper-deep)] px-6 py-[22px] [border-left:3px_solid_var(--ember)]">
          <h3 className="flex items-center gap-2.5 font-serif text-[18px] font-semibold text-[var(--ink)]">
            <span className="text-[20px] text-[var(--ember)]" aria-hidden="true">
              ⚠
            </span>
            Red flags before you sign anything
          </h3>
          <ul className="mt-3.5 list-none">
            {[
              `Any company claiming a "special government program" for credit card debt — these don't exist for standard unsecured debt.`,
              "Upfront fees demanded before any service is delivered.",
              "No certification from the AADR (American Association for Debt Resolution) or accreditation from the BBB.",
              "Vague fee disclosures, no written contract, or pressure to decide on a phone call.",
            ].map((item) => (
              <li
                key={item}
                className="relative border-t border-dotted border-[var(--rule)] py-2 pl-[22px] font-sans text-[15px] leading-[1.5] text-[var(--ink-soft)] first:border-t-0"
              >
                <span
                  className="absolute left-0 top-[9px] text-[13px] font-bold text-[var(--ember)]"
                  aria-hidden="true"
                >
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <p className="mx-auto my-10 max-w-[92%] border-y border-[var(--rule)] px-5 py-7 text-center font-serif text-[24px] italic leading-[1.35] text-[var(--ink)] sm:text-[24px]">
          The right provider is boring, transparent, and accredited. The wrong
          one is{" "}
          <em className="italic text-[var(--ember)]">urgent, vague, and free until it isn't.</em>
        </p>

        <h2 className="mt-11 font-serif text-[26px] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--ink)]">
          So how do you actually pick one?
        </h2>

        <p className="mt-[18px] font-serif text-[18px] leading-[1.65] text-[var(--ink)] [margin-bottom:22px]">
          You don't take the first ad you see — and you don't take ours either.
          The most useful thing we can do is point you to an independent,
          regularly updated comparison from a publication that actually vets
          these companies on fees, settlement rates, and customer outcomes.{" "}
          <strong className="font-semibold text-[var(--ink)]">
            Forbes Advisor
          </strong>{" "}
          maintains exactly that, and it's the cleanest starting point we know
          of.
        </p>
      </article>

      <section className="relative mt-14 overflow-hidden rounded-md bg-[var(--ink)] px-8 py-9 text-[var(--paper)] opacity-0 [animation:rise_0.9s_ease-out_0.8s_forwards] before:pointer-events-none before:absolute before:right-[-40px] before:top-[-40px] before:h-[200px] before:w-[200px] before:bg-[radial-gradient(circle,var(--ember-glow),transparent_70%)] before:content-[''] sm:px-8">
        <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ember)]">
          Independent comparison
        </div>
        <h2 className="mt-3 max-w-[90%] font-serif text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--paper)] sm:text-[30px]">
          See Forbes Advisor's vetted list of debt relief companies
        </h2>
        <p className="mt-3 max-w-[92%] font-sans text-[15px] leading-[1.55] text-[rgba(244,237,225,0.78)]">
          Side-by-side fees, minimum debt requirements, time-to-resolution, and
          customer ratings — reviewed by Forbes' editorial team, not by the
          companies themselves.
        </p>
        <a
          href="https://www.forbes.com/advisor/m/best-debt-relief-companies/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex items-center gap-3.5 rounded bg-[var(--ember)] px-7 py-[18px] font-sans text-[16px] font-semibold tracking-[-0.01em] text-[var(--paper)] shadow-[0_0_0_0_var(--ember)] transition hover:translate-y-[-2px] hover:bg-[var(--ember-deep)] hover:shadow-[0_12px_30px_-8px_rgba(200,74,26,0.5)]"
        >
          Compare providers on Forbes
          <span className="text-[18px] transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
        <div className="mt-5 flex items-center gap-2 font-sans text-[12px] text-[rgba(244,237,225,0.55)] before:text-[var(--ember)] before:content-['→']">
          Opens forbes.com · No email required
        </div>
      </section>

      <footer className="mt-[60px] border-t border-[var(--rule)] pt-6 text-center font-sans text-[12px] leading-[1.6] text-[var(--ink-mute)]">
        Editorial content. The Ledger may earn a referral fee from third-party
        sites. We do not provide financial, legal, or tax advice — consult a
        qualified professional for guidance specific to your situation.
      </footer>
    </div>
  );
}
