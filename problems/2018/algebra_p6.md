---
id: fimo_2018_algebra_p6
year: 2018
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2018 Algebra Problem 6"
---

Let \(m, n \geqslant 2\) be integers. Let \(f\left(x_{1}, \ldots, x_{n}\right)\) be a polynomial with real coefficients such that

\[
f\left(x_{1}, \ldots, x_{n}\right)=\left\lfloor\frac{x_{1}+\ldots+x_{n}}{m}\right\rfloor \quad \text { for every } x_{1}, \ldots, x_{n} \in\{0,1, \ldots, m-1\} .
\]

Prove that the total degree of \(f\) is at least \(n\).

---
We transform the problem to a single variable question by the following

Lemma . Let \(a_{1}, \ldots, a_{n}\) be nonnegative integers and let \(G(x)\) be a nonzero polynomial with \(\operatorname{deg} G \leqslant a_{1}+\ldots+a_{n}\). Suppose that some polynomial \(F\left(x_{1}, \ldots, x_{n}\right)\) satisfies

\[
F\left(x_{1}, \ldots, x_{n}\right)=G\left(x_{1}+\ldots+x_{n}\right) \text { for }\left(x_{1}, \ldots, x_{n}\right) \in\left\{0,1, \ldots, a_{1}\right\} \times \ldots \times\left\{0,1, \ldots, a_{n}\right\} .
\]

Then \(F\) cannot be the zero polynomial, and \(\operatorname{deg} F \geqslant \operatorname{deg} G\).

For proving the lemma, we will use forward differences of polynomials. If \(p(x)\) is a polynomial with a single variable, then define \((\Delta p)(x)=p(x+1)-p(x)\). It is well-known that if \(p\) is a nonconstant polynomial then \(\operatorname{deg} \Delta p=\operatorname{deg} p-1\).

If \(p\left(x_{1}, \ldots, x_{n}\right)\) is a polynomial with \(n\) variables and \(1 \leqslant k \leqslant n\) then let

\[
\left(\Delta_{k} p\right)\left(x_{1}, \ldots, x_{n}\right)=p\left(x_{1}, \ldots, x_{k-1}, x_{k}+1, x_{k+1}, \ldots, x_{n}\right)-p\left(x_{1}, \ldots, x_{n}\right) .
\]

It is also well-known that either \(\Delta_{k} p\) is the zero polynomial or \(\operatorname{deg}\left(\Delta_{k} p\right) \leqslant \operatorname{deg} p-1\).

Proof of the lemma. We apply induction on the degree of \(G\). If \(G\) is a constant polynomial then we have \(F(0, \ldots, 0)=G(0) \neq 0\), so \(F\) cannot be the zero polynomial.

Suppose that \(\operatorname{deg} G \geqslant 1\) and the lemma holds true for lower degrees. Since \(a_{1}+\ldots+a_{n} \geqslant\) \(\operatorname{deg} G > 0\), at least one of \(a_{1}, \ldots, a_{n}\) is positive; without loss of generality suppose \(a_{1} \geqslant 1\).

Consider the polynomials \(F_{1}=\Delta_{1} F\) and \(G_{1}=\Delta G\). On the grid \(\left\{0, \ldots, a_{1}-1\right\} \times\left\{0, \ldots, a_{2}\right\} \times\) \(\ldots \times\left\{0, \ldots, a_{n}\right\}\) we have

\[
\begin{aligned}
F_{1}\left(x_{1}, \ldots, x_{n}\right) & =F\left(x_{1}+1, x_{2}, \ldots, x_{n}\right)-F\left(x_{1}, x_{2}, \ldots, x_{n}\right)= \\
& =G\left(x_{1}+\ldots+x_{n}+1\right)-G\left(x_{1}+\ldots+x_{n}\right)=G_{1}\left(x_{1}+\ldots+x_{n}\right) .
\end{aligned}
\]

Since \(G\) is nonconstant, we have \(\operatorname{deg} G_{1}=\operatorname{deg} G-1 \leqslant\left(a_{1}-1\right)+a_{2}+\ldots+a_{n}\). Therefore we can apply the induction hypothesis to \(F_{1}\) and \(G_{1}\) and conclude that \(F_{1}\) is not the zero polynomial and \(\operatorname{deg} F_{1} \geqslant \operatorname{deg} G_{1}\). Hence, \(\operatorname{deg} F \geqslant \operatorname{deg} F_{1}+1 \geqslant \operatorname{deg} G_{1}+1=\operatorname{deg} G\). That finishes the proof.

To prove the problem statement, take the unique polynomial \(g(x)\) so that \(g(x)=\left\lfloor\frac{x}{m}\right\rfloor\) for \(x \in\{0,1, \ldots, n(m-1)\}\) and \(\operatorname{deg} g \leqslant n(m-1)\). Notice that precisely \(n(m-1)+1\) values of \(g\) are prescribed, so \(g(x)\) indeed exists and is unique. Notice further that the constraints \(g(0)=g(1)=0\) and \(g(m)=1\) together enforce \(\operatorname{deg} g \geqslant 2\).

By applying the lemma to \(a_{1}=\ldots=a_{n}=m-1\) and the polynomials \(f\) and \(g\), we achieve \(\operatorname{deg} f \geqslant \operatorname{deg} g\). Hence we just need a suitable lower bound on \(\operatorname{deg} g\).

Consider the polynomial \(h(x)=g(x+m)-g(x)-1\). The degree of \(g(x+m)-g(x)\) is \(\operatorname{deg} g-1 \geqslant 1\), so \(\operatorname{deg} h=\operatorname{deg} g-1 \geqslant 1\), and therefore \(h\) cannot be the zero polynomial. On the other hand, \(h\) vanishes at the points \(0,1, \ldots, n(m-1)-m\), so \(h\) has at least \((n-1)(m-1)\) roots. Hence,

\[
\operatorname{deg} f \geqslant \operatorname{deg} g=\operatorname{deg} h+1 \geqslant(n-1)(m-1)+1 \geqslant n
\]
