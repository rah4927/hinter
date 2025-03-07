---
id: fimo_2006_number_theory_p7
year: 2006
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2006 Number Theory Problem 7"
---

Prove that, for every positive integer \(n\), there exists an integer \(m\) such that \(2^{m}+m\) is divisible by \(n\).

---
We will prove by induction on \(d\) that, for every positive integer \(N\), there exist positive integers \(b_{0}, b_{1}, \ldots, b_{d-1}\) such that, for each \(i=0,1,2, \ldots, d-1\), we have \(b_{i} > N\) and
\[
2^{b_{i}}+b_{i} \equiv i \quad(\bmod d)
\]
This yields the claim for \(m=b_{0}\).
The base case \(d=1\) is trivial. Take an \(a > 1\) and assume that the statement holds for all \(d < a\). Note that the remainders of \(2^{i}\) modulo a repeat periodically starting with some exponent \(M\). Let \(k\) be the length of the period; this means that \(2^{M+k^{\prime}} \equiv 2^{M}(\bmod a)\) holds only for those \(k^{\prime}\) which are multiples of \(k\). Note further that the period cannot contain all the \(a\) remainders, since 0 either is missing or is the only number in the period. Thus \(k < a\).
Let \(d=\operatorname{gcd}(a, k)\) and let \(a^{\prime}=a / d, k^{\prime}=k / d\). Since \(0 < k < a\), we also have \(0 < d < a\). By the induction hypothesis, there exist positive integers \(b_{0}, b_{1}, \ldots, b_{d-1}\) such that \(b_{i} > \max \left(2^{M}, N\right)\) and
\[
2^{b_{i}}+b_{i} \equiv i \quad(\bmod d) \quad \text { for } \quad i=0,1,2, \ldots, d-1 .
\]
For each \(i=0,1, \ldots, d-1\) consider the sequence
\[
2^{b_{i}}+b_{i}, \quad 2^{b_{i}+k}+\left(b_{i}+k\right), \ldots, \quad 2^{b_{i}+\left(a^{\prime}-1\right) k}+\left(b_{i}+\left(a^{\prime}-1\right) k\right) .
\]
Modulo \(a\), these numbers are congruent to
\[
2^{b_{i}}+b_{i}, \quad 2^{b_{i}}+\left(b_{i}+k\right), \quad \ldots, \quad 2^{b_{i}}+\left(b_{i}+\left(a^{\prime}-1\right) k\right),
\]
respectively. The \(d\) sequences contain \(a^{\prime} d=a\) numbers altogether. We shall now prove that no two of these numbers are congruent modulo \(a\).
Suppose that
\[
2^{b_{i}}+\left(b_{i}+m k\right) \equiv 2^{b_{j}}+\left(b_{j}+n k\right) \quad(\bmod a)
\]
for some values of \(i, j \in\{0,1, \ldots, d-1\}\) and \(m, n \in\left\{0,1, \ldots, a^{\prime}-1\right\}\). Since \(d\) is a divisor of \(a\), we also have
\[
2^{b_{i}}+\left(b_{i}+m k\right) \equiv 2^{b_{j}}+\left(b_{j}+n k\right) \quad(\bmod d) .
\]
Because \(d\) is a divisor of \(k\) and in view of \((1)\), we obtain \(i \equiv j(\bmod d)\). As \(i, j \in\{0,1, \ldots, d-1\}\), this just means that \(i=j\). Substituting this into (3) yields \(m k \equiv n k(\bmod a)\). Therefore \(m k^{\prime} \equiv n k^{\prime}\left(\bmod a^{\prime}\right) ;\) and since \(a^{\prime}\) and \(k^{\prime}\) are coprime, we get \(m \equiv n\left(\bmod a^{\prime}\right)\). Hence also \(m=n\).
It follows that the \(a\) numbers that make up the \(d\) sequences (2) satisfy all the requirements; they are certainly all greater than \(N\) because we chose each \(b_{i} > \max \left(2^{M}, N\right)\). So the statement holds for \(a\), completing the induction.
