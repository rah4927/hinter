---
id: fimo_2010_algebra_p8
year: 2010
number: 8
difficulty: medium
topics: ["algebra"]
source: "IMO 2010 Algebra Problem 8"
---

Given six positive numbers \(a, b, c, d, e, f\) such that \(a < b < c < d < e < f\). Let \(a+c+e=S\) and \(b+d+f=T\). Prove that

\[
2 S T > \sqrt{3(S+T)(S(b d+b f+d f)+T(a c+a e+c e))} .
\]

---
We define also \(\sigma=a c+c e+a e, \tau=b d+b f+d f\). The idea of the solution is to interpret (1) as a natural inequality on the roots of an appropriate polynomial.

Actually, consider the polynomial

\[
\begin{aligned}
P(x)=(b+d+f)(x & -a)(x-c)(x-e)+(a+c+e)(x-b)(x-d)(x-f) \\
& =T\left(x^{3}-S x^{2}+\sigma x-a c e\right)+S\left(x^{3}-T x^{2}+\tau x-b d f\right) .
\end{aligned}
\]

Surely, \(P\) is cubic with leading coefficient \(S+T > 0\). Moreover, we have

\[
\begin{array}{ll}
P(a)=S(a-b)(a-d)(a-f) < 0, & P(c)=S(c-b)(c-d)(c-f) > 0 \\
P(e)=S(e-b)(e-d)(e-f) < 0, & P(f)=T(f-a)(f-c)(f-e) > 0
\end{array}
\]

Hence, each of the intervals \((a, c),(c, e),(e, f)\) contains at least one root of \(P(x)\). Since there are at most three roots at all, we obtain that there is exactly one root in each interval (denote them by \(\alpha \in(a, c), \beta \in(c, e), \gamma \in(e, f))\). Moreover, the polynomial \(P\) can be factorized as

\[
P(x)=(T+S)(x-\alpha)(x-\beta)(x-\gamma) .
\]

Equating the coefficients in the two representations (2) and (3) of \(P(x)\) provides

\[
\alpha+\beta+\gamma=\frac{2 T S}{T+S}, \quad \alpha \beta+\alpha \gamma+\beta \gamma=\frac{S \tau+T \sigma}{T+S}
\]

Now, since the numbers \(\alpha, \beta, \gamma\) are distinct, we have

\[
0 < (\alpha-\beta)^{2}+(\alpha-\gamma)^{2}+(\beta-\gamma)^{2}=2(\alpha+\beta+\gamma)^{2}-6(\alpha \beta+\alpha \gamma+\beta \gamma)
\]

which implies

or

\[
\frac{4 S^{2} T^{2}}{(T+S)^{2}}=(\alpha+\beta+\gamma)^{2} > 3(\alpha \beta+\alpha \gamma+\beta \gamma)=\frac{3(S \tau+T \sigma)}{T+S}
\]

\[
4 S^{2} T^{2} > 3(T+S)(T \sigma+S \tau)
\]

which is exactly what we need.
