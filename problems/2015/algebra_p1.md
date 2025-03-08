---
id: fimo_2015_algebra_p1
year: 2015
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2015 Algebra Problem 1"
---

Suppose that a sequence \(a_{1}, a_{2}, \ldots\) of positive real numbers satisfies

\[
a_{k+1} \geqslant \frac{k a_{k}}{a_{k}^{2}+(k-1)}
\]

for every positive integer \(k\). Prove that \(a_{1}+a_{2}+\cdots+a_{n} \geqslant n\) for every \(n \geqslant 2\).

---
From the constraint (1), it can be seen that

\[
\frac{k}{a_{k+1}} \leqslant \frac{a_{k}^{2}+(k-1)}{a_{k}}=a_{k}+\frac{k-1}{a_{k}},
\]

and so

\[
a_{k} \geqslant \frac{k}{a_{k+1}}-\frac{k-1}{a_{k}} .
\]

Summing up the above inequality for \(k=1, \ldots, m\), we obtain

\[
a_{1}+a_{2}+\cdots+a_{m} \geqslant\left(\frac{1}{a_{2}}-\frac{0}{a_{1}}\right)+\left(\frac{2}{a_{3}}-\frac{1}{a_{2}}\right)+\cdots+\left(\frac{m}{a_{m+1}}-\frac{m-1}{a_{m}}\right)=\frac{m}{a_{m+1}} .
\]

Now we prove the problem statement by induction on \(n\). The case \(n=2\) can be done by applying (1) to \(k=1\) :

\[
a_{1}+a_{2} \geqslant a_{1}+\frac{1}{a_{1}} \geqslant 2 .
\]

For the induction step, assume that the statement is true for some \(n \geqslant 2\). If \(a_{n+1} \geqslant 1\), then the induction hypothesis yields

\[
\left(a_{1}+\cdots+a_{n}\right)+a_{n+1} \geqslant n+1 .
\]

Otherwise, if \(a_{n+1} < 1\) then apply (2) as

\[
\left(a_{1}+\cdots+a_{n}\right)+a_{n+1} \geqslant \frac{n}{a_{n+1}}+a_{n+1}=\frac{n-1}{a_{n+1}}+\left(\frac{1}{a_{n+1}}+a_{n+1}\right) > (n-1)+2 .
\]

That completes the solution.
