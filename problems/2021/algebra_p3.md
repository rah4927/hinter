---
id: fimo_2021_algebra_p3
year: 2021
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2021 Algebra Problem 3"
---

Given a positive integer \(n\), find the smallest value of \(\left\lfloor\frac{a_{1}}{1}\right\rfloor+\left\lfloor\frac{a_{2}}{2}\right\rfloor+\cdots+\left\lfloor\frac{a_{n}}{n}\right\rfloor\) over all permutations \(\left(a_{1}, a_{2}, \ldots, a_{n}\right)\) of \((1,2, \ldots, n)\).


---
Suppose that \(2^{k} \leqslant n < 2^{k+1}\) with some nonnegative integer \(k\). First we show a permutation \(\left(a_{1}, a_{2}, \ldots, a_{n}\right)\) such that \(\left\lfloor\frac{a_{1}}{1}\right\rfloor+\left\lfloor\frac{a_{2}}{2}\right\rfloor+\cdots+\left\lfloor\frac{a_{n}}{n}\right\rfloor=k+1\); then we will prove that \(\left\lfloor\frac{a_{1}}{1}\right\rfloor+\left\lfloor\frac{a_{2}}{2}\right\rfloor+\cdots+\left\lfloor\frac{a_{n}}{n}\right\rfloor \geqslant k+1\) for every permutation. Hence, the minimal possible value will be \(k+1\)
I. Consider the permutation
\[
\begin{gathered}
\left(a_{1}\right)=(1), \quad\left(a_{2}, a_{3}\right)=(3,2), \quad\left(a_{4}, a_{5}, a_{6}, a_{7}\right)=(7,4,5,6), \quad \ldots \\
\left(a_{2^{k-1}}, \ldots, a_{2^{k}-1}\right)=\left(2^{k}-1,2^{k-1}, 2^{k-1}+1, \ldots, 2^{k}-2\right), \\
\left(a_{2^{k}}, \ldots, a_{n}\right)=\left(n, 2^{k}, 2^{k}+1, \ldots, n-1\right) .
\end{gathered}
\]
This permutation consists of \(k+1\) cycles. In every cycle \(\left(a_{p}, \ldots, a_{q}\right)=(q, p, p+1, \ldots, q-1)\) we have \(q < 2 p\), so
\[
\sum_{i=p}^{q}\left\lfloor\frac{a_{i}}{i}\right\rfloor=\left\lfloor\frac{q}{p}\right\rfloor+\sum_{i=p+1}^{q}\left\lfloor\frac{i-1}{i}\right\rfloor=1
\]
The total sum over all cycles is precisely \(k+1\).
II. In order to establish the lower bound, we prove a more general statement.
Claim. If \(b_{1}, \ldots, b_{2^{k}}\) are distinct positive integers then
\[
\sum_{i=1}^{2^{k}}\left\lfloor\frac{b_{i}}{i}\right\rfloor \geqslant k+1
\]
From the Claim it follows immediately that \(\sum_{i=1}^{n}\left\lfloor\frac{a_{i}}{i}\right\rfloor \geqslant \sum_{i=1}^{2^{k}}\left\lfloor\frac{a_{i}}{i}\right\rfloor \geqslant k+1\).
Proof of the Claim. Apply induction on \(k\). For \(k=1\) the claim is trivial, \(\left\lfloor\frac{b_{1}}{1}\right\rfloor \geqslant 1\). Suppose the Claim holds true for some positive integer \(k\), and consider \(k+1\).
If there exists an index \(j\) such that \(2^{k} < j \leqslant 2^{k+1}\) and \(b_{j} \geqslant j\) then
\[
\sum_{i=1}^{2^{k+1}}\left\lfloor\frac{b_{i}}{i}\right\rfloor \geqslant \sum_{i=1}^{2^{k}}\left\lfloor\frac{b_{i}}{i}\right\rfloor+\left\lfloor\frac{b_{j}}{j}\right\rfloor \geqslant(k+1)+1
\]
by the induction hypothesis, so the Claim is satisfied.
Otherwise we have \(b_{j} < j \leqslant 2^{k+1}\) for every \(2^{k} < j \leqslant 2^{k+1}\). Among the \(2^{k+1}\) distinct numbers \(b_{1}, \ldots, b_{2^{k+1}}\) there is some \(b_{m}\) which is at least \(2^{k+1}\); that number must be among \(b_{1} \ldots, b_{2^{k}}\). Hence, \(1 \leqslant m \leqslant 2^{k}\) and \(b_{m} \geqslant 2^{k+1}\).
We will apply the induction hypothesis to the numbers
\[
c_{1}=b_{1}, \ldots, c_{m-1}=b_{m-1}, \quad c_{m}=b_{2^{k}+1}, \quad c_{m+1}=b_{m+1}, \ldots, c_{2^{k}}=b_{2^{k}}
\]
so take the first \(2^{k}\) numbers but replace \(b_{m}\) with \(b_{2^{k}+1}\). Notice that
\[
\left\lfloor\frac{b_{m}}{m}\right\rfloor \geqslant\left\lfloor\frac{2^{k+1}}{m}\right\rfloor=\left\lfloor\frac{2^{k}+2^{k}}{m}\right\rfloor \geqslant\left\lfloor\frac{b_{2^{k}+1}+m}{m}\right\rfloor=\left\lfloor\frac{c_{m}}{m}\right\rfloor+1
\]
For the other indices \(i\) with \(1 \leqslant i \leqslant 2^{k}, i \neq m\) we have \(\left\lfloor\frac{b_{i}}{i}\right\rfloor=\left\lfloor\frac{c_{i}}{i}\right\rfloor\), so
\[
\sum_{i=1}^{2^{k+1}}\left\lfloor\frac{b_{i}}{i}\right\rfloor=\sum_{i=1}^{2^{k}}\left\lfloor\frac{b_{i}}{i}\right\rfloor \geqslant \sum_{i=1}^{2^{k}}\left\lfloor\frac{c_{i}}{i}\right\rfloor+1 \geqslant(k+1)+1 .
\]
That proves the Claim and hence completes the solution.
