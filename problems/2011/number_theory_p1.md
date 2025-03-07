---
id: fimo_2011_number_theory_p1
year: 2011
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2011 Number Theory Problem 1"
---

For any integer \(d > 0\), let \(f(d)\) be the smallest positive integer that has exactly \(d\) positive divisors (so for example we have \(f(1)=1, f(5)=16\), and \(f(6)=12\) ). Prove that for every integer \(k \geq 0\) the number \(f\left(2^{k}\right)\) divides \(f\left(2^{k+1}\right)\).

---
For any positive integer \(n\), let \(d(n)\) be the number of positive divisors of \(n\). Let \(n=\prod_{p} p^{a(p)}\) be the prime factorization of \(n\) where \(p\) ranges over the prime numbers, the integers \(a(p)\) are nonnegative and all but finitely many \(a(p)\) are zero. Then we have \(d(n)=\prod_{p}(a(p)+1)\). Thus, \(d(n)\) is a power of 2 if and only if for every prime \(p\) there is a nonnegative integer \(b(p)\) with \(a(p)=2^{b(p)}-1=1+2+2^{2}+\cdots+2^{b(p)-1}\). We then have
\[
n=\prod_{p} \prod_{i=0}^{b(p)-1} p^{2^{i}}, \quad \text { and } \quad d(n)=2^{k} \quad \text { with } \quad k=\sum_{p} b(p) .
\]
Let \(\mathcal{S}\) be the set of all numbers of the form \(p^{2^{r}}\) with \(p\) prime and \(r\) a nonnegative integer. Then we deduce that \(d(n)\) is a power of 2 if and only if \(n\) is the product of the elements of some finite subset \(\mathcal{T}\) of \(\mathcal{S}\) that satisfies the following condition: for all \(t \in \mathcal{T}\) and \(s \in \mathcal{S}\) with \(s \mid t\) we have \(s \in \mathcal{T}\). Moreover, if \(d(n)=2^{k}\) then the corresponding set \(\mathcal{T}\) has \(k\) elements.
Note that the set \(\mathcal{T}_{k}\) consisting of the smallest \(k\) elements from \(\mathcal{S}\) obviously satisfies the condition above. Thus, given \(k\), the smallest \(n\) with \(d(n)=2^{k}\) is the product of the elements of \(\mathcal{T}_{k}\). This \(n\) is \(f\left(2^{k}\right)\). Since obviously \(\mathcal{T}_{k} \subset \mathcal{T}_{k+1}\), it follows that \(f\left(2^{k}\right) \mid f\left(2^{k+1}\right)\).
