---
id: fimo_2014_algebra_p3
year: 2014
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2014 Algebra Problem 3"
---

For a sequence \(x_{1}, x_{2}, \ldots, x_{n}\) of real numbers, we define its price as

\[
\max _{1 \leqslant i \leqslant n}\left|x_{1}+\cdots+x_{i}\right| .
\]

Given \(n\) real numbers, Dave and George want to arrange them into a sequence with a low price. Diligent Dave checks all possible ways and finds the minimum possible price \(D\). Greedy George, on the other hand, chooses \(x_{1}\) such that \(\left|x_{1}\right|\) is as small as possible; among the remaining numbers, he chooses \(x_{2}\) such that \(\left|x_{1}+x_{2}\right|\) is as small as possible, and so on. Thus, in the \(i^{\text {th }}\) step he chooses \(x_{i}\) among the remaining numbers so as to minimise the value of \(\left|x_{1}+x_{2}+\cdots+x_{i}\right|\). In each step, if several numbers provide the same value, George chooses one at random. Finally he gets a sequence with price \(G\).

Find the least possible constant \(c\) such that for every positive integer \(n\), for every collection of \(n\) real numbers, and for every possible sequence that George might obtain, the resulting values satisfy the inequality \(G \leqslant c D\).

The final answer is \(c=2\).

---
If the initial numbers are \(1,-1,2\), and \(-2\), then Dave may arrange them as \(1,-2,2,-1\), while George may get the sequence \(1,-1,2,-2\), resulting in \(D=1\) and \(G=2\). So we obtain \(c \geqslant 2\).

Therefore, it remains to prove that \(G \leqslant 2 D\). Let \(x_{1}, x_{2}, \ldots, x_{n}\) be the numbers Dave and George have at their disposal. Assume that Dave and George arrange them into sequences \(d_{1}, d_{2}, \ldots, d_{n}\) and \(g_{1}, g_{2}, \ldots, g_{n}\), respectively. Put

\[
M=\max _{1 \leqslant i \leqslant n}\left|x_{i}\right|, \quad S=\left|x_{1}+\cdots+x_{n}\right|, \quad \text { and } \quad N=\max \{M, S\}
\]

We claim that

\[
\begin{aligned}
& D \geqslant S, \\
& D \geqslant \frac{M}{2}, \quad \text { and } \\
& G \leqslant N=\max \{M, S\} .
\end{aligned}
\]

These inequalities yield the desired estimate, as \(G \leqslant \max \{M, S\} \leqslant \max \{M, 2 S\} \leqslant 2 D\).

The inequality (1) is a direct consequence of the definition of the price.

To prove (2), consider an index \(i\) with \(\left|d_{i}\right|=M\). Then we have

\(M=\left|d_{i}\right|=\left|\left(d_{1}+\cdots+d_{i}\right)-\left(d_{1}+\cdots+d_{i-1}\right)\right| \leqslant\left|d_{1}+\cdots+d_{i}\right|+\left|d_{1}+\cdots+d_{i-1}\right| \leqslant 2 D\),

as required.

It remains to establish (3). Put \(h_{i}=g_{1}+g_{2}+\cdots+g_{i}\). We will prove by induction on \(i\) that \(\left|h_{i}\right| \leqslant N\). The base case \(i=1\) holds, since \(\left|h_{1}\right|=\left|g_{1}\right| \leqslant M \leqslant N\). Notice also that \(\left|h_{n}\right|=S \leqslant N\).

For the induction step, assume that \(\left|h_{i-1}\right| \leqslant N\). We distinguish two cases.

Case 1. Assume that no two of the numbers \(g_{i}, g_{i+1}, \ldots, g_{n}\) have opposite signs.

Without loss of generality, we may assume that they are all nonnegative. Then one has \(h_{i-1} \leqslant h_{i} \leqslant \cdots \leqslant h_{n}\), thus

\[
\left|h_{i}\right| \leqslant \max \left\{\left|h_{i-1}\right|,\left|h_{n}\right|\right\} \leqslant N .
\]

Case 2. Among the numbers \(g_{i}, g_{i+1}, \ldots, g_{n}\) there are positive and negative ones. Then there exists some index \(j \geqslant i\) such that \(h_{i-1} g_{j} \leqslant 0\). By the definition of George's sequence we have

\[
\left|h_{i}\right|=\left|h_{i-1}+g_{i}\right| \leqslant\left|h_{i-1}+g_{j}\right| \leqslant \max \left\{\left|h_{i-1}\right|,\left|g_{j}\right|\right\} \leqslant N
\]

Thus, the induction step is established.
