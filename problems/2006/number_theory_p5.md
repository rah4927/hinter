---
id: fimo_2006_number_theory_p5
year: 2006
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2006 Number Theory Problem 5"
---

Find all integer solutions of the equation

\[
\frac{x^{7}-1}{x-1}=y^{5}-1 \text {. }
\]

The final answer is that the given equation has no integer solutions.

---
The equation has no integer solutions. To show this, we first prove a lemma.

Lemma. If \(x\) is an integer and \(p\) is a prime divisor of \(\frac{x^{7}-1}{x-1}\) then either \(p \equiv 1(\bmod 7)\) or \(p=7\).

Proof. Both \(x^{7}-1\) and \(x^{p-1}-1\) are divisible by \(p\), by hypothesis and by Fermat's little theorem, respectively. Suppose that 7 does not divide \(p-1\). Then \(\operatorname{gcd}(p-1,7)=1\), so there exist integers \(k\) and \(m\) such that \(7 k+(p-1) m=1\). We therefore have

\[
x \equiv x^{7 k+(p-1) m} \equiv\left(x^{7}\right)^{k} \cdot\left(x^{p-1}\right)^{m} \equiv 1 \quad(\bmod p),
\]

and so

\[
\frac{x^{7}-1}{x-1}=1+x+\cdots+x^{6} \equiv 7 \quad(\bmod p) .
\]

It follows that \(p\) divides 7 , hence \(p=7\) must hold if \(p \equiv 1(\bmod 7)\) does not, as stated.

The lemma shows that each positive divisor \(d\) of \(\frac{x^{7}-1}{x-1}\) satisfies either \(d \equiv 0(\bmod 7)\) or \(d \equiv 1(\bmod 7)\)

Now assume that \((x, y)\) is an integer solution of the original equation. Notice that \(y-1 > 0\), because \(\frac{x^{7}-1}{x-1} > 0\) for all \(x \neq 1\). Since \(y-1\) divides \(\frac{x^{7}-1}{x-1}=y^{5}-1\), we have \(y \equiv 1(\bmod 7)\) or \(y \equiv 2(\bmod 7)\) by the previous paragraph. In the first case, \(1+y+y^{2}+y^{3}+y^{4} \equiv 5(\bmod 7)\), and in the second \(1+y+y^{2}+y^{3}+y^{4} \equiv 3(\bmod 7)\). Both possibilities contradict the fact that the positive divisor \(1+y+y^{2}+y^{3}+y^{4}\) of \(\frac{x^{7}-1}{x-1}\) is congruent to 0 or 1 modulo 7 . So the given equation has no integer solutions.
