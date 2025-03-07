---
id: fimo_2010_algebra_p5
year: 2010
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2010 Algebra Problem 5"
---

Denote by \(\mathbb{Q}^{+}\)the set of all positive rational numbers. Determine all functions \(f: \mathbb{Q}^{+} \rightarrow \mathbb{Q}^{+}\) which satisfy the following equation for all \(x, y \in \mathbb{Q}^{+}\):
\[
f\left(f(x)^{2} y\right)=x^{3} f(x y) .
\]


---
By substituting \(y=1\), we get
\[
f\left(f(x)^{2}\right)=x^{3} f(x) .
\]
Then, whenever \(f(x)=f(y)\), we have
\[
x^{3}=\frac{f\left(f(x)^{2}\right)}{f(x)}=\frac{f\left(f(y)^{2}\right)}{f(y)}=y^{3}
\]
which implies \(x=y\), so the function \(f\) is injective.
Now replace \(x\) by \(x y\) in \((2)\), and apply (1) twice, second time to \(\left(y, f(x)^{2}\right)\) instead of \((x, y)\) :
\[
f\left(f(x y)^{2}\right)=(x y)^{3} f(x y)=y^{3} f\left(f(x)^{2} y\right)=f\left(f(x)^{2} f(y)^{2}\right) .
\]
Since \(f\) is injective, we get
\[
\begin{aligned}
f(x y)^{2} & =f(x)^{2} f(y)^{2} \\
f(x y) & =f(x) f(y) .
\end{aligned}
\]
Therefore, \(f\) is multiplicative. This also implies \(f(1)=1\) and \(f\left(x^{n}\right)=f(x)^{n}\) for all integers \(n\).
Then the function equation (1) can be re-written as
\[
\begin{aligned}
f(f(x))^{2} f(y) & =x^{3} f(x) f(y), \\
f(f(x)) & =\sqrt{x^{3} f(x)}
\end{aligned}
\]
Let \(g(x)=x f(x)\). Then, by \((3)\), we have
\[
\begin{aligned}
g(g(x)) & =g(x f(x))=x f(x) \cdot f(x f(x))=x f(x)^{2} f(f(x))= \\
& =x f(x)^{2} \sqrt{x^{3} f(x)}=(x f(x))^{5 / 2}=(g(x))^{5 / 2}
\end{aligned}
\]
and, by induction,
\[
\underbrace{g(g(\ldots g}_{n+1}(x) \ldots))=(g(x))^{(5 / 2)^{n}}
\]
for every positive integer \(n\).
Consider (4) for a fixed \(x\). The left-hand side is always rational, so \((g(x))^{(5 / 2)^{n}}\) must be rational for every \(n\). We show that this is possible only if \(g(x)=1\). Suppose that \(g(x) \neq 1\), and let the prime factorization of \(g(x)\) be \(g(x)=p_{1}^{\alpha_{1}} \ldots p_{k}^{\alpha_{k}}\) where \(p_{1}, \ldots, p_{k}\) are distinct primes and \(\alpha_{1}, \ldots, \alpha_{k}\) are nonzero integers. Then the unique prime factorization of (4) is
\[
\underbrace{g(g(\ldots g}_{n+1}(x) \ldots))=(g(x))^{(5 / 2)^{n}}=p_{1}^{(5 / 2)^{n} \alpha_{1}} \cdots p_{k}^{(5 / 2)^{n} \alpha_{k}}
\]
where the exponents should be integers. But this is not true for large values of \(n\), for example \(\left(\frac{5}{2}\right)^{n} \alpha_{1}\) cannot be a integer number when \(2^{n} \backslash \alpha_{1}\). Therefore, \(g(x) \neq 1\) is impossible.
Hence, \(g(x)=1\) and thus \(f(x)=\frac{1}{x}\) for all \(x\).
The function \(f(x)=\frac{1}{x}\) satisfies the equation \((1)\) :
\[
f\left(f(x)^{2} y\right)=\frac{1}{f(x)^{2} y}=\frac{1}{\left(\frac{1}{x}\right)^{2} y}=\frac{x^{3}}{x y}=x^{3} f(x y) .
\]
