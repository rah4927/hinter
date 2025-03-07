---
id: fimo_2018_algebra_p1
year: 2018
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2018 Algebra Problem 1"
---

Let \(\mathbb{Q}_{ > 0}\) denote the set of all positive rational numbers. Determine all functions \(f: \mathbb{Q} > 0 \rightarrow \mathbb{Q} > 0\) satisfying
\[
f\left(x^{2} f(y)^{2}\right)=f(x)^{2} f(y)
\]
for all \(x, y \in \mathbb{Q} > 0\).


---
Take any \(a, b \in \mathbb{Q}_{ > 0}\). By substituting \(x=f(a), y=b\) and \(x=f(b), y=a\) into \((* )\) we get

\[
f(f(a))^{2} f(b)=f\left(f(a)^{2} f(b)^{2}\right)=f(f(b))^{2} f(a)
\]
which yields
\[
\frac{f(f(a))^{2}}{f(a)}=\frac{f(f(b))^{2}}{f(b)} \quad \text { for all } a, b \in \mathbb{Q}_{ > 0} .
\]
In other words, this shows that there exists a constant \(C \in \mathbb{Q}_{ > 0}\) such that \(f(f(a))^{2}=C f(a)\), or
\[
\left(\frac{f(f(a))}{C}\right)^{2}=\frac{f(a)}{C} \quad \text { for all } a \in \mathbb{Q} > 0 .
\]
Denote by \(f^{n}(x)=\underbrace{f(f(\ldots(f}_{n}(x)) \ldots))\) the \(n^{\text {th }}\) iteration of \(f\). Equality (1) yields
\[
\frac{f(a)}{C}=\left(\frac{f^{2}(a)}{C}\right)^{2}=\left(\frac{f^{3}(a)}{C}\right)^{4}=\cdots=\left(\frac{f^{n+1}(a)}{C}\right)^{2^{n}}
\]
for all positive integer \(n\). So, \(f(a) / C\) is the \(2^{n}\)-th power of a rational number for all positive integer \(n\). This is impossible unless \(f(a) / C=1\), since otherwise the exponent of some prime in the prime decomposition of \(f(a) / C\) is not divisible by sufficiently large powers of 2 . Therefore, \(f(a)=C\) for all \(a \in \mathbb{Q} > 0\).
Finally, after substituting \(f \equiv C\) into \((* )\) we get \(C=C^{3}\), whence \(C=1\). So \(f(x) \equiv 1\) is the unique function satisfying \((* )\).
