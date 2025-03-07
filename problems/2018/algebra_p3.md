---
id: fimo_2018_algebra_p3
year: 2018
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2018 Algebra Problem 3"
---

Given any set \(S\) of positive integers, show that at least one of the following two assertions holds:
(1) There exist distinct finite subsets \(F\) and \(G\) of \(S\) such that \(\sum_{x \in F} 1 / x=\sum_{x \in G} 1 / x\);
(2) There exists a positive rational number \(r < 1\) such that \(\sum_{x \in F} 1 / x \neq r\) for all finite subsets \(F\) of \(S\).

---
Argue indirectly. Agree, as usual, that the empty sum is 0 to consider rationals in \([0,1)\); adjoining 0 causes no harm, since \(\sum_{x \in F} 1 / x=0\) for no nonempty finite subset \(F\) of \(S\). For every rational \(r\) in \([0,1)\), let \(F_{r}\) be the unique finite subset of \(S\) such that \(\sum_{x \in F_{r}} 1 / x=r\). The argument hinges on the lemma below.
Lemma. If \(x\) is a member of \(S\) and \(q\) and \(r\) are rationals in [0,1) such that \(q-r=1 / x\), then \(x\) is a member of \(F_{q}\) if and only if it is not one of \(F_{r}\).
Proof. If \(x\) is a member of \(F_{q}\), then
\[
\sum_{y \in F_{q} \backslash\{x\}} \frac{1}{y}=\sum_{y \in F_{q}} \frac{1}{y}-\frac{1}{x}=q-\frac{1}{x}=r=\sum_{y \in F_{r}} \frac{1}{y},
\]
so \(F_{r}=F_{q} \backslash\{x\}\), and \(x\) is not a member of \(F_{r}\). Conversely, if \(x\) is not a member of \(F_{r}\), then
\[
\sum_{y \in F_{r} \cup\{x\}} \frac{1}{y}=\sum_{y \in F_{r}} \frac{1}{y}+\frac{1}{x}=r+\frac{1}{x}=q=\sum_{y \in F_{q}} \frac{1}{y},
\]
so \(F_{q}=F_{r} \cup\{x\}\), and \(x\) is a member of \(F_{q}\).
Consider now an element \(x\) of \(S\) and a positive rational \(r < 1\). Let \(n=\lfloor r x\rfloor\) and consider the sets \(F_{r-k / x}, k=0, \ldots, n\). Since \(0 \leqslant r-n / x < 1 / x\), the set \(F_{r-n / x}\) does not contain \(x\), and a repeated application of the lemma shows that the \(F_{r-(n-2 k) / x}\) do not contain \(x\), whereas the \(F_{r-(n-2 k-1) / x}\) do. Consequently, \(x\) is a member of \(F_{r}\) if and only if \(n\) is odd.
Finally, consider \(F_{2 / 3}\). By the preceding, \(\lfloor 2 x / 3\rfloor\) is odd for each \(x\) in \(F_{2 / 3}\), so \(2 x / 3\) is not integral. Since \(F_{2 / 3}\) is finite, there exists a positive rational \(\varepsilon\) such that \(\lfloor(2 / 3-\varepsilon) x\rfloor=\lfloor 2 x / 3\rfloor\) for all \(x\) in \(F_{2 / 3}\). This implies that \(F_{2 / 3}\) is a subset of \(F_{2 / 3-\varepsilon}\) which is impossible.
