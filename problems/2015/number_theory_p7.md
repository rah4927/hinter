---
id: fimo_2015_number_theory_p7
year: 2015
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2015 Number Theory Problem 7"
---

Let \(\mathbb{Z}_{ > 0}\) denote the set of positive integers. For any positive integer \(k\), a function \(f: \mathbb{Z}_{ > 0} \rightarrow \mathbb{Z}_{ > 0}\) is called \(k-\operatorname{good}\) if \(\operatorname{gcd}(f(m)+n, f(n)+m) \leqslant k\) for all \(m \neq n\). Find all \(k\) such that there exists a \(k\)-good function.


---
For any function \(f: \mathbb{Z}_{ > 0} \rightarrow \mathbb{Z}_{ > 0}\), let \(G_{f}(m, n)=\operatorname{gcd}(f(m)+n, f(n)+m)\). Note that a \(k\)-good function is also \((k+1)\)-good for any positive integer \(k\). Hence, it suffices to show that there does not exist a 1-good function and that there exists a 2-good function.
We first show that there is no 1-good function. Suppose that there exists a function \(f\) such that \(G_{f}(m, n)=1\) for all \(m \neq n\). Now, if there are two distinct even numbers \(m\) and \(n\) such that \(f(m)\) and \(f(n)\) are both even, then \(2 \mid G_{f}(m, n)\), a contradiction. A similar argument holds if there are two distinct odd numbers \(m\) and \(n\) such that \(f(m)\) and \(f(n)\) are both odd. Hence we can choose an even \(m\) and an odd \(n\) such that \(f(m)\) is odd and \(f(n)\) is even. This also implies that \(2 \mid G_{f}(m, n)\), a contradiction.
We now construct a 2-good function. Define \(f(n)=2^{g(n)+1}-n-1\), where \(g\) is defined recursively by \(g(1)=1\) and \(g(n+1)=\left(2^{g(n)+1}\right) !\).
For any positive integers \(m > n\), set
\[
A=f(m)+n=2^{g(m)+1}-m+n-1, \quad B=f(n)+m=2^{g(n)+1}-n+m-1 .
\]
We need to show that \(\operatorname{gcd}(A, B) \leqslant 2\). First, note that \(A+B=2^{g(m)+1}+2^{g(n)+1}-2\) is not divisible by 4 , so that \(4 \nmid \operatorname{gcd}(A, B)\). Now we suppose that there is an odd prime \(p\) for which \(p \mid \operatorname{gcd}(A, B)\) and derive a contradiction.
We first claim that \(2^{g(m-1)+1} \geqslant B\). This is a rather weak bound; one way to prove it is as follows. Observe that \(g(k+1) > g(k)\) and hence \(2^{g(k+1)+1} \geqslant 2^{g(k)+1}+1\) for every positive integer \(k\). By repeatedly applying this inequality, we obtain \(2^{g(m-1)+1} \geqslant 2^{g(n)+1}+(m-1)-n=B\).
Now, since \(p \mid B\), we have \(p-1 < B \leqslant 2^{g(m-1)+1}\), so that \(p-1 \mid\left(2^{g(m-1)+1}\right)\) ! \(=g(m)\). Hence \(2^{g(m)} \equiv 1(\bmod p)\), which yields \(A+B \equiv 2^{g(n)+1}(\bmod p)\). However, since \(p \mid A+B\), this implies that \(p=2\), a contradiction.
