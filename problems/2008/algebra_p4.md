---
id: fimo_2008_algebra_p4
year: 2008
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2008 Algebra Problem 4"
---

For an integer \(m\), denote by \(t(m)\) the unique number in \(\{1,2,3\}\) such that \(m+t(m)\) is a multiple of 3 . A function \(f: \mathbb{Z} \rightarrow \mathbb{Z}\) satisfies \(f(-1)=0, f(0)=1, f(1)=-1\) and
\[
f\left(2^{n}+m\right)=f\left(2^{n}-t(m)\right)-f(m) \quad \text { for all integers } m, n \geq 0 \text { with } 2^{n} > m .
\]
Prove that \(f(3 p) \geq 0\) holds for all integers \(p \geq 0\)

---
The given conditions determine \(f\) uniquely on the positive integers. The signs of \(f(1), f(2), \ldots\) seem to change quite erratically. However values of the form \(f\left(2^{n}-t(m)\right)\) are sufficient to compute directly any functional value. Indeed, let \(n > 0\) have base 2 representation \(n=2^{a_{0}}+2^{a_{1}}+\cdots+2^{a_{k}}, a_{0} > a_{1} > \cdots > a_{k} \geq 0\), and let \(n_{j}=2^{a_{j}}+2^{a_{j-1}}+\cdots+2^{a_{k}}, j=0, \ldots, k\). Repeated applications of the recurrence show that \(f(n)\) is an alternating sum of the quantities \(f\left(2^{a_{j}}-t\left(n_{j+1}\right)\right)\) plus \((-1)^{k+1}\). (The exact formula is not needed for our proof.)
So we focus attention on the values \(f\left(2^{n}-1\right), f\left(2^{n}-2\right)\) and \(f\left(2^{n}-3\right)\). Six cases arise; more specifically
\(t\left(2^{2 k}-3\right)=2, t\left(2^{2 k}-2\right)=1, t\left(2^{2 k}-1\right)=3, t\left(2^{2 k+1}-3\right)=1, t\left(2^{2 k+1}-2\right)=3, t\left(2^{2 k+1}-1\right)=2\).
Claim. For all integers \(k \geq 0\) the following equalities hold:
\[
\begin{aligned}
& f\left(2^{2 k+1}-3\right)=0, \quad f\left(2^{2 k+1}-2\right)=3^{k}, \quad f\left(2^{2 k+1}-1\right)=-3^{k}, \\
& f\left(2^{2 k+2}-3\right)=-3^{k}, \quad f\left(2^{2 k+2}-2\right)=-3^{k}, \quad f\left(2^{2 k+2}-1\right)=2 \cdot 3^{k} \text {. }
\end{aligned}
\]
Proof. By induction on \(k\). The base \(k=0\) comes down to checking that \(f(2)=-1\) and \(f(3)=2\); the given values \(f(-1)=0, f(0)=1, f(1)=-1\) are also needed. Suppose the claim holds for \(k-1\). For \(f\left(2^{2 k+1}-t(m)\right)\), the recurrence formula and the induction hypothesis yield
\[
\begin{aligned}
& f\left(2^{2 k+1}-3\right)=f\left(2^{2 k}+\left(2^{2 k}-3\right)\right)=f\left(2^{2 k}-2\right)-f\left(2^{2 k}-3\right)=-3^{k-1}+3^{k-1}=0, \\
& f\left(2^{2 k+1}-2\right)=f\left(2^{2 k}+\left(2^{2 k}-2\right)\right)=f\left(2^{2 k}-1\right)-f\left(2^{2 k}-2\right)=2 \cdot 3^{k-1}+3^{k-1}=3^{k} \\
& f\left(2^{2 k+1}-1\right)=f\left(2^{2 k}+\left(2^{2 k}-1\right)\right)=f\left(2^{2 k}-3\right)-f\left(2^{2 k}-1\right)=-3^{k-1}-2 \cdot 3^{k-1}=-3^{k} .
\end{aligned}
\]
For \(f\left(2^{2 k+2}-t(m)\right)\) we use the three equalities just established:
\[
\begin{aligned}
& f\left(2^{2 k+2}-3\right)=f\left(2^{2 k+1}+\left(2^{2 k+1}-3\right)\right)=f\left(2^{2 k+1}-1\right)-f\left(2^{2 k+1}-3\right)=-3^{k}-0=-3^{k}, \\
& f\left(2^{2 k+2}-2\right)=f\left(2^{2 k+1}+\left(2^{2 k+1}-2\right)\right)=f\left(2^{2 k+1}-3\right)-f\left(2^{2 k}-2\right)=0-3^{k}=-3^{k}, \\
& f\left(2^{2 k+2}-1\right)=f\left(2^{2 k+1}+\left(2^{2 k+1}-1\right)\right)=f\left(2^{2 k+1}-2\right)-f\left(2^{2 k+1}-1\right)=3^{k}+3^{k}=2 \cdot 3^{k} .
\end{aligned}
\]
The claim follows.
A closer look at the six cases shows that \(f\left(2^{n}-t(m)\right) \geq 3^{(n-1) / 2}\) if \(2^{n}-t(m)\) is divisible by 3 , and \(f\left(2^{n}-t(m)\right) \leq 0\) otherwise. On the other hand, note that \(2^{n}-t(m)\) is divisible by 3 if and only if \(2^{n}+m\) is. Therefore, for all nonnegative integers \(m\) and \(n\),
(i) \(f\left(2^{n}-t(m)\right) \geq 3^{(n-1) / 2}\) if \(2^{n}+m\) is divisible by 3 ;
(ii) \(f\left(2^{n}-t(m)\right) \leq 0\) if \(2^{n}+m\) is not divisible by 3 .
One more (direct) consequence of the claim is that \(\left|f\left(2^{n}-t(m)\right)\right| \leq \frac{2}{3} \cdot 3^{n / 2}\) for all \(m, n \geq 0\).
The last inequality enables us to find an upper bound for \(|f(m)|\) for \(m\) less than a given power of 2 . We prove by induction on \(n\) that \(|f(m)| \leq 3^{n / 2}\) holds true for all integers \(m, n \geq 0\) with \(2^{n} > m\). The base \(n=0\) is clear as \(f(0)=1\). For the inductive step from \(n\) to \(n+1\), let \(m\) and \(n\) satisfy \(2^{n+1} > m\). If \(m < 2^{n}\), we are done by the inductive hypothesis. If \(m \geq 2^{n}\) then \(m=2^{n}+k\) where \(2^{n} > k \geq 0\). Now, by \(\left|f\left(2^{n}-t(k)\right)\right| \leq \frac{2}{3} \cdot 3^{n / 2}\) and the inductive assumption,
\[
|f(m)|=\left|f\left(2^{n}-t(k)\right)-f(k)\right| \leq\left|f\left(2^{n}-t(k)\right)\right|+|f(k)| \leq \frac{2}{3} \cdot 3^{n / 2}+3^{n / 2} < 3^{(n+1) / 2} .
\]
The induction is complete.
We proceed to prove that \(f(3 p) \geq 0\) for all integers \(p \geq 0\). Since \(3 p\) is not a power of 2 , its binary expansion contains at least two summands. Hence one can write \(3 p=2^{a}+2^{b}+c\) where \(a > b\) and \(2^{b} > c \geq 0\). Applying the recurrence formula twice yields
\[
f(3 p)=f\left(2^{a}+2^{b}+c\right)=f\left(2^{a}-t\left(2^{b}+c\right)\right)-f\left(2^{b}-t(c)\right)+f(c) .
\]
Since \(2^{a}+2^{b}+c\) is divisible by 3 , we have \(f\left(2^{a}-t\left(2^{b}+c\right)\right) \geq 3^{(a-1) / 2}\) by (i). Since \(2^{b}+c\) is not divisible by 3 , we have \(f\left(2^{b}-t(c)\right) \leq 0\) by (ii). Finally \(|f(c)| \leq 3^{b / 2}\) as \(2^{b} > c \geq 0\), so that \(f(c) \geq-3^{b / 2}\). Therefore \(f(3 p) \geq 3^{(a-1) / 2}-3^{b / 2}\) which is nonnegative because \(a > b\).
