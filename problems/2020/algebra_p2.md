---
id: fimo_2020_algebra_p2
year: 2020
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2020 Algebra Problem 2"
---

Let \(\mathcal{A}\) denote the set of all polynomials in three variables \(x, y, z\) with integer coefficients. Let \(\mathcal{B}\) denote the subset of \(\mathcal{A}\) formed by all polynomials which can be expressed as
\[
(x+y+z) P(x, y, z)+(x y+y z+z x) Q(x, y, z)+x y z R(x, y, z)
\]
with \(P, Q, R \in \mathcal{A}\). Find the smallest non-negative integer \(n\) such that \(x^{i} y^{j} z^{k} \in \mathcal{B}\) for all nonnegative integers \(i, j, k\) satisfying \(i+j+k \geqslant n\).


---
We start by showing that \(n \leqslant 4\), i.e., any monomial \(f=x^{i} y^{j} z^{k}\) with \(i+j+k \geqslant 4\) belongs to \(\mathcal{B}\). Assume that \(i \geqslant j \geqslant k\), the other cases are analogous.
Let \(x+y+z=p, x y+y z+z x=q\) and \(x y z=r\). Then
\[
0=(x-x)(x-y)(x-z)=x^{3}-p x^{2}+q x-r
\]
therefore \(x^{3} \in \mathcal{B}\). Next, \(x^{2} y^{2}=x y q-(x+y) r \in \mathcal{B}\).
If \(k \geqslant 1\), then \(r\) divides \(f\), thus \(f \in \mathcal{B}\). If \(k=0\) and \(j \geqslant 2\), then \(x^{2} y^{2}\) divides \(f\), thus we have \(f \in \mathcal{B}\) again. Finally, if \(k=0, j \leqslant 1\), then \(x^{3}\) divides \(f\) and \(f \in \mathcal{B}\) in this case also.
In order to prove that \(n \geqslant 4\), we show that the monomial \(x^{2} y\) does not belong to \(\mathcal{B}\). Assume the contrary:
\[
x^{2} y=p P+q Q+r R
\]
for some polynomials \(P, Q, R\). If polynomial \(P\) contains the monomial \(x^{2}\) (with nonzero coefficient), then \(p P+q Q+r R\) contains the monomial \(x^{3}\) with the same nonzero coefficient. So \(P\) does not contain \(x^{2}, y^{2}, z^{2}\) and we may write
\[
x^{2} y=(x+y+z)(a x y+b y z+c z x)+(x y+y z+z x)(d x+e y+f z)+g x y z,
\]
where \(a, b, c ; d, e, f ; g\) are the coefficients of \(x y, y z, z x ; x, y, z ; x y z\) in the polynomials \(P\); \(Q ; R\), respectively (the remaining coefficients do not affect the monomials of degree 3 in \(p P+q Q+r R)\). By considering the coefficients of \(x y^{2}\) we get \(e=-a\), analogously \(e=-b\), \(f=-b, f=-c, d=-c\), thus \(a=b=c\) and \(f=e=d=-a\), but then the coefficient of \(x^{2} y\) in the right hand side equals \(a+d=0 \neq 1\).
