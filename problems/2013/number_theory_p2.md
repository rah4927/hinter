---
id: fimo_2013_number_theory_p2
year: 2013
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2013 Number Theory Problem 2"
---

Prove that for any pair of positive integers \(k\) and \(n\) there exist \(k\) positive integers \(m_{1}, m_{2}, \ldots, m_{k}\) such that
\[
1+\frac{2^{k}-1}{n}=\left(1+\frac{1}{m_{1}}\right)\left(1+\frac{1}{m_{2}}\right) \cdots\left(1+\frac{1}{m_{k}}\right) .
\]

---
We proceed by induction on \(k\). For \(k=1\) the statement is trivial. Assuming we have proved it for \(k=j-1\), we now prove it for \(k=j\).
Case 1. \(n=2 t-1\) for some positive integer \(t\).
Observe that
\[
1+\frac{2^{j}-1}{2 t-1}=\frac{2\left(t+2^{j-1}-1\right)}{2 t} \cdot \frac{2 t}{2 t-1}=\left(1+\frac{2^{j-1}-1}{t}\right)\left(1+\frac{1}{2 t-1}\right) .
\]
By the induction hypothesis we can find \(m_{1}, \ldots, m_{j-1}\) such that
\[
1+\frac{2^{j-1}-1}{t}=\left(1+\frac{1}{m_{1}}\right)\left(1+\frac{1}{m_{2}}\right) \cdots\left(1+\frac{1}{m_{j-1}}\right),
\]
so setting \(m_{j}=2 t-1\) gives the desired expression.
Case 2. \(n=2 t\) for some positive integer \(t\).
Now we have
\[
1+\frac{2^{j}-1}{2 t}=\frac{2 t+2^{j}-1}{2 t+2^{j}-2} \cdot \frac{2 t+2^{j}-2}{2 t}=\left(1+\frac{1}{2 t+2^{j}-2}\right)\left(1+\frac{2^{j-1}-1}{t}\right),
\]
noting that \(2 t+2^{j}-2 > 0\). Again, we use that
\[
1+\frac{2^{j-1}-1}{t}=\left(1+\frac{1}{m_{1}}\right)\left(1+\frac{1}{m_{2}}\right) \cdots\left(1+\frac{1}{m_{j-1}}\right) .
\]
Setting \(m_{j}=2 t+2^{j}-2\) then gives the desired expression.
