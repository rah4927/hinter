---
id: fimo_2020_algebra_p7
year: 2020
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2020 Algebra Problem 7"
---

Let \(n\) and \(k\) be positive integers. Prove that for \(a_{1}, \ldots, a_{n} \in\left[1,2^{k}\right]\) one has

\[
\sum_{i=1}^{n} \frac{a_{i}}{\sqrt{a_{1}^{2}+\ldots+a_{i}^{2}}} \leqslant 4 \sqrt{k n}
\]

---
Partition the set of indices \(\{1,2, \ldots, n\}\) into disjoint subsets \(M_{1}, M_{2}, \ldots, M_{k}\) so that \(a_{\ell} \in\left[2^{j-1}, 2^{j}\right]\) for \(\ell \in M_{j}\). Then, if \(\left|M_{j}\right|=: p_{j}\), we have

\[
\sum_{\ell \in M_{j}} \frac{a_{\ell}}{\sqrt{a_{1}^{2}+\ldots+a_{\ell}^{2}}} \leqslant \sum_{i=1}^{p_{j}} \frac{2^{j}}{2^{j-1} \sqrt{i}}=2 \sum_{i=1}^{p_{j}} \frac{1}{\sqrt{i}}
\]

where we used that \(a_{\ell} \leqslant 2^{j}\) and in the denominator every index from \(M_{j}\) contributes at least \(\left(2^{j-1}\right)^{2}\). Now, using \(\sqrt{i}-\sqrt{i-1}=\frac{1}{\sqrt{i}+\sqrt{i-1}} \geqslant \frac{1}{2 \sqrt{i}}\), we deduce that

\[
\sum_{\ell \in M_{j}} \frac{a_{\ell}}{\sqrt{a_{1}^{2}+\ldots+a_{\ell}^{2}}} \leqslant 2 \sum_{i=1}^{p_{j}} \frac{1}{\sqrt{i}} \leqslant 2 \sum_{i=1}^{p_{j}} 2(\sqrt{i}-\sqrt{i-1})=4 \sqrt{p_{j}} .
\]

Therefore, summing over \(j=1, \ldots, k\) and using the QM-AM inequality, we obtain

\[
\sum_{\ell=1}^{n} \frac{a_{\ell}}{\sqrt{a_{1}^{2}+\ldots+a_{\ell}^{2}}} \leqslant 4 \sum_{j=1}^{k} \sqrt{\left|M_{j}\right|} \leqslant 4 \sqrt{k \sum_{j=1}^{k}\left|M_{j}\right|}=4 \sqrt{k n} .
\]
