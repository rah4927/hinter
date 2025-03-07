---
id: fimo_2010_algebra_p4
year: 2010
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2010 Algebra Problem 4"
---

A sequence \(x_{1}, x_{2}, \ldots\) is defined by \(x_{1}=1\) and \(x_{2 k}=-x_{k}, x_{2 k-1}=(-1)^{k+1} x_{k}\) for all \(k \geq 1\). Prove that \(x_{1}+x_{2}+\cdots+x_{n} \geq 0\) for all \(n \geq 1\).

---
We start with some observations. First, from the definition of \(x_{i}\) it follows that for each positive integer \(k\) we have
\[
x_{4 k-3}=x_{2 k-1}=-x_{4 k-2} \quad \text { and } \quad x_{4 k-1}=x_{4 k}=-x_{2 k}=x_{k} \text {. }
\]
Hence, denoting \(S_{n}=\sum_{i=1}^{n} x_{i}\), we have
\[
\begin{gathered}
S_{4 k}=\sum_{i=1}^{k}\left(\left(x_{4 k-3}+x_{4 k-2}\right)+\left(x_{4 k-1}+x_{4 k}\right)\right)=\sum_{i=1}^{k}\left(0+2 x_{k}\right)=2 S_{k}, \\
S_{4 k+2}=S_{4 k}+\left(x_{4 k+1}+x_{4 k+2}\right)=S_{4 k} .
\end{gathered}
\]
Observe also that \(S_{n}=\sum_{i=1}^{n} x_{i} \equiv \sum_{i=1}^{n} 1=n(\bmod 2)\)
Now we prove by induction on \(k\) that \(S_{i} \geq 0\) for all \(i \leq 4 k\). The base case is valid since \(x_{1}=x_{3}=x_{4}=1, x_{2}=-1\). For the induction step, assume that \(S_{i} \geq 0\) for all \(i \leq 4 k\). Using the relations (1)-(3), we obtain
\[
S_{4 k+4}=2 S_{k+1} \geq 0, \quad S_{4 k+2}=S_{4 k} \geq 0, \quad S_{4 k+3}=S_{4 k+2}+x_{4 k+3}=\frac{S_{4 k+2}+S_{4 k+4}}{2} \geq 0 .
\]
So, we are left to prove that \(S_{4 k+1} \geq 0\). If \(k\) is odd, then \(S_{4 k}=2 S_{k} \geq 0\); since \(k\) is odd, \(S_{k}\) is odd as well, so we have \(S_{4 k} \geq 2\) and hence \(S_{4 k+1}=S_{4 k}+x_{4 k+1} \geq 1\).
Conversely, if \(k\) is even, then we have \(x_{4 k+1}=x_{2 k+1}=x_{k+1}\), hence \(S_{4 k+1}=S_{4 k}+x_{4 k+1}=\) \(2 S_{k}+x_{k+1}=S_{k}+S_{k+1} \geq 0\). The step is proved.
