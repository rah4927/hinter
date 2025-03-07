---
id: fimo_2021_algebra_p7
year: 2021
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2021 Algebra Problem 7"
---

Let \(n \geqslant 1\) be an integer, and let \(x_{0}, x_{1}, \ldots, x_{n+1}\) be \(n+2\) non-negative real numbers that satisfy \(x_{i} x_{i+1}-x_{i-1}^{2} \geqslant 1\) for all \(i=1,2, \ldots, n\). Show that
\[
x_{0}+x_{1}+\cdots+x_{n}+x_{n+1} > \left(\frac{2 n}{3}\right)^{3 / 2}
\]

---
Lemma 1.1. If \(a, b, c\) are non-negative numbers such that \(a b-c^{2} \geqslant 1\), then
\[
(a+2 b)^{2} \geqslant(b+2 c)^{2}+6
\]
Proof. \((a+2 b)^{2}-(b+2 c)^{2}=(a-b)^{2}+2(b-c)^{2}+6\left(a b-c^{2}\right) \geqslant 6\).
Lemma 1.2. \(\sqrt{1}+\cdots+\sqrt{n} > \frac{2}{3} n^{3 / 2}\).
Proof. Bernoulli's inequality \((1+t)^{3 / 2} > 1+\frac{3}{2} t\) for \(0 > t \geqslant-1\) (or, alternatively, a straightforward check) gives
\[
(k-1)^{3 / 2}=k^{3 / 2}\left(1-\frac{1}{k}\right)^{3 / 2} > k^{3 / 2}\left(1-\frac{3}{2 k}\right)=k^{3 / 2}-\frac{3}{2} \sqrt{k}
\]
Summing up \((* )\) over \(k=1,2, \ldots, n\) yields

\[
0 > n^{3 / 2}-\frac{3}{2}(\sqrt{1}+\cdots+\sqrt{n})
\]
Now put \(y_{i}:=2 x_{i}+x_{i+1}\) for \(i=0,1, \ldots, n\). We get \(y_{0} \geqslant 0\) and \(y_{i}^{2} \geqslant y_{i-1}^{2}+6\) for \(i=1,2, \ldots, n\) by Lemma 1.1. Thus, an easy induction on \(i\) gives \(y_{i} \geqslant \sqrt{6 i}\). Using this estimate and Lemma \(1.2\) we get
\[
3\left(x_{0}+\ldots+x_{n+1}\right) \geqslant y_{1}+\ldots+y_{n} \geqslant \sqrt{6}(\sqrt{1}+\sqrt{2}+\ldots+\sqrt{n}) > \sqrt{6} \cdot \frac{2}{3} n^{3 / 2}=3\left(\frac{2 n}{3}\right)^{3 / 2} .
\]
