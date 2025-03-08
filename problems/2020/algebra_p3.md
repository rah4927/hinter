---
id: fimo_2020_algebra_p3
year: 2020
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2020 Algebra Problem 3"
---

Suppose that \(a, b, c, d\) are positive real numbers satisfying \((a+c)(b+d)=a c+b d\). Find the smallest possible value of

\[
S=\frac{a}{b}+\frac{b}{c}+\frac{c}{d}+\frac{d}{a}
\]

The final answer is that the smallest possible value is 8 .

---
To show that \(S \geqslant 8\), apply the AM-GM inequality twice as follows:

\[
\left(\frac{a}{b}+\frac{c}{d}\right)+\left(\frac{b}{c}+\frac{d}{a}\right) \geqslant 2 \sqrt{\frac{a c}{b d}}+2 \sqrt{\frac{b d}{a c}}=\frac{2(a c+b d)}{\sqrt{a b c d}}=\frac{2(a+c)(b+d)}{\sqrt{a b c d}} \geqslant 2 \cdot \frac{2 \sqrt{a c} \cdot 2 \sqrt{b d}}{\sqrt{a b c d}}=8
\]

The above inequalities turn into equalities when \(a=c\) and \(b=d\). Then the condition \((a+c)(b+d)=a c+b d\) can be rewritten as \(4 a b=a^{2}+b^{2}\). So it is satisfied when \(a / b=2 \pm \sqrt{3}\). Hence, \(S\) attains value 8 , e.g., when \(a=c=1\) and \(b=d=2+\sqrt{3}\).
