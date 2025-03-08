---
id: fimo_2007_number_theory_p2
year: 2007
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2007 Number Theory Problem 2"
---

Let \(b, n > 1\) be integers. Suppose that for each \(k > 1\) there exists an integer \(a_{k}\) such that \(b-a_{k}^{n}\) is divisible by \(k\). Prove that \(b=A^{n}\) for some integer \(A\).

---
Let the prime factorization of \(b\) be \(b=p_{1}^{\alpha_{1}} \ldots p_{s}^{\alpha_{s}}\), where \(p_{1}, \ldots, p_{s}\) are distinct primes. Our goal is to show that all exponents \(\alpha_{i}\) are divisible by \(n\), then we can set \(A=p_{1}^{\alpha_{1} / n} \ldots p_{s}^{\alpha_{s} / n}\).

Apply the condition for \(k=b^{2}\). The number \(b-a_{k}^{n}\) is divisible by \(b^{2}\) and hence, for each \(1 \leq i \leq s\), it is divisible by \(p_{i}^{2 \alpha_{i}} > p_{i}^{\alpha_{i}}\) as well. Therefore

\[
a_{k}^{n} \equiv b \equiv 0 \quad\left(\bmod p_{i}^{\alpha_{i}}\right)
\]

and

\[
a_{k}^{n} \equiv b \not \equiv 0 \quad\left(\bmod p_{i}^{\alpha_{i}+1}\right),
\]

which implies that the largest power of \(p_{i}\) dividing \(a_{k}^{n}\) is \(p_{i}^{\alpha_{i}}\). Since \(a_{k}^{n}\) is a complete \(n\)th power, this implies that \(\alpha_{i}\) is divisible by \(n\).
