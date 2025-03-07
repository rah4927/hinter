---
id: fimo_2011_algebra_p3
year: 2011
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2011 Algebra Problem 3"
---

Determine all pairs \((f, g)\) of functions from the set of real numbers to itself that satisfy
\[
g(f(x+y))=f(x)+(2 x+y) g(y)
\]
for all real numbers \(x\) and \(y\).


---
Solution. Clearly all these pairs of functions satisfy the functional equation in question, so it suffices to verify that there cannot be any further ones. Substituting \(-2 x\) for \(y\) in the given functional equation we obtain
\[
g(f(-x))=f(x) .
\]
Using this equation for \(-x-y\) in place of \(x\) we obtain
\[
f(-x-y)=g(f(x+y))=f(x)+(2 x+y) g(y)
\]
Now for any two real numbers \(a\) and \(b\), setting \(x=-b\) and \(y=a+b\) we get
\[
f(-a)=f(-b)+(a-b) g(a+b) .
\]
If \(c\) denotes another arbitrary real number we have similarly
\[
f(-b)=f(-c)+(b-c) g(b+c)
\]
as well as
\[
f(-c)=f(-a)+(c-a) g(c+a) .
\]
Adding all these equations up, we obtain
\[
((a+c)-(b+c)) g(a+b)+((a+b)-(a+c)) g(b+c)+((b+c)-(a+b)) g(a+c)=0 .
\]
Now given any three real numbers \(x, y\), and \(z\) one may determine three reals \(a, b\), and \(c\) such that \(x=b+c, y=c+a\), and \(z=a+b\), so that we get
\[
(y-x) g(z)+(z-y) g(x)+(x-z) g(y)=0 .
\]
This implies that the three points \((x, g(x)),(y, g(y))\), and \((z, g(z))\) from the graph of \(g\) are collinear. Hence that graph is a line, i.e., \(g\) is either a constant or a linear function. Let us write \(g(x)=A x+B\), where \(A\) and \(B\) are two real numbers. Substituting \((0,-y)\) for \((x, y)\) in (2) and denoting \(C=f(0)\), we have \(f(y)=A y^{2}-B y+C\). Now, comparing the coefficients of \(x^{2}\) in (1) we see that \(A^{2}=A\), so \(A=0\) or \(A=1\).
If \(A=0\), then (1) becomes \(B=-B x+C\) and thus \(B=C=0\), which provides the first of the two solutions mentioned above.
Now suppose \(A=1\). Then (1) becomes \(x^{2}-B x+C+B=x^{2}-B x+C\), so \(B=0\). Thus, \(g(x)=x\) and \(f(x)=x^{2}+C\), which is the second solution from above.
