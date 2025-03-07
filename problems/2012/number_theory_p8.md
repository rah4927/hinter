---
id: fimo_2012_number_theory_p8
year: 2012
number: 8
difficulty: medium
topics: ["number theory"]
source: "IMO 2012 Number Theory Problem 8"
---

Prove that for every prime \(p > 100\) and every integer \(r\) there exist two integers \(a\) and \(b\) such that \(p\) divides \(a^{2}+b^{5}-r\).

---
Throughout the solution, all congruence relations are meant modulo \(p\).
Fix \(p\), and let \(\mathcal{P}=\{0,1, \ldots, p-1\}\) be the set of residue classes modulo \(p\). For every \(r \in \mathcal{P}\), let \(S_{r}=\left\{(a, b) \in \mathcal{P} \times \mathcal{P}: a^{2}+b^{5} \equiv r\right\}\), and let \(s_{r}=\left|S_{r}\right|\). Our aim is to prove \(s_{r} > 0\) for all \(r \in \mathcal{P}\).
We will use the well-known fact that for every residue class \(r \in \mathcal{P}\) and every positive integer \(k\), there are at most \(k\) values \(x \in \mathcal{P}\) such that \(x^{k} \equiv r\).
Lemma. Let \(N\) be the number of quadruples \((a, b, c, d) \in \mathcal{P}^{4}\) for which \(a^{2}+b^{5} \equiv c^{2}+d^{5}\). Then
\[
N=\sum_{r \in \mathcal{P}} s_{r}^{2}
\]
and
\[
N \leq p\left(p^{2}+4 p-4\right)
\]
Proof. (a) For each residue class \(r\) there exist exactly \(s_{r}\) pairs \((a, b)\) with \(a^{2}+b^{5} \equiv r\) and \(s_{r}\) pairs \((c, d)\) with \(c^{2}+d^{5} \equiv r\). So there are \(s_{r}^{2}\) quadruples with \(a^{2}+b^{5} \equiv c^{2}+d^{5} \equiv r\). Taking the sum over all \(r \in \mathcal{P}\), the statement follows.
(b) Choose an arbitrary pair \((b, d) \in \mathcal{P}\) and look for the possible values of \(a, c\).
\begin{enumerate}

*  Suppose that \(b^{5} \equiv d^{5}\), and let \(k\) be the number of such pairs \((b, d)\). The value \(b\) can be chosen in \(p\) different ways. For \(b \equiv 0\) only \(d=0\) has this property; for the nonzero values of \(b\) there are at most 5 possible values for \(d\). So we have \(k \leq 1+5(p-1)=5 p-4\).

\end{enumerate}
The values \(a\) and \(c\) must satisfy \(a^{2} \equiv c^{2}\), so \(a \equiv \pm c\), and there are exactly \(2 p-1\) such pairs \((a, c)\).
\begin{enumerate}
\setcounter{enumi}{1}

*  Now suppose \(b^{5} \not \equiv d^{5}\). In this case \(a\) and \(c\) must be distinct. By \((a-c)(a+c)=d^{5}-b^{5}\), the value of \(a-c\) uniquely determines \(a+c\) and thus \(a\) and \(c\) as well. Hence, there are \(p-1\) suitable pairs \((a, c)\).

\end{enumerate}
Thus, for each of the \(k\) pairs \((b, d)\) with \(b^{5} \equiv d^{5}\) there are \(2 p-1\) pairs \((a, c)\), and for each of the other \(p^{2}-k\) pairs \((b, d)\) there are \(p-1\) pairs \((a, c)\). Hence,
\[
N=k(2 p-1)+\left(p^{2}-k\right)(p-1)=p^{2}(p-1)+k p \leq p^{2}(p-1)+(5 p-4) p=p\left(p^{2}+4 p-4\right) .
\]
To prove the statement of the problem, suppose that \(S_{r}=\emptyset\) for some \(r \in \mathcal{P}\); obviously \(r \not \equiv 0\). Let \(T=\left\{x^{10}: x \in \mathcal{P} \backslash\{0\}\right\}\) be the set of nonzero 10th powers modulo \(p\). Since each residue class is the 10 th power of at most 10 elements in \(\mathcal{P}\), we have \(|T| \geq \frac{p-1}{10} \geq 4\) by \(p > 100\).
For every \(t \in T\), we have \(S_{t r}=\emptyset\). Indeed, if \((x, y) \in S_{t r}\) and \(t \equiv z^{10}\) then
\[
\left(z^{-5} x\right)^{2}+\left(z^{-2} y\right)^{5} \equiv t^{-1}\left(x^{2}+y^{5}\right) \equiv r
\]
so \(\left(z^{-5} x, z^{-2} y\right) \in S_{r}\). So, there are at least \(\frac{p-1}{10} \geq 4\) empty sets among \(S_{1}, \ldots, S_{p-1}\), and there are at most \(p-4\) nonzero values among \(s_{0}, s_{2}, \ldots, s_{p-1}\). Then by the AM-QM inequality we obtain
\[
N=\sum_{r \in \mathcal{P} \backslash r T} s_{r}^{2} \geq \frac{1}{p-4}\left(\sum_{r \in \mathcal{P} \backslash r T} s_{r}\right)^{2}=\frac{|\mathcal{P} \times \mathcal{P}|^{2}}{p-4}=\frac{p^{4}}{p-4} > p\left(p^{2}+4 p-4\right)
\]
which is impossible by the lemma.
