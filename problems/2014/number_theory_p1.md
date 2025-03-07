---
id: fimo_2014_number_theory_p1
year: 2014
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2014 Number Theory Problem 1"
---

Let \(n \geqslant 2\) be an integer, and let \(A_{n}\) be the set
\[
A_{n}=\left\{2^{n}-2^{k} \mid k \in \mathbb{Z}, 0 \leqslant k < n\right\} .
\]
Determine the largest positive integer that cannot be written as the sum of one or more (not necessarily distinct) elements of \(A_{n}\).


---
Part I. First we show that every integer greater than \((n-2) 2^{n}+1\) can be represented as such a sum. This is achieved by induction on \(n\).
For \(n=2\), the set \(A_{n}\) consists of the two elements 2 and 3. Every positive integer \(m\) except for 1 can be represented as the sum of elements of \(A_{n}\) in this case: as \(m=2+2+\cdots+2\) if \(m\) is even, and as \(m=3+2+2+\cdots+2\) if \(m\) is odd.
Now consider some \(n > 2\), and take an integer \(m > (n-2) 2^{n}+1\). If \(m\) is even, then consider
\[
\frac{m}{2} \geqslant \frac{(n-2) 2^{n}+2}{2}=(n-2) 2^{n-1}+1 > (n-3) 2^{n-1}+1
\]
By the induction hypothesis, there is a representation of the form
\[
\frac{m}{2}=\left(2^{n-1}-2^{k_{1}}\right)+\left(2^{n-1}-2^{k_{2}}\right)+\cdots+\left(2^{n-1}-2^{k_{r}}\right)
\]
for some \(k_{i}\) with \(0 \leqslant k_{i} < n-1\). It follows that
\[
m=\left(2^{n}-2^{k_{1}+1}\right)+\left(2^{n}-2^{k_{2}+1}\right)+\cdots+\left(2^{n}-2^{k_{r}+1}\right)
\]
giving us the desired representation as a sum of elements of \(A_{n}\). If \(m\) is odd, we consider
\[
\frac{m-\left(2^{n}-1\right)}{2} > \frac{(n-2) 2^{n}+1-\left(2^{n}-1\right)}{2}=(n-3) 2^{n-1}+1 .
\]
By the induction hypothesis, there is a representation of the form
\[
\frac{m-\left(2^{n}-1\right)}{2}=\left(2^{n-1}-2^{k_{1}}\right)+\left(2^{n-1}-2^{k_{2}}\right)+\cdots+\left(2^{n-1}-2^{k_{r}}\right)
\]
for some \(k_{i}\) with \(0 \leqslant k_{i} < n-1\). It follows that
\[
m=\left(2^{n}-2^{k_{1}+1}\right)+\left(2^{n}-2^{k_{2}+1}\right)+\cdots+\left(2^{n}-2^{k_{r}+1}\right)+\left(2^{n}-1\right),
\]
giving us the desired representation of \(m\) once again.
Part II. It remains to show that there is no representation for \((n-2) 2^{n}+1\). Let \(N\) be the smallest positive integer that satisfies \(N \equiv 1\left(\bmod 2^{n}\right)\), and which can be represented as a sum of elements of \(A_{n}\). Consider a representation of \(N\), i.e.,
\[
N=\left(2^{n}-2^{k_{1}}\right)+\left(2^{n}-2^{k_{2}}\right)+\cdots+\left(2^{n}-2^{k_{r}}\right),
\]
where \(0 \leqslant k_{1}, k_{2}, \ldots, k_{r} < n\). Suppose first that two of the terms in the sum are the same, i.e., \(k_{i}=k_{j}\) for some \(i \neq j\). If \(k_{i}=k_{j}=n-1\), then we can simply remove these two terms to get a representation for
\[
N-2\left(2^{n}-2^{n-1}\right)=N-2^{n}
\]
as a sum of elements of \(A_{n}\), which contradicts our choice of \(N\). If \(k_{i}=k_{j}=k < n-1\), replace the two terms by \(2^{n}-2^{k+1}\), which is also an element of \(A_{n}\), to get a representation for
\[
N-2\left(2^{n}-2^{k}\right)+2^{n}-2^{k+1}=N-2^{n} .
\]
This is a contradiction once again. Therefore, all \(k_{i}\) have to be distinct, which means that
\[
2^{k_{1}}+2^{k_{2}}+\cdots+2^{k_{r}} \leqslant 2^{0}+2^{1}+2^{2}+\cdots+2^{n-1}=2^{n}-1 .
\]
On the other hand, taking (1) modulo \(2^{n}\), we find
\[
2^{k_{1}}+2^{k_{2}}+\cdots+2^{k_{r}} \equiv-N \equiv-1 \quad\left(\bmod 2^{n}\right) .
\]
Thus we must have \(2^{k_{1}}+2^{k_{2}}+\cdots+2^{k_{r}}=2^{n}-1\), which is only possible if each element of \(\{0,1, \ldots, n-1\}\) occurs as one of the \(k_{i}\). This gives us
\[
N=n 2^{n}-\left(2^{0}+2^{1}+\cdots+2^{n-1}\right)=(n-1) 2^{n}+1 .
\]
In particular, this means that \((n-2) 2^{n}+1\) cannot be represented as a sum of elements of \(A_{n}\).
