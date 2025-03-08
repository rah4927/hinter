---
id: fimo_2017_algebra_p7
year: 2017
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2017 Algebra Problem 7"
---

Let \(a_{0}, a_{1}, a_{2}, \ldots\) be a sequence of integers and \(b_{0}, b_{1}, b_{2}, \ldots\) be a sequence of positive integers such that \(a_{0}=0, a_{1}=1\), and

\[
a_{n+1}=\left\{\begin{array}{ll}
a_{n} b_{n}+a_{n-1}, & \text { if } b_{n-1}=1 \\
a_{n} b_{n}-a_{n-1}, & \text { if } b_{n-1} > 1
\end{array} \quad \text { for } n=1,2, \ldots\right.
\]

Prove that at least one of the two numbers \(a_{2017}\) and \(a_{2018}\) must be greater than or equal to 2017.

---
The value of \(b_{0}\) is irrelevant since \(a_{0}=0\), so we may assume that \(b_{0}=1\).

Lemma. We have \(a_{n} \geqslant 1\) for all \(n \geqslant 1\).

Proof. Let us suppose otherwise in order to obtain a contradiction. Let

\[
n \geqslant 1 \text { be the smallest integer with } a_{n} \leqslant 0 .
\]

Note that \(n \geqslant 2\). It follows that \(a_{n-1} \geqslant 1\) and \(a_{n-2} \geqslant 0\). Thus we cannot have \(a_{n}=\) \(a_{n-1} b_{n-1}+a_{n-2}\), so we must have \(a_{n}=a_{n-1} b_{n-1}-a_{n-2}\). Since \(a_{n} \leqslant 0\), we have \(a_{n-1} \leqslant a_{n-2}\). Thus we have \(a_{n-2} \geqslant a_{n-1} \geqslant a_{n}\).

Let

\[
r \text { be the smallest index with } a_{r} \geqslant a_{r+1} \geqslant a_{r+2} \text {. }
\]

Then \(r \leqslant n-2\) by the above, but also \(r \geqslant 2\) : if \(b_{1}=1\), then \(a_{2}=a_{1}=1\) and \(a_{3}=a_{2} b_{2}+a_{1} > a_{2}\); if \(b_{1} > 1\), then \(a_{2}=b_{1} > 1=a_{1}\).

By the minimal choice (2) of \(r\), it follows that \(a_{r-1} < a_{r}\). And since \(2 \leqslant r \leqslant n-2\), by the minimal choice (1) of \(n\) we have \(a_{r-1}, a_{r}, a_{r+1} > 0\). In order to have \(a_{r+1} \geqslant a_{r+2}\), we must have \(a_{r+2}=a_{r+1} b_{r+1}-a_{r}\) so that \(b_{r} \geqslant 2\). Putting everything together, we conclude that

\[
a_{r+1}=a_{r} b_{r} \pm a_{r-1} \geqslant 2 a_{r}-a_{r-1}=a_{r}+\left(a_{r}-a_{r-1}\right) > a_{r}
\]

which contradicts (2).

To complete the problem, we prove that \(\max \left\{a_{n}, a_{n+1}\right\} \geqslant n\) by induction. The cases \(n=0,1\) are given. Assume it is true for all non-negative integers strictly less than \(n\), where \(n \geqslant 2\). There are two cases:

Case 1: \(b_{n-1}=1\)

Then \(a_{n+1}=a_{n} b_{n}+a_{n-1}\). By the inductive assumption one of \(a_{n-1}, a_{n}\) is at least \(n-1\) and the other, by the lemma, is at least 1 . Hence

\[
a_{n+1}=a_{n} b_{n}+a_{n-1} \geqslant a_{n}+a_{n-1} \geqslant(n-1)+1=n .
\]

Thus \(\max \left\{a_{n}, a_{n+1}\right\} \geqslant n\), as desired.

Case 2: \(b_{n-1} > 1\).

Since we defined \(b_{0}=1\) there is an index \(r\) with \(1 \leqslant r \leqslant n-1\) such that

\[
b_{n-1}, b_{n-2}, \ldots, b_{r} \geqslant 2 \quad \text { and } \quad b_{r-1}=1 .
\]

We have \(a_{r+1}=a_{r} b_{r}+a_{r-1} \geqslant 2 a_{r}+a_{r-1}\). Thus \(a_{r+1}-a_{r} \geqslant a_{r}+a_{r-1}\).

Now we claim that \(a_{r}+a_{r-1} \geqslant r\). Indeed, this holds by inspection for \(r=1\); for \(r \geqslant 2\), one of \(a_{r}, a_{r-1}\) is at least \(r-1\) by the inductive assumption, while the other, by the lemma, is at least 1 . Hence \(a_{r}+a_{r-1} \geqslant r\), as claimed, and therefore \(a_{r+1}-a_{r} \geqslant r\) by the last inequality in the previous paragraph.

Since \(r \geqslant 1\) and, by the lemma, \(a_{r} \geqslant 1\), from \(a_{r+1}-a_{r} \geqslant r\) we get the following two inequalities:

\[
a_{r+1} \geqslant r+1 \quad \text { and } \quad a_{r+1} > a_{r}
\]

Now observe that

\[
a_{m} > a_{m-1} \Longrightarrow a_{m+1} > a_{m} \text { for } m=r+1, r+2, \ldots, n-1,
\]

since \(a_{m+1}=a_{m} b_{m}-a_{m-1} \geqslant 2 a_{m}-a_{m-1}=a_{m}+\left(a_{m}-a_{m-1}\right) > a_{m}\). Thus

\[
a_{n} > a_{n-1} > \cdots > a_{r+1} \geqslant r+1 \Longrightarrow a_{n} \geqslant n \text {. }
\]

So \(\max \left\{a_{n}, a_{n+1}\right\} \geqslant n\), as desired.
