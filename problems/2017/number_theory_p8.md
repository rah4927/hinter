---
id: fimo_2017_number_theory_p8
year: 2017
number: 8
difficulty: medium
topics: ["number theory"]
source: "IMO 2017 Number Theory Problem 8"
---

Let \(p\) be an odd prime number and \(\mathbb{Z}_{ > 0}\) be the set of positive integers. Suppose that a function \(f: \mathbb{Z}_{ > 0} \times \mathbb{Z}_{ > 0} \rightarrow\{0,1\}\) satisfies the following properties:

*  \(f(1,1)=0\)

*  \(f(a, b)+f(b, a)=1\) for any pair of relatively prime positive integers \((a, b)\) not both equal to 1

*  \(f(a+b, b)=f(a, b)\) for any pair of relatively prime positive integers \((a, b)\).

Prove that
\[
\sum_{n=1}^{p-1} f\left(n^{2}, p\right) \geqslant \sqrt{2 p}-2
\]

---
Denote by \(\mathbb{A}\) the set of all pairs of coprime positive integers. Notice that for every \((a, b) \in \mathbb{A}\) there exists a pair \((u, v) \in \mathbb{Z}^{2}\) with \(u a+v b=1\). Moreover, if \(\left(u_{0}, v_{0}\right)\) is one such pair, then all such pairs are of the form \((u, v)=\left(u_{0}+k b, v_{0}-k a\right)\), where \(k \in \mathbb{Z}\). So there exists a unique such pair \((u, v)\) with \(-b / 2 < u \leqslant b / 2\); we denote this pair by \((u, v)=g(a, b)\).
Lemma. Let \((a, b) \in \mathbb{A}\) and \((u, v)=g(a, b)\). Then \(f(a, b)=1 \Longleftrightarrow u > 0\).
Proof. We induct on \(a+b\). The base case is \(a+b=2\). In this case, we have that \(a=b=1\), \(g(a, b)=g(1,1)=(0,1)\) and \(f(1,1)=0\), so the claim holds.
Assume now that \(a+b > 2\), and so \(a \neq b\), since \(a\) and \(b\) are coprime. Two cases are possible. Case 1: \(a > b\).
Notice that \(g(a-b, b)=(u, v+u)\), since \(u(a-b)+(v+u) b=1\) and \(u \in(-b / 2, b / 2]\). Thus \(f(a, b)=1 \Longleftrightarrow f(a-b, b)=1 \Longleftrightarrow u > 0\) by the induction hypothesis.
Case 2: \(a < b\). (Then, clearly, \(b \geqslant 2\).)
Now we estimate \(v\). Since \(v b=1-u a\), we have
\[
1+\frac{a b}{2} > v b \geqslant 1-\frac{a b}{2}, \quad \text { so } \quad \frac{1+a}{2} \geqslant \frac{1}{b}+\frac{a}{2} > v \geqslant \frac{1}{b}-\frac{a}{2} > -\frac{a}{2}
\]
Thus \(1+a > 2 v > -a\), so \(a \geqslant 2 v > -a\), hence \(a / 2 \geqslant v > -a / 2\), and thus \(g(b, a)=(v, u)\).
Observe that \(f(a, b)=1 \Longleftrightarrow f(b, a)=0 \Longleftrightarrow f(b-a, a)=0\). We know from Case 1 that \(g(b-a, a)=(v, u+v)\). We have \(f(b-a, a)=0 \Longleftrightarrow v \leqslant 0\) by the inductive hypothesis. Then, since \(b > a \geqslant 1\) and \(u a+v b=1\), we have \(v \leqslant 0 \Longleftrightarrow u > 0\), and we are done.
The Lemma proves that, for all \((a, b) \in \mathbb{A}, f(a, b)=1\) if and only if the inverse of \(a\) modulo \(b\), taken in \(\{1,2, \ldots, b-1\}\), is at most \(b / 2\). Then, for any odd prime \(p\) and integer \(n\) such that \(n \not \equiv 0(\bmod p), f\left(n^{2}, p\right)=1\) iff the inverse of \(n^{2} \bmod p\) is less than \(p / 2\). Since \(\left\{n^{2} \bmod p: 1 \leqslant n \leqslant p-1\right\}=\left\{n^{-2} \bmod p: 1 \leqslant n \leqslant p-1\right\}\), including multiplicities (two for each quadratic residue in each set), we conclude that the desired sum is twice the number of quadratic residues that are less than \(p / 2\), i.e.,
\[
\sum_{n=1}^{p-1} f\left(n^{2}, p\right)=2 \mid\left\{k: 1 \leqslant k \leqslant \frac{p-1}{2} \text { and } k^{2} \bmod p < \frac{p}{2}\right\} \mid .
\]
Since the number of perfect squares in the interval \([1, p / 2)\) is \(\lfloor\sqrt{p / 2}\rfloor > \sqrt{p / 2}-1\), we conclude that
\[
\sum_{n=1}^{p-1} f\left(n^{2}, p\right) > 2\left(\sqrt{\frac{p}{2}}-1\right)=\sqrt{2 p}-2
\]
