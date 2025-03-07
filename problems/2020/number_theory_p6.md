---
id: fimo_2020_number_theory_p6
year: 2020
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2020 Number Theory Problem 6"
---

For a positive integer \(n\), let \(d(n)\) be the number of positive divisors of \(n\), and let \(\varphi(n)\) be the number of positive integers not exceeding \(n\) which are coprime to \(n\). Does there exist a constant \(C\) such that
\[
\frac{\varphi(d(n))}{d(\varphi(n))} \leqslant C
\]
for all \(n \geqslant 1\) ?


---
Fix \(N > 1\), let \(p_{1}, \ldots, p_{k}\) be all primes between 1 and \(N\) and \(p_{k+1}, \ldots, p_{k+s}\) be all primes between \(N+1\) and \(2 N\). Since for \(j \leqslant k+s\) all prime divisors of \(p_{j}-1\) do not exceed \(N\), we have
\[
\prod_{j=1}^{k+s}\left(p_{j}-1\right)=\prod_{i=1}^{k} p_{i}^{c_{i}}
\]
with some fixed exponents \(c_{1}, \ldots, c_{k}\). Choose a huge prime number \(q\) and consider a number
\[
n=\left(p_{1} \cdot \ldots \cdot p_{k}\right)^{q-1} \cdot\left(p_{k+1} \cdot \ldots \cdot p_{k+s}\right)
\]
Then
\[
\varphi(d(n))=\varphi\left(q^{k} \cdot 2^{s}\right)=q^{k-1}(q-1) 2^{s-1}
\]
and
\[
d(\varphi(n))=d\left(\left(p_{1} \cdot \ldots \cdot p_{k}\right)^{q-2} \prod_{i=1}^{k+s}\left(p_{i}-1\right)\right)=d\left(\prod_{i=1}^{k} p_{i}^{q-2+c_{i}}\right)=\prod_{i=1}^{k}\left(q-1+c_{i}\right),
\]
so
\[
\frac{\varphi(d(n))}{d(\varphi(n))}=\frac{q^{k-1}(q-1) 2^{s-1}}{\prod_{i=1}^{k}\left(q-1+c_{i}\right)}=2^{s-1} \cdot \frac{q-1}{q} \cdot \prod_{i=1}^{k} \frac{q}{q-1+c_{i}}
\]
which can be made arbitrarily close to \(2^{s-1}\) by choosing \(q\) large enough. It remains to show that \(s\) can be arbitrarily large, i.e. that there can be arbitrarily many primes between \(N\) and \(2 N\).
This follows, for instance, from the well-known fact that \(\sum \frac{1}{p}=\infty\), where the sum is taken over the set \(\mathbb{P}\) of prime numbers. Indeed, if, for some constant \(C\), there were always at most \(C\) primes between \(2^{\ell}\) and \(2^{\ell+1}\), we would have
\[
\sum_{p \in \mathbb{P}} \frac{1}{p}=\sum_{\ell=0}^{\infty} \sum_{\substack{p \in \mathbb{P} \\ p \in\left[2^{\ell}, 2^{\ell+1}\right)}} \frac{1}{p} \leqslant \sum_{\ell=0}^{\infty} \frac{C}{2^{\ell}} < \infty
\]
which is a contradiction.
