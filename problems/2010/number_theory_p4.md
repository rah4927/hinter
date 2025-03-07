---
id: fimo_2010_number_theory_p4_1
year: 2010
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2010 Number Theory Problem 4"
---

Let \(a, b\) be integers, and let \(P(x)=a x^{3}+b x\). For any positive integer \(n\) we say that the pair \((a, b)\) is \(n\)-good if \(n \mid P(m)-P(k)\) implies \(n \mid m-k\) for all integers \(m, k\). We say that \((a, b)\) is very good if \((a, b)\) is \(n\)-good for infinitely many positive integers \(n\).
Find a pair \((a, b)\) which is 51 -good, but not very good.


---
We show that the pair \(\left(1,-51^{2}\right)\) is good but not very good. Let \(P(x)=x^{3}-51^{2} x\). Since \(P(51)=P(0)\), the pair \(\left(1,-51^{2}\right)\) is not \(n\)-good for any positive integer that does not divide 51 . Therefore, \(\left(1,-51^{2}\right)\) is not very good.
On the other hand, if \(P(m) \equiv P(k)(\bmod 51)\), then \(m^{3} \equiv k^{3}(\bmod 51)\). By Fermat's theorem, from this we obtain
\[
m \equiv m^{3} \equiv k^{3} \equiv k \quad(\bmod 3) \quad \text { and } \quad m \equiv m^{33} \equiv k^{33} \equiv k \quad(\bmod 17) .
\]
Hence we have \(m \equiv k(\bmod 51)\). Therefore \(\left(1,-51^{2}\right)\) is 51 -good.
