---
id: fimo_2021_number_theory_p2
year: 2021
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2021 Number Theory Problem 2"
---

Let \(n \geqslant 100\) be an integer. The numbers \(n, n+1, \ldots, 2 n\) are written on \(n+1\) cards, one number per card. The cards are shuffled and divided into two piles. Prove that one of the piles contains two cards such that the sum of their numbers is a perfect square.

---
To solve the problem it suffices to find three squares and three cards with numbers \(a, b, c\) on them such that pairwise sums \(a+b, b+c, a+c\) are equal to the chosen squares. By choosing the three consecutive squares \((2 k-1)^{2},(2 k)^{2},(2 k+1)^{2}\) we arrive at the triple

\[
(a, b, c)=\left(2 k^{2}-4 k, \quad 2 k^{2}+1, \quad 2 k^{2}+4 k\right)
\]

We need a value for \(k\) such that

\[
n \leqslant 2 k^{2}-4 k, \quad \text { and } 2 k^{2}+4 k \leqslant 2 n .
\]

A concrete \(k\) is suitable for all \(n\) with

\[
n \in\left[k^{2}+2 k, 2 k^{2}-4 k+1\right]=: I_{k}
\]

For \(k \geqslant 9\) the intervals \(I_{k}\) and \(I_{k+1}\) overlap because

\[
(k+1)^{2}+2(k+1) \leqslant 2 k^{2}-4 k+1
\]

Hence \(I_{9} \cup I_{10} \cup \ldots=[99, \infty)\), which proves the statement for \(n \geqslant 99\).
