---
id: fimo_2012_number_theory_p7
year: 2012
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2012 Number Theory Problem 7"
---

Find all \(n \in \mathbb{N}\) for which there exist nonnegative integers \(a_{1}, a_{2}, \ldots, a_{n}\) such that
\[
\frac{1}{2^{a_{1}}}+\frac{1}{2^{a_{2}}}+\cdots+\frac{1}{2^{a_{n}}}=\frac{1}{3^{a_{1}}}+\frac{2}{3^{a_{2}}}+\cdots+\frac{n}{3^{a_{n}}}=1 .
\]

---
Such numbers \(a_{1}, a_{2}, \ldots, a_{n}\) exist if and only if \(n \equiv 1(\bmod 4)\) or \(n \equiv 2(\bmod 4)\).
Let \(\sum_{k=1}^{n} \frac{k}{3^{a_{k}}}=1\) with \(a_{1}, a_{2}, \ldots, a_{n}\) nonnegative integers. Then \(1 \cdot x_{1}+2 \cdot x_{2}+\cdots+n \cdot x_{n}=3^{a}\) with \(x_{1}, \ldots, x_{n}\) powers of 3 and \(a \geq 0\). The right-hand side is odd, and the left-hand side has the same parity as \(1+2+\cdots+n\). Hence the latter sum is odd, which implies \(n \equiv 1,2(\bmod 4)\). Now we prove the converse.
Call feasible a sequence \(b_{1}, b_{2}, \ldots, b_{n}\) if there are nonnegative integers \(a_{1}, a_{2}, \ldots, a_{n}\) such that
\[
\frac{1}{2^{a_{1}}}+\frac{1}{2^{a_{2}}}+\cdots+\frac{1}{2^{a_{n}}}=\frac{b_{1}}{3^{a_{1}}}+\frac{b_{2}}{3^{a_{2}}}+\cdots+\frac{b_{n}}{3^{a_{n}}}=1 .
\]
Let \(b_{k}\) be a term of a feasible sequence \(b_{1}, b_{2}, \ldots, b_{n}\) with exponents \(a_{1}, a_{2}, \ldots, a_{n}\) like above, and let \(u, v\) be nonnegative integers with sum \(3 b_{k}\). Observe that
\[
\frac{1}{2^{a_{k}+1}}+\frac{1}{2^{a_{k}+1}}=\frac{1}{2^{a_{k}}} \quad \text { and } \quad \frac{u}{3^{a_{k}+1}}+\frac{v}{3^{a_{k}+1}}=\frac{b_{k}}{3^{a_{k}}} \text {. }
\]
It follows that the sequence \(b_{1}, \ldots, b_{k-1}, u, v, b_{k+1}, \ldots, b_{n}\) is feasible. The exponents \(a_{i}\) are the same for the unchanged terms \(b_{i}, i \neq k\); the new terms \(u, v\) have exponents \(a_{k}+1\).
We state the conclusion in reverse. If two terms \(u, v\) of a sequence are replaced by one term \(\frac{u+v}{3}\) and the obtained sequence is feasible, then the original sequence is feasible too. Denote by \(\alpha_{n}\) the sequence \(1,2, \ldots, n\). To show that \(\alpha_{n}\) is feasible for \(n \equiv 1,2(\bmod 4)\), we transform it by \(n-1\) replacements \(\{u, v\} \mapsto \frac{u+v}{3}\) to the one-term sequence \(\alpha_{1}\). The latter is feasible, with \(a_{1}=0\). Note that if \(m\) and \(2 m\) are terms of a sequence then \(\{m, 2 m\} \mapsto m\), so \(2 m\) can be ignored if necessary.
Let \(n \geq 16\). We prove that \(\alpha_{n}\) can be reduced to \(\alpha_{n-12}\) by 12 operations. Write \(n=12 k+r\) where \(k \geq 1\) and \(0 \leq r \leq 11\). If \(0 \leq r \leq 5\) then the last 12 terms of \(\alpha_{n}\) can be partitioned into 2 singletons \(\{12 k-6\},\{12 k\}\) and the following 5 pairs:
\[
\{12 k-6-i, 12 k-6+i\}, i=1, \ldots, 5-r ; \quad\{12 k-j, 12 k+j\}, j=1, \ldots, r .
\]
(There is only one kind of pairs if \(r \in\{0,5\}\).) One can ignore \(12 k-6\) and \(12 k\) since \(\alpha_{n}\) contains \(6 k-3\) and \(6 k\). Furthermore the 5 operations \(\{12 k-6-i, 12 k-6+i\} \mapsto 8 k-4\) and \(\{12 k-j, 12 k+j\} \mapsto 8 k\) remove the 10 terms in the pairs and bring in 5 new terms equal to \(8 k-4\) or \(8 k\). All of these can be ignored too as \(4 k-2\) and \(4 k\) are still present in the sequence. Indeed \(4 k \leq n-12\) is equivalent to \(8 k \geq 12-r\), which is true for \(r \in\{4,5\}\). And if \(r \in\{0,1,2,3\}\) then \(n \geq 16\) implies \(k \geq 2\), so \(8 k \geq 12-r\) also holds. Thus \(\alpha_{n}\) reduces to \(\alpha_{n-12}\).
The case \(6 \leq r \leq 11\) is analogous. Consider the singletons \(\{12 k\},\{12 k+6\}\) and the 5 pairs
\[
\{12 k-i, 12 k+i\}, i=1, \ldots, 11-r ; \quad\{12 k+6-j, 12 k+6+j\}, j=1, \ldots, r-6 .
\]
Ignore the singletons like before, then remove the pairs via operations \(\{12 k-i, 12 k+i\} \mapsto 8 k\) and \(\{12 k+6-j, 12 k+6+j\} \mapsto 8 k+4\). The 5 newly-appeared terms \(8 k\) and \(8 k+4\) can be ignored too since \(4 k+2 \leq n-12\) (this follows from \(k \geq 1\) and \(r \geq 6\) ). We obtain \(\alpha_{n-12}\) again.
The problem reduces to \(2 \leq n \leq 15\). In fact \(n \in\{2,5,6,9,10,13,14\}\) by \(n \equiv 1,2(\bmod 4)\). The cases \(n=2,6,10,14\) reduce to \(n=1,5,9,13\) respectively because the last even term of \(\alpha_{n}\) can be ignored. For \(n=5\) apply \(\{4,5\} \mapsto 3\), then \(\{3,3\} \mapsto 2\), then ignore the 2 occurrences of 2 . For \(n=9\) ignore 6 first, then apply \(\{5,7\} \mapsto 4,\{4,8\} \mapsto 4,\{3,9\} \mapsto 4\). Now ignore the 3 occurrences of 4 , then ignore 2. Finally \(n=13\) reduces to \(n=10\) by \(\{11,13\} \mapsto 8\) and ignoring 8 and 12 . The proof is complete.

