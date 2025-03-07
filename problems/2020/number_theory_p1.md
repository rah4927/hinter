---
id: fimo_2020_number_theory_p1
year: 2020
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2020 Number Theory Problem 1"
---

Given a positive integer \(k\), show that there exists a prime \(p\) such that one can choose distinct integers \(a_{1}, a_{2}, \ldots, a_{k+3} \in\{1,2, \ldots, p-1\}\) such that \(p\) divides \(a_{i} a_{i+1} a_{i+2} a_{i+3}-i\) for all \(i=1,2, \ldots, k\).

---
First we choose distinct positive rational numbers \(r_{1}, \ldots, r_{k+3}\) such that
\[
r_{i} r_{i+1} r_{i+2} r_{i+3}=i \text { for } 1 \leqslant i \leqslant k .
\]
Let \(r_{1}=x, r_{2}=y, r_{3}=z\) be some distinct primes greater than \(k\); the remaining terms satisfy \(r_{4}=\frac{1}{r_{1} r_{2} r_{3}}\) and \(r_{i+4}=\frac{i+1}{i} r_{i}\). It follows that if \(r_{i}\) are represented as irreducible fractions, the numerators are divisible by \(x\) for \(i \equiv 1(\bmod 4)\), by \(y\) for \(i \equiv 2(\bmod 4)\), by \(z\) for \(i \equiv 3(\bmod 4)\) and by none for \(i \equiv 0(\bmod 4)\). Notice that \(r_{i} < r_{i+4}\); thus the sequences \(r_{1} < r_{5} < r_{9} < \ldots\), \(r_{2} < r_{6} < r_{10} < \ldots, r_{3} < r_{7} < r_{11} < \ldots, r_{4} < r_{8} < r_{12} < \ldots\) are increasing and have no common terms, that is, all \(r_{i}\) are distinct.
If each \(r_{i}\) is represented by an irreducible fraction \(\frac{u_{i}}{v_{i}}\), choose a prime \(p\) which divides neither \(v_{i}, 1 \leqslant i \leqslant k+1\), nor \(v_{i} v_{j}\left(r_{i}-r_{j}\right)=v_{j} u_{i}-v_{i} u_{j}\) for \(i < j\), and define \(a_{i}\) by the congruence \(a_{i} v_{i} \equiv u_{i}(\bmod p)\). Since \(r_{i} r_{i+1} r_{i+2} r_{i+3}=i\), we have
\[
\begin{aligned}
i v_{i} v_{i+1} v_{i+2} v_{i+3}=r_{i} v_{i} r_{i+1} v_{i+1} r_{i+2} & v_{i+2} r_{i+3} v_{i+3} \\
& =u_{i} u_{i+1} u_{i+2} u_{i+3} \equiv a_{i} v_{i} a_{i+1} v_{i+1} a_{i+2} v_{i+2} a_{i+3} v_{i+3} \quad(\bmod p)
\end{aligned}
\]
and therefore \(a_{i} a_{i+1} a_{i+2} a_{i+3} \equiv i(\bmod p)\) for \(1 \leqslant i \leqslant k\).
If \(a_{i} \equiv a_{j}(\bmod p)\), then \(u_{i} v_{j} \equiv a_{i} v_{i} v_{j} \equiv u_{j} v_{i}(\bmod p)\), a contradiction.
