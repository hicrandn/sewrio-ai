export const BLOG_POSTS = [
  {
    slug: "seam-allowance-hardest-thing-to-automate",
    date: "Jun 2026",
    title: "Why seam allowance is the hardest thing to automate",
    excerpt:
      "The math is easy. Getting a machine to think like a pattern maker is not.",
    content: [
      "Seam allowance looks like a solved problem from the outside — add a fixed offset around every pattern piece and you're done. In practice, the right allowance depends on the fabric, the seam type, the machine that will sew it, and the finishing method, and it changes piece by piece across a single garment.",
      "A curved princess seam on a woven bodice wants a narrower allowance than a straight side seam on heavy denim. A serged knit hem behaves nothing like a bound edge. None of that is written down anywhere a model can simply read it — it lives in the judgment of people who have cut thousands of garments.",
      "Getting this right meant training Sewrio on real pattern sets annotated by working pattern makers, not just geometry rules. The result is an engine that treats seam allowance as a design decision tied to fabric and construction, not a constant.",
    ],
  },
  {
    slug: "grading-rules-from-vintage-tailoring-books",
    date: "May 2026",
    title: "Grading rules we borrowed from vintage tailoring books",
    excerpt:
      "Some of the best sizing logic we use is over eighty years old.",
    content: [
      "Modern grading software tends to treat sizing as pure interpolation — scale every point on the pattern by the same ratio and call it a size range. Tailors from the mid-20th century knew better: some measurements grow faster than others as a body scales, and grading in a straight line produces garments that fit worse the further you get from the sample size.",
      "We went back to tailoring references from the 1930s–1950s to study how experienced pattern graders distributed ease non-uniformly across a size range — more growth through the bust and hip, less through the neckline and wrist.",
      "Those rules, translated into Sewrio's grading engine, are why patterns generated at the edges of a size range still fit the way the sample size does, instead of just looking like a scaled photocopy of it.",
    ],
  },
  {
    slug: "from-prompt-to-production-pattern-in-one-afternoon",
    date: "Apr 2026",
    title: "From prompt to production pattern in one afternoon",
    excerpt:
      "A behind-the-scenes look at how one designer shipped her first collection.",
    content: [
      "An independent designer came to us with sketches for a six-piece capsule collection and a production deadline three weeks out. Normally, turning sketches into graded, cutter-ready patterns for a full size range takes a pattern maker days per style.",
      "Working directly in Sewrio, she described each silhouette in plain language, adjusted fit and ease interactively, and exported production-ready DXF files the same afternoon — with every piece graded across her full size range and seam allowances set per fabric.",
      "The collection shipped on time. What used to be the bottleneck between a sketch and a cutting table became the fastest part of her process.",
    ],
  },
];
