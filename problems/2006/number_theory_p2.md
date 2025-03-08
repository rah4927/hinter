---
id: fimo_2006_number_theory_p2
year: 2006
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2006 Number Theory Problem 2"
---

For \(x \in(0,1)\) let \(y \in(0,1)\) be the number whose \(n\)th digit after the decimal point is the \(\left(2^{n}\right)\) th digit after the decimal point of \(x\). Show that if \(x\) is rational then so is \(y\).


---
Since \(x\) is rational, its digits repeat periodically starting at some point. We wish to show that this is also true for the digits of \(y\), implying that \(y\) is rational.
Let \(d\) be the length of the period of \(x\) and let \(d=2^{u} \cdot v\), where \(v\) is odd. There is a positive integer \(w\) such that
\[
2^{w} \equiv 1 \quad(\bmod v) .
\]
(For instance, one can choose \(w\) to be \(\varphi(v)\), the value of Euler's function at \(v\).) Therefore
\[
2^{n+w}=2^{n} \cdot 2^{w} \equiv 2^{n} \quad(\bmod v)
\]
for each \(n\). Also, for \(n \geq u\) we have
\[
2^{n+w} \equiv 2^{n} \equiv 0 \quad\left(\bmod 2^{u}\right) .
\]
It follows that, for all \(n \geq u\), the relation
\[
2^{n+w} \equiv 2^{n} \quad(\bmod d)
\]
holds. Thus, for \(n\) sufficiently large, the \(2^{n+w}\) th digit of \(x\) is in the same spot in the cycle of \(x\) as its \(2^{n}\) th digit, and so these digits are equal. Hence the \((n+w)\) th digit of \(y\) is equal to its \(n\)th digit. This means that the digits of \(y\) repeat periodically with period \(w\) from some point on, as required.
