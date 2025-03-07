---
id: fimo_2010_algebra_p7
year: 2010
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2010 Algebra Problem 7"
---

Let \(a_{1}, \ldots, a_{r}\) be positive real numbers. For \(n > r\), we inductively define
\[
a_{n}=\max _{1 \leq k \leq n-1}\left(a_{k}+a_{n-k}\right) .
\]
Prove that there exist positive integers \(\ell \leq r\) and \(N\) such that \(a_{n}=a_{n-\ell}+a_{\ell}\) for all \(n \geq N\).

---
First, from the problem conditions we have that each \(a_{n}(n > r)\) can be expressed as \(a_{n}=a_{j_{1}}+a_{j_{2}}\) with \(j_{1}, j_{2} < n, j_{1}+j_{2}=n\). If, say, \(j_{1} > r\) then we can proceed in the same way with \(a_{j_{1}}\), and so on. Finally, we represent \(a_{n}\) in a form
\[
\begin{gathered}
a_{n}=a_{i_{1}}+\cdots+a_{i_{k}}, \\
1 \leq i_{j} \leq r, \quad i_{1}+\cdots+i_{k}=n .
\end{gathered}
\]
Moreover, if \(a_{i_{1}}\) and \(a_{i_{2}}\) are the numbers in (2) obtained on the last step, then \(i_{1}+i_{2} > r\). Hence we can adjust (3) as
\[
1 \leq i_{j} \leq r, \quad i_{1}+\cdots+i_{k}=n, \quad i_{1}+i_{2} > r .
\]
On the other hand, suppose that the indices \(i_{1}, \ldots, i_{k}\) satisfy the conditions (4). Then, denoting \(s_{j}=i_{1}+\cdots+i_{j}\), from (1) we have
\[
a_{n}=a_{s_{k}} \geq a_{s_{k-1}}+a_{i_{k}} \geq a_{s_{k-2}}+a_{i_{k-1}}+a_{i_{k}} \geq \cdots \geq a_{i_{1}}+\cdots+a_{i_{k}} .
\]
Summarizing these observations we get the following
Claim. For every \(n > r\), we have
\[
a_{n}=\max \left\{a_{i_{1}}+\cdots+a_{i_{k}} \text { : the collection }\left(i_{1}, \ldots, i_{k}\right) \text { satisfies (4) }\right\} .
\]
Now we denote
\[
s=\max _{1 \leq i \leq r} \frac{a_{i}}{i}
\]
and fix some index \(\ell \leq r\) such that \(s=\frac{a_{\ell}}{\ell}\).
Consider some \(n \geq r^{2} \ell+2 r\) and choose an expansion of \(a_{n}\) in the form (2), (4). Then we have \(n=i_{1}+\cdots+i_{k} \leq r k\), so \(k \geq n / r \geq r \ell+2\). Suppose that none of the numbers \(i_{3}, \ldots, i_{k}\) equals \(\ell\). Then by the pigeonhole principle there is an index \(1 \leq j \leq r\) which appears among \(i_{3}, \ldots, i_{k}\) at least \(\ell\) times, and surely \(j \neq \ell\). Let us delete these \(\ell\) occurrences of \(j\) from \(\left(i_{1}, \ldots, i_{k}\right)\), and add \(j\) occurrences of \(\ell\) instead, obtaining a sequence \(\left(i_{1}, i_{2}, i_{3}^{\prime}, \ldots, i_{k^{\prime}}^{\prime}\right)\) also satisfying (4). By Claim, we have
\[
a_{i_{1}}+\cdots+a_{i_{k}}=a_{n} \geq a_{i_{1}}+a_{i_{2}}+a_{i_{3}^{\prime}}+\cdots+a_{i_{k^{\prime}}^{\prime}},
\]
or, after removing the coinciding terms, \(\ell a_{j} \geq j a_{\ell}\), so \(\frac{a_{\ell}}{\ell} \leq \frac{a_{j}}{j}\). By the definition of \(\ell\), this means that \(\ell a_{j}=j a_{\ell}\), hence
\[
a_{n}=a_{i_{1}}+a_{i_{2}}+a_{i_{3}^{\prime}}+\cdots+a_{i_{k^{\prime}}^{\prime}} .
\]
Thus, for every \(n \geq r^{2} \ell+2 r\) we have found a representation of the form (2), (4) with \(i_{j}=\ell\) for some \(j \geq 3\). Rearranging the indices we may assume that \(i_{k}=\ell\).
Finally, observe that in this representation, the indices \(\left(i_{1}, \ldots, i_{k-1}\right)\) satisfy the conditions (4) with \(n\) replaced by \(n-\ell\). Thus, from the Claim we get
\[
a_{n-\ell}+a_{\ell} \geq\left(a_{i_{1}}+\cdots+a_{i_{k-1}}\right)+a_{\ell}=a_{n},
\]
which by (1) implies
\[
a_{n}=a_{n-\ell}+a_{\ell} \quad \text { for each } n \geq r^{2} \ell+2 r,
\]
as desired.
