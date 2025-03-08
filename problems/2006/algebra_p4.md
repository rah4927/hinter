---
id: fimo_2006_algebra_p4
year: 2006
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2006 Algebra Problem 4"
---

Prove the inequality

\[
\sum_{i < j} \frac{a_{i} a_{j}}{a_{i}+a_{j}} \leq \frac{n}{2\left(a_{1}+a_{2}+\cdots+a_{n}\right)} \sum_{i < j} a_{i} a_{j}
\]

for positive real numbers \(a_{1}, a_{2}, \ldots, a_{n}\).

---
Let \(S=\sum_{i} a_{i}\). Denote by \(L\) and \(R\) the expressions on the left and right hand side of the proposed inequality. We transform \(L\) and \(R\) using the identity

\[
\sum_{i < j}\left(a_{i}+a_{j}\right)=(n-1) \sum_{i} a_{i} .
\]

And thus:

\[
L=\sum_{i < j} \frac{a_{i} a_{j}}{a_{i}+a_{j}}=\sum_{i < j} \frac{1}{4}\left(a_{i}+a_{j}-\frac{\left(a_{i}-a_{j}\right)^{2}}{a_{i}+a_{j}}\right)=\frac{n-1}{4} \cdot S-\frac{1}{4} \sum_{i < j} \frac{\left(a_{i}-a_{j}\right)^{2}}{a_{i}+a_{j}} .
\]

To represent \(R\) we express the sum \(\sum_{i < j} a_{i} a_{j}\) in two ways; in the second transformation identity (1) will be applied to the squares of the numbers \(a_{i}\) :

\[
\begin{gathered}
\sum_{i < j} a_{i} a_{j}=\frac{1}{2}\left(S^{2}-\sum_{i} a_{i}^{2}\right) ; \\
\sum_{i < j} a_{i} a_{j}=\frac{1}{2} \sum_{i < j}\left(a_{i}^{2}+a_{j}^{2}-\left(a_{i}-a_{j}\right)^{2}\right)=\frac{n-1}{2} \cdot \sum_{i} a_{i}^{2}-\frac{1}{2} \sum_{i < j}\left(a_{i}-a_{j}\right)^{2} .
\end{gathered}
\]

Multiplying the first of these equalities by \(n-1\) and adding the second one we obtain

\[
n \sum_{i < j} a_{i} a_{j}=\frac{n-1}{2} \cdot S^{2}-\frac{1}{2} \sum_{i < j}\left(a_{i}-a_{j}\right)^{2} .
\]

Hence

\[
R=\frac{n}{2 S} \sum_{i < j} a_{i} a_{j}=\frac{n-1}{4} \cdot S-\frac{1}{4} \sum_{i < j} \frac{\left(a_{i}-a_{j}\right)^{2}}{S}
\]

Now compare (2) and (3). Since \(S \geq a_{i}+a_{j}\) for any \(i < j\), the claim \(L \geq R\) results.
