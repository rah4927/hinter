---
id: fimo_2012_number_theory_p6
year: 2012
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2012 Number Theory Problem 6"
---

Let \(x\) and \(y\) be positive integers. If \(x^{2^{n}}-1\) is divisible by \(2^{n} y+1\) for every positive integer \(n\), prove that \(x=1\).

---
First we prove the following fact: For every positive integer \(y\) there exist infinitely many primes \(p \equiv 3(\bmod 4)\) such that \(p\) divides some number of the form \(2^{n} y+1\).

Clearly it is enough to consider the case \(y\) odd. Let

\[
2 y+1=p_{1}^{e_{1}} \cdots p_{r}^{e_{r}}
\]

be the prime factorization of \(2 y+1\). Suppose on the contrary that there are finitely many primes \(p_{r+1}, \ldots, p_{r+s} \equiv 3(\bmod 4)\) that divide some number of the form \(2^{n} y+1\) but do not divide \(2 y+1\).

We want to find an \(n\) such that \(p_{i}^{e_{i}} \| 2^{n} y+1\) for \(1 \leq i \leq r\) and \(p_{i} \nmid 2^{n} y+1\) for \(r+1 \leq i \leq r+s\). For this it suffices to take

\[
n=1+\varphi\left(p_{1}^{e_{1}+1} \cdots p_{r}^{e_{r}+1} p_{r+1}^{1} \cdots p_{r+s}^{1}\right),
\]

because then

\[
2^{n} y+1 \equiv 2 y+1 \quad\left(\bmod p_{1}^{e_{1}+1} \cdots p_{r}^{e_{r}+1} p_{r+1}^{1} \cdots p_{r+s}^{1}\right)
\]

The last congruence means that \(p_{1}^{e_{1}}, \ldots, p_{r}^{e_{r}}\) divide exactly \(2^{n} y+1\) and no prime \(p_{r+1}, \ldots, p_{r+s}\) divides \(2^{n} y+1\). It follows that the prime factorization of \(2^{n} y+1\) consists of the prime powers \(p_{1}^{e_{1}}, \ldots, p_{r}^{e_{r}}\) and powers of primes \(\equiv 1(\bmod 4)\). Because \(y\) is odd, we obtain

\[
2^{n} y+1 \equiv p_{1}^{e_{1}} \cdots p_{r}^{e_{r}} \equiv 2 y+1 \equiv 3 \quad(\bmod 4)
\]

This is a contradiction since \(n > 1\), and so \(2^{n} y+1 \equiv 1(\bmod 4)\).

Now we proceed to the problem. If \(p\) is a prime divisor of \(2^{n} y+1\) the problem statement implies that \(x^{d} \equiv 1(\bmod p)\) for \(d=2^{n}\). By FERMAT's little theorem the same congruence holds for \(d=p-1\), so it must also hold for \(d=\left(2^{n}, p-1\right)\). For \(p \equiv 3(\bmod 4)\) we have \(\left(2^{n}, p-1\right)=2\), therefore in this case \(x^{2} \equiv 1(\bmod p)\).

In summary, we proved that every prime \(p \equiv 3(\bmod 4)\) that divides some number of the form \(2^{n} y+1\) also divides \(x^{2}-1\). This is possible only if \(x=1\), otherwise by the above \(x^{2}-1\) would be a positive integer with infinitely many prime factors.
