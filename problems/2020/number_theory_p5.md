---
id: fimo_2020_number_theory_p5
year: 2020
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2020 Number Theory Problem 5"
---

Determine all functions \(f\) defined on the set of all positive integers and taking non-negative integer values, satisfying the three conditions:
(i) \(f(n) \neq 0\) for at least one \(n\);
(ii) \(f(x y)=f(x)+f(y)\) for every positive integers \(x\) and \(y\);
(iii) there are infinitely many positive integers \(n\) such that \(f(k)=f(n-k)\) for all \(k < n\).


---
If a number \(n\) is a product of primes, \(n=p_{1} p_{2} \cdot \ldots \cdot p_{k}\), then
\[
f(n)=f\left(p_{1}\right)+\ldots+f\left(p_{k}\right)
\]
in particular, \(f(1)=0\) (since \(f(1)=f(1)+f(1)\) ).
It is also clear that \(f(n)=0\) implies \(f(p)=0\) for all primes \(p\) dividing \(n\).
Let us call positive integer \(n \operatorname{good}\) if \(f(k)=f(n-k)\) for \(0 < k < n\). If \(n\) is good then each its divisor \(d\) is also good; indeed, if \(n=d m\) then
\[
f(k)=f(m k)-f(m)=f(n-m k)-f(m)=f(m(d-k))-f(m)=f(d-k)
\]
for \(0 < k < d\). Thus, good numbers are products of good primes.
It follows immediately from (i) that there exists a prime \(p\) such that \(f(p) \neq 0\); let \(p\) be the smallest such prime. Then \(f(r)=0\) for all \(r < p\) (since all prime divisors of \(r < p\) are less than \(p\) ). Now every good number \(n > p\) must be divisible by \(p\). Indeed, if \(n=p k+r\) is a good number, \(k > 0,0 < r < p\), then \(f(p) \leqslant f(p k)=f(n-p k)=f(r)=0\), a contradiction. Since any divisor of a good number is also good, this means that if a divisor \(r\) of a good number is not divisible by \(p\), it is less than \(p\). Thus all good numbers have the form \(r \cdot p^{k}\) with \(r < p\). The condition (iii) implies that \(k\) can be arbitrarily large, consequently all powers of \(p\) are good.
If \(q \neq p\) is a prime, \(p^{q-1}-1\) is divisible by \(q\) and \(p^{q-1}\) is good. Then \(f(q) \leqslant f\left(p^{q-1}-1\right)=\) \(f(1)=0\), that is, \(f(q)=0\).
Now we see that \(f(n)=\nu_{p}(n) \cdot c\), where \(c=f(p)\). The conditions (i) and (ii) for all such functions with \(c \neq 0\) are obvious; the condition (iii) holds for all \(n=p^{m}\), since \(\nu_{p}\left(p^{m}-k\right)=\nu_{p}(k)\) when \(0 < k < p^{m}\).
