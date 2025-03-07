---
id: fimo_2009_number_theory_p2_2
year: 2009
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2009 Number Theory Problem 2"
---

A positive integer \(N\) is called balanced, if \(N=1\) or if \(N\) can be written as a product of an even number of not necessarily distinct primes. Given positive integers \(a\) and \(b\), consider the polynomial \(P\) defined by \(P(x)=(x+a)(x+b)\).
Prove that if \(P(n)\) is balanced for all positive integers \(n\), then \(a=b\).

---
Define a function \(f\) on the set of positive integers by \(f(n)=0\) if \(n\) is balanced and \(f(n)=1\) otherwise. Clearly, \(f(n m) \equiv f(n)+f(m) \bmod 2\) for all positive integers \(n, m\).
Now suppose \(P(n)\) is balanced for all positive integers \(n\) and \(a < b\). Set \(n=k(b-a)-a\) for sufficiently large \(k\), such that \(n\) is positive. Then \(P(n)=k(k+1)(b-a)^{2}\), and this number can only be balanced, if \(f(k)=f(k+1)\) holds. Thus, the sequence \(f(k)\) must become constant for sufficiently large \(k\). But this is not possible, as for every prime \(p\) we have \(f(p)=1\) and for every square \(t^{2}\) we have \(f\left(t^{2}\right)=0\).
Hence \(a=b\).
