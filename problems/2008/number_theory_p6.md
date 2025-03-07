---
id: fimo_2008_number_theory_p6
year: 2008
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2008 Number Theory Problem 6"
---

Prove that there exist infinitely many positive integers \(n\) such that \(n^{2}+1\) has a prime divisor greater than \(2 n+\sqrt{2 n}\).

---
Let \(p \equiv 1(\bmod 8)\) be a prime. The congruence \(x^{2} \equiv-1(\bmod p)\) has two solutions in \([1, p-1]\) whose sum is \(p\). If \(n\) is the smaller one of them then \(p\) divides \(n^{2}+1\) and \(n \leq(p-1) / 2\). We show that \(p > 2 n+\sqrt{10 n}\).
Let \(n=(p-1) / 2-\ell\) where \(\ell \geq 0\). Then \(n^{2} \equiv-1(\bmod p)\) gives
\[
\left(\frac{p-1}{2}-\ell\right)^{2} \equiv-1 \quad(\bmod p) \quad \text { or } \quad(2 \ell+1)^{2}+4 \equiv 0 \quad(\bmod p)
\]
Thus \((2 \ell+1)^{2}+4=r p\) for some \(r \geq 0\). As \((2 \ell+1)^{2} \equiv 1 \equiv p(\bmod 8)\), we have \(r \equiv 5(\bmod 8)\), so that \(r \geq 5\). Hence \((2 \ell+1)^{2}+4 \geq 5 p\), implying \(\ell \geq(\sqrt{5 p-4}-1) / 2\). Set \(\sqrt{5 p-4}=u\) for clarity; then \(\ell \geq(u-1) / 2\). Therefore
\[
n=\frac{p-1}{2}-\ell \leq \frac{1}{2}(p-u) .
\]
Combined with \(p=\left(u^{2}+4\right) / 5\), this leads to \(u^{2}-5 u-10 n+4 \geq 0\). Solving this quadratic inequality with respect to \(u \geq 0\) gives \(u \geq(5+\sqrt{40 n+9}) / 2\). So the estimate \(n \leq(p-u) / 2\) leads to
\[
p \geq 2 n+u \geq 2 n+\frac{1}{2}(5+\sqrt{40 n+9}) > 2 n+\sqrt{10 n} .
\]
Since there are infinitely many primes of the form \(8 k+1\), it follows easily that there are also infinitely many \(n\) with the stated property.
