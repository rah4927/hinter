---
id: fimo_2009_algebra_p4
year: 2009
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2009 Algebra Problem 4"
---

Let \(a, b, c\) be positive real numbers such that \(a b+b c+c a \leq 3 a b c\). Prove that

\[
\sqrt{\frac{a^{2}+b^{2}}{a+b}}+\sqrt{\frac{b^{2}+c^{2}}{b+c}}+\sqrt{\frac{c^{2}+a^{2}}{c+a}}+3 \leq \sqrt{2}(\sqrt{a+b}+\sqrt{b+c}+\sqrt{c+a}) .
\]

---
Starting with the terms of the right-hand side, the quadratic-arithmetic-mean inequality yields

\[
\begin{aligned}
\sqrt{2} \sqrt{a+b} & =2 \sqrt{\frac{a b}{a+b}} \sqrt{\frac{1}{2}\left(2+\frac{a^{2}+b^{2}}{a b}\right)} \\
& \geq 2 \sqrt{\frac{a b}{a+b}} \cdot \frac{1}{2}\left(\sqrt{2}+\sqrt{\frac{a^{2}+b^{2}}{a b}}\right)=\sqrt{\frac{2 a b}{a+b}}+\sqrt{\frac{a^{2}+b^{2}}{a+b}}
\end{aligned}
\]

and, analogously,

\[
\sqrt{2} \sqrt{b+c} \geq \sqrt{\frac{2 b c}{b+c}}+\sqrt{\frac{b^{2}+c^{2}}{b+c}}, \quad \sqrt{2} \sqrt{c+a} \geq \sqrt{\frac{2 c a}{c+a}}+\sqrt{\frac{c^{2}+a^{2}}{c+a}} .
\]

Applying the inequality between the arithmetic mean and the squared harmonic mean will finish the proof:

\[
\sqrt{\frac{2 a b}{a+b}}+\sqrt{\frac{2 b c}{b+c}}+\sqrt{\frac{2 c a}{c+a}} \geq 3 \cdot \sqrt{\frac{3}{\sqrt{\frac{a+b}{2 a b}}^2+\sqrt{\frac{b+c}{2 b c}}^2+\sqrt{\frac{c+a}{2 c a}}^2}}=3 \cdot \sqrt{\frac{3 a b c}{a b+b c+c a}} \geq 3
\]
