---
id: fimo_2011_algebra_p7
year: 2011
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2011 Algebra Problem 7"
---

Let \(a, b\), and \(c\) be positive real numbers satisfying \(\min (a+b, b+c, c+a) > \sqrt{2}\) and \(a^{2}+b^{2}+c^{2}=3\). Prove that
\[
\frac{a}{(b+c-a)^{2}}+\frac{b}{(c+a-b)^{2}}+\frac{c}{(a+b-c)^{2}} \geq \frac{3}{(a b c)^{2}}
\]

---
Throughout the solution, we denote the sums of the form \(f(a, b, c)+f(b, c, a)+f(c, a, b)\) by \(\sum f(a, b, c)\).
The condition \(b+c > \sqrt{2}\) implies \(b^{2}+c^{2} > 1\), so \(a^{2}=3-\left(b^{2}+c^{2}\right) < 2\), i.e. \(a < \sqrt{2} < b+c\). Hence we have \(b+c-a > 0\), and also \(c+a-b > 0\) and \(a+b-c > 0\) for similar reasons.
We will use the variant of HÖLDER's inequality
\[
\frac{x_{1}^{p+1}}{y_{1}^{p}}+\frac{x_{1}^{p+1}}{y_{1}^{p}}+\ldots+\frac{x_{n}^{p+1}}{y_{n}^{p}} \geq \frac{\left(x_{1}+x_{2}+\ldots+x_{n}\right)^{p+1}}{\left(y_{1}+y_{2}+\ldots+y_{n}\right)^{p}}
\]
which holds for all positive real numbers \(p, x_{1}, x_{2}, \ldots, x_{n}, y_{1}, y_{2}, \ldots, y_{n}\). Applying it to the left-hand side of (1) with \(p=2\) and \(n=3\), we get
\[
\sum \frac{a}{(b+c-a)^{2}}=\sum \frac{\left(a^{2}\right)^{3}}{a^{5}(b+c-a)^{2}} \geq \frac{\left(a^{2}+b^{2}+c^{2}\right)^{3}}{\left(\sum a^{5 / 2}(b+c-a)\right)^{2}}=\frac{27}{\left(\sum a^{5 / 2}(b+c-a)\right)^{2}}
\]
To estimate the denominator of the right-hand part, we use an instance of ScHUR's inequality, namely
\[
\sum a^{3 / 2}(a-b)(a-c) \geq 0
\]
which can be rewritten as
\[
\sum a^{5 / 2}(b+c-a) \leq a b c(\sqrt{a}+\sqrt{b}+\sqrt{c}) .
\]
Moreover, by the inequality between the arithmetic mean and the fourth power mean we also have
\[
\left(\frac{\sqrt{a}+\sqrt{b}+\sqrt{c}}{3}\right)^{4} \leq \frac{a^{2}+b^{2}+c^{2}}{3}=1
\]
i.e., \(\sqrt{a}+\sqrt{b}+\sqrt{c} \leq 3\). Hence, (2) yields
\[
\sum \frac{a}{(b+c-a)^{2}} \geq \frac{27}{(a b c(\sqrt{a}+\sqrt{b}+\sqrt{c}))^{2}} \geq \frac{3}{a^{2} b^{2} c^{2}}
\]
thus solving the problem.
