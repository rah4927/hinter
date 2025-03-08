---
id: fimo_2013_algebra_p1
year: 2013
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2013 Algebra Problem 1"
---

Let \(n\) be a positive integer and let \(a_{1}, \ldots, a_{n-1}\) be arbitrary real numbers. Define the sequences \(u_{0}, \ldots, u_{n}\) and \(v_{0}, \ldots, v_{n}\) inductively by \(u_{0}=u_{1}=v_{0}=v_{1}=1\), and

\[
u_{k+1}=u_{k}+a_{k} u_{k-1}, \quad v_{k+1}=v_{k}+a_{n-k} v_{k-1} \quad \text { for } k=1, \ldots, n-1 \text {. }
\]

Prove that \(u_{n}=v_{n}\)

---
We prove by induction on \(k\) that

\[
u_{k}=\sum_{\substack{0 < i_{1} < \ldots < i_{t} < k, i_{j+1}-i_{j} \geqslant 2}} a_{i_{1}} \ldots a_{i_{t}} .
\]

Note that we have one trivial summand equal to 1 (which corresponds to \(t=0\) and the empty sequence, whose product is 1 ).

For \(k=0,1\) the sum on the right-hand side only contains the empty product, so (1) holds due to \(u_{0}=u_{1}=1\). For \(k \geqslant 1\), assuming the result is true for \(0,1, \ldots, k\), we have

\[
\begin{aligned}
& u_{k+1}=\sum_{\substack{0 < i_{1} < \ldots < i_{t} < k, i_{j+1}-i_{j} \geqslant 2}} a_{i_{1}} \ldots a_{i_{t}}+\sum_{\substack{0 < i_{1} < \ldots < i_{t} < k-1, i_{j+1}-i_{j} \geqslant 2}} a_{i_{1}} \ldots a_{i_{t}} \cdot a_{k} \\
& =\sum_{\substack{0 < i_{1} < \ldots < i_{t} < k+1, i_{j+1}-i_{j} \geqslant 2, k \notin\left\{i_{1}, \ldots, i_{t}\right\}}} a_{i_{1}} \ldots a_{i_{t}}+\sum_{\substack{0 < i_{1} < \ldots < i_{t} < k+1 \\ i_{j+1}-i_{j} \geqslant 2, k \in\left\{i_{1}, \ldots, i_{t}\right\}}} a_{i_{1}} \ldots a_{i_{t}} \\
& =\sum_{\substack{0 < i_{1} < \ldots < i_{t} < k+1, i_{j+1}-i_{j} \geqslant 2}} a_{i_{1}} \ldots a_{i_{t}},
\end{aligned}
\]

as required.

Applying (1) to the sequence \(b_{1}, \ldots, b_{n}\) given by \(b_{k}=a_{n-k}\) for \(1 \leqslant k \leqslant n\), we get

\[
v_{k}=\sum_{\substack{0 < i_{1} < \ldots < i_{t} < k, i_{j+1}-i_{j} \geqslant 2}} b_{i_{1}} \ldots b_{i_{t}}=\sum_{\substack{n > i_{1} > \ldots > i_{t} > n-k \\ i_{j}-i_{j+1} \geqslant 2}} a_{i_{1}} \ldots a_{i_{t}} .
\]

For \(k=n\) the expressions (1) and (2) coincide, so indeed \(u_{n}=v_{n}\).
