---
id: fimo_2012_algebra_p3
year: 2012
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2012 Algebra Problem 3"
---

Let \(a_{2}, \ldots, a_{n}\) be \(n-1\) positive real numbers, where \(n \geq 3\), such that \(a_{2} a_{3} \cdots a_{n}=1\). Prove that
\[
\left(1+a_{2}\right)^{2}\left(1+a_{3}\right)^{3} \cdots\left(1+a_{n}\right)^{n} > n^{n} .
\]

---
The substitution \(a_{2}=\frac{x_{2}}{x_{1}}, a_{3}=\frac{x_{3}}{x_{2}}, \ldots, a_{n}=\frac{x_{1}}{x_{n-1}}\) transforms the original problem into the inequality
\[
\left(x_{1}+x_{2}\right)^{2}\left(x_{2}+x_{3}\right)^{3} \cdots\left(x_{n-1}+x_{1}\right)^{n} > n^{n} x_{1}^{2} x_{2}^{3} \cdots x_{n-1}^{n}
\]
for all \(x_{1}, \ldots, x_{n-1} > 0\). To prove this, we use the AM-GM inequality for each factor of the left-hand side as follows:
\[
\begin{aligned}
& \left(x_{1}+x_{2}\right)^{2} \quad \geq 2^{2} x_{1} x_{2} \\
& \left(x_{2}+x_{3}\right)^{3}=\left(2\left(\frac{x_{2}}{2}\right)+x_{3}\right)^{3} \geq 3^{3}\left(\frac{x_{2}}{2}\right)^{2} x_{3} \\
& \left(x_{3}+x_{4}\right)^{4}=\left(3\left(\frac{x_{3}}{3}\right)+x_{4}\right)^{4} \geq 4^{4}\left(\frac{x_{3}}{3}\right)^{3} x_{4} \\
& \left(x_{n-1}+x_{1}\right)^{n}=\left((n-1)\left(\frac{x_{n-1}}{n-1}\right)+x_{1}\right)^{n} \geq n^{n}\left(\frac{x_{n-1}}{n-1}\right)^{n-1} x_{1} .
\end{aligned}
\]
Multiplying these inequalities together gives \(\left(^{* }\right)\), with inequality \(\operatorname{sign} \geq\) instead of \( > \). However for the equality to occur it is necessary that \(x_{1}=x_{2}, x_{2}=2 x_{3}, \ldots, x_{n-1}=(n-1) x_{1}\), implying \(x_{1}=(n-1) ! x_{1}\). This is impossible since \(x_{1} > 0\) and \(n \geq 3\). Therefore the inequality is strict.
