---
id: fimo_2014_number_theory_p4
year: 2014
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2014 Number Theory Problem 4"
---

Let \(n > 1\) be a given integer. Prove that infinitely many terms of the sequence \(\left(a_{k}\right)_{k \geqslant 1}\), defined by
\[
a_{k}=\left\lfloor\frac{n^{k}}{k}\right\rfloor,
\]
are odd. (For a real number \(x,\lfloor x\rfloor\) denotes the largest integer not exceeding \(x\).)

---
If \(n\) is odd, let \(k=n^{m}\) for \(m=1,2, \ldots\). Then \(a_{k}=n^{n^{m}-m}\), which is odd for each \(m\).
Henceforth, assume that \(n\) is even, say \(n=2 t\) for some integer \(t \geqslant 1\). Then, for any \(m \geqslant 2\), the integer \(n^{2^{m}}-2^{m}=2^{m}\left(2^{2^{m}-m} \cdot t^{2^{m}}-1\right)\) has an odd prime divisor \(p\), since \(2^{m}-m > 1\). Then, for \(k=p \cdot 2^{m}\), we have
\[
n^{k}=\left(n^{2^{m}}\right)^{p} \equiv\left(2^{m}\right)^{p}=\left(2^{p}\right)^{m} \equiv 2^{m},
\]
where the congruences are taken modulo \(p\) (recall that \(2^{p} \equiv 2(\bmod p)\), by Fermat's little theorem). Also, from \(n^{k}-2^{m} < n^{k} < n^{k}+2^{m}(p-1)\), we see that the fraction \(\frac{n^{k}}{k}\) lies strictly between the consecutive integers \(\frac{n^{k}-2^{m}}{p \cdot 2^{m}}\) and \(\frac{n^{k}+2^{m}(p-1)}{p \cdot 2^{m}}\), which gives
\[
\left\lfloor\frac{n^{k}}{k}\right\rfloor=\frac{n^{k}-2^{m}}{p \cdot 2^{m}} .
\]
We finally observe that \(\frac{n^{k}-2^{m}}{p \cdot 2^{m}}=\frac{\frac{n^{k}}{2^{m}}-1}{p}\) is an odd integer, since the integer \(\frac{n^{k}}{2^{m}}-1\) is odd (recall that \(k > m\) ). Note that for different values of \(m\), we get different values of \(k\), due to the different powers of 2 in the prime factorisation of \(k\).
