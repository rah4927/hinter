---
id: fimo_2016_number_theory_p6
year: 2016
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2016 Number Theory Problem 6"
---

Denote by \(\mathbb{N}\) the set of all positive integers. Find all functions \(f: \mathbb{N} \rightarrow \mathbb{N}\) such that for all positive integers \(m\) and \(n\), the integer \(f(m)+f(n)-m n\) is nonzero and divides \(m f(m)+n f(n)\).

The final answer is \(f(n)=n^{2}\) for any \(n \in \mathbb{N}\).

---
It is given that

\[
f(m)+f(n)-m n \mid m f(m)+n f(n) .
\]

Taking \(m=n=1\) in (1), we have \(2 f(1)-1 \mid 2 f(1)\). Then \(2 f(1)-1 \mid 2 f(1)-(2 f(1)-1)=1\) and hence \(f(1)=1\).

Let \(p \geqslant 7\) be a prime. Taking \(m=p\) and \(n=1\) in (1), we have \(f(p)-p+1 \mid p f(p)+1\) and hence

\[
f(p)-p+1 \mid p f(p)+1-p(f(p)-p+1)=p^{2}-p+1 .
\]

If \(f(p)-p+1=p^{2}-p+1\), then \(f(p)=p^{2}\). If \(f(p)-p+1 \neq p^{2}-p+1\), as \(p^{2}-p+1\) is an odd positive integer, we have \(p^{2}-p+1 \geqslant 3(f(p)-p+1)\), that is,

\[
f(p) \leqslant \frac{1}{3}\left(p^{2}+2 p-2\right) .
\]

Taking \(m=n=p\) in (1), we have \(2 f(p)-p^{2} \mid 2 p f(p)\). This implies

\[
2 f(p)-p^{2} \mid 2 p f(p)-p\left(2 f(p)-p^{2}\right)=p^{3} .
\]

By \((2)\) and \(f(p) \geqslant 1\), we get

\[
-p^{2} < 2 f(p)-p^{2} \leqslant \frac{2}{3}\left(p^{2}+2 p-2\right)-p^{2} < -p
\]

since \(p \geqslant 7\). This contradicts the fact that \(2 f(p)-p^{2}\) is a factor of \(p^{3}\). Thus we have proved that \(f(p)=p^{2}\) for all primes \(p \geqslant 7\).

Let \(n\) be a fixed positive integer. Choose a sufficiently large prime \(p\). Consider \(m=p\) in (1). We obtain

\[
f(p)+f(n)-p n \mid p f(p)+n f(n)-n(f(p)+f(n)-p n)=p f(p)-n f(p)+p n^{2} .
\]

As \(f(p)=p^{2}\), this implies \(p^{2}-p n+f(n) \mid p\left(p^{2}-p n+n^{2}\right)\). As \(p\) is sufficiently large and \(n\) is fixed, \(p\) cannot divide \(f(n)\), and so \(\left(p, p^{2}-p n+f(n)\right)=1\). It follows that \(p^{2}-p n+f(n) \mid p^{2}-p n+n^{2}\) and hence

\[
p^{2}-p n+f(n) \mid\left(p^{2}-p n+n^{2}\right)-\left(p^{2}-p n+f(n)\right)=n^{2}-f(n) .
\]

Note that \(n^{2}-f(n)\) is fixed while \(p^{2}-p n+f(n)\) is chosen to be sufficiently large. Therefore, we must have \(n^{2}-f(n)=0\) so that \(f(n)=n^{2}\) for any positive integer \(n\).

Finally, we check that when \(f(n)=n^{2}\) for any positive integer \(n\), then

\[
f(m)+f(n)-m n=m^{2}+n^{2}-m n
\]

and

\[
m f(m)+n f(n)=m^{3}+n^{3}=(m+n)\left(m^{2}+n^{2}-m n\right) .
\]

The latter expression is divisible by the former for any positive integers \(m, n\). This shows \(f(n)=n^{2}\) is the only solution.
