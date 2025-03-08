---
id: fimo_2008_algebra_p5
year: 2008
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2008 Algebra Problem 5"
---

Let \(a, b, c, d\) be positive real numbers such that
\[
a b c d=1 \quad \text { and } \quad a+b+c+d > \frac{a}{b}+\frac{b}{c}+\frac{c}{d}+\frac{d}{a}
\]
Prove that
\[
a+b+c+d < \frac{b}{a}+\frac{c}{b}+\frac{d}{c}+\frac{a}{d} .
\]

---
We show that if \(a b c d=1\), the sum \(a+b+c+d\) cannot exceed a certain weighted mean of the expressions \(\frac{a}{b}+\frac{b}{c}+\frac{c}{d}+\frac{d}{a}\) and \(\frac{b}{a}+\frac{c}{b}+\frac{d}{c}+\frac{a}{d}\).
By applying the AM-GM inequality to the numbers \(\frac{a}{b}, \frac{a}{b}, \frac{b}{c}\) and \(\frac{a}{d}\), we obtain
\[
a=\sqrt[4]{\frac{a^{4}}{a b c d}}=\sqrt[4]{\frac{a}{b} \cdot \frac{a}{b} \cdot \frac{b}{c} \cdot \frac{a}{d}} \leq \frac{1}{4}\left(\frac{a}{b}+\frac{a}{b}+\frac{b}{c}+\frac{a}{d}\right) .
\]
Analogously,
\[
b \leq \frac{1}{4}\left(\frac{b}{c}+\frac{b}{c}+\frac{c}{d}+\frac{b}{a}\right), \quad c \leq \frac{1}{4}\left(\frac{c}{d}+\frac{c}{d}+\frac{d}{a}+\frac{c}{b}\right) \quad \text { and } \quad d \leq \frac{1}{4}\left(\frac{d}{a}+\frac{d}{a}+\frac{a}{b}+\frac{d}{c}\right)
\]
Summing up these estimates yields
\[
a+b+c+d \leq \frac{3}{4}\left(\frac{a}{b}+\frac{b}{c}+\frac{c}{d}+\frac{d}{a}\right)+\frac{1}{4}\left(\frac{b}{a}+\frac{c}{b}+\frac{d}{c}+\frac{a}{d}\right) .
\]
In particular, if \(a+b+c+d > \frac{a}{b}+\frac{b}{c}+\frac{c}{d}+\frac{d}{a}\) then \(a+b+c+d < \frac{b}{a}+\frac{c}{b}+\frac{d}{c}+\frac{a}{d}\).
