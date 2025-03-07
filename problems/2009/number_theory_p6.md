---
id: fimo_2009_number_theory_p6
year: 2009
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2009 Number Theory Problem 6"
---

Let \(k\) be a positive integer. Show that if there exists a sequence \(a_{0}, a_{1}, \ldots\) of integers satisfying the condition
\[
a_{n}=\frac{a_{n-1}+n^{k}}{n} \text { for all } n \geq 1,
\]
then \(k-2\) is divisible by 3 .

---
Part A. For each positive integer \(k\), there exists a polynomial \(P_{k}\) of degree \(k-1\) with integer coefficients, i. e., \(P_{k} \in \mathbb{Z}[x]\), and an integer \(q_{k}\) such that the polynomial identity
\[
x P_{k}(x)=x^{k}+P_{k}(x-1)+q_{k}
\]
is satisfied. To prove this, for fixed \(k\) we write
\[
P_{k}(x)=b_{k-1} x^{k-1}+\cdots+b_{1} x+b_{0}
\]
and determine the coefficients \(b_{k-1}, b_{k-2}, \ldots, b_{0}\) and the number \(q_{k}\) successively. Obviously, we have \(b_{k-1}=1\). For \(m=k-1, k-2, \ldots, 1\), comparing the coefficients of \(x^{m}\) in the identity \(\left(I_{k}\right)\) results in an expression of \(b_{m-1}\) as an integer linear combination of \(b_{k-1}, \ldots, b_{m}\), and finally \(q_{k}=-P_{k}(-1)\)
Part B. Let \(k\) be a positive integer, and let \(a_{0}, a_{1}, \ldots\) be a sequence of real numbers satisfying the recursion given in the problem. This recursion can be written as
\[
a_{n}-P_{k}(n)=\frac{a_{n-1}-P_{k}(n-1)}{n}-\frac{q_{k}}{n} \quad \text { for all } n \geq 1
\]
which by induction gives
\[
a_{n}-P_{k}(n)=\frac{a_{0}-P_{k}(0)}{n !}-q_{k} \sum_{i=0}^{n-1} \frac{i !}{n !} \quad \text { for all } n \geq 1 .
\]
Therefore, the numbers \(a_{n}\) are integers for all \(n \geq 1\) only if
\[
a_{0}=P_{k}(0) \quad \text { and } \quad q_{k}=0 .
\]
Part C. Multiplying the identity \(\left(I_{k}\right)\) by \(x^{2}+x\) and subtracting the identities \(\left(I_{k+1}\right),\left(I_{k+2}\right)\) and \(q_{k} x^{2}=q_{k} x^{2}\) therefrom, we obtain
\[
x T_{k}(x)=T_{k}(x-1)+2 x\left(P_{k}(x-1)+q_{k}\right)-\left(q_{k+2}+q_{k+1}+q_{k}\right),
\]
where the polynomials \(T_{k} \in \mathbb{Z}[x]\) are defined by \(T_{k}(x)=\left(x^{2}+x\right) P_{k}(x)-P_{k+1}(x)-P_{k+2}(x)-q_{k} x\). Thus
\[
x T_{k}(x) \equiv T_{k}(x-1)+q_{k+2}+q_{k+1}+q_{k} \bmod 2, \quad k=1,2, \ldots
\]
Comparing the degrees, we easily see that this is only possible if \(T_{k}\) is the zero polynomial modulo 2 , and
\[
q_{k+2} \equiv q_{k+1}+q_{k} \bmod 2 \text { for } k=1,2, \ldots
\]
Since \(q_{1}=-1\) and \(q_{2}=0\), these congruences finish the proof.
