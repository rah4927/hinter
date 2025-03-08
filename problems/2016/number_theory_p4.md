---
id: fimo_2016_number_theory_p4
year: 2016
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2016 Number Theory Problem 4"
---

Let \(n, m, k\) and \(l\) be positive integers with \(n \neq 1\) such that \(n^{k}+m n^{l}+1\) divides \(n^{k+l}-1\). Prove that

*  \(m=1\) and \(l=2 k ;\) or

*  \(l \mid k\) and \(m=\frac{n^{k-l}-1}{n^{l}-1}\).


---
It is given that
\[
n^{k}+m n^{l}+1 \mid n^{k+l}-1
\]
This implies
\[
n^{k}+m n^{l}+1 \mid\left(n^{k+l}-1\right)+\left(n^{k}+m n^{l}+1\right)=n^{k+l}+n^{k}+m n^{l} .
\]
We have two cases to discuss.

* Case 1. \(l \geqslant k\).

Since \(\left(n^{k}+m n^{l}+1, n\right)=1,(2)\) yields
\[
n^{k}+m n^{l}+1 \mid n^{l}+m n^{l-k}+1
\]
In particular, we get \(n^{k}+m n^{l}+1 \leqslant n^{l}+m n^{l-k}+1\). As \(n \geqslant 2\) and \(k \geqslant 1\), \((m-1) n^{l}\) is at least \(2(m-1) n^{l-k}\). It follows that the inequality cannot hold when \(m \geqslant 2\). For \(m=1\), the above divisibility becomes
\[
n^{k}+n^{l}+1 \mid n^{l}+n^{l-k}+1
\]
Note that \(n^{l}+n^{l-k}+1 < n^{l}+n^{l}+1 < 2\left(n^{k}+n^{l}+1\right)\). Thus we must have \(n^{l}+n^{l-k}+1=n^{k}+n^{l}+1\) so that \(l=2 k\), which gives the first result.

* Case 2. \(l < k\).

This time (2) yields
\[
n^{k}+m n^{l}+1 \mid n^{k}+n^{k-l}+m
\]
In particular, we get \(n^{k}+m n^{l}+1 \leqslant n^{k}+n^{k-l}+m\), which implies
\[
m \leqslant \frac{n^{k-l}-1}{n^{l}-1}
\]
On the other hand, from (1) we may let \(n^{k+l}-1=\left(n^{k}+m n^{l}+1\right) t\) for some positive integer \(t\). Obviously, \(t\) is less than \(n^{l}\), which means \(t \leqslant n^{l}-1\) as it is an integer. Then we have \(n^{k+l}-1 \leqslant\left(n^{k}+m n^{l}+1\right)\left(n^{l}-1\right)\), which is the same as
\[
m \geqslant \frac{n^{k-l}-1}{n^{l}-1} .
\]
Equations (3) and (4) combine to give \(m=\frac{n^{k-l}-1}{n^{l}-1}\). As this is an integer, we have \(l \mid k-l\). This means \(l \mid k\) and it corresponds to the second result.
