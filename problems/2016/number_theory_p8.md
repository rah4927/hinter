---
id: fimo_2016_number_theory_p8
year: 2016
number: 8
difficulty: medium
topics: ["number theory"]
source: "IMO 2016 Number Theory Problem 8"
---

Find all polynomials \(P(x)\) of odd degree \(d\) and with integer coefficients satisfying the following property: for each positive integer \(n\), there exist \(n\) positive integers \(x_{1}, x_{2}, \ldots, x_{n}\) such that \(\frac{1}{2} < \frac{P\left(x_{i}\right)}{P\left(x_{j}\right)} < 2\) and \(\frac{P\left(x_{i}\right)}{P\left(x_{j}\right)}\) is the \(d\)-th power of a rational number for every pair of indices \(i\) and \(j\) with \(1 \leqslant i, j \leqslant n\).


---
Let \(P(x)=a_{d} x^{d}+a_{d-1} x^{d-1}+\cdots+a_{0}\). Consider the substitution \(y=d a_{d} x+a_{d-1}\). By defining \(Q(y)=P(x)\), we find that \(Q\) is a polynomial with rational coefficients without the term \(y^{d-1}\). Let \(Q(y)=b_{d} y^{d}+b_{d-2} y^{d-2}+b_{d-3} y^{d-3}+\cdots+b_{0}\) and \(B=\max _{0 \leqslant i \leqslant d}\left\{\left|b_{i}\right|\right\}\) (where \(b_{d-1}=0\) ).
The condition shows that for each \(n \geqslant 1\), there exist integers \(y_{1}, y_{2}, \ldots, y_{n}\) such that \(\frac{1}{2} < \frac{Q\left(y_{i}\right)}{Q\left(y_{j}\right)} < 2\) and \(\frac{Q\left(y_{i}\right)}{Q\left(y_{j}\right)}\) is the \(d\)-th power of a rational number for \(1 \leqslant i, j \leqslant n\). Since \(n\) can be arbitrarily large, we may assume all \(x_{i}\) 's and hence \(y_{i}\) 's are integers larger than some absolute constant in the following.
By Dirichlet's Theorem, since \(d\) is odd, we can find a sufficiently large prime \(p\) such that \(p \equiv 2(\bmod d)\). In particular, we have \((p-1, d)=1\). For this fixed \(p\), we choose \(n\) to be sufficiently large. Then by the Pigeonhole Principle, there must be \(d+1\) of \(y_{1}, y_{2}, \ldots, y_{n}\) which are congruent \(\bmod p\). Without loss of generality, assume \(y_{i} \equiv y_{j}(\bmod p)\) for \(1 \leqslant i, j \leqslant d+1\). We shall establish the following.

*  Claim. \(\frac{Q\left(y_{i}\right)}{Q\left(y_{1}\right)}=\frac{y_{i}^{d}}{y_{1}^{d}}\) for \(2 \leqslant i \leqslant d+1\).

Proof. Let \(\frac{Q\left(y_{i}\right)}{Q\left(y_{1}\right)}=\frac{l^{d}}{m^{d}}\) where \((l, m)=1\) and \(l, m > 0\). This can be rewritten in the expanded form
\[
b_{d}\left(m^{d} y_{i}^{d}-l^{d} y_{1}^{d}\right)=-\sum_{j=0}^{d-2} b_{j}\left(m^{d} y_{i}^{j}-l^{d} y_{1}^{j}\right) .
\]
Let \(c\) be the common denominator of \(Q\), so that \(c Q(k)\) is an integer for any integer \(k\). Note that \(c\) depends only on \(P\) and so we may assume \((p, c)=1\). Then \(y_{1} \equiv y_{i}(\bmod p)\) implies \(c Q\left(y_{1}\right) \equiv c Q\left(y_{i}\right)(\bmod p)\).

* Case 1. \(p \mid c Q\left(y_{1}\right)\).

