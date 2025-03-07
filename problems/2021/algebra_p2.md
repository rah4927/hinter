---
id: fimo_2021_algebra_p2
year: 2021
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2021 Algebra Problem 2"
---

For every integer \(n \geqslant 1\) consider the \(n \times n\) table with entry \(\left\lfloor\frac{i j}{n+1}\right\rfloor\) at the intersection of row \(i\) and column \(j\), for every \(i=1, \ldots, n\) and \(j=1, \ldots, n\). Determine all integers \(n \geqslant 1\) for which the sum of the \(n^{2}\) entries in the table is equal to \(\frac{1}{4} n^{2}(n-1)\).


---
First, observe that every pair \(x, y\) of real numbers for which the sum \(x+y\) is integer satisfies
\[
\lfloor x\rfloor+\lfloor y\rfloor \geqslant x+y-1
\]
The inequality is strict if \(x\) and \(y\) are integers, and it holds with equality otherwise.
We estimate the sum \(S\) as follows.
\[
\begin{array}{r}
2 S=\sum_{1 \leqslant i, j \leqslant n}\left(\left\lfloor\frac{i j}{n+1}\right\rfloor+\left\lfloor\frac{i j}{n+1}\right\rfloor\right)=\sum_{1 \leqslant i, j \leqslant n}\left(\left\lfloor\frac{i j}{n+1}\right\rfloor+\left\lfloor\frac{(n+1-i) j}{n+1}\right\rfloor\right) \\
\geqslant \sum_{1 \leqslant i, j \leqslant n}(j-1)=\frac{(n-1) n^{2}}{2} .
\end{array}
\]
The inequality in the last line follows from (1) by setting \(x=i j /(n+1)\) and \(y=(n+1-\) i) \(j /(n+1)\), so that \(x+y=j\) is integral.
Now \(S=\frac{1}{4} n^{2}(n-1)\) if and only if the inequality in the last line holds with equality, which means that none of the values \(i j /(n+1)\) with \(1 \leqslant i, j \leqslant n\) may be integral.
Hence, if \(n+1\) is composite with factorisation \(n+1=a b\) for \(2 \leqslant a, b \leqslant n\), one gets a strict inequality for \(i=a\) and \(j=b\). If \(n+1\) is a prime, then \(i j /(n+1)\) is never integral and \(S=\frac{1}{4} n^{2}(n-1)\)
