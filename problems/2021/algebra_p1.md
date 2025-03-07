---
id: fimo_2021_algebra_p1
year: 2021
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2021 Algebra Problem 1"
---

Let \(n\) be an integer, and let \(A\) be a subset of \(\left\{0,1,2,3, \ldots, 5^{n}\right\}\) consisting of \(4 n+2\) numbers. Prove that there exist \(a, b, c \in A\) such that \(a < b < c\) and \(c+2 a > 3 b\).

---
(By contradiction) Suppose that there exist \(4 n+2\) non-negative integers \(x_{0} < \) \(x_{1} < \cdots < x_{4 n+1}\) that violate the problem statement. Then in particular \(x_{4 n+1}+2 x_{i} \leqslant 3 x_{i+1}\) for all \(i=0, \ldots, 4 n-1\), which gives
\[
x_{4 n+1}-x_{i} \geqslant \frac{3}{2}\left(x_{4 n+1}-x_{i+1}\right)
\]
By a trivial induction we then get
\[
x_{4 n+1}-x_{i} \geqslant\left(\frac{3}{2}\right)^{4 n-i}\left(x_{4 n+1}-x_{4 n}\right)
\]
which for \(i=0\) yields the contradiction
\[
x_{4 n+1}-x_{0} \geqslant\left(\frac{3}{2}\right)^{4 n}\left(x_{4 n+1}-x_{4 n}\right)=\left(\frac{81}{16}\right)^{n}\left(x_{4 n+1}-x_{4 n}\right) > 5^{n} \cdot 1 .
\]
