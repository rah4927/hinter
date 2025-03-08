---
id: fimo_2011_number_theory_p6
year: 2011
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2011 Number Theory Problem 6"
---

Let \(P(x)\) and \(Q(x)\) be two polynomials with integer coefficients such that no nonconstant polynomial with rational coefficients divides both \(P(x)\) and \(Q(x)\). Suppose that for every positive integer \(n\) the integers \(P(n)\) and \(Q(n)\) are positive, and \(2^{Q(n)}-1\) divides \(3^{P(n)}-1\). Prove that \(Q(x)\) is a constant polynomial.

---
First we show that there exists an integer \(d\) such that for all positive integers \(n\) we have \(\operatorname{gcd}(P(n), Q(n)) \leq d\)
Since \(P(x)\) and \(Q(x)\) are coprime (over the polynomials with rational coefficients), EucLid's algorithm provides some polynomials \(R_{0}(x), S_{0}(x)\) with rational coefficients such that \(P(x) R_{0}(x)-\) \(Q(x) S_{0}(x)=1\). Multiplying by a suitable positive integer \(d\), we obtain polynomials \(R(x)=\) \(d \cdot R_{0}(x)\) and \(S(x)=d \cdot S_{0}(x)\) with integer coefficients for which \(P(x) R(x)-Q(x) S(x)=d\). Then we have \(\operatorname{gcd}(P(n), Q(n)) \leq d\) for any integer \(n\).
To prove the problem statement, suppose that \(Q(x)\) is not constant. Then the sequence \(Q(n)\) is not bounded and we can choose a positive integer \(m\) for which
\[
M=2^{Q(m)}-1 \geq 3^{\max \{P(1), P(2), \ldots, P(d)\}} .
\]
Since \(M=2^{Q(n)}-1 \mid 3^{P(n)}-1\), we have \(2,3 X M\). Let \(a\) and \(b\) be the multiplicative orders of 2 and 3 modulo \(M\), respectively. Obviously, \(a=Q(m)\) since the lower powers of 2 do not reach \(M\). Since \(M\) divides \(3^{P(m)}-1\), we have \(b \mid P(m)\). Then \(\operatorname{gcd}(a, b) \leq \operatorname{gcd}(P(m), Q(m)) \leq d\). Since the expression \(a x-b y\) attains all integer values divisible by \(\operatorname{gcd}(a, b)\) when \(x\) and \(y\) run over all nonnegative integer values, there exist some nonnegative integers \(x, y\) such that \(1 \leq m+a x-b y \leq d\)
By \(Q(m+a x) \equiv Q(m)(\bmod a)\) we have
\[
2^{Q(m+a x)} \equiv 2^{Q(m)} \equiv 1 \quad(\bmod M)
\]
and therefore
\[
M\left|2^{Q(m+a x)}-1\right| 3^{P(m+a x)}-1 .
\]
Then, by \(P(m+a x-b y) \equiv P(m+a x)(\bmod b)\) we have
\[
3^{P(m+a x-b y)} \equiv 3^{P(m+a x)} \equiv 1 \quad(\bmod M)
\]
Since \(P(m+a x-b y) > 0\) this implies \(M \leq 3^{P(m+a x-b y)}-1\). But \(P(m+a x-b y)\) is listed among \(P(1), P(2), \ldots, P(d)\), so
\[
M < 3^{P(m+a x-b y)} \leq 3^{\max \{P(1), P(2), \ldots, P(d)\}}
\]
which contradicts (1).
