---
id: fimo_2011_algebra_p1
year: 2011
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2011 Algebra Problem 1"
---

For any set \(A=\left\{a_{1}, a_{2}, a_{3}, a_{4}\right\}\) of four distinct positive integers with sum \(s_{A}=a_{1}+a_{2}+a_{3}+a_{4}\), let \(p_{A}\) denote the number of pairs \((i, j)\) with \(1 \leq i < j \leq 4\) for which \(a_{i}+a_{j}\) divides \(s_{A}\). Among all sets of four distinct positive integers, determine those sets \(A\) for which \(p_{A}\) is maximal.


---
Firstly, we will prove that the maximum value of \(p_{A}\) is at most 4 . Without loss of generality, we may assume that \(a_{1} < a_{2} < a_{3} < a_{4}\). We observe that for each pair of indices \((i, j)\) with \(1 \leq i < j \leq 4\), the sum \(a_{i}+a_{j}\) divides \(s_{A}\) if and only if \(a_{i}+a_{j}\) divides \(s_{A}-\left(a_{i}+a_{j}\right)=a_{k}+a_{l}\), where \(k\) and \(l\) are the other two indices. Since there are 6 distinct pairs, we have to prove that at least two of them do not satisfy the previous condition. We claim that two such pairs are \(\left(a_{2}, a_{4}\right)\) and \(\left(a_{3}, a_{4}\right)\). Indeed, note that \(a_{2}+a_{4} > a_{1}+a_{3}\) and \(a_{3}+a_{4} > a_{1}+a_{2}\). Hence \(a_{2}+a_{4}\) and \(a_{3}+a_{4}\) do not divide \(s_{A}\). This proves \(p_{A} \leq 4\).
Now suppose \(p_{A}=4\). By the previous argument we have
\[
\begin{array}{llll|l}
a_{1}+a_{4} \mid a_{2}+a_{3} & \text { and } & a_{2}+a_{3} \mid a_{1}+a_{4}, \\
a_{1}+a_{2} \mid a_{3}+a_{4} & \text { and } & a_{3}+a_{4} \nless a_{1}+a_{2}, \\
a_{1}+a_{3} & a_{2}+a_{4} & \text { and } & a_{2}+a_{4} \nless a_{1}+a_{3} .
\end{array}
\]
Hence, there exist positive integers \(m\) and \(n\) with \(m > n \geq 2\) such that
\[
\left\{\begin{array}{l}
a_{1}+a_{4}=a_{2}+a_{3} \\
m\left(a_{1}+a_{2}\right)=a_{3}+a_{4} \\
n\left(a_{1}+a_{3}\right)=a_{2}+a_{4}
\end{array}\right.
\]
Adding up the first equation and the third one, we get \(n\left(a_{1}+a_{3}\right)=2 a_{2}+a_{3}-a_{1}\). If \(n \geq 3\), then \(n\left(a_{1}+a_{3}\right) > 3 a_{3} > 2 a_{2}+a_{3} > 2 a_{2}+a_{3}-a_{1}\). This is a contradiction. Therefore \(n=2\). If we multiply by 2 the sum of the first equation and the third one, we obtain
\[
6 a_{1}+2 a_{3}=4 a_{2},
\]
while the sum of the first one and the second one is
\[
(m+1) a_{1}+(m-1) a_{2}=2 a_{3} .
\]
Adding up the last two equations we get
\[
(m+7) a_{1}=(5-m) a_{2} .
\]
It follows that \(5-m \geq 1\), because the left-hand side of the last equation and \(a_{2}\) are positive. Since we have \(m > n=2\), the integer \(m\) can be equal only to either 3 or 4 . Substituting \((3,2)\) and \((4,2)\) for \((m, n)\) and solving the previous system of equations, we find the families of solutions \(\{d, 5 d, 7 d, 11 d\}\) and \(\{d, 11 d, 19 d, 29 d\}\), where \(d\) is any positive integer.
