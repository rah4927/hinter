---
id: fimo_2019_number_theory_p4
year: 2019
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2019 Number Theory Problem 4"
---

Let \(\mathbb{Z}_{ > 0}\) be the set of positive integers. A positive integer constant \(C\) is given. Find all functions \(f: \mathbb{Z}_{ > 0} \rightarrow \mathbb{Z}_{ > 0}\) such that, for all positive integers \(a\) and \(b\) satisfying \(a+b > C\),
\[
a+f(b) \mid a^{2}+b f(a)
\]


---
It is easy to verify that the functions \(f(a)=k a\) satisfy \((* )\). Thus, in the proofs below, we will only focus on the converse implication: that condition \((* )\) implies that \(f=k a\).

A common minor part of these solutions is the derivation of some relatively easy bounds on the function \(f\). An upper bound is easily obtained by setting \(a=1\) in (* ), giving the inequality

\[
f(b) \leqslant b \cdot f(1)
\]
for all sufficiently large \(b\). The corresponding lower bound is only marginally more difficult to obtain: substituting \(b=1\) in the original equation shows that
\[
a+f(1) \mid\left(a^{2}+f(a)\right)-(a-f(1)) \cdot(a+f(1))=f(1)^{2}+f(a)
\]
for all sufficiently large \(a\). It follows from this that one has the lower bound
\[
f(a) \geqslant a+f(1) \cdot(1-f(1))
\]
again for all sufficiently large \(a\).
Each of the following proofs makes use of at least one of these bounds.
First, we show that \(b \mid f(b)^{2}\) for all \(b\). To do this, we choose a large positive integer \(n\) so that \(n b-f(b) \geqslant C\). Setting \(a=n b-f(b)\) in \((* )\) then shows that

\[
n b \mid(n b-f(b))^{2}+b f(n b-f(b))
\]
so that \(b \mid f(b)^{2}\) as claimed.
Now in particular we have that \(p \mid f(p)\) for every prime \(p\). If we write \(f(p)=k(p) \cdot p\), then the bound \(f(p) \leqslant f(1) \cdot p\) (valid for \(p\) sufficiently large) shows that some value \(k\) of \(k(p)\) must be attained for infinitely many \(p\). We will show that \(f(a)=k a\) for all positive integers \(a\). To do this, we substitute \(b=p\) in \((* )\), where \(p\) is any sufficiently large prime for which \(k(p)=k\), obtaining

\[
a+k p \mid\left(a^{2}+p f(a)\right)-a(a+k p)=p f(a)-p k a .
\]
For suitably large \(p\) we have \(\operatorname{gcd}(a+k p, p)=1\), and hence we have
\[
a+k p \mid f(a)-k a
\]
But the only way this can hold for arbitrarily large \(p\) is if \(f(a)-k a=0\). This concludes the proof.
