---
id: fimo_2016_number_theory_p5
year: 2016
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2016 Number Theory Problem 5"
---

Let \(a\) be a positive integer which is not a square number. Denote by \(A\) the set of all positive integers \(k\) such that

\[
k=\frac{x^{2}-a}{x^{2}-y^{2}}
\]

for some integers \(x\) and \(y\) with \(x > \sqrt{a}\). Denote by \(B\) the set of all positive integers \(k\) such that (1) is satisfied for some integers \(x\) and \(y\) with \(0 \leqslant x < \sqrt{a}\). Prove that \(A=B\).

---
We first prove the following preliminary result.

\begin{itemize}
  \item Claim. For fixed \(k\), let \(x, y\) be integers satisfying (1). Then the numbers \(x_{1}, y_{1}\) defined by
\end{itemize}

\[
x_{1}=\frac{1}{2}\left(x-y+\frac{(x-y)^{2}-4 a}{x+y}\right), \quad y_{1}=\frac{1}{2}\left(x-y-\frac{(x-y)^{2}-4 a}{x+y}\right)
\]

are integers and satisfy (1) (with \(x, y\) replaced by \(x_{1}, y_{1}\) respectively).

Proof. Since \(x_{1}+y_{1}=x-y\) and

\[
x_{1}=\frac{x^{2}-x y-2 a}{x+y}=-x+\frac{2\left(x^{2}-a\right)}{x+y}=-x+2 k(x-y),
\]

both \(x_{1}\) and \(y_{1}\) are integers. Let \(u=x+y\) and \(v=x-y\). The relation (1) can be rewritten as

\[
u^{2}-(4 k-2) u v+\left(v^{2}-4 a\right)=0
\]

By Vieta's Theorem, the number \(z=\frac{v^{2}-4 a}{u}\) satisfies

\[
v^{2}-(4 k-2) v z+\left(z^{2}-4 a\right)=0
\]

Since \(x_{1}\) and \(y_{1}\) are defined so that \(v=x_{1}+y_{1}\) and \(z=x_{1}-y_{1}\), we can reverse the process and verify (1) for \(x_{1}, y_{1}\)

We first show that \(B \subset A\). Take any \(k \in B\) so that (1) is satisfied for some integers \(x, y\) with \(0 \leqslant x < \sqrt{a}\). Clearly, \(y \neq 0\) and we may assume \(y\) is positive. Since \(a\) is not a square, we have \(k > 1\). Hence, we get \(0 \leqslant x < y < \sqrt{a}\). Define

\[
x_{1}=\frac{1}{2}\left|x-y+\frac{(x-y)^{2}-4 a}{x+y}\right|, \quad y_{1}=\frac{1}{2}\left(x-y-\frac{(x-y)^{2}-4 a}{x+y}\right) .
\]

By the Claim, \(x_{1}, y_{1}\) are integers satisfying (1). Also, we have

\[
x_{1} \geqslant-\frac{1}{2}\left(x-y+\frac{(x-y)^{2}-4 a}{x+y}\right)=\frac{2 a+x(y-x)}{x+y} \geqslant \frac{2 a}{x+y} > \sqrt{a} .
\]

This implies \(k \in A\) and hence \(B \subset A\). Next, we shall show that \(A \subset B\). Take any \(k \in A\) so that (1) is satisfied for some integers \(x, y\) with \(x > \sqrt{a}\). Again, we may assume \(y\) is positive. Among all such representations of \(k\), we choose the one with smallest \(x+y\). Define

\[
x_{1}=\frac{1}{2}\left|x-y+\frac{(x-y)^{2}-4 a}{x+y}\right|, \quad y_{1}=\frac{1}{2}\left(x-y-\frac{(x-y)^{2}-4 a}{x+y}\right) .
\]

By the Claim, \(x_{1}, y_{1}\) are integers satisfying (1). Since \(k > 1\), we get \(x > y > \sqrt{a}\). Therefore, we have \(y_{1} > \frac{4 a}{x+y} > 0\) and \(\frac{4 a}{x+y}<x+y\). It follows that

\[
x_{1}+y_{1} \leqslant \max \left\{x-y, \frac{4 a-(x-y)^{2}}{x+y}\right\}<x+y
\]

If \(x_{1} > \sqrt{a}\), we get a contradiction due to the minimality of \(x+y\). Therefore, we must have \(0 \leqslant x_{1} < \sqrt{a}\), which means \(k \in B\) so that \(A \subset B\).

The two subset relations combine to give \(A=B\).
