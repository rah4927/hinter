---
id: fimo_2014_algebra_p4
year: 2014
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2014 Algebra Problem 4"
---

Determine all functions \(f: \mathbb{Z} \rightarrow \mathbb{Z}\) satisfying
\[
f(f(m)+n)+f(m)=f(n)+f(3 m)+2014
\]
for all integers \(m\) and \(n\).


---
Let \(f\) be a function satisfying (1). Set \(C=1007\) and define the function \(g: \mathbb{Z} \rightarrow \mathbb{Z}\) by \(g(m)=f(3 m)-f(m)+2 C\) for all \(m \in \mathbb{Z}\); in particular, \(g(0)=2 C\). Now (1) rewrites as
\[
f(f(m)+n)=g(m)+f(n)
\]
for all \(m, n \in \mathbb{Z}\). By induction in both directions it follows that
\[
f(t f(m)+n)=\operatorname{tg}(m)+f(n)
\]
holds for all \(m, n, t \in \mathbb{Z}\). Applying this, for any \(r \in \mathbb{Z}\), to the triples \((r, 0, f(0))\) and \((0,0, f(r))\) in place of \((m, n, t)\) we obtain
\[
f(0) g(r)=f(f(r) f(0))-f(0)=f(r) g(0) .
\]
Now if \(f(0)\) vanished, then \(g(0)=2 C > 0\) would entail that \(f\) vanishes identically, contrary to (1). Thus \(f(0) \neq 0\) and the previous equation yields \(g(r)=\alpha f(r)\), where \(\alpha=\frac{g(0)}{f(0)}\) is some nonzero constant.
So the definition of \(g\) reveals \(f(3 m)=(1+\alpha) f(m)-2 C\), i.e.,
\[
f(3 m)-\beta=(1+\alpha)(f(m)-\beta)
\]
for all \(m \in \mathbb{Z}\), where \(\beta=\frac{2 C}{\alpha}\). By induction on \(k\) this implies
\[
f\left(3^{k} m\right)-\beta=(1+\alpha)^{k}(f(m)-\beta)
\]
for all integers \(k \geqslant 0\) and \(m\).
Since \(3 \nmid 2014\), there exists by (1) some value \(d=f(a)\) attained by \(f\) that is not divisible by 3 . Now by \((2)\) we have \(f(n+t d)=f(n)+t g(a)=f(n)+\alpha \cdot t f(a)\), i.e.,
\[
f(n+t d)=f(n)+\alpha \cdot t d
\]
for all \(n, t \in \mathbb{Z}\).
Let us fix any positive integer \(k\) with \(d \mid\left(3^{k}-1\right)\), which is possible, since \(\operatorname{gcd}(3, d)=1\). E.g., by the EuleR-Fermat theorem, we may take \(k=\varphi(|d|)\). Now for each \(m \in \mathbb{Z}\) we get
\[
f\left(3^{k} m\right)=f(m)+\alpha\left(3^{k}-1\right) m
\]
from (5), which in view of (4) yields \(\left((1+\alpha)^{k}-1\right)(f(m)-\beta)=\alpha\left(3^{k}-1\right) m\). Since \(\alpha \neq 0\), the right hand side does not vanish for \(m \neq 0\), wherefore the first factor on the left hand side cannot vanish either. It follows that
\[
f(m)=\frac{\alpha\left(3^{k}-1\right)}{(1+\alpha)^{k}-1} \cdot m+\beta .
\]
So \(f\) is a linear function, say \(f(m)=A m+\beta\) for all \(m \in \mathbb{Z}\) with some constant \(A \in \mathbb{Q}\). Plugging this into \((1)\) one obtains \(\left(A^{2}-2 A\right) m+(A \beta-2 C)=0\) for all \(m\), which is equivalent to the conjunction of
\[
A^{2}=2 A \quad \text { and } \quad A \beta=2 C .
\]
The first equation is equivalent to \(A \in\{0,2\}\), and as \(C \neq 0\) the second one gives
\[
A=2 \quad \text { and } \quad \beta=C .
\]
This shows that \(f\) is indeed the function mentioned in the answer and as the numbers found in (7) do indeed satisfy the equations (6) this function is indeed as desired.
