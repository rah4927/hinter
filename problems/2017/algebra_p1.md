---
id: fimo_2017_algebra_p1
year: 2017
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2017 Algebra Problem 1"
---

Let \(a_{1}, a_{2}, \ldots, a_{n}, k\), and \(M\) be positive integers such that
\[
\frac{1}{a_{1}}+\frac{1}{a_{2}}+\cdots+\frac{1}{a_{n}}=k \quad \text { and } \quad a_{1} a_{2} \ldots a_{n}=M .
\]
If \(M > 1\), prove that the polynomial
\[
P(x)=M(x+1)^{k}-\left(x+a_{1}\right)\left(x+a_{2}\right) \cdots\left(x+a_{n}\right)
\]
has no positive roots.

---
We first prove that, for \(x > 0\),
\[
a_{i}(x+1)^{1 / a_{i}} \leqslant x+a_{i}
\]
with equality if and only if \(a_{i}=1\). It is clear that equality occurs if \(a_{i}=1\).
If \(a_{i} > 1\), the AM-GM inequality applied to a single copy of \(x+1\) and \(a_{i}-1\) copies of 1 yields
\[
\frac{(x+1)+\overbrace{1+1+\cdots+1}^{a_{i}-1 \text { ones }}}{a_{i}} \geqslant \sqrt[a_{i}]{(x+1) \cdot 1^{a_{i}-1}} \Longrightarrow a_{i}(x+1)^{1 / a_{i}} \leqslant x+a_{i} .
\]
Since \(x+1 > 1\), the inequality is strict for \(a_{i} > 1\).
Multiplying the inequalities (1) for \(i=1,2, \ldots, n\) yields
\[
\prod_{i=1}^{n} a_{i}(x+1)^{1 / a_{i}} \leqslant \prod_{i=1}^{n}\left(x+a_{i}\right) \Longleftrightarrow M(x+1)^{\sum_{i=1}^{n} 1 / a_{i}}-\prod_{i=1}^{n}\left(x+a_{i}\right) \leqslant 0 \Longleftrightarrow P(x) \leqslant 0
\]
with equality iff \(a_{i}=1\) for all \(i \in\{1,2, \ldots, n\}\). But this implies \(M=1\), which is not possible. Hence \(P(x) < 0\) for all \(x \in \mathbb{R}^{+}\), and \(P\) has no positive roots.
