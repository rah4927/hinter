---
id: fimo_2008_algebra_p2_2
year: 2008
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2008 Algebra Problem 2"
---

\[
\frac{x^{2}}{(x-1)^{2}}+\frac{y^{2}}{(y-1)^{2}}+\frac{z^{2}}{(z-1)^{2}} \geq 1
\]
for real numbers \(x, y, z \neq 1\) satisfying the condition \(x y z=1\).
Show that there are infinitely many triples of rational numbers \(x, y, z\) for which this inequality turns into equality.

---
From the equation \(a^{2}+b^{2}+c^{2}-1=(a+b+c-1)^{2}\) we see that the proposed inequality becomes an equality if and only if both sums \(a^{2}+b^{2}+c^{2}\) and \(a+b+c\) have value 1 . The first of them is equal to \((a+b+c)^{2}-2(a b+b c+c a)\). So the instances of equality are described by the system of two equations
\[
a+b+c=1, \quad a b+b c+c a=0
\]
plus the constraint \(a, b, c \neq 1\). Elimination of \(c\) leads to \(a^{2}+a b+b^{2}=a+b\), which we regard as a quadratic equation in \(b\),
\[
b^{2}+(a-1) b+a(a-1)=0
\]
with discriminant
\[
\Delta=(a-1)^{2}-4 a(a-1)=(1-a)(1+3 a) .
\]
We are looking for rational triples \((a, b, c)\); it will suffice to have \(a\) rational such that \(1-a\) and \(1+3 a\) are both squares of rational numbers (then \(\Delta\) will be so too). Set \(a=k / m\). We want \(m-k\) and \(m+3 k\) to be squares of integers. This is achieved for instance by taking \(m=k^{2}-k+1\) (clearly nonzero); then \(m-k=(k-1)^{2}, m+3 k=(k+1)^{2}\). Note that distinct integers \(k\) yield distinct values of \(a=k / m\).
And thus, if \(k\) is any integer and \(m=k^{2}-k+1, a=k / m\) then \(\Delta=\left(k^{2}-1\right)^{2} / m^{2}\) and the quadratic equation has rational roots \(b=\left(m-k \pm k^{2} \mp 1\right) /(2 m)\). Choose e.g. the larger root,
\[
b=\frac{m-k+k^{2}-1}{2 m}=\frac{m+(m-2)}{2 m}=\frac{m-1}{m} .
\]
Computing \(c\) from \(a+b+c=1\) then gives \(c=(1-k) / m\). The condition \(a, b, c \neq 1\) eliminates only \(k=0\) and \(k=1\). Thus, as \(k\) varies over integers greater than 1 , we obtain an infinite family of rational triples \((a, b, c)\)-and coming back to the original variables \((x=a /(a-1)\) etc. \()\) - an infinite family of rational triples \((x, y, z)\) with the needed property. (A short calculation shows that the resulting triples are \(x=-k /(k-1)^{2}, y=k-k^{2}, z=(k-1) / k^{2}\); but the proof was complete without listing them.)
