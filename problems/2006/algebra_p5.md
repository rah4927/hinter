---
id: fimo_2006_algebra_p5
year: 2006
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2006 Algebra Problem 5"
---

Let \(a, b, c\) be the sides of a triangle. Prove that

\[
\frac{\sqrt{b+c-a}}{\sqrt{b}+\sqrt{c}-\sqrt{a}}+\frac{\sqrt{c+a-b}}{\sqrt{c}+\sqrt{a}-\sqrt{b}}+\frac{\sqrt{a+b-c}}{\sqrt{a}+\sqrt{b}-\sqrt{c}} \leq 3
\]

---
Note first that the denominators are all positive, e.g. \(\sqrt{a}+\sqrt{b} > \sqrt{a+b} > \sqrt{c}\). Let \(x=\sqrt{b}+\sqrt{c}-\sqrt{a}, y=\sqrt{c}+\sqrt{a}-\sqrt{b}\) and \(z=\sqrt{a}+\sqrt{b}-\sqrt{c}\). Then

\(b+c-a=\left(\frac{z+x}{2}\right)^{2}+\left(\frac{x+y}{2}\right)^{2}-\left(\frac{y+z}{2}\right)^{2}=\frac{x^{2}+x y+x z-y z}{2}=x^{2}-\frac{1}{2}(x-y)(x-z)\)

and

\[
\frac{\sqrt{b+c-a}}{\sqrt{b}+\sqrt{c}-\sqrt{a}}=\sqrt{1-\frac{(x-y)(x-z)}{2 x^{2}}} \leq 1-\frac{(x-y)(x-z)}{4 x^{2}}
\]

applying \(\sqrt{1+2 u} \leq 1+u\) in the last step. Similarly we obtain

\[
\frac{\sqrt{c+a-b}}{\sqrt{c}+\sqrt{a}-\sqrt{b}} \leq 1-\frac{(z-x)(z-y)}{4 z^{2}} \quad \text { and } \quad \frac{\sqrt{a+b-c}}{\sqrt{a}+\sqrt{b}-\sqrt{c}} \leq 1-\frac{(y-z)(y-x)}{4 y^{2}}
\]

Substituting these quantities into the statement, it is sufficient to prove that

\[
\frac{(x-y)(x-z)}{x^{2}}+\frac{(y-z)(y-x)}{y^{2}}+\frac{(z-x)(z-y)}{z^{2}} \geq 0 .
\]

By symmetry we can assume \(x \leq y \leq z\). Then

\[
\begin{gathered}
\frac{(x-y)(x-z)}{x^{2}}=\frac{(y-x)(z-x)}{x^{2}} \geq \frac{(y-x)(z-y)}{y^{2}}=-\frac{(y-z)(y-x)}{y^{2}}, \\
\frac{(z-x)(z-y)}{z^{2}} \geq 0
\end{gathered}
\]

and (1) follows.
