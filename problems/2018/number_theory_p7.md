---
id: fimo_2018_number_theory_p7
year: 2018
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2018 Number Theory Problem 7"
---

Let \(n \geqslant 2018\) be an integer, and let \(a_{1}, a_{2}, \ldots, a_{n}, b_{1}, b_{2}, \ldots, b_{n}\) be pairwise distinct positive integers not exceeding \(5 n\). Suppose that the sequence

\[
\frac{a_{1}}{b_{1}}, \frac{a_{2}}{b_{2}}, \ldots, \frac{a_{n}}{b_{n}}
\]

forms an arithmetic progression. Prove that the terms of the sequence are equal.

---
Suppose that (1) is an arithmetic progression with nonzero difference. Let the difference be \(\Delta=\frac{c}{d}\), where \(d > 0\) and \(c, d\) are coprime.

We will show that too many denominators \(b_{i}\) should be divisible by \(d\). To this end, for any \(1 \leqslant i \leqslant n\) and any prime divisor \(p\) of \(d\), say that the index \(i\) is \(p\)-wrong, if \(v_{p}\left(b_{i}\right) < v_{p}(d) .\left(v_{p}(x)\right.\) stands for the exponent of \(p\) in the prime factorisation of \(x\).)

Claim 1. For any prime \(p\), all \(p\)-wrong indices are congruent modulo \(p\). In other words, the \(p\)-wrong indices (if they exist) are included in an arithmetic progression with difference \(p\).

Proof. Let \(\alpha=v_{p}(d)\). For the sake of contradiction, suppose that \(i\) and \(j\) are \(p\)-wrong indices (i.e., none of \(b_{i}\) and \(b_{j}\) is divisible by \(\left.p^{\alpha}\right)\) such that \(i \not \equiv j(\bmod p)\). Then the least common denominator of \(\frac{a_{i}}{b_{i}}\) and \(\frac{a_{j}}{b_{j}}\) is not divisible by \(p^{\alpha}\). But this is impossible because in their difference, \((i-j) \Delta=\frac{(i-j) c}{d}\), the numerator is coprime to \(p\), but \(p^{\alpha}\) divides the denominator \(d\).

Claim 2. \(d\) has no prime divisors greater than 5.

Proof. Suppose that \(p \geqslant 7\) is a prime divisor of \(d\). Among the indices \(1,2, \ldots, n\), at most \(\left\lceil\frac{n}{p}\right\rceil < \frac{n}{p}+1\) are \(p\)-wrong, so \(p\) divides at least \(\frac{p-1}{p} n-1\) of \(b_{1}, \ldots, b_{n}\). Since these denominators are distinct,

\[
5 n \geqslant \max \left\{b_{i}: p \mid b_{i}\right\} \geqslant\left(\frac{p-1}{p} n-1\right) p=(p-1)(n-1)-1 \geqslant 6(n-1)-1 > 5 n,
\]

a contradiction.

Claim 3. For every \(0 \leqslant k \leqslant n-30\), among the denominators \(b_{k+1}, b_{k+2}, \ldots, b_{k+30}\), at least \(\varphi(30)=8\) are divisible by \(d\).

Proof. By Claim 1, the 2-wrong, 3-wrong and 5-wrong indices can be covered by three arithmetic progressions with differences 2,3 and 5 . By a simple inclusion-exclusion, \((2-1) \cdot(3-1) \cdot(5-1)=8\) indices are not covered; by Claim 2, we have \(d \mid b_{i}\) for every uncovered index \(i\).

Claim 4. \(|\Delta| < \frac{20}{n-2}\) and \(d > \frac{n-2}{20}\).

Proof. From the sequence (1), remove all fractions with \(b_{n} < \frac{n}{2}\), There remain at least \(\frac{n}{2}\) fractions, and they cannot exceed \(\frac{5 n}{n / 2}=10\). So we have at least \(\frac{n}{2}\) elements of the arithmetic progression (1) in the interval \((0,10]\), hence the difference must be below \(\frac{10}{n / 2-1}=\frac{20}{n-2}\).

The second inequality follows from \(\frac{1}{d} \leqslant \frac{|c|}{d}=|\Delta|\).

Now we have everything to get the final contradiction. By Claim 3, we have \(d \mid b_{i}\) for at least \(\left\lfloor\frac{n}{30}\right\rfloor \cdot 8\) indices \(i\). By Claim 4, we have \(d \geqslant \frac{n-2}{20}\). Therefore,

\[
5 n \geqslant \max \left\{b_{i}: d \mid b_{i}\right\} \geqslant\left(\left\lfloor\frac{n}{30}\right\rfloor \cdot 8\right) \cdot d > \left(\frac{n}{30}-1\right) \cdot 8 \cdot \frac{n-2}{20} > 5 n .
\]
