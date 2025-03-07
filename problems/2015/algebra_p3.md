---
id: fimo_2015_algebra_p3
year: 2015
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2015 Algebra Problem 3"
---

Let \(n\) be a fixed positive integer. Find the maximum possible value of
\[
\sum_{1 \leqslant r < s \leqslant 2 n}(s-r-n) x_{r} x_{s},
\]
where \(-1 \leqslant x_{i} \leqslant 1\) for all \(i=1,2, \ldots, 2 n\).


---
Let \(Z\) be the expression to be maximized. Since this expression is linear in every variable \(x_{i}\) and \(-1 \leqslant x_{i} \leqslant 1\), the maximum of \(Z\) will be achieved when \(x_{i}=-1\) or 1 . Therefore, it suffices to consider only the case when \(x_{i} \in\{-1,1\}\) for all \(i=1,2, \ldots, 2 n\).
For \(i=1,2, \ldots, 2 n\), we introduce auxiliary variables
\[
y_{i}=\sum_{r=1}^{i} x_{r}-\sum_{r=i+1}^{2 n} x_{r} .
\]
Taking squares of both sides, we have
\[
\begin{aligned}
y_{i}^{2} & =\sum_{r=1}^{2 n} x_{r}^{2}+\sum_{r < s \leqslant i} 2 x_{r} x_{s}+\sum_{i < r < s} 2 x_{r} x_{s}-\sum_{r \leqslant i < s} 2 x_{r} x_{s} \\
& =2 n+\sum_{r < s \leqslant i} 2 x_{r} x_{s}+\sum_{i < r < s} 2 x_{r} x_{s}-\sum_{r \leqslant i < s} 2 x_{r} x_{s},
\end{aligned}
\]
where the last equality follows from the fact that \(x_{r} \in\{-1,1\}\). Notice that for every \(r < s\), the coefficient of \(x_{r} x_{s}\) in (1) is 2 for each \(i=1, \ldots, r-1, s, \ldots, 2 n\), and this coefficient is \(-2\) for each \(i=r, \ldots, s-1\). This implies that the coefficient of \(x_{r} x_{s}\) in \(\sum_{i=1}^{2 n} y_{i}^{2}\) is \(2(2 n-s+r)-2(s-r)=\) \(4(n-s+r)\). Therefore, summing (1) for \(i=1,2, \ldots, 2 n\) yields
\[
\sum_{i=1}^{2 n} y_{i}^{2}=4 n^{2}+\sum_{1 \leqslant r < s \leqslant 2 n} 4(n-s+r) x_{r} x_{s}=4 n^{2}-4 Z .
\]
Hence, it suffices to find the minimum of the left-hand side.
Since \(x_{r} \in\{-1,1\}\), we see that \(y_{i}\) is an even integer. In addition, \(y_{i}-y_{i-1}=2 x_{i}=\pm 2\), and so \(y_{i-1}\) and \(y_{i}\) are consecutive even integers for every \(i=2,3, \ldots, 2 n\). It follows that \(y_{i-1}^{2}+y_{i}^{2} \geqslant 4\), which implies
\[
\sum_{i=1}^{2 n} y_{i}^{2}=\sum_{j=1}^{n}\left(y_{2 j-1}^{2}+y_{2 j}^{2}\right) \geqslant 4 n .
\]
Combining (2) and (3), we get
\[
4 n \leqslant \sum_{i=1}^{2 n} y_{i}^{2}=4 n^{2}-4 Z
\]
Hence, \(Z \leqslant n(n-1)\).
If we set \(x_{i}=1\) for odd indices \(i\) and \(x_{i}=-1\) for even indices \(i\), then we obtain equality in (3) (and thus in (4)). Therefore, the maximum possible value of \(Z\) is \(n(n-1)\), as desired.
