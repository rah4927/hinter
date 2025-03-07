---
id: fimo_2008_number_theory_p1
year: 2008
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2008 Number Theory Problem 1"
---

Let \(n\) be a positive integer and let \(p\) be a prime number. Prove that if \(a, b, c\) are integers (not necessarily positive) satisfying the equations
\[
a^{n}+p b=b^{n}+p c=c^{n}+p a,
\]
then \(a=b=c\).

---
If two of \(a, b, c\) are equal, it is immediate that all the three are equal. So we may assume that \(a \neq b \neq c \neq a\). Subtracting the equations we get \(a^{n}-b^{n}=-p(b-c)\) and two cyclic copies of this equation, which upon multiplication yield
\[
\frac{a^{n}-b^{n}}{a-b} \cdot \frac{b^{n}-c^{n}}{b-c} \cdot \frac{c^{n}-a^{n}}{c-a}=-p^{3} .
\]
If \(n\) is odd then the differences \(a^{n}-b^{n}\) and \(a-b\) have the same sign and the product on the left is positive, while \(-p^{3}\) is negative. So \(n\) must be even.
Let \(d\) be the greatest common divisor of the three differences \(a-b, b-c, c-a\), so that \(a-b=d u, b-c=d v, \quad c-a=d w ; \operatorname{gcd}(u, v, w)=1, \quad u+v+w=0\).
From \(a^{n}-b^{n}=-p(b-c)\) we see that \((a-b) \mid p(b-c)\), i.e., \(u \mid p v\); and cyclically \(v|p w, w| p u\). As \(\operatorname{gcd}(u, v, w)=1\) and \(u+v+w=0\), at most one of \(u, v\), w can be divisible by \(p\). Supposing that the prime \(p\) does not divide any one of them, we get \(u|v, v| w, w \mid u\), whence \(|u|=|v|=|w|=1\); but this quarrels with \(u+v+w=0\).
Thus \(p\) must divide exactly one of these numbers. Let e.g. \(p \mid u\) and write \(u=p u_{1}\). Now we obtain, similarly as before, \(u_{1}|v, v| w, w \mid u_{1}\) so that \(\left|u_{1}\right|=|v|=|w|=1\). The equation \(p u_{1}+v+w=0\) forces that the prime \(p\) must be even; i.e. \(p=2\). Hence \(v+w=-2 u_{1}=\pm 2\), implying \(v=w(=\pm 1)\) and \(u=-2 v\). Consequently \(a-b=-2(b-c)\).
Knowing that \(n\) is even, say \(n=2 k\), we rewrite the equation \(a^{n}-b^{n}=-p(b-c)\) with \(p=2\) in the form
\[
\left(a^{k}+b^{k}\right)\left(a^{k}-b^{k}\right)=-2(b-c)=a-b .
\]
The second factor on the left is divisible by \(a-b\), so the first factor \(\left(a^{k}+b^{k}\right)\) must be \(\pm 1\). Then exactly one of \(a\) and \(b\) must be odd; yet \(a-b=-2(b-c)\) is even. Contradiction ends the proof.
