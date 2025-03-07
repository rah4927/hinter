---
id: fimo_2015_number_theory_p1
year: 2015
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2015 Number Theory Problem 1"
---

Determine all positive integers \(M\) for which the sequence \(a_{0}, a_{1}, a_{2}, \ldots\), defined by \(a_{0}=\frac{2 M+1}{2}\) and \(a_{k+1}=a_{k}\left\lfloor a_{k}\right\rfloor\) for \(k=0,1,2, \ldots\), contains at least one integer term.


---
Define \(b_{k}=2 a_{k}\) for all \(k \geqslant 0\). Then
\[
b_{k+1}=2 a_{k+1}=2 a_{k}\left\lfloor a_{k}\right\rfloor=b_{k}\left\lfloor\frac{b_{k}}{2}\right\rfloor .
\]
Since \(b_{0}\) is an integer, it follows that \(b_{k}\) is an integer for all \(k \geqslant 0\).
Suppose that the sequence \(a_{0}, a_{1}, a_{2}, \ldots\) does not contain any integer term. Then \(b_{k}\) must be an odd integer for all \(k \geqslant 0\), so that
\[
b_{k+1}=b_{k}\left\lfloor\frac{b_{k}}{2}\right\rfloor=\frac{b_{k}\left(b_{k}-1\right)}{2} .
\]
Hence
\[
b_{k+1}-3=\frac{b_{k}\left(b_{k}-1\right)}{2}-3=\frac{\left(b_{k}-3\right)\left(b_{k}+2\right)}{2}
\]
for all \(k \geqslant 0\).
Suppose that \(b_{0}-3 > 0\). Then equation (2) yields \(b_{k}-3 > 0\) for all \(k \geqslant 0\). For each \(k \geqslant 0\), define \(c_{k}\) to be the highest power of 2 that divides \(b_{k}-3\). Since \(b_{k}-3\) is even for all \(k \geqslant 0\), the number \(c_{k}\) is positive for every \(k \geqslant 0\).
Note that \(b_{k}+2\) is an odd integer. Therefore, from equation (2), we have that \(c_{k+1}=c_{k}-1\). Thus, the sequence \(c_{0}, c_{1}, c_{2}, \ldots\) of positive integers is strictly decreasing, a contradiction. So, \(b_{0}-3 \leqslant 0\), which implies \(M=1\).
For \(M=1\), we can check that the sequence is constant with \(a_{k}=\frac{3}{2}\) for all \(k \geqslant 0\). Therefore, the answer is \(M \geqslant 2\).
