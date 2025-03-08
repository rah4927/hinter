---
id: fimo_2014_number_theory_p8
year: 2014
number: 8
difficulty: medium
topics: ["number theory"]
source: "IMO 2014 Number Theory Problem 8"
---

For every real number \(x\), let \(\|x\|\) denote the distance between \(x\) and the nearest integer. Prove that for every pair \((a, b)\) of positive integers there exist an odd prime \(p\) and a positive integer \(k\) satisfying

\[
\left\|\frac{a}{p^{k}}\right\|+\left\|\frac{b}{p^{k}}\right\|+\left\|\frac{a+b}{p^{k}}\right\|=1 .
\]

---
Notice first that \(\left\lfloor x+\frac{1}{2}\right\rfloor\) is an integer nearest to \(x\), so \(\left.\|x\|=\| x+\frac{1}{2}\right\rfloor-x \mid\). Thus we have

\[
\left\lfloor x+\frac{1}{2}\right\rfloor=x \pm\|x\| .
\]

For every rational number \(r\) and every prime number \(p\), denote by \(v_{p}(r)\) the exponent of \(p\) in the prime factorisation of \(r\). Recall the notation \((2 n-1)\) !! for the product of all odd positive integers not exceeding \(2 n-1\), i.e., \((2 n-1) ! !=1 \cdot 3 \cdot(2 n-1)\).

Lemma. For every positive integer \(n\) and every odd prime \(p\), we have

\[
v_{p}((2 n-1) ! !)=\sum_{k=1}^{\infty}\left\lfloor\frac{n}{p^{k}}+\frac{1}{2}\right\rfloor .
\]

Proof. For every positive integer \(k\), let us count the multiples of \(p^{k}\) among the factors \(1,3, \ldots\), \(2 n-1\). If \(\ell\) is an arbitrary integer, the number \((2 \ell-1) p^{k}\) is listed above if and only if

\[
0 < (2 \ell-1) p^{k} \leqslant 2 n \Longleftrightarrow \frac{1}{2} < \ell \leqslant \frac{n}{p^{k}}+\frac{1}{2} \Longleftrightarrow 1 \leqslant \ell \leqslant\left\lfloor\frac{n}{p^{k}}+\frac{1}{2}\right\rfloor .
\]

Hence, the number of multiples of \(p^{k}\) among the factors is precisely \(m_{k}=\left\lfloor\frac{n}{p^{k}}+\frac{1}{2}\right\rfloor\). Thus we obtain

\[
v_{p}((2 n-1) ! !)=\sum_{i=1}^{n} v_{p}(2 i-1)=\sum_{i=1}^{n} \sum_{k=1}^{v_{p}(2 i-1)} 1=\sum_{k=1}^{\infty} \sum_{\ell=1}^{m_{k}} 1=\sum_{k=1}^{\infty}\left\lfloor\frac{n}{p^{k}}+\frac{1}{2}\right\rfloor .
\]

In order to prove the problem statement, consider the rational number

\[
N=\frac{(2 a+2 b-1) ! !}{(2 a-1) ! ! \cdot(2 b-1) ! !}=\frac{(2 a+1)(2 a+3) \cdots(2 a+2 b-1)}{1 \cdot 3 \cdot(2 b-1)} .
\]

Obviously, \(N > 1\), so there exists a prime \(p\) with \(v_{p}(N) > 0\). Since \(N\) is a fraction of two odd numbers, \(p\) is odd.

By our lemma,

\[
0 < v_{p}(N)=\sum_{k=1}^{\infty}\left(\left\lfloor\frac{a+b}{p^{k}}+\frac{1}{2}\right\rfloor-\left\lfloor\frac{a}{p^{k}}+\frac{1}{2}\right\rfloor-\left\lfloor\frac{b}{p^{k}}+\frac{1}{2}\right\rfloor\right) .
\]

Therefore, there exists some positive integer \(k\) such that the integer number

\[
d_{k}=\left\lfloor\frac{a+b}{p^{k}}+\frac{1}{2}\right\rfloor-\left\lfloor\frac{a}{p^{k}}+\frac{1}{2}\right\rfloor-\left\lfloor\frac{b}{p^{k}}+\frac{1}{2}\right\rfloor
\]

is positive, so \(d_{k} \geqslant 1\). By \((2)\) we have

\[
1 \leqslant d_{k}=\frac{a+b}{p^{k}}-\frac{a}{p^{k}}-\frac{b}{p^{k}} \pm\left\|\frac{a+b}{p^{k}}\right\| \pm\left\|\frac{a}{p^{k}}\right\| \pm\left\|\frac{b}{p^{k}}\right\|=\pm\left\|\frac{a+b}{p^{k}}\right\| \pm\left\|\frac{a}{p^{k}}\right\| \pm\left\|\frac{b}{p^{k}}\right\| .
\]

Since \(\|x\| < \frac{1}{2}\) for every rational \(x\) with odd denominator, the relation (3) can only be satisfied if all three signs on the right-hand side are positive and \(d_{k}=1\). Thus we get

\[
\left\|\frac{a}{p^{k}}\right\|+\left\|\frac{b}{p^{k}}\right\|+\left\|\frac{a+b}{p^{k}}\right\|=d_{k}=1,
\]

as required.
