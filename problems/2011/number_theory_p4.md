---
id: fimo_2011_number_theory_p4
year: 2011
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2011 Number Theory Problem 4"
---

For each positive integer \(k\), let \(t(k)\) be the largest odd divisor of \(k\). Determine all positive integers \(a\) for which there exists a positive integer \(n\) such that all the differences
\[
t(n+a)-t(n), \quad t(n+a+1)-t(n+1), \quad \ldots, \quad t(n+2 a-1)-t(n+a-1)
\]
are divisible by 4.


---
A pair \((a, n)\) satisfying the condition of the problem will be called a winning pair. It is straightforward to check that the pairs \((1,1),(3,1)\), and \((5,4)\) are winning pairs.
Now suppose that \(a\) is a positive integer not equal to 1,3 , and 5 . We will show that there are no winning pairs \((a, n)\) by distinguishing three cases.
Case 1: \(a\) is even. In this case we have \(a=2^{\alpha} d\) for some positive integer \(\alpha\) and some odd \(d\). Since \(a \geq 2^{\alpha}\), for each positive integer \(n\) there exists an \(i \in\{0,1, \ldots, a-1\}\) such that \(n+i=2^{\alpha-1} e\), where \(e\) is some odd integer. Then we have \(t(n+i)=t\left(2^{\alpha-1} e\right)=e\) and
\[
t(n+a+i)=t\left(2^{\alpha} d+2^{\alpha-1} e\right)=2 d+e \equiv e+2 \quad(\bmod 4)
\]
So we get \(t(n+i)-t(n+a+i) \equiv 2(\bmod 4)\), and \((a, n)\) is not a winning pair.
Case 2: \(a\) is odd and \(a > 8\). For each positive integer \(n\), there exists an \(i \in\{0,1, \ldots, a-5\}\) such that \(n+i=2 d\) for some odd \(d\). We get
\[
t(n+i)=d \not \equiv d+2=t(n+i+4) \quad(\bmod 4)
\]
and
\[
t(n+a+i)=n+a+i \equiv n+a+i+4=t(n+a+i+4) \quad(\bmod 4) .
\]
Therefore, the integers \(t(n+a+i)-t(n+i)\) and \(t(n+a+i+4)-t(n+i+4)\) cannot be both divisible by 4 , and therefore there are no winning pairs in this case.
Case 3: \(a=7\). For each positive integer \(n\), there exists an \(i \in\{0,1, \ldots, 6\}\) such that \(n+i\) is either of the form \(8 k+3\) or of the form \(8 k+6\), where \(k\) is a nonnegative integer. But we have
\[
t(8 k+3) \equiv 3 \not \equiv 1 \equiv 4 k+5=t(8 k+3+7) \quad(\bmod 4)
\]
and
\[
t(8 k+6)=4 k+3 \equiv 3 \not \equiv 1 \equiv t(8 k+6+7) \quad(\bmod 4) .
\]
Hence, there are no winning pairs of the form \((7, n)\).
