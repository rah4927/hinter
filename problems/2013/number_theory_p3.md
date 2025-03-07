---
id: fimo_2013_number_theory_p3
year: 2013
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2013 Number Theory Problem 3"
---

Prove that there exist infinitely many positive integers \(n\) such that the largest prime divisor of \(n^{4}+n^{2}+1\) is equal to the largest prime divisor of \((n+1)^{4}+(n+1)^{2}+1\).

---
Let \(p_{n}\) be the largest prime divisor of \(n^{4}+n^{2}+1\) and let \(q_{n}\) be the largest prime divisor of \(n^{2}+n+1\). Then \(p_{n}=q_{n^{2}}\), and from
\[
n^{4}+n^{2}+1=\left(n^{2}+1\right)^{2}-n^{2}=\left(n^{2}-n+1\right)\left(n^{2}+n+1\right)=\left((n-1)^{2}+(n-1)+1\right)\left(n^{2}+n+1\right)
\]
it follows that \(p_{n}=\max \left\{q_{n}, q_{n-1}\right\}\) for \(n \geqslant 2\). Keeping in mind that \(n^{2}-n+1\) is odd, we have
\[
\operatorname{gcd}\left(n^{2}+n+1, n^{2}-n+1\right)=\operatorname{gcd}\left(2 n, n^{2}-n+1\right)=\operatorname{gcd}\left(n, n^{2}-n+1\right)=1 .
\]
Therefore \(q_{n} \neq q_{n-1}\).
To prove the result, it suffices to show that the set
\[
S=\left\{n \in \mathbb{Z}_{\geqslant 2} \mid q_{n} > q_{n-1} \text { and } q_{n} > q_{n+1}\right\}
\]
is infinite, since for each \(n \in S\) one has
\[
p_{n}=\max \left\{q_{n}, q_{n-1}\right\}=q_{n}=\max \left\{q_{n}, q_{n+1}\right\}=p_{n+1} .
\]
Suppose on the contrary that \(S\) is finite. Since \(q_{2}=7 < 13=q_{3}\) and \(q_{3}=13 > 7=q_{4}\), the set \(S\) is non-empty. Since it is finite, we can consider its largest element, say \(m\).
Note that it is impossible that \(q_{m} > q_{m+1} > q_{m+2} > \ldots\) because all these numbers are positive integers, so there exists a \(k \geqslant m\) such that \(q_{k} < q_{k+1}\) (recall that \(q_{k} \neq q_{k+1}\) ). Next observe that it is impossible to have \(q_{k} < q_{k+1} < q_{k+2} < \ldots\), because \(q_{(k+1)^{2}}=p_{k+1}=\max \left\{q_{k}, q_{k+1}\right\}=q_{k+1}\), so let us take the smallest \(\ell \geqslant k+1\) such that \(q_{\ell} > q_{\ell+1}\). By the minimality of \(\ell\) we have \(q_{\ell-1} < q_{\ell}\), so \(\ell \in S\). Since \(\ell \geqslant k+1 > k \geqslant m\), this contradicts the maximality of \(m\), and hence \(S\) is indeed infinite.
