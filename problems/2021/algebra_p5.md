---
id: fimo_2021_algebra_p5
year: 2021
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2021 Algebra Problem 5"
---

Let \(n \geqslant 2\) be an integer, and let \(a_{1}, a_{2}, \ldots, a_{n}\) be positive real numbers such that \(a_{1}+a_{2}+\cdots+a_{n}=1\). Prove that
\[
\sum_{k=1}^{n} \frac{a_{k}}{1-a_{k}}\left(a_{1}+a_{2}+\cdots+a_{k-1}\right)^{2} < \frac{1}{3} .
\]

---
For all \(k \leqslant n\), let
\[
s_{k}=a_{1}+a_{2}+\cdots+a_{k} \quad \text { and } \quad b_{k}=\frac{a_{k} s_{k-1}^{2}}{1-a_{k}},
\]
with the convention that \(s_{0}=0\). Note that \(b_{k}\) is exactly a summand in the sum we need to estimate. We shall prove the inequality
\[
b_{k} < \frac{s_{k}^{3}-s_{k-1}^{3}}{3}
\]
Indeed, it suffices to check that
\[
\begin{aligned}
(1) & \Longleftrightarrow 0 < \left(1-a_{k}\right)\left(\left(s_{k-1}+a_{k}\right)^{3}-s_{k-1}^{3}\right)-3 a_{k} s_{k-1}^{2} \\
& \Longleftrightarrow 0 < \left(1-a_{k}\right)\left(3 s_{k-1}^{2}+3 s_{k-1} a_{k}+a_{k}^{2}\right)-3 s_{k-1}^{2} \\
& \Longleftrightarrow 0 < -3 a_{k} s_{k-1}^{2}+3\left(1-a_{k}\right) s_{k-1} a_{k}+\left(1-a_{k}\right) a_{k}^{2} \\
& \Longleftrightarrow 0 < 3\left(1-a_{k}-s_{k-1}\right) s_{k-1} a_{k}+\left(1-a_{k}\right) a_{k}^{2}
\end{aligned}
\]
which holds since \(a_{k}+s_{k-1}=s_{k} \leqslant 1\) and \(a_{k} \in(0,1)\).
Thus, adding inequalities (1) for \(k=1, \ldots, n\), we conclude that
\[
b_{1}+b_{2}+\cdots+b_{n} < \frac{s_{n}^{3}-s_{0}^{3}}{3}=\frac{1}{3},
\]
as desired.
