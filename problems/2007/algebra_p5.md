---
id: fimo_2007_algebra_p5
year: 2007
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2007 Algebra Problem 5"
---

Let \(c > 2\), and let \(a(1), a(2), \ldots\) be a sequence of nonnegative real numbers such that

\[
a(m+n) \leq 2 a(m)+2 a(n) \text { for all } m, n \geq 1,
\]

and

\[
a\left(2^{k}\right) \leq \frac{1}{(k+1)^{c}} \quad \text { for all } k \geq 0 .
\]

Prove that the sequence \(a(n)\) is bounded.

---
For convenience, define \(a(0)=0\); then condition (1) persists for all pairs of nonnegative indices.

Lemma 1. For arbitrary nonnegative indices \(n_{1}, \ldots, n_{k}\), we have

\[
a\left(\sum_{i=1}^{k} n_{i}\right) \leq \sum_{i=1}^{k} 2^{i} a\left(n_{i}\right)
\]

and

\[
a\left(\sum_{i=1}^{k} n_{i}\right) \leq 2 k \sum_{i=1}^{k} a\left(n_{i}\right) .
\]

Proof. Inequality (3) is proved by induction on \(k\). The base case \(k=1\) is trivial, while the induction step is provided by

\[
a\left(\sum_{i=1}^{k+1} n_{i}\right)=a\left(n_{1}+\sum_{i=2}^{k+1} n_{i}\right) \leq 2 a\left(n_{1}\right)+2 a\left(\sum_{i=1}^{k} n_{i+1}\right) \leq 2 a\left(n_{1}\right)+2 \sum_{i=1}^{k} 2^{i} a\left(n_{i+1}\right)=\sum_{i=1}^{k+1} 2^{i} a\left(n_{i}\right) .
\]

To establish (4), first the inequality

\[
a\left(\sum_{i=1}^{2^{d}} n_{i}\right) \leq 2^{d} \sum_{i=1}^{2^{d}} a\left(n_{i}\right)
\]

can be proved by an obvious induction on \(d\). Then, turning to (4), we find an integer \(d\) such that \(2^{d-1}<k \leq 2^{d}\) to obtain

\[
a\left(\sum_{i=1}^{k} n_{i}\right)=a\left(\sum_{i=1}^{k} n_{i}+\sum_{i=k+1}^{2^{d}} 0\right) \leq 2^{d}\left(\sum_{i=1}^{k} a\left(n_{i}\right)+\sum_{i=k+1}^{2^{d}} a(0)\right)=2^{d} \sum_{i=1}^{k} a\left(n_{i}\right) \leq 2 k \sum_{i=1}^{k} a\left(n_{i}\right) .
\]

Fix an increasing unbounded sequence \(0=M_{0}<M_{1}<M_{2} < \ldots\) of real numbers; the exact values will be defined later. Let \(n\) be an arbitrary positive integer and write

\[
n=\sum_{i=0}^{d} \varepsilon_{i} \cdot 2^{i}, \quad \text { where } \varepsilon_{i} \in\{0,1\} .
\]

Set \(\varepsilon_{i}=0\) for \(i > d\), and take some positive integer \(f\) such that \(M_{f}>d\). Applying (3), we get

\[
a(n)=a\left(\sum_{k=1}^{f} \sum_{M_{k-1} \leq i < M_{k}} \varepsilon_{i} \cdot 2^{i}\right) \leq \sum_{k=1}^{f} 2^{k} a\left(\sum_{M_{k-1} \leq i < M_{k}} \varepsilon_{i} \cdot 2^{i}\right) .
\]

Note that there are less than \(M_{k}-M_{k-1}+1\) integers in interval \(\left[M_{k-1}, M_{k}\right)\); hence, using (4) we have

\[
\begin{aligned}
a(n) & \leq \sum_{k=1}^{f} 2^{k} \cdot 2\left(M_{k}-M_{k-1}+1\right) \sum_{M_{k-1} \leq i < M_{k}} \varepsilon_{i} \cdot a\left(2^{i}\right) \\
& \leq \sum_{k=1}^{f} 2^{k} \cdot 2\left(M_{k}-M_{k-1}+1\right)^{2} \max _{M_{k-1} \leq i < M_{k}} a\left(2^{i}\right) \\
& \leq \sum_{k=1}^{f} 2^{k+1}\left(M_{k}+1\right)^{2} \cdot \frac{1}{\left(M_{k-1}+1\right)^{c}}=\sum_{k=1}^{f}\left(\frac{M_{k}+1}{M_{k-1}+1}\right)^{2} \frac{2^{k+1}}{\left(M_{k-1}+1\right)^{c-2}} .
\end{aligned}
\]

Setting \(M_{k}=4^{k /(c-2)}-1\), we obtain

\[
a(n) \leq \sum_{k=1}^{f} 4^{2 /(c-2)} \frac{2^{k+1}}{\left(4^{(k-1) /(c-2)}\right)^{c-2}}=8 \cdot 4^{2 /(c-2)} \sum_{k=1}^{f}\left(\frac{1}{2}\right)^{k} < 8 \cdot 4^{2 /(c-2)},
\]

and the sequence \(a(n)\) is bounded.
