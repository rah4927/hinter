---
id: fimo_2007_algebra_p6
year: 2007
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2007 Algebra Problem 6"
---

Let \(a_{1}, a_{2}, \ldots, a_{100}\) be nonnegative real numbers such that \(a_{1}^{2}+a_{2}^{2}+\ldots+a_{100}^{2}=1\). Prove that

\[
a_{1}^{2} a_{2}+a_{2}^{2} a_{3}+\ldots+a_{100}^{2} a_{1} < \frac{12}{25} .
\]

---
Let \(S=\sum_{k=1}^{100} a_{k}^{2} a_{k+1}\). (As usual, we consider the indices modulo 100, e.g. we set \(a_{101}=a_{1}\) and \(\left.a_{102}=a_{2}.\right)\)

Applying the Cauchy-Schwarz inequality to sequences \(\left(a_{k+1}\right)\) and \(\left(a_{k}^{2}+2 a_{k+1} a_{k+2}\right)\), and then the AM-GM inequality to numbers \(a_{k+1}^{2}\) and \(a_{k+2}^{2}\),

\[
\begin{aligned}
(3 S)^{2} & =\left(\sum_{k=1}^{100} a_{k+1}\left(a_{k}^{2}+2 a_{k+1} a_{k+2}\right)\right)^{2} \leq\left(\sum_{k=1}^{100} a_{k+1}^{2}\right)\left(\sum_{k=1}^{100}\left(a_{k}^{2}+2 a_{k+1} a_{k+2}\right)^{2}\right) \\
& =1 \cdot \sum_{k=1}^{100}\left(a_{k}^{2}+2 a_{k+1} a_{k+2}\right)^{2}=\sum_{k=1}^{100}\left(a_{k}^{4}+4 a_{k}^{2} a_{k+1} a_{k+2}+4 a_{k+1}^{2} a_{k+2}^{2}\right) \\
& \leq \sum_{k=1}^{100}\left(a_{k}^{4}+2 a_{k}^{2}\left(a_{k+1}^{2}+a_{k+2}^{2}\right)+4 a_{k+1}^{2} a_{k+2}^{2}\right)=\sum_{k=1}^{100}\left(a_{k}^{4}+6 a_{k}^{2} a_{k+1}^{2}+2 a_{k}^{2} a_{k+2}^{2}\right)
\end{aligned}
\]

Applying the trivial estimates

\[
\sum_{k=1}^{100}\left(a_{k}^{4}+2 a_{k}^{2} a_{k+1}^{2}+2 a_{k}^{2} a_{k+2}^{2}\right) \leq\left(\sum_{k=1}^{100} a_{k}^{2}\right)^{2} \quad \text { and } \quad \sum_{k=1}^{100} a_{k}^{2} a_{k+1}^{2} \leq\left(\sum_{i=1}^{50} a_{2 i-1}^{2}\right)\left(\sum_{j=1}^{50} a_{2 j}^{2}\right)
\]

we obtain that

\[
(3 S)^{2} \leq\left(\sum_{k=1}^{100} a_{k}^{2}\right)^{2}+4\left(\sum_{i=1}^{50} a_{2 i-1}^{2}\right)\left(\sum_{j=1}^{50} a_{2 j}^{2}\right) \leq 1+\left(\sum_{i=1}^{50} a_{2 i-1}^{2}+\sum_{j=1}^{50} a_{2 j}^{2}\right)^{2}=2
\]

hence

\[
S \leq \frac{\sqrt{2}}{3} \approx 0.4714 < \frac{12}{25}=0.48 .
\]
