---
id: fimo_2019_algebra_p4
year: 2019
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2019 Algebra Problem 4"
---

Let \(n \geqslant 2\) be a positive integer and \(a_{1}, a_{2}, \ldots, a_{n}\) be real numbers such that

\[
a_{1}+a_{2}+\cdots+a_{n}=0
\]

Define the set \(A\) by

\[
A=\left\{(i, j)|1 \leqslant i < j \leqslant n,| a_{i}-a_{j} \mid \geqslant 1\right\}
\]

Prove that, if \(A\) is not empty, then

\[
\sum_{(i, j) \in A} a_{i} a_{j} < 0
\]

---
Define sets \(B\) and \(C\) by

\[
\begin{aligned}
& B=\left\{(i, j)|1 \leqslant i, j \leqslant n,| a_{i}-a_{j} \mid \geqslant 1\right\}, \\
& C=\left\{(i, j)|1 \leqslant i, j \leqslant n,| a_{i}-a_{j} \mid < 1\right\} .
\end{aligned}
\]

We have

\[
\begin{aligned}
\sum_{(i, j) \in A} a_{i} a_{j} & =\frac{1}{2} \sum_{(i, j) \in B} a_{i} a_{j} \\
\sum_{(i, j) \in B} a_{i} a_{j} & =\sum_{1 \leqslant i, j \leqslant n} a_{i} a_{j}-\sum_{(i, j) \notin B} a_{i} a_{j}=0-\sum_{(i, j) \in C} a_{i} a_{j} .
\end{aligned}
\]

So it suffices to show that if \(A\) (and hence \(B\) ) are nonempty, then

\[
\sum_{(i, j) \in C} a_{i} a_{j} > 0
\]

Partition the indices into sets \(P, Q, R\), and \(S\) such that

\[
\begin{array}{ll}
P=\left\{i \mid a_{i} \leqslant-1\right\} & R=\left\{i \mid 0 < a_{i} < 1\right\} \\
Q=\left\{i \mid-1 < a_{i} \leqslant 0\right\} & S=\left\{i \mid 1 \leqslant a_{i}\right\} .
\end{array}
\]

Then

\[
\sum_{(i, j) \in C} a_{i} a_{j} \geqslant \sum_{i \in P \cup S} a_{i}^{2}+\sum_{i, j \in Q \cup R} a_{i} a_{j}=\sum_{i \in P \cup S} a_{i}^{2}+\left(\sum_{i \in Q \cup R} a_{i}\right)^{2} \geqslant 0 .
\]

The first inequality holds because all of the positive terms in the RHS are also in the LHS, and all of the negative terms in the LHS are also in the RHS. The first inequality attains equality only if both sides have the same negative terms, which implies \(\left|a_{i}-a_{j}\right| < 1\) whenever \(i, j \in Q \cup R\); the second inequality attains equality only if \(P=S=\varnothing\). But then we would have \(A=\varnothing\). So \(A\) nonempty implies that the inequality holds strictly, as required.
