---
id: fimo_2018_algebra_p7
year: 2018
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2018 Algebra Problem 7"
---

Find the maximal value of

\[
S=\sqrt[3]{\frac{a}{b+7}}+\sqrt[3]{\frac{b}{c+7}}+\sqrt[3]{\frac{c}{d+7}}+\sqrt[3]{\frac{d}{a+7}}
\]

where \(a, b, c, d\) are nonnegative real numbers which satisfy \(a+b+c+d=100\).

The final answer is \(\frac{8}{\sqrt[3]{7}}\), reached when \((a, b, c, d)\) is a cyclic permutation of \((1,49,1,49)\).

---
Since the value \(8 / \sqrt[3]{7}\) is reached, it suffices to prove that \(S \leqslant 8 / \sqrt[3]{7}\).

Assume that \(x, y, z, t\) is a permutation of the variables, with \(x \leqslant y \leqslant z \leqslant t\). Then, by the rearrangement inequality,

\[
S \leqslant\left(\sqrt[3]{\frac{x}{t+7}}+\sqrt[3]{\frac{t}{x+7}}\right)+\left(\sqrt[3]{\frac{y}{z+7}}+\sqrt[3]{\frac{z}{y+7}}\right)
\]

Claim. The first bracket above does not exceed \(\sqrt[3]{\frac{x+t+14}{7}}\).

Proof. Since

\[
X^{3}+Y^{3}+3 X Y Z-Z^{3}=\frac{1}{2}(X+Y-Z)\left((X-Y)^{2}+(X+Z)^{2}+(Y+Z)^{2}\right),
\]

the inequality \(X+Y \leqslant Z\) is equivalent (when \(X, Y, Z \geqslant 0\) ) to \(X^{3}+Y^{3}+3 X Y Z \leqslant Z^{3}\). Therefore, the claim is equivalent to

\[
\frac{x}{t+7}+\frac{t}{x+7}+3 \sqrt[3]{\frac{x t(x+t+14)}{7(x+7)(t+7)}} \leqslant \frac{x+t+14}{7} .
\]

Notice that

\[
\begin{aligned}
& 3 \sqrt[3]{\frac{x t(x+t+14)}{7(x+7)(t+7)}}=3 \sqrt[3]{\frac{t(x+7)}{7(t+7)} \cdot \frac{x(t+7)}{7(x+7)}} \cdot \frac{7(x+t+14)}{(t+7)(x+7)} \\
& \leqslant \frac{t(x+7)}{7(t+7)}+\frac{x(t+7)}{7(x+7)}+\frac{7(x+t+14)}{(t+7)(x+7)}
\end{aligned}
\]

by the AM-GM inequality, so it suffices to prove

\[
\frac{x}{t+7}+\frac{t}{x+7}+\frac{t(x+7)}{7(t+7)}+\frac{x(t+7)}{7(x+7)}+\frac{7(x+t+14)}{(t+7)(x+7)} \leqslant \frac{x+t+14}{7} .
\]

A straightforward check verifies that the last inequality is in fact an equality.

The claim leads now to

\[
S \leqslant \sqrt[3]{\frac{x+t+14}{7}}+\sqrt[3]{\frac{y+z+14}{7}} \leqslant 2 \sqrt[3]{\frac{x+y+z+t+28}{14}}=\frac{8}{\sqrt[3]{7}},
\]

the last inequality being due to the AM-CM inequality (or to the fact that \(\sqrt[3]{\text { is concave on }}\) \([0, \infty))\).
