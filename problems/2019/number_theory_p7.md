---
id: fimo_2019_number_theory_p7
year: 2019
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2019 Number Theory Problem 7"
---

Prove that there is a constant \(c > 0\) and infinitely many positive integers \(n\) with the following property: there are infinitely many positive integers that cannot be expressed as the sum of fewer than \(c n \log (n)\) pairwise coprime \(n^{\text {th }}\) powers.

---
Suppose, for an integer \(n\), that we can find another integer \(N\) satisfying the following property:

\[
n \text { is divisible by } \varphi\left(p^{e}\right) \text { for every prime power } p^{e} \text { exactly dividing } N \text {. }
\]

This property ensures that all \(n^{\text {th }}\) powers are congruent to 0 or 1 modulo each such prime power \(p^{e}\), and hence that any sum of \(m\) pairwise coprime \(n^{\text {th }}\) powers is congruent to \(m\) or \(m-1\) modulo \(p^{e}\), since at most one of the \(n^{\text {th }}\) powers is divisible by \(p\). Thus, if \(k\) denotes the number of distinct prime factors of \(N\), we find by the Chinese Remainder Theorem at most \(2^{k} m\) residue classes modulo \(N\) which are sums of at most \(m\) pairwise coprime \(n^{\text {th }}\) powers. In particular, if \(N > 2^{k} m\) then there are infinitely many positive integers not expressible as a sum of at most \(m\) pairwise coprime \(n^{\text {th }}\) powers.

It thus suffices to prove that there are arbitrarily large pairs \((n, N)\) of integers satisfying ( \(\dagger)\) such that

\[
N > c \cdot 2^{k} n \log (n)
\]

for some positive constant \(c\).

We construct such pairs as follows. Fix a positive integer \(t\) and choose (distinct) prime numbers \(p \mid 2^{2^{t-1}}+1\) and \(q \mid 2^{2^{t}}+1\); we set \(N=p q\). It is well-known that \(2^{t} \mid p-1\) and \(2^{t+1} \mid q-1\), hence

\[
n=\frac{(p-1)(q-1)}{2^{t}}
\]

is an integer and the pair \((n, N)\) satisfies \((\dagger)\).

Estimating the size of \(N\) and \(n\) is now straightforward. We have

\[
\log _{2}(n) \leqslant 2^{t-1}+2^{t}-t < 2^{t+1} < 2 \cdot \frac{N}{n}
\]

which rearranges to

\[
N > \frac{1}{8} \cdot 2^{2} n \log _{2}(n)
\]

and so we are done if we choose \(c < \frac{1}{8 \log (2)} \approx 0.18\).
