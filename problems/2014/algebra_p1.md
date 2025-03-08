---
id: fimo_2014_algebra_p1
year: 2014
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2014 Algebra Problem 1"
---

Let \(z_{0} < z_{1} < z_{2} < \cdots\) be an infinite sequence of positive integers. Prove that there exists a unique integer \(n \geqslant 1\) such that
\[
z_{n} < \frac{z_{0}+z_{1}+\cdots+z_{n}}{n} \leqslant z_{n+1} .
\]

---
For \(n=1,2, \ldots\) define
\[
d_{n}=\left(z_{0}+z_{1}+\cdots+z_{n}\right)-n z_{n} .
\]
The sign of \(d_{n}\) indicates whether the first inequality in (1) holds; i.e., it is satisfied if and only if \(d_{n} > 0\).
Notice that
\[
n z_{n+1}-\left(z_{0}+z_{1}+\cdots+z_{n}\right)=(n+1) z_{n+1}-\left(z_{0}+z_{1}+\cdots+z_{n}+z_{n+1}\right)=-d_{n+1},
\]
so the second inequality in (1) is equivalent to \(d_{n+1} \leqslant 0\). Therefore, we have to prove that there is a unique index \(n \geqslant 1\) that satisfies \(d_{n} > 0 \geqslant d_{n+1}\).
By its definition the sequence \(d_{1}, d_{2}, \ldots\) consists of integers and we have
\[
d_{1}=\left(z_{0}+z_{1}\right)-1 \cdot z_{1}=z_{0} > 0 .
\]
From
\(d_{n+1}-d_{n}=\left(\left(z_{0}+\cdots+z_{n}+z_{n+1}\right)-(n+1) z_{n+1}\right)-\left(\left(z_{0}+\cdots+z_{n}\right)-n z_{n}\right)=n\left(z_{n}-z_{n+1}\right) < 0\) we can see that \(d_{n+1} < d_{n}\) and thus the sequence strictly decreases.
Hence, we have a decreasing sequence \(d_{1} > d_{2} > \ldots\) of integers such that its first element \(d_{1}\) is positive. The sequence must drop below 0 at some point, and thus there is a unique index \(n\), that is the index of the last positive term, satisfying \(d_{n} > 0 \geqslant d_{n+1}\).
