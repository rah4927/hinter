---
id: fimo_2012_number_theory_p5
year: 2012
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2012 Number Theory Problem 5"
---

For a nonnegative integer \(n\) define \(\operatorname{rad}(n)=1\) if \(n=0\) or \(n=1\), and \(\operatorname{rad}(n)=p_{1} p_{2} \cdots p_{k}\) where \(p_{1}<p_{2} < \cdots < p_{k}\) are all prime factors of \(n\). Find all polynomials \(f(x)\) with nonnegative integer coefficients such that \(\operatorname{rad}(f(n))\) divides \(\operatorname{rad}\left(f\left(n^{\operatorname{rad}(n)}\right)\right)\) for every nonnegative integer \(n\).

The final answer is \(f(x)=a x^{m}\).

---
We are going to prove that \(f(x)=a x^{m}\) for some nonnegative integers \(a\) and \(m\). If \(f(x)\) is the zero polynomial we are done, so assume that \(f(x)\) has at least one positive coefficient. In particular \(f(1) > 0\).

Let \(p\) be a prime number. The condition is that \(f(n) \equiv 0(\bmod p)\) implies

\[
f\left(n^{\operatorname{rad}(n)}\right) \equiv 0 \quad(\bmod p) .
\]

Since \(\operatorname{rad}\left(n^{\operatorname{rad}(n)^{k}}\right)=\operatorname{rad}(n)\) for all \(k\), repeated applications of the preceding implication show that if \(p\) divides \(f(n)\) then

\[
f\left(n^{\operatorname{rad}(n)^{k}}\right) \equiv 0 \quad(\bmod p) \quad \text { for all } k .
\]

The idea is to construct a prime \(p\) and a positive integer \(n\) such that \(p-1\) divides \(n\) and \(p\) divides \(f(n)\). In this case, for \(k\) large enough \(p-1\) divides \(\operatorname{rad}(n)^{k}\). Hence if \((p, n)=1\) then \(n^{\operatorname{rad}(n)^{k}} \equiv 1(\bmod p)\) by FERMAT's little theorem, so that

\[
f(1) \equiv f\left(n^{\operatorname{rad}(n)^{k}}\right) \equiv 0 \quad(\bmod p) .
\]

Suppose that \(f(x)=g(x) x^{m}\) with \(g(0) \neq 0\). Let \(t\) be a positive integer, \(p\) any prime factor of \(g(-t)\) and \(n=(p-1) t\). So \(p-1\) divides \(n\) and \(f(n)=f((p-1) t) \equiv f(-t) \equiv 0(\bmod p)\), hence either \((p, n) > 1\) or \((2)\) holds. If \((p,(p-1) t) > 1\) then \(p\) divides \(t\) and \(g(0) \equiv g(-t) \equiv 0(\bmod p)\), meaning that \(p\) divides \(g(0)\).

In conclusion we proved that each prime factor of \(g(-t)\) divides \(g(0) f(1) \neq 0\), and thus the set of prime factors of \(g(-t)\) when \(t\) ranges through the positive integers is finite. This is known to imply that \(g(x)\) is a constant polynomial, and so \(f(x)=a x^{m}\).
