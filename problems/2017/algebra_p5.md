---
id: fimo_2017_algebra_p5
year: 2017
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2017 Algebra Problem 5"
---

An integer \(n \geqslant 3\) is given. We call an \(n\)-tuple of real numbers \(\left(x_{1}, x_{2}, \ldots, x_{n}\right)\) Shiny if for each permutation \(y_{1}, y_{2}, \ldots, y_{n}\) of these numbers we have
\[
\sum_{i=1}^{n-1} y_{i} y_{i+1}=y_{1} y_{2}+y_{2} y_{3}+y_{3} y_{4}+\cdots+y_{n-1} y_{n} \geqslant-1 \text {. }
\]
Find the largest constant \(K=K(n)\) such that
\[
\sum_{1 \leqslant i < j \leqslant n} x_{i} x_{j} \geqslant K
\]
holds for every Shiny \(n\)-tuple \(\left(x_{1}, x_{2}, \ldots, x_{n}\right)\).


---
We present another proof that \(\sum_{i < j} x_{i} x_{j} \geqslant-(n-1) / 2\) for any Shiny \(n\)-tuple \(\left(x_{1}, \ldots, x_{n}\right)\). Assume an ordering of the \(x_{i}\) as in \((2)\), and let \(\ell=n-k\). Assume without loss of generality that \(k \geqslant \ell\). Also assume \(k \neq n\), (as otherwise, all of the \(x_{i}\) are nonpositive, and so the inequality is trivial). Define the sets of indices \(S=\{1,2, \ldots, k\}\) and \(T=\{k+1, \ldots, n\}\). Define the following sums:
\[
K=\sum_{\substack{i < j \\ i, j \in S}} x_{i} x_{j}, \quad M=\sum_{\substack{i \in S \\ j \in T}} x_{i} x_{j}, \quad \text { and } \quad L=\sum_{\substack{i < j \\ i, j \in T}} x_{i} x_{j}
\]
By definition, \(K, L \geqslant 0\) and \(M \leqslant 0\). We aim to show that \(K+L+M \geqslant-(n-1) / 2\).
We split into cases based on whether \(k=\ell\) or \(k > \ell\).
Case \(1: k > \ell\).
Consider all permutations \(\phi:\{1,2, \ldots, n\} \rightarrow\{1,2, \ldots, n\}\) such that \(\phi^{-1}(T)=\{2,4, \ldots, 2 \ell\}\). Note that there are \(k ! \ell !\) such permutations \(\phi\). Define
\[
f(\phi)=\sum_{i=1}^{n-1} x_{\phi(i)} x_{\phi(i+1)}
\]
We know that \(f(\phi) \geqslant-1\) for every permutation \(\phi\) with the above property. Averaging \(f(\phi)\) over all \(\phi\) gives
\[
-1 \leqslant \frac{1}{k ! \ell !} \sum_{\phi} f(\phi)=\frac{2 \ell}{k \ell} M+\frac{2(k-\ell-1)}{k(k-1)} K
\]
where the equality holds because there are \(k \ell\) products in \(M\), of which \(2 \ell\) are selected for each \(\phi\), and there are \(k(k-1) / 2\) products in \(K\), of which \(k-\ell-1\) are selected for each \(\phi\). We now have
\[
K+L+M \geqslant K+L+\left(-\frac{k}{2}-\frac{k-\ell-1}{k-1} K\right)=-\frac{k}{2}+\frac{\ell}{k-1} K+L
\]
Since \(k \leqslant n-1\) and \(K, L \geqslant 0\), we get the desired inequality.
Case 2: \(k=\ell=n / 2\).
We do a similar approach, considering all \(\phi:\{1,2, \ldots, n\} \rightarrow\{1,2, \ldots, n\}\) such that \(\phi^{-1}(T)=\) \(\{2,4, \ldots, 2 \ell\}\), and defining \(f\) the same way. Analogously to Case 1 , we have
\[
-1 \leqslant \frac{1}{k ! \ell !} \sum_{\phi} f(\phi)=\frac{2 \ell-1}{k \ell} M
\]
because there are \(k \ell\) products in \(M\), of which \(2 \ell-1\) are selected for each \(\phi\). Now, we have that
\[
K+L+M \geqslant M \geqslant-\frac{n^{2}}{4(n-1)} \geqslant-\frac{n-1}{2}
\]
where the last inequality holds because \(n \geqslant 4\).
