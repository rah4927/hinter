---
id: fimo_2010_algebra_p3
year: 2010
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2010 Algebra Problem 3"
---

Let \(x_{1}, \ldots, x_{100}\) be nonnegative real numbers such that \(x_{i}+x_{i+1}+x_{i+2} \leq 1\) for all \(i=1, \ldots, 100\) (we put \(x_{101}=x_{1}, x_{102}=x_{2}\) ). Find the maximal possible value of the sum
\[
S=\sum_{i=1}^{100} x_{i} x_{i+2} \text {. }
\]


---
Solution 1. Let \(x_{2 i}=0, x_{2 i-1}=\frac{1}{2}\) for all \(i=1, \ldots, 50\). Then we have \(S=50 \cdot\left(\frac{1}{2}\right)^{2}=\frac{25}{2}\). So, we are left to show that \(S \leq \frac{25}{2}\) for all values of \(x_{i}\) 's satisfying the problem conditions.
Consider any \(1 \leq i \leq 50\). By the problem condition, we get \(x_{2 i-1} \leq 1-x_{2 i}-x_{2 i+1}\) and \(x_{2 i+2} \leq 1-x_{2 i}-x_{2 i+1}\). Hence by the AM-GM inequality we get
\[
\begin{aligned}
x_{2 i-1} x_{2 i+1} & +x_{2 i} x_{2 i+2} \leq\left(1-x_{2 i}-x_{2 i+1}\right) x_{2 i+1}+x_{2 i}\left(1-x_{2 i}-x_{2 i+1}\right) \\
& =\left(x_{2 i}+x_{2 i+1}\right)\left(1-x_{2 i}-x_{2 i+1}\right) \leq\left(\frac{\left(x_{2 i}+x_{2 i+1}\right)+\left(1-x_{2 i}-x_{2 i+1}\right)}{2}\right)^{2}=\frac{1}{4} .
\end{aligned}
\]
Summing up these inequalities for \(i=1,2, \ldots, 50\), we get the desired inequality
\[
\sum_{i=1}^{50}\left(x_{2 i-1} x_{2 i+1}+x_{2 i} x_{2 i+2}\right) \leq 50 \cdot \frac{1}{4}=\frac{25}{2} .
\]
