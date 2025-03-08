---
id: fimo_2013_algebra_p3
year: 2013
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2013 Algebra Problem 3"
---

Let \(\mathbb{Q}_{ > 0}\) be the set of positive rational numbers. Let \(f: \mathbb{Q}_{ > 0} \rightarrow \mathbb{R}\) be a function satisfying the conditions

\[
\begin{aligned}
& f(x) f(y) \geqslant f(x y), \\
& f(x+y) \geqslant f(x)+f(y)
\end{aligned}
\]

for all \(x, y \in \mathbb{Q}_{ > 0}\). Given that \(f(a)=a\) for some rational \(a > 1\), prove that \(f(x)=x\) for all \(x \in \mathbb{Q}_{ > 0}\).

---
Denote by \(\mathbb{Z}_{ > 0}\) the set of positive integers.

Plugging \(x=1, y=a\) into (1) we get \(f(1) \geqslant 1\). Next, by an easy induction on \(n\) we get from (2) that

\[
f(n x) \geqslant n f(x) \quad \text { for all } n \in \mathbb{Z}_{ > 0} \text { and } x \in \mathbb{Q}_{ > 0} \text {. }
\]

In particular, we have

\[
f(n) \geqslant n f(1) \geqslant n \text { for all } n \in \mathbb{Z}_{ > 0} \text {. }
\]

From (1) again we have \(f(m / n) f(n) \geqslant f(m)\), so \(f(q) > 0\) for all \(q \in \mathbb{Q} > 0\).

Now, (2) implies that \(f\) is strictly increasing; this fact together with (4) yields

\[
f(x) \geqslant f(\lfloor x\rfloor) \geqslant\lfloor x\rfloor > x-1 \quad \text { for all } x \geqslant 1 .
\]

By an easy induction we get from (1) that \(f(x)^{n} \geqslant f\left(x^{n}\right)\), so

\[
f(x)^{n} \geqslant f\left(x^{n}\right) > x^{n}-1 \Longrightarrow f(x) \geqslant \sqrt[n]{x^{n}-1} \text { for all } x > 1 \text { and } n \in \mathbb{Z}_{ > 0} .
\]

This yields

\[
f(x) \geqslant x \text { for every } x > 1 .
\]

(Indeed, if \(x > y > 1\) then \(x^{n}-y^{n}=(x-y)\left(x^{n-1}+x^{n-2} y+\cdots+y^{n}\right) > n(x-y)\), so for a large \(n\) we have \(x^{n}-1 > y^{n}\) and thus \(f(x) > y\).)

Now, (1) and (5) give \(a^{n}=f(a)^{n} \geqslant f\left(a^{n}\right) \geqslant a^{n}\), so \(f\left(a^{n}\right)=a^{n}\). Now, for \(x > 1\) let us choose \(n \in \mathbb{Z}_{ > 0}\) such that \(a^{n}-x > 1\). Then by (2) and (5) we get

\[
a^{n}=f\left(a^{n}\right) \geqslant f(x)+f\left(a^{n}-x\right) \geqslant x+\left(a^{n}-x\right)=a^{n}
\]

and therefore \(f(x)=x\) for \(x > 1\). Finally, for every \(x \in \mathbb{Q} > 0\) and every \(n \in \mathbb{Z}_{ > 0}\), from (1) and (3) we get

\[
n f(x)=f(n) f(x) \geqslant f(n x) \geqslant n f(x),
\]

which gives \(f(n x)=n f(x)\). Therefore \(f(m / n)=f(m) / n=m / n\) for all \(m, n \in \mathbb{Z}_{ > 0}\).
