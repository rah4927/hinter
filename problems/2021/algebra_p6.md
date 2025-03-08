---
id: fimo_2021_algebra_p6
year: 2021
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2021 Algebra Problem 6"
---

Let \(A\) be a finite set of (not necessarily positive) integers, and let \(m \geqslant 2\) be an integer. Assume that there exist non-empty subsets \(B_{1}, B_{2}, B_{3}, \ldots, B_{m}\) of \(A\) whose elements add up to the sums \(m^{1}, m^{2}, m^{3}, \ldots, m^{m}\), respectively. Prove that \(A\) contains at least \(m / 2\) elements.

---
Let \(A=\left\{a_{1}, \ldots, a_{k}\right\}\). Assume that, on the contrary, \(k=|A| < m / 2\). Let
\[
s_{i}:=\sum_{j: a_{j} \in B_{i}} a_{j}
\]
be the sum of elements of \(B_{i}\). We are given that \(s_{i}=m^{i}\) for \(i=1, \ldots, m\).
Now consider all \(m^{m}\) expressions of the form
\[
f\left(c_{1}, \ldots, c_{m}\right):=c_{1} s_{1}+c_{2} s_{2}+\ldots+c_{m} s_{m}, c_{i} \in\{0,1, \ldots, m-1\} \text { for all } i=1,2, \ldots, m
\]
Note that every number \(f\left(c_{1}, \ldots, c_{m}\right)\) has the form
\[
\alpha_{1} a_{1}+\ldots+\alpha_{k} a_{k}, \alpha_{i} \in\{0,1, \ldots, m(m-1)\}
\]
Hence, there are at most \((m(m-1)+1)^{k} < m^{2 k} < m^{m}\) distinct values of our expressions; therefore, at least two of them coincide.
Since \(s_{i}=m^{i}\), this contradicts the uniqueness of representation of positive integers in the base- \(m\) system.
