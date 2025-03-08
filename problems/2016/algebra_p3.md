---
id: fimo_2016_algebra_p3
year: 2016
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2016 Algebra Problem 3"
---

Find all integers \(n \geqslant 3\) with the following property: for all real numbers \(a_{1}, a_{2}, \ldots, a_{n}\) and \(b_{1}, b_{2}, \ldots, b_{n}\) satisfying \(\left|a_{k}\right|+\left|b_{k}\right|=1\) for \(1 \leqslant k \leqslant n\), there exist \(x_{1}, x_{2}, \ldots, x_{n}\), each of which is either \(-1\) or 1 , such that
\[
\left|\sum_{k=1}^{n} x_{k} a_{k}\right|+\left|\sum_{k=1}^{n} x_{k} b_{k}\right| \leqslant 1 .
\]


---
For any even integer \(n \geqslant 4\), we consider the case
\[
a_{1}=a_{2}=\cdots=a_{n-1}=b_{n}=0 \quad \text { and } \quad b_{1}=b_{2}=\cdots=b_{n-1}=a_{n}=1 .
\]
The condition \(\left|a_{k}\right|+\left|b_{k}\right|=1\) is satisfied for each \(1 \leqslant k \leqslant n\). No matter how we choose each \(x_{k}\), both sums \(\sum_{k=1}^{n} x_{k} a_{k}\) and \(\sum_{k=1}^{n} x_{k} b_{k}\) are odd integers. This implies \(\left|\sum_{k=1}^{n} x_{k} a_{k}\right| \geqslant 1\) and \(\left|\sum_{k=1}^{n} x_{k} b_{k}\right| \geqslant 1\), which shows (1) cannot hold.
For any odd integer \(n \geqslant 3\), we may assume without loss of generality \(b_{k} \geqslant 0\) for \(1 \leqslant k \leqslant n\) (this can be done by flipping the pair \(\left(a_{k}, b_{k}\right)\) to \(\left(-a_{k},-b_{k}\right)\) and \(x_{k}\) to \(-x_{k}\) if necessary) and \(a_{1} \geqslant a_{2} \geqslant \cdots \geqslant a_{m} \geqslant 0 > a_{m+1} \geqslant \cdots \geqslant a_{n}\). We claim that the choice \(x_{k}=(-1)^{k+1}\) for \(1 \leqslant k \leqslant n\) will work. Define
\[
s=\sum_{k=1}^{m} x_{k} a_{k} \quad \text { and } \quad t=-\sum_{k=m+1}^{n} x_{k} a_{k} .
\]
Note that
\[
s=\left(a_{1}-a_{2}\right)+\left(a_{3}-a_{4}\right)+\cdots \geqslant 0
\]
by the assumption \(a_{1} \geqslant a_{2} \geqslant \cdots \geqslant a_{m}\) (when \(m\) is odd, there is a single term \(a_{m}\) at the end, which is also positive). Next, we have
\[
s=a_{1}-\left(a_{2}-a_{3}\right)-\left(a_{4}-a_{5}\right)-\cdots \leqslant a_{1} \leqslant 1 .
\]
Similarly,
\[
t=\left(-a_{n}+a_{n-1}\right)+\left(-a_{n-2}+a_{n-3}\right)+\cdots \geqslant 0
\]
and
\[
t=-a_{n}+\left(a_{n-1}-a_{n-2}\right)+\left(a_{n-3}-a_{n-4}\right)+\cdots \leqslant-a_{n} \leqslant 1 .
\]
From the condition, we have \(a_{k}+b_{k}=1\) for \(1 \leqslant k \leqslant m\) and \(-a_{k}+b_{k}=1\) for \(m+1 \leqslant k \leqslant n\). It follows that \(\sum_{k=1}^{n} x_{k} a_{k}=s-t\) and \(\sum_{k=1}^{n} x_{k} b_{k}=1-s-t\). Hence it remains to prove
\[
|s-t|+|1-s-t| \leqslant 1
\]
under the constraint \(0 \leqslant s, t \leqslant 1\). By symmetry, we may assume \(s \geqslant t\). If \(1-s-t \geqslant 0\), then we have
\[
|s-t|+|1-s-t|=s-t+1-s-t=1-2 t \leqslant 1 .
\]
If \(1-s-t \leqslant 0\), then we have
\[
|s-t|+|1-s-t|=s-t-1+s+t=2 s-1 \leqslant 1 .
\]
Hence, the inequality is true in both cases.
These show \(n\) can be any odd integer greater than or equal to 3 .
