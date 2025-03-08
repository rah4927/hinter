---
id: fimo_2015_number_theory_p3
year: 2015
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2015 Number Theory Problem 3"
---

Let \(m\) and \(n\) be positive integers such that \(m > n\). Define \(x_{k}=(m+k) /(n+k)\) for \(k=\) \(1,2, \ldots, n+1\). Prove that if all the numbers \(x_{1}, x_{2}, \ldots, x_{n+1}\) are integers, then \(x_{1} x_{2} \cdots x_{n+1}-1\) is divisible by an odd prime.

---
Assume that \(x_{1}, x_{2}, \ldots, x_{n+1}\) are integers. Define the integers

\[
a_{k}=x_{k}-1=\frac{m+k}{n+k}-1=\frac{m-n}{n+k} > 0
\]

for \(k=1,2, \ldots, n+1\).

Let \(P=x_{1} x_{2} \cdots x_{n+1}-1\). We need to prove that \(P\) is divisible by an odd prime, or in other words, that \(P\) is not a power of 2 . To this end, we investigate the powers of 2 dividing the numbers \(a_{k}\).

Let \(2^{d}\) be the largest power of 2 dividing \(m-n\), and let \(2^{c}\) be the largest power of 2 not exceeding \(2 n+1\). Then \(2 n+1 \leqslant 2^{c+1}-1\), and so \(n+1 \leqslant 2^{c}\). We conclude that \(2^{c}\) is one of the numbers \(n+1, n+2, \ldots, 2 n+1\), and that it is the only multiple of \(2^{c}\) appearing among these numbers. Let \(\ell\) be such that \(n+\ell=2^{c}\). Since \(\frac{m-n}{n+\ell}\) is an integer, we have \(d \geqslant c\). Therefore, \(2^{d-c+1} \nmid a_{\ell}=\frac{m-n}{n+\ell}\), while \(2^{d-c+1} \mid a_{k}\) for all \(k \in\{1, \ldots, n+1\} \backslash\{\ell\}\).

Computing modulo \(2^{d-c+1}\), we get

\[
P=\left(a_{1}+1\right)\left(a_{2}+1\right) \cdots\left(a_{n+1}+1\right)-1 \equiv\left(a_{\ell}+1\right) \cdot 1^{n}-1 \equiv a_{\ell} \not \equiv 0 \quad\left(\bmod 2^{d-c+1}\right) .
\]

Therefore, \(2^{d-c+1} \nmid P\).

On the other hand, for any \(k \in\{1, \ldots, n+1\} \backslash\{\ell\}\), we have \(2^{d-c+1} \mid a_{k}\). So \(P \geqslant a_{k} \geqslant 2^{d-c+1}\), and it follows that \(P\) is not a power of 2 .

Comment. Instead of attempting to show that \(P\) is not a power of 2 , one may try to find an odd factor of \(P\) (greater than 1 ) as follows:

From \(a_{k}=\frac{m-n}{n+k} \in \mathbb{Z}_{ > 0}\), we get that \(m-n\) is divisible by \(n+1, n+2, \ldots, 2 n+1\), and thus it is also divisible by their least common multiple \(L\). So \(m-n=q L\) for some positive integer \(q\); hence \(x_{k}=q \cdot \frac{L}{n+k}+1\).

Then, since \(n+1 \leqslant 2^{c}=n+\ell \leqslant 2 n+1 \leqslant 2^{c+1}-1\), we have \(2^{c} \mid L\), but \(2^{c+1} \nmid L\). So \(\frac{L}{n+\ell}\) is odd, while \(\frac{L}{n+k}\) is even for \(k \neq \ell\). Computing modulo \(2 q\) yields

\[
x_{1} x_{2} \cdots x_{n+1}-1 \equiv(q+1) \cdot 1^{n}-1 \equiv q \quad(\bmod 2 q) .
\]

Thus, \(x_{1} x_{2} \cdots x_{n+1}-1=2 q r+q=q(2 r+1)\) for some integer \(r\).

Since \(x_{1} x_{2} \cdots x_{n+1}-1 \geqslant x_{1} x_{2}-1 \geqslant(q+1)^{2}-1 > q\), we have \(r \geqslant 1\). This implies that \(x_{1} x_{2} \cdots x_{n+1}-1\) is divisible by an odd prime.
