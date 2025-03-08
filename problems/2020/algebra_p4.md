---
id: fimo_2020_algebra_p4
year: 2020
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2020 Algebra Problem 4"
---

Let \(a, b, c, d\) be four real numbers such that \(a \geqslant b \geqslant c \geqslant d > 0\) and \(a+b+c+d=1\). Prove that

\[
(a+2 b+3 c+4 d) a^{a} b^{b} c^{c} d^{d} < 1
\]

---
The weighted AM-GM inequality with weights \(a, b, c, d\) gives

\[
a^{a} b^{b} c^{c} d^{d} \leqslant a \cdot a+b \cdot b+c \cdot c+d \cdot d=a^{2}+b^{2}+c^{2}+d^{2}
\]

so it suffices to prove that \((a+2 b+3 c+4 d)\left(a^{2}+b^{2}+c^{2}+d^{2}\right) < 1=(a+b+c+d)^{3}\). This can be done in various ways, for example:

\[
\begin{aligned}
(a+b+c+d)^{3} >  & a^{2}(a+3 b+3 c+3 d)+b^{2}(3 a+b+3 c+3 d) \\
& +c^{2}(3 a+3 b+c+3 d)+d^{2}(3 a+3 b+3 c+d) \\
\geqslant & \left(a^{2}+b^{2}+c^{2}+d^{2}\right) \cdot(a+2 b+3 c+4 d) .
\end{aligned}
\]
