---
id: fimo_2012_number_theory_p1
year: 2012
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2012 Number Theory Problem 1"
---

Call admissible a set \(A\) of integers that has the following property:

\[
\text { If } x, y \in A \text { (possibly } x=y \text { ) then } x^{2}+k x y+y^{2} \in A \text { for every integer } k \text {. }
\]

Determine all pairs \(m, n\) of nonzero integers such that the only admissible set containing both \(m\) and \(n\) is the set of all integers.

The final answer is that a pair of integers \(m, n\) fulfills the condition if and only if \(\operatorname{gcd}(m, n)=1\).

---
A pair of integers \(m, n\) fulfills the condition if and only if \(\operatorname{gcd}(m, n)=1\). Suppose that \(\operatorname{gcd}(m, n)=d > 1\). The set

\[
A=\{\ldots,-2 d,-d, 0, d, 2 d, \ldots\}
\]

is admissible, because if \(d\) divides \(x\) and \(y\) then it divides \(x^{2}+k x y+y^{2}\) for every integer \(k\). Also \(m, n \in A\) and \(A \neq \mathbb{Z}\).

Now let \(\operatorname{gcd}(m, n)=1\), and let \(A\) be an admissible set containing \(m\) and \(n\). We use the following observations to prove that \(A=\mathbb{Z}\) :

(i) \(k x^{2} \in A\) for every \(x \in A\) and every integer \(k\).

(ii) \((x+y)^{2} \in A\) for all \(x, y \in A\).

To justify (i) let \(y=x\) in the definition of an admissible set; to justify (ii) let \(k=2\).

Since \(\operatorname{gcd}(m, n)=1\), we also have \(\operatorname{gcd}\left(m^{2}, n^{2}\right)=1\). Hence one can find integers \(a, b\) such that \(a m^{2}+b n^{2}=1\). It follows from (i) that \(a m^{2} \in A\) and \(b n^{2} \in A\). Now we deduce from (ii) that \(1=\left(a m^{2}+b n^{2}\right)^{2} \in A\). But if \(1 \in A\) then (i) implies \(k \in A\) for every integer \(k\).
