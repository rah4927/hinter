---
id: fimo_2017_number_theory_p1
year: 2017
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2017 Number Theory Problem 1"
---

The sequence \(a_{0}, a_{1}, a_{2}, \ldots\) of positive integers satisfies
\[
a_{n+1}=\left\{\begin{array}{ll}
\sqrt{a_{n}}, & \text { if } \sqrt{a_{n}} \text { is an integer } \\
a_{n}+3, & \text { otherwise }
\end{array} \quad \text { for every } n \geqslant 0 .\right.
\]
Determine all values of \(a_{0} > 1\) for which there is at least one number \(a\) such that \(a_{n}=a\) for infinitely many values of \(n\).


---
Since the value of \(a_{n+1}\) only depends on the value of \(a_{n}\), if \(a_{n}=a_{m}\) for two different indices \(n\) and \(m\), then the sequence is eventually periodic. So we look for the values of \(a_{0}\) for which the sequence is eventually periodic.
Claim 1. If \(a_{n} \equiv-1(\bmod 3)\), then, for all \(m > n, a_{m}\) is not a perfect square. It follows that the sequence is eventually strictly increasing, so it is not eventually periodic.
Proof. A square cannot be congruent to \(-1\) modulo 3 , so \(a_{n} \equiv-1(\bmod 3)\) implies that \(a_{n}\) is not a square, therefore \(a_{n+1}=a_{n}+3 > a_{n}\). As a consequence, \(a_{n+1} \equiv a_{n} \equiv-1(\bmod 3)\), so \(a_{n+1}\) is not a square either. By repeating the argument, we prove that, from \(a_{n}\) on, all terms of the sequence are not perfect squares and are greater than their predecessors, which completes the proof.
Claim 2. If \(a_{n} \not=-1(\bmod 3)\) and \(a_{n} > 9\) then there is an index \(m > n\) such that \(a_{m} < a_{n}\).
Proof. Let \(t^{2}\) be the largest perfect square which is less than \(a_{n}\). Since \(a_{n} > 9, t\) is at least 3. The first square in the sequence \(a_{n}, a_{n}+3, a_{n}+6, \ldots\) will be \((t+1)^{2},(t+2)^{2}\) or \((t+3)^{2}\), therefore there is an index \(m > n\) such that \(a_{m} \leqslant t+3 < t^{2} < a_{n}\), as claimed.
Claim 3. If \(a_{n} \equiv 0(\bmod 3)\), then there is an index \(m > n\) such that \(a_{m}=3\).
Proof. First we notice that, by the definition of the sequence, a multiple of 3 is always followed by another multiple of 3 . If \(a_{n} \in\{3,6,9\}\) the sequence will eventually follow the periodic pattern \(3,6,9,3,6,9, \ldots\). If \(a_{n} > 9\), let \(j\) be an index such that \(a_{j}\) is equal to the minimum value of the set \(\left\{a_{n+1}, a_{n+2}, \ldots\right\}\). We must have \(a_{j} \leqslant 9\), otherwise we could apply Claim 2 to \(a_{j}\) and get a contradiction on the minimality hypothesis. It follows that \(a_{j} \in\{3,6,9\}\), and the proof is complete.
Claim 4. If \(a_{n} \equiv 1(\bmod 3)\), then there is an index \(m > n\) such that \(a_{m} \equiv-1(\bmod 3)\).
Proof. In the sequence, 4 is always followed by \(2 \equiv-1(\bmod 3)\), so the claim is true for \(a_{n}=4\). If \(a_{n}=7\), the next terms will be \(10,13,16,4,2, \ldots\) and the claim is also true. For \(a_{n} \geqslant 10\), we again take an index \(j > n\) such that \(a_{j}\) is equal to the minimum value of the set \(\left\{a_{n+1}, a_{n+2}, \ldots\right\}\), which by the definition of the sequence consists of non-multiples of 3 . Suppose \(a_{j} \equiv 1(\bmod 3)\). Then we must have \(a_{j} \leqslant 9\) by Claim 2 and the minimality of \(a_{j}\). It follows that \(a_{j} \in\{4,7\}\), so \(a_{m}=2 < a_{j}\) for some \(m > j\), contradicting the minimality of \(a_{j}\). Therefore, we must have \(a_{j} \equiv-1(\bmod 3)\)
It follows from the previous claims that if \(a_{0}\) is a multiple of 3 the sequence will eventually reach the periodic pattern \(3,6,9,3,6,9, \ldots\); if \(a_{0} \equiv-1(\bmod 3)\) the sequence will be strictly increasing; and if \(a_{0} \equiv 1(\bmod 3)\) the sequence will be eventually strictly increasing.
So the sequence will be eventually periodic if, and only if, \(a_{0}\) is a multiple of 3 .
