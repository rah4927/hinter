---
id: fimo_2018_number_theory_p6
year: 2018
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2018 Number Theory Problem 6"
---

Let \(f:\{1,2,3, \ldots\} \rightarrow\{2,3, \ldots\}\) be a function such that \(f(m+n) \mid f(m)+f(n)\) for all pairs \(m, n\) of positive integers. Prove that there exists a positive integer \(c > 1\) which divides all values of \(f\).

---
For every positive integer \(m\), define \(S_{m}=\{n: m \mid f(n)\}\).
Lemma. If the set \(S_{m}\) is infinite, then \(S_{m}=\{d, 2 d, 3 d, \ldots\}=d \cdot \mathbb{Z}_{ > 0}\) for some positive integer \(d\).
Proof. Let \(d=\min S_{m}\); the definition of \(S_{m}\) yields \(m \mid f(d)\).
Whenever \(n \in S_{m}\) and \(n > d\), we have \(m|f(n)| f(n-d)+f(d)\), so \(m \mid f(n-d)\) and therefore \(n-d \in S_{m}\). Let \(r \leqslant d\) be the least positive integer with \(n \equiv r(\bmod d)\); repeating the same step, we can see that \(n-d, n-2 d, \ldots, r \in S_{m}\). By the minimality of \(d\), this shows \(r=d\) and therefore \(d \mid n\).
Starting from an arbitrarily large element of \(S_{m}\), the process above reaches all multiples of \(d\); so they all are elements of \(S_{m}\).
The solution for the problem will be split into two cases.
Case 1: The function \(f\) is bounded.
Call a prime \(p\) frequent if the set \(S_{p}\) is infinite, i.e., if \(p\) divides \(f(n)\) for infinitely many positive integers \(n\); otherwise call \(p\) sporadic. Since the function \(f\) is bounded, there are only a finite number of primes that divide at least one \(f(n)\); so altogether there are finitely many numbers \(n\) such that \(f(n)\) has a sporadic prime divisor. Let \(N\) be a positive integer, greater than all those numbers \(n\).
Let \(p_{1}, \ldots, p_{k}\) be the frequent primes. By the lemma we have \(S_{p_{i}}=d_{i} \cdot \mathbb{Z}_{ > 0}\) for some \(d_{i}\). Consider the number
\[
n=N d_{1} d_{2} \cdots d_{k}+1
\]
Due to \(n > N\), all prime divisors of \(f(n)\) are frequent primes. Let \(p_{i}\) be any frequent prime divisor of \(f(n)\). Then \(n \in S_{p_{i}}\), and therefore \(d_{i} \mid n\). But \(n \equiv 1\left(\bmod d_{i}\right)\), which means \(d_{i}=1\). Hence \(S_{p_{i}}=1 \cdot \mathbb{Z}_{ > 0}=\mathbb{Z}_{ > 0}\) and therefore \(p_{i}\) is a common divisor of all values \(f(n)\).
Case 2: \(f\) is unbounded.
We prove that \(f(1)\) divides all \(f(n)\).
Let \(a=f(1)\). Since \(1 \in S_{a}\), by the lemma it suffices to prove that \(S_{a}\) is an infinite set.
Call a positive integer \(p\) a peak if \(f(p) > \max (f(1), \ldots, f(p-1))\). Since \(f\) is not bounded, there are infinitely many peaks. Let \(1=p_{1} < p_{2} < \ldots\) be the sequence of all peaks, and let \(h_{k}=f\left(p_{k}\right)\). Notice that for any peak \(p_{i}\) and for any \(k < p_{i}\), we have \(f\left(p_{i}\right) \mid f(k)+f\left(p_{i}-k\right) < \) \(2 f\left(p_{i}\right)\), hence
\[
f(k)+f\left(p_{i}-k\right)=f\left(p_{i}\right)=h_{i}
\]
By the pigeonhole principle, among the numbers \(h_{1}, h_{2}, \ldots\) there are infinitely many that are congruent modulo \(a\). Let \(k_{0} < k_{1} < k_{2} < \ldots\) be an infinite sequence of positive integers such that \(h_{k_{0}} \equiv h_{k_{1}} \equiv \ldots(\bmod a)\). Notice that
\[
f\left(p_{k_{i}}-p_{k_{0}}\right)=f\left(p_{k_{i}}\right)-f\left(p_{k_{0}}\right)=h_{k_{i}}-h_{k_{0}} \equiv 0 \quad(\bmod a)
\]
so \(p_{k_{i}}-p_{k_{0}} \in S_{a}\) for all \(i=1,2, \ldots\) This provides infinitely many elements in \(S_{a}\).
Hence, \(S_{a}\) is an infinite set, and therefore \(f(1)=a\) divides \(f(n)\) for every \(n\).
