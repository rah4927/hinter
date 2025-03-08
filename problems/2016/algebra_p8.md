---
id: fimo_2016_algebra_p8
year: 2016
number: 8
difficulty: medium
topics: ["algebra"]
source: "IMO 2016 Algebra Problem 8"
---

Determine the largest real number \(a\) such that for all \(n \geqslant 1\) and for all real numbers \(x_{0}, x_{1}, \ldots, x_{n}\) satisfying \(0=x_{0}<x_{1}<x_{2} < \cdots < x_{n}\), we have

\[
\frac{1}{x_{1}-x_{0}}+\frac{1}{x_{2}-x_{1}}+\cdots+\frac{1}{x_{n}-x_{n-1}} \geqslant a\left(\frac{2}{x_{1}}+\frac{3}{x_{2}}+\cdots+\frac{n+1}{x_{n}}\right) .
\]

The final answer is that the largest \(a\) is \(\frac{4}{9}\).

---
We first show that \(a=\frac{4}{9}\) is admissible. For each \(2 \leqslant k \leqslant n\), by the CauchySchwarz Inequality, we have

\[
\left(x_{k-1}+\left(x_{k}-x_{k-1}\right)\right)\left(\frac{(k-1)^{2}}{x_{k-1}}+\frac{3^{2}}{x_{k}-x_{k-1}}\right) \geqslant(k-1+3)^{2},
\]

which can be rewritten as

\[
\frac{9}{x_{k}-x_{k-1}} \geqslant \frac{(k+2)^{2}}{x_{k}}-\frac{(k-1)^{2}}{x_{k-1}} \text {. }
\]

Summing (2) over \(k=2,3, \ldots, n\) and adding \(\frac{9}{x_{1}}\) to both sides, we have

\[
9 \sum_{k=1}^{n} \frac{1}{x_{k}-x_{k-1}} \geqslant 4 \sum_{k=1}^{n} \frac{k+1}{x_{k}}+\frac{n^{2}}{x_{n}} > 4 \sum_{k=1}^{n} \frac{k+1}{x_{k}} .
\]

This shows (1) holds for \(a=\frac{4}{9}\).

Next, we show that \(a=\frac{4}{9}\) is the optimal choice. Consider the sequence defined by \(x_{0}=0\) and \(x_{k}=x_{k-1}+k(k+1)\) for \(k \geqslant 1\), that is, \(x_{k}=\frac{1}{3} k(k+1)(k+2)\). Then the left-hand side of (1) equals

\[
\sum_{k=1}^{n} \frac{1}{k(k+1)}=\sum_{k=1}^{n}\left(\frac{1}{k}-\frac{1}{k+1}\right)=1-\frac{1}{n+1}
\]

while the right-hand side equals

\[
a \sum_{k=1}^{n} \frac{k+1}{x_{k}}=3 a \sum_{k=1}^{n} \frac{1}{k(k+2)}=\frac{3}{2} a \sum_{k=1}^{n}\left(\frac{1}{k}-\frac{1}{k+2}\right)=\frac{3}{2}\left(1+\frac{1}{2}-\frac{1}{n+1}-\frac{1}{n+2}\right) a .
\]

When \(n\) tends to infinity, the left-hand side tends to 1 while the right-hand side tends to \(\frac{9}{4} a\). Therefore \(a\) has to be at most \(\frac{4}{9}\).

Hence the largest value of \(a\) is \(\frac{4}{9}\).
