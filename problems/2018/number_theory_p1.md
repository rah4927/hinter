---
id: fimo_2018_number_theory_p1
year: 2018
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2018 Number Theory Problem 1"
---

Determine all pairs \((n, k)\) of distinct positive integers such that there exists a positive integer \(s\) for which the numbers of divisors of \(s n\) and of \(s k\) are equal.

The final answers are all pairs \((n, k)\) such that \(n \nmid k\) and \(k \nmid n\).

---
As usual, the number of divisors of a positive integer \(n\) is denoted by \(d(n)\). If \(n=\prod_{i} p_{i}^{\alpha_{i}}\) is the prime factorisation of \(n\), then \(d(n)=\prod_{i}\left(\alpha_{i}+1\right)\).

We start by showing that one cannot find any suitable number \(s\) if \(k \mid n\) or \(n \mid k\) (and \(k \neq n)\). Suppose that \(n \mid k\), and choose any positive integer \(s\). Then the set of divisors of \(s n\) is a proper subset of that of \(s k\), hence \(d(s n) < d(s k)\). Therefore, the pair \((n, k)\) does not satisfy the problem requirements. The case \(k \mid n\) is similar.

Now assume that \(n \nmid k\) and \(k \nmid n\). Let \(p_{1}, \ldots, p_{t}\) be all primes dividing \(n k\), and consider the prime factorisations

\[
n=\prod_{i=1}^{t} p_{i}^{\alpha_{i}} \quad \text { and } \quad k=\prod_{i=1}^{t} p_{i}^{\beta_{i}} .
\]

It is reasonable to search for the number \(s\) having the form

\[
s=\prod_{i=1}^{t} p_{i}^{\gamma_{i}}
\]

The (nonnegative integer) exponents \(\gamma_{i}\) should be chosen so as to satisfy

\[
\frac{d(s n)}{d(s k)}=\prod_{i=1}^{t} \frac{\alpha_{i}+\gamma_{i}+1}{\beta_{i}+\gamma_{i}+1}=1 .
\]

First of all, if \(\alpha_{i}=\beta_{i}\) for some \(i\), then, regardless of the value of \(\gamma_{i}\), the corresponding factor in (1) equals 1 and does not affect the product. So we may assume that there is no such index \(i\). For the other factors in (1), the following lemma is useful.

Lemma. Let \(\alpha > \beta\) be nonnegative integers. Then, for every integer \(M \geqslant \beta+1\), there exists a nonnegative integer \(\gamma\) such that

\[
\frac{\alpha+\gamma+1}{\beta+\gamma+1}=1+\frac{1}{M}=\frac{M+1}{M}
\]

Proof.

\[
\frac{\alpha+\gamma+1}{\beta+\gamma+1}=1+\frac{1}{M} \Longleftrightarrow \frac{\alpha-\beta}{\beta+\gamma+1}=\frac{1}{M} \Longleftrightarrow \gamma=M(\alpha-\beta)-(\beta+1) \geqslant 0
\]

Now we can finish the solution. Without loss of generality, there exists an index \(u\) such that \(\alpha_{i} > \beta_{i}\) for \(i=1,2, \ldots, u\), and \(\alpha_{i} < \beta_{i}\) for \(i=u+1, \ldots, t\). The conditions \(n \nmid k\) and \(k \nmid n\) mean that \(1 \leqslant u \leqslant t-1\).

Choose an integer \(X\) greater than all the \(\alpha_{i}\) and \(\beta_{i}\). By the lemma, we can define the numbers \(\gamma_{i}\) so as to satisfy

\[
\begin{array}{ll}
\frac{\alpha_{i}+\gamma_{i}+1}{\beta_{i}+\gamma_{i}+1}=\frac{u X+i}{u X+i-1} & \text { for } i=1,2, \ldots, u, \text { and } \\
\frac{\beta_{u+i}+\gamma_{u+i}+1}{\alpha_{u+i}+\gamma_{u+i}+1}=\frac{(t-u) X+i}{(t-u) X+i-1} & \text { for } i=1,2, \ldots, t-u .
\end{array}
\]

Then we will have

\[
\frac{d(s n)}{d(s k)}=\prod_{i=1}^{u} \frac{u X+i}{u X+i-1} \cdot \prod_{i=1}^{t-u} \frac{(t-u) X+i-1}{(t-u) X+i}=\frac{u(X+1)}{u X} \cdot \frac{(t-u) X}{(t-u)(X+1)}=1,
\]

as required.
