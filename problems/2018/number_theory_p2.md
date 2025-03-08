---
id: fimo_2018_number_theory_p2
year: 2018
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2018 Number Theory Problem 2"
---

Let \(n > 1\) be a positive integer. Each cell of an \(n \times n\) table contains an integer. Suppose that the following conditions are satisfied:

(i) Each number in the table is congruent to 1 modulo \(n\);

(ii) The sum of numbers in any row, as well as the sum of numbers in any column, is congruent to \(n\) modulo \(n^{2}\).

Let \(R_{i}\) be the product of the numbers in the \(i^{\text {th }}\) row, and \(C_{j}\) be the product of the numbers in the \(j^{\text {th }}\) column. Prove that the sums \(R_{1}+\cdots+R_{n}\) and \(C_{1}+\cdots+C_{n}\) are congruent modulo \(n^{4}\).

---
Let \(A_{i, j}\) be the entry in the \(i^{\text {th }}\) row and the \(j^{\text {th }}\) column; let \(P\) be the product of all \(n^{2}\) entries. For convenience, denote \(a_{i, j}=A_{i, j}-1\) and \(r_{i}=R_{i}-1\). We show that

\[
\sum_{i=1}^{n} R_{i} \equiv(n-1)+P \quad\left(\bmod n^{4}\right)
\]

Due to symmetry of the problem conditions, the sum of all the \(C_{j}\) is also congruent to \((n-1)+P\) modulo \(n^{4}\), whence the conclusion.

By condition \((i)\), the number \(n\) divides \(a_{i, j}\) for all \(i\) and \(j\). So, every product of at least two of the \(a_{i, j}\) is divisible by \(n^{2}\), hence

\(R_{i}=\prod_{j=1}^{n}\left(1+a_{i, j}\right)=1+\sum_{j=1}^{n} a_{i, j}+\sum_{1 \leqslant j_{1} < j_{2} \leqslant n} a_{i, j_{1}} a_{i, j_{2}}+\cdots \equiv 1+\sum_{j=1}^{n} a_{i, j} \equiv 1-n+\sum_{j=1}^{n} A_{i, j} \quad\left(\bmod n^{2}\right)\)

for every index \(i\). Using condition \((i i)\), we obtain \(R_{i} \equiv 1\left(\bmod n^{2}\right)\), and so \(n^{2} \mid r_{i}\).

Therefore, every product of at least two of the \(r_{i}\) is divisible by \(n^{4}\). Repeating the same argument, we obtain

\[
P=\prod_{i=1}^{n} R_{i}=\prod_{i=1}^{n}\left(1+r_{i}\right) \equiv 1+\sum_{i=1}^{n} r_{i} \quad\left(\bmod n^{4}\right)
\]

whence

\[
\sum_{i=1}^{n} R_{i}=n+\sum_{i=1}^{n} r_{i} \equiv n+(P-1) \quad\left(\bmod n^{4}\right)
\]

as desired.
