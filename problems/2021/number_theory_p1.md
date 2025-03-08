---
id: fimo_2021_number_theory_p1
year: 2021
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2021 Number Theory Problem 1"
---

Determine all integers \(n \geqslant 1\) for which there exists a pair of positive integers \((a, b)\) such that no cube of a prime divides \(a^{2}+b+3\) and

\[
\frac{a b+3 b+8}{a^{2}+b+3}=n
\]

The final answer is that the only integer with that property is \(n=2\).

---
As \(b \equiv-a^{2}-3\left(\bmod a^{2}+b+3\right)\), the numerator of the given fraction satisfies

\[
a b+3 b+8 \equiv a\left(-a^{2}-3\right)+3\left(-a^{2}-3\right)+8 \equiv-(a+1)^{3} \quad\left(\bmod a^{2}+b+3\right) .
\]

As \(a^{2}+b+3\) is not divisible by \(p^{3}\) for any prime \(p\), if \(a^{2}+b+3\) divides \((a+1)^{3}\) then it does also divide \((a+1)^{2}\). Since

\[
0 < (a+1)^{2} < 2\left(a^{2}+b+3\right)
\]

we conclude \((a+1)^{2}=a^{2}+b+3\). This yields \(b=2(a-1)\) and \(n=2\). The choice \((a, b)=(2,2)\) with \(a^{2}+b+3=9\) shows that \(n=2\) indeed is a solution.
