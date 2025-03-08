---
id: fimo_2018_algebra_p4
year: 2018
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2018 Algebra Problem 4"
---

Let \(a_{0}, a_{1}, a_{2}, \ldots\) be a sequence of real numbers such that \(a_{0}=0, a_{1}=1\), and for every \(n \geqslant 2\) there exists \(1 \leqslant k \leqslant n\) satisfying

\[
a_{n}=\frac{a_{n-1}+\cdots+a_{n-k}}{k}
\]

Find the maximal possible value of \(a_{2018}-a_{2017}\).

The final answer is that the maximal value is \(\frac{2016}{2017^{2}}\).

---
The claimed maximal value is achieved at

\[
\begin{gathered}
a_{1}=a_{2}=\cdots=a_{2016}=1, \quad a_{2017}=\frac{a_{2016}+\cdots+a_{0}}{2017}=1-\frac{1}{2017}, \\
a_{2018}=\frac{a_{2017}+\cdots+a_{1}}{2017}=1-\frac{1}{2017^{2}} .
\end{gathered}
\]

Now we need to show that this value is optimal. For brevity, we use the notation

\[
S(n, k)=a_{n-1}+a_{n-2}+\cdots+a_{n-k} \quad \text { for nonnegative integers } k \leqslant n \text {. }
\]

In particular, \(S(n, 0)=0\) and \(S(n, 1)=a_{n-1}\). In these terms, for every integer \(n \geqslant 2\) there exists a positive integer \(k \leqslant n\) such that \(a_{n}=S(n, k) / k\).

For every integer \(n \geqslant 1\) we define

\[
M_{n}=\max _{1 \leqslant k \leqslant n} \frac{S(n, k)}{k}, \quad m_{n}=\min _{1 \leqslant k \leqslant n} \frac{S(n, k)}{k}, \quad \text { and } \quad \Delta_{n}=M_{n}-m_{n} \geqslant 0 .
\]

By definition, \(a_{n} \in\left[m_{n}, M_{n}\right]\) for all \(n \geqslant 2\); on the other hand, \(a_{n-1}=S(n, 1) / 1 \in\left[m_{n}, M_{n}\right]\). Therefore,

\[
a_{2018}-a_{2017} \leqslant M_{2018}-m_{2018}=\Delta_{2018}
\]

and we are interested in an upper bound for \(\Delta_{2018}\).

Also by definition, for any \(0 < k \leqslant n\) we have \(k m_{n} \leqslant S(n, k) \leqslant k M_{n}\); notice that these inequalities are also valid for \(k=0\).

Claim 1. For every \(n > 2\), we have \(\Delta_{n} \leqslant \frac{n-1}{n} \Delta_{n-1}\).

Proof. Choose positive integers \(k, \ell \leqslant n\) such that \(M_{n}=S(n, k) / k\) and \(m_{n}=S(n, \ell) / \ell\). We have \(S(n, k)=a_{n-1}+S(n-1, k-1)\), so

\[
k\left(M_{n}-a_{n-1}\right)=S(n, k)-k a_{n-1}=S(n-1, k-1)-(k-1) a_{n-1} \leqslant(k-1)\left(M_{n-1}-a_{n-1}\right),
\]

since \(S(n-1, k-1) \leqslant(k-1) M_{n-1}\). Similarly, we get

\[
\ell\left(a_{n-1}-m_{n}\right)=(\ell-1) a_{n-1}-S(n-1, \ell-1) \leqslant(\ell-1)\left(a_{n-1}-m_{n-1}\right) .
\]

Since \(m_{n-1} \leqslant a_{n-1} \leqslant M_{n-1}\) and \(k, \ell \leqslant n\), the obtained inequalities yield

\[
\begin{aligned}
& M_{n}-a_{n-1} \leqslant \frac{k-1}{k}\left(M_{n-1}-a_{n-1}\right) \leqslant \frac{n-1}{n}\left(M_{n-1}-a_{n-1}\right) \quad \text { and } \\
& a_{n-1}-m_{n} \leqslant \frac{\ell-1}{\ell}\left(a_{n-1}-m_{n-1}\right) \leqslant \frac{n-1}{n}\left(a_{n-1}-m_{n-1}\right) .
\end{aligned}
\]

Therefore,

\[
\Delta_{n}=\left(M_{n}-a_{n-1}\right)+\left(a_{n-1}-m_{n}\right) \leqslant \frac{n-1}{n}\left(\left(M_{n-1}-a_{n-1}\right)+\left(a_{n-1}-m_{n-1}\right)\right)=\frac{n-1}{n} \Delta_{n-1} .
\]

Back to the problem, if \(a_{n}=1\) for all \(n \leqslant 2017\), then \(a_{2018} \leqslant 1\) and hence \(a_{2018}-a_{2017} \leqslant 0\). Otherwise, let \(2 \leqslant q \leqslant 2017\) be the minimal index with \(a_{q} < 1\). We have \(S(q, i)=i\) for all \(i=1,2, \ldots, q-1\), while \(S(q, q)=q-1\). Therefore, \(a_{q} < 1\) yields \(a_{q}=S(q, q) / q=1-\frac{1}{q}\).

Now we have \(S(q+1, i)=i-\frac{1}{q}\) for \(i=1,2, \ldots, q\), and \(S(q+1, q+1)=q-\frac{1}{q}\). This gives us

\[
m_{q+1}=\frac{S(q+1,1)}{1}=\frac{S(q+1, q+1)}{q+1}=\frac{q-1}{q} \quad \text { and } \quad M_{q+1}=\frac{S(q+1, q)}{q}=\frac{q^{2}-1}{q^{2}}
\]

so \(\Delta_{q+1}=M_{q+1}-m_{q+1}=(q-1) / q^{2}\). Denoting \(N=2017 \geqslant q\) and using Claim 1 for \(n=q+2, q+3, \ldots, N+1\) we finally obtain

\[
\Delta_{N+1} \leqslant \frac{q-1}{q^{2}} \cdot \frac{q+1}{q+2} \cdot \frac{q+2}{q+3} \cdots \frac{N}{N+1}=\frac{1}{N+1}\left(1-\frac{1}{q^{2}}\right) \leqslant \frac{1}{N+1}\left(1-\frac{1}{N^{2}}\right)=\frac{N-1}{N^{2}},
\]

as required.
