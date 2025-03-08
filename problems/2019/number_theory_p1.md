---
id: fimo_2019_number_theory_p1
year: 2019
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2019 Number Theory Problem 1"
---

Find all pairs \((m, n)\) of positive integers satisfying the equation

\[
\left(2^{n}-1\right)\left(2^{n}-2\right)\left(2^{n}-4\right) \cdots\left(2^{n}-2^{n-1}\right)=m !
\]

The final answer is that the only such pairs are \((1,1)\) and \((3,2)\).

---
In all solutions, for any prime \(p\) and positive integer \(N\), we will denote by \(v_{p}(N)\) the exponent of the largest power of \(p\) that divides \(N\). The left-hand side of (1) will be denoted by \(L_{n}\); that is, \(L_{n}=\left(2^{n}-1\right)\left(2^{n}-2\right)\left(2^{n}-4\right) \cdots\left(2^{n}-2^{n-1}\right)\).

We will get an upper bound on \(n\) from the speed at which \(v_{2}\left(L_{n}\right)\) grows.

From

\[
L_{n}=\left(2^{n}-1\right)\left(2^{n}-2\right) \cdots\left(2^{n}-2^{n-1}\right)=2^{1+2+\cdots+(n-1)}\left(2^{n}-1\right)\left(2^{n-1}-1\right) \cdots\left(2^{1}-1\right)
\]

we read

\[
v_{2}\left(L_{n}\right)=1+2+\cdots+(n-1)=\frac{n(n-1)}{2} .
\]

On the other hand, \(v_{2}(m !)\) is expressed by the Legendre formula as

\[
v_{2}(m !)=\sum_{i=1}^{\infty}\left\lfloor\frac{m}{2^{i}}\right\rfloor
\]

As usual, by omitting the floor functions,

\[
v_{2}(m !) < \sum_{i=1}^{\infty} \frac{m}{2^{i}}=m .
\]

Thus, \(L_{n}=m\) ! implies the inequality

\[
\frac{n(n-1)}{2} < m
\]

In order to obtain an opposite estimate, observe that

\[
L_{n}=\left(2^{n}-1\right)\left(2^{n}-2\right) \cdots\left(2^{n}-2^{n-1}\right) < \left(2^{n}\right)^{n}=2^{n^{2}} .
\]

We claim that

\[
2^{n^{2}} < \left(\frac{n(n-1)}{2}\right) ! \quad \text { for } n \geqslant 6 .
\]

For \(n=6\) the estimate \((3)\) is true because \(2^{6^{2}} < 6.9 \cdot 10^{10}\) and \(\left(\frac{n(n-1)}{2}\right) !=15 ! > 1.3 \cdot 10^{12}\).

For \(n \geqslant 7\) we prove (3) by the following inequalities:

\[
\begin{aligned}
\left(\frac{n(n-1)}{2}\right) ! & =15 ! \cdot 16 \cdot 17 \cdots \frac{n(n-1)}{2} > 2^{36} \cdot 16^{\frac{n(n-1)}{2}-15} \\
& =2^{2 n(n-1)-24}=2^{n^{2}} \cdot 2^{n(n-2)-24} > 2^{n^{2}}
\end{aligned}
\]

Putting together (2) and (3), for \(n \geqslant 6\) we get a contradiction, since

\[
L_{n} < 2^{n^{2}} < \left(\frac{n(n-1)}{2}\right) ! < m !=L_{n}
\]

Hence \(n \geqslant 6\) is not possible.

Checking manually the cases \(n \leqslant 5\) we find

\[
\begin{gathered}
L_{1}=1=1 !, \quad L_{2}=6=3 !, \quad 5 ! < L_{3}=168 < 6 !, \\
7 ! < L_{4}=20160 < 8 ! \quad \text { and } \quad 10 ! < L_{5}=9999360 < 11 !
\end{gathered}
\]

So, there are two solutions:

\[
(m, n) \in\{(1,1),(3,2)\}
\]
