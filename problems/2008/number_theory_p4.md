---
id: fimo_2008_number_theory_p4
year: 2008
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2008 Number Theory Problem 4"
---

Let \(n\) be a positive integer. Show that the numbers
\[
\left(\begin{array}{c}
2^{n}-1 \\
0
\end{array}\right), \quad\left(\begin{array}{c}
2^{n}-1 \\
1
\end{array}\right), \quad\left(\begin{array}{c}
2^{n}-1 \\
2
\end{array}\right), \quad \cdots, \quad\left(\begin{array}{c}
2^{n}-1 \\
2^{n-1}-1
\end{array}\right)
\]
are congruent modulo \(2^{n}\) to \(1,3,5, \ldots, 2^{n}-1\) in some order.

---
It is well-known that all these numbers are odd. So the assertion that their remainders \(\left(\bmod 2^{n}\right)\) make up a permutation of \(\left\{1,3, \ldots, 2^{n}-1\right\}\) is equivalent just to saying that these remainders are all distinct. We begin by showing that
\[
\left(\begin{array}{c}
2^{n}-1 \\
2 k
\end{array}\right)+\left(\begin{array}{c}
2^{n}-1 \\
2 k+1
\end{array}\right) \equiv 0 \quad\left(\bmod 2^{n}\right) \quad \text { and } \quad\left(\begin{array}{c}
2^{n}-1 \\
2 k
\end{array}\right) \equiv(-1)^{k}\left(\begin{array}{c}
2^{n-1}-1 \\
k
\end{array}\right) \quad\left(\bmod 2^{n}\right) .
\]
The first relation is immediate, as the sum on the left is equal to \(\left(\begin{array}{c}2^{n} \\ 2 k+1\end{array}\right)=\frac{2^{n}}{2 k+1}\left(\begin{array}{c}2^{n}-1 \\ 2 k\end{array}\right)\), hence is divisible by \(2^{n}\). The second relation:
\[
\left(\begin{array}{c}
2^{n}-1 \\
2 k
\end{array}\right)=\prod_{j=1}^{2 k} \frac{2^{n}-j}{j}=\prod_{i=1}^{k} \frac{2^{n}-(2 i-1)}{2 i-1} \cdot \prod_{i=1}^{k} \frac{2^{n-1}-i}{i} \equiv(-1)^{k}\left(\begin{array}{c}
2^{n-1}-1 \\
k
\end{array}\right) \quad\left(\bmod 2^{n}\right) .
\]
This prepares ground for a proof of the required result by induction on \(n\). The base case \(n=1\) is obvious. Assume the assertion is true for \(n-1\) and pass to \(n\), denoting \(a_{k}=\left(c^{2^{n-1}-1} k^{-1}\right.\), \(b_{m}=\left(\begin{array}{c}2^{n}-1 \\ m\end{array}\right)\). The induction hypothesis is that all the numbers \(a_{k}\left(0 \leq k < 2^{n-2}\right)\) are distinct \(\left(\bmod 2^{n-1}\right)\); the claim is that all the numbers \(b_{m}\left(0 \leq m < 2^{n-1}\right)\) are distinct \(\left(\bmod 2^{n}\right)\).
The congruence relations \((1)\) are restated as
\[
b_{2 k} \equiv(-1)^{k} a_{k} \equiv-b_{2 k+1} \quad\left(\bmod 2^{n}\right) .
\]
Shifting the exponent in the first relation of (1) from \(n\) to \(n-1\) we also have the congruence \(a_{2 i+1} \equiv-a_{2 i}\left(\bmod 2^{n-1}\right)\). We hence conclude:
If, for some \(j, k < 2^{n-2}, a_{k} \equiv-a_{j}\left(\bmod 2^{n-1}\right)\), then \(\{j, k\}=\{2 i, 2 i+1\}\) for some \(i\).
This is so because in the sequence \(\left(a_{k}: k < 2^{n-2}\right)\) each term \(a_{j}\) is complemented to \(0\left(\bmod 2^{n-1}\right)\) by only one other term \(a_{k}\), according to the induction hypothesis.
From (2) we see that \(b_{4 i} \equiv a_{2 i}\) and \(b_{4 i+3} \equiv a_{2 i+1}\left(\bmod 2^{n}\right)\). Let
\(M=\left\{m: 0 \leq m < 2^{n-1}, m \equiv 0\right.\) or \(\left.3(\bmod 4)\right\}, \quad L=\left\{l: 0 \leq l < 2^{n-1}, l \equiv 1\right.\) or \(\left.2(\bmod 4)\right\}\).
The last two congruences take on the unified form
\[
b_{m} \equiv a_{\lfloor m / 2\rfloor} \quad\left(\bmod 2^{n}\right) \quad \text { for all } \quad m \in M .
\]
Thus all the numbers \(b_{m}\) for \(m \in M\) are distinct \(\left(\bmod 2^{n}\right.\) ) because so are the numbers \(a_{k}\) (they are distinct \(\left(\bmod 2^{n-1}\right)\), hence also \(\left.\left(\bmod 2^{n}\right)\right)\).
Every \(l \in L\) is paired with a unique \(m \in M\) into a pair of the form \(\{2 k, 2 k+1\}\). So (2) implies that also all the \(b_{l}\) for \(l \in L\) are distinct \(\left(\bmod 2^{n}\right)\). It remains to eliminate the possibility that \(b_{m} \equiv b_{l}\left(\bmod 2^{n}\right)\) for some \(m \in M, l \in L\).
Suppose that such a situation occurs. Let \(m^{\prime} \in M\) be such that \(\left\{m^{\prime}, l\right\}\) is a pair of the form \(\{2 k, 2 k+1\}\), so that \((\) see \((2)) \quad b_{m^{\prime}} \equiv-b_{l}\left(\bmod 2^{n}\right)\). Hence \(b_{m^{\prime}} \equiv-b_{m}\left(\bmod 2^{n}\right)\). Since both \(m^{\prime}\) and \(m\) are in \(M\), we have by (4) \(b_{m^{\prime}} \equiv a_{j}, b_{m} \equiv a_{k}\left(\bmod 2^{n}\right)\) for \(j=\left\lfloor m^{\prime} / 2\right\rfloor, k=\lfloor m / 2\rfloor\).
Then \(a_{j} \equiv-a_{k}\left(\bmod 2^{n}\right)\). Thus, according to \((3), j=2 i, k=2 i+1\) for some \(i\) (or vice versa). The equality \(a_{2 i+1} \equiv-a_{2 i}\left(\bmod 2^{n}\right)\) now means that \(\left(\begin{array}{c}2^{n-1}-1 \\ 2 i\end{array}\right)+\left(\begin{array}{c}2^{n-1}-1 \\ 2 i+1\end{array}\right) \equiv 0\left(\bmod 2^{n}\right)\). However, the sum on the left is equal to \(\left(\begin{array}{l}2^{n-1} \\ 2 i+1\end{array}\right)\). A number of this form cannot be divisible by \(2^{n}\). This is a contradiction which concludes the induction step and proves the result.
