---
id: fimo_2020_algebra_p1_1
year: 2020
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2020 Algebra Problem 1"
---

Let \(n\) be a positive integer, and set \(N=2^{n}\). Determine the smallest real number \(a_{n}\) such that, for all real \(x\),
\[
\sqrt[N]{\frac{x^{2 N}+1}{2}} \leqslant a_{n}(x-1)^{2}+x
\]


---
First of all, assume that \(a_{n} < N / 2\) satisfies the condition. Take \(x=1+t\) for \(t > 0\), we should have
\[
\frac{(1+t)^{2 N}+1}{2} \leqslant\left(1+t+a_{n} t^{2}\right)^{N}
\]
Expanding the brackets we get
\[
\left(1+t+a_{n} t^{2}\right)^{N}-\frac{(1+t)^{2 N}+1}{2}=\left(N a_{n}-\frac{N^{2}}{2}\right) t^{2}+c_{3} t^{3}+\ldots+c_{2 N} t^{2 N}
\]
with some coefficients \(c_{3}, \ldots, c_{2 N}\). Since \(a_{n} < N / 2\), the right hand side of (1) is negative for sufficiently small \(t\). A contradiction.
It remains to prove the following inequality
\[
\sqrt[N]{\frac{1+x^{2 N}}{2}} \leqslant x+\frac{N}{2}(x-1)^{2}
\]
where \(N=2^{n}\).
Use induction in \(n\). The base case \(n=0\) is trivial: \(N=1\) and both sides of \(\mathcal{I}(N, x)\) are equal to \(\left(1+x^{2}\right) / 2\). For completing the induction we prove \(\mathcal{I}(2 N, x)\) assuming that \(\mathcal{I}(N, y)\) is established for all real \(y\). We have
\[
\begin{aligned}
\left(x+N(x-1)^{2}\right)^{2} & =x^{2}+N^{2}(x-1)^{4}+N(x-1)^{2} \frac{(x+1)^{2}-(x-1)^{2}}{2} \\
& =x^{2}+\frac{N}{2}\left(x^{2}-1\right)^{2}+\left(N^{2}-\frac{N}{2}\right)(x-1)^{4} \geqslant x^{2}+\frac{N}{2}\left(x^{2}-1\right)^{2} \geqslant \sqrt[N]{\frac{1+x^{4 N}}{2}},
\end{aligned}
\]
where the last inequality is \(\mathcal{I}\left(N, x^{2}\right)\). Since
\[
x+N(x-1)^{2} \geqslant x+\frac{(x-1)^{2}}{2}=\frac{x^{2}+1}{2} \geqslant 0,
\]
taking square root we get \(\mathcal{I}(2 N, x)\). The inductive step is complete.
