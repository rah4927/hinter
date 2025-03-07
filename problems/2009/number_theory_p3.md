---
id: fimo_2009_number_theory_p3
year: 2009
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2009 Number Theory Problem 3"
---

Let \(f\) be a non-constant function from the set of positive integers into the set of positive integers, such that \(a-b\) divides \(f(a)-f(b)\) for all distinct positive integers \(a, b\). Prove that there exist infinitely many primes \(p\) such that \(p\) divides \(f(c)\) for some positive integer \(c\).

---
Denote by \(v_{p}(a)\) the exponent of the prime \(p\) in the prime decomposition of \(a\).
Assume that there are only finitely many primes \(p_{1}, p_{2}, \ldots, p_{m}\) that divide some function value produced of \(f\).
There are infinitely many positive integers \(a\) such that \(v_{p_{i}}(a) > v_{p_{i}}(f(1))\) for all \(i=1,2, \ldots, m\), e.g. \(a=\left(p_{1} p_{2} \ldots p_{m}\right)^{\alpha}\) with \(\alpha\) sufficiently large. Pick any such \(a\). The condition of the problem then yields \(a \mid(f(a+1)-f(1))\). Assume \(f(a+1) \neq f(1)\). Then we must have \(v_{p_{i}}(f(a+1)) \neq\) \(v_{p_{i}}(f(1))\) for at least one \(i\). This yields \(v_{p_{i}}(f(a+1)-f(1))=\min \left\{v_{p_{i}}(f(a+1)), v_{p_{i}}(f(1))\right\} \leq\) \(v_{p_{1}}(f(1)) < v_{p_{i}}(a)\). But this contradicts the fact that \(a \mid(f(a+1)-f(1))\).
Hence we must have \(f(a+1)=f(1)\) for all such \(a\).
Now, for any positive integer \(b\) and all such \(a\), we have \((a+1-b) \mid(f(a+1)-f(b))\), i.e., \((a+1-b) \mid(f(1)-f(b))\). Since this is true for infinitely many positive integers \(a\) we must have \(f(b)=f(1)\). Hence \(f\) is a constant function, a contradiction. Therefore, our initial assumption was false and there are indeed infinitely many primes \(p\) dividing \(f(c)\) for some positive integer \(c\).
