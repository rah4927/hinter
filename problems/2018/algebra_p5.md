---
id: fimo_2018_algebra_p5
year: 2018
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2018 Algebra Problem 5"
---

Determine all functions \(f:(0, \infty) \rightarrow \mathbb{R}\) satisfying

\[
\left(x+\frac{1}{x}\right) f(y)=f(x y)+f\left(\frac{y}{x}\right)
\]

for all \(x, y > 0\).

The final answer is \(f(x)=C_{1} x+\frac{C_{2}}{x}\) with arbitrary constants \(C_{1}\) and \(C_{2}\).

---
Fix a real number \(a > 1\), and take a new variable \(t\). For the values \(f(t), f\left(t^{2}\right)\), \(f(a t)\) and \(f\left(a^{2} t^{2}\right)\), the relation (1) provides a system of linear equations:

\[
\begin{aligned}
& x=y=t: \quad\left(t+\frac{1}{t}\right) f(t) \quad=f\left(t^{2}\right)+f(1) \\
& x=\frac{t}{a}, y=a t: \quad\left(\frac{t}{a}+\frac{a}{t}\right) f(a t)=f\left(t^{2}\right)+f\left(a^{2}\right) \\
& x=a^{2} t, y=t: \quad\left(a^{2} t+\frac{1}{a^{2} t}\right) f(t)=f\left(a^{2} t^{2}\right)+f\left(\frac{1}{a^{2}}\right) \\
& x=y=a t: \quad\left(a t+\frac{1}{a t}\right) f(a t)=f\left(a^{2} t^{2}\right)+f(1)
\end{aligned}
\]

In order to eliminate \(f\left(t^{2}\right)\), take the difference of \((2 \mathrm{a})\) and (2b); from (2c) and (2d) eliminate \(f\left(a^{2} t^{2}\right)\); then by taking a linear combination, eliminate \(f(a t)\) as well:

\[
\begin{gathered}
\left(t+\frac{1}{t}\right) f(t)-\left(\frac{t}{a}+\frac{a}{t}\right) f(a t)=f(1)-f\left(a^{2}\right) \text { and } \\
\left(a^{2} t+\frac{1}{a^{2} t}\right) f(t)-\left(a t+\frac{1}{a t}\right) f(a t)=f\left(1 / a^{2}\right)-f(1), \quad \text { so } \\
\left(\left(a t+\frac{1}{a t}\right)\left(t+\frac{1}{t}\right)-\left(\frac{t}{a}+\frac{a}{t}\right)\left(a^{2} t+\frac{1}{a^{2} t}\right)\right) f(t) \\
=\left(a t+\frac{1}{a t}\right)\left(f(1)-f\left(a^{2}\right)\right)-\left(\frac{t}{a}+\frac{a}{t}\right)\left(f\left(1 / a^{2}\right)-f(1)\right) .
\end{gathered}
\]

Notice that on the left-hand side, the coefficient of \(f(t)\) is nonzero and does not depend on \(t\) :

\[
\left(a t+\frac{1}{a t}\right)\left(t+\frac{1}{t}\right)-\left(\frac{t}{a}+\frac{a}{t}\right)\left(a^{2} t+\frac{1}{a^{2} t}\right)=a+\frac{1}{a}-\left(a^{3}+\frac{1}{a^{3}}\right) < 0 .
\]

After dividing by this fixed number, we get

\[
f(t)=C_{1} t+\frac{C_{2}}{t}
\]

where the numbers \(C_{1}\) and \(C_{2}\) are expressed in terms of \(a, f(1), f\left(a^{2}\right)\) and \(f\left(1 / a^{2}\right)\), and they do not depend on \(t\).

The functions of the form (3) satisfy the equation:

\[
\left(x+\frac{1}{x}\right) f(y)=\left(x+\frac{1}{x}\right)\left(C_{1} y+\frac{C_{2}}{y}\right)=\left(C_{1} x y+\frac{C_{2}}{x y}\right)+\left(C_{1} \frac{y}{x}+C_{2} \frac{x}{y}\right)=f(x y)+f\left(\frac{y}{x}\right) .
\]