In this case, there is a cancellation of \(p\) in the numerator and denominator of \(\frac{c Q\left(y_{i}\right)}{c Q\left(y_{1}\right)}\), so that \(m^{d} \leqslant p^{-1}\left|c Q\left(y_{1}\right)\right|\). Noting \(\left|Q\left(y_{1}\right)\right| < 2 B y_{1}^{d}\) as \(y_{1}\) is large, we get
\[
m \leqslant p^{-\frac{1}{d}}(2 c B)^{\frac{1}{d}} y_{1} .
\]
For large \(y_{1}\) and \(y_{i}\), the relation \(\frac{1}{2} < \frac{Q\left(y_{i}\right)}{Q\left(y_{1}\right)} < 2\) implies
\[
\frac{1}{3} < \frac{y_{i}^{d}}{y_{1}^{d}} < 3
\]
We also have
\[
\frac{1}{2} < \frac{l^{d}}{m^{d}} < 2
\]
Now, the left-hand side of \((1)\) is
\[
b_{d}\left(m y_{i}-l y_{1}\right)\left(m^{d-1} y_{i}^{d-1}+m^{d-2} y_{i}^{d-2} l y_{1}+\cdots+l^{d-1} y_{1}^{d-1}\right)
\]
Suppose on the contrary that \(m y_{i}-l y_{1} \neq 0\). Then the absolute value of the above expression is at least \(\left|b_{d}\right| m^{d-1} y_{i}^{d-1}\). On the other hand, the absolute value of the right-hand side of (1) is at most
\[
\begin{aligned}
\sum_{j=0}^{d-2} B\left(m^{d} y_{i}^{j}+l^{d} y_{1}^{j}\right) & \leqslant(d-1) B\left(m^{d} y_{i}^{d-2}+l^{d} y_{1}^{d-2}\right) \\
& \leqslant(d-1) B\left(7 m^{d} y_{i}^{d-2}\right) \\
& \leqslant 7(d-1) B\left(p^{-\frac{1}{d}}(2 c B)^{\frac{1}{d}} y_{1}\right) m^{d-1} y_{i}^{d-2} \\
& \leqslant 21(d-1) B p^{-\frac{1}{d}}(2 c B)^{\frac{1}{d}} m^{d-1} y_{i}^{d-1}
\end{aligned}
\]
by using successively (3), (4), (2) and again (3). This shows
\[
\left|b_{d}\right| m^{d-1} y_{i}^{d-1} \leqslant 21(d-1) B p^{-\frac{1}{d}}(2 c B)^{\frac{1}{d}} m^{d-1} y_{i}^{d-1}
\]
which is a contradiction for large \(p\) as \(b_{d}, B, c, d\) depend only on the polynomial \(P\). Therefore, we have \(m y_{i}-l y_{1}=0\) in this case.

* Case 2. \(\left(p, c Q\left(y_{1}\right)\right)=1\).

From \(c Q\left(y_{1}\right) \equiv c Q\left(y_{i}\right)(\bmod p)\), we have \(l^{d} \equiv m^{d}(\bmod p)\). Since \((p-1, d)=1\), we use Fermat Little Theorem to conclude \(l \equiv m(\bmod p)\). Then \(p \mid m y_{i}-l y_{1}\). Suppose on the contrary that \(m y_{i}-l y_{1} \neq 0\). Then the left-hand side of (1) has absolute value at least \(\left|b_{d}\right| p m^{d-1} y_{i}^{d-1}\). Similar to Case 1 , the right-hand side of (1) has absolute value at most
\[
21(d-1) B(2 c B)^{\frac{1}{d}} m^{d-1} y_{i}^{d-1}
\]
which must be smaller than \(\left|b_{d}\right| p m^{d-1} y_{i}^{d-1}\) for large \(p\). Again this yields a contradiction and hence \(m y_{i}-l y_{1}=0\).
In both cases, we find that \(\frac{Q\left(y_{i}\right)}{Q\left(y_{1}\right)}=\frac{l^{d}}{m^{d}}=\frac{y_{i}^{d}}{y_{1}^{d}}\).
From the Claim, the polynomial \(Q\left(y_{1}\right) y^{d}-y_{1}^{d} Q(y)\) has roots \(y=y_{1}, y_{2}, \ldots, y_{d+1}\). Since its degree is at most \(d\), this must be the zero polynomial. Hence, \(Q(y)=b_{d} y^{d}\). This implies \(P(x)=a_{d}\left(x+\frac{a_{d-1}}{d a_{d}}\right)^{d}\). Let \(\frac{a_{d-1}}{d a_{d}}=\frac{s}{r}\) with integers \(r, s\) where \(r \geqslant 1\) and \((r, s)=1\). Since \(P\) has integer coefficients, we need \(r^{d} \mid a_{d}\). Let \(a_{d}=r^{d} a\). Then \(P(x)=a(r x+s)^{d}\). It is obvious that such a polynomial satisfies the conditions.
