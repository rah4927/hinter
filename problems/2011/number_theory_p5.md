---
id: fimo_2011_number_theory_p5
year: 2011
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2011 Number Theory Problem 5"
---

Let \(f\) be a function from the set of integers to the set of positive integers. Suppose that for any two integers \(m\) and \(n\), the difference \(f(m)-f(n)\) is divisible by \(f(m-n)\). Prove that for all integers \(m, n\) with \(f(m) \leq f(n)\) the number \(f(n)\) is divisible by \(f(m)\).

---
Suppose that \(x\) and \(y\) are two integers with \(f(x)<f(y)\). We will show that \(f(x) \mid f(y)\). By taking \(m=x\) and \(n=y\) we see that

\[
f(x-y)|| f(x)-f(y) \mid=f(y)-f(x) > 0,
\]

so \(f(x-y) \leq f(y)-f(x)<f(y)\). Hence the number \(d=f(x)-f(x-y)\) satisfies

\[
-f(y) < -f(x-y)<d < f(x)<f(y) .
\]

Taking \(m=x\) and \(n=x-y\) we see that \(f(y) \mid d\), so we deduce \(d=0\), or in other words \(f(x)=f(x-y)\). Taking \(m=x\) and \(n=y\) we see that \(f(x)=f(x-y) \mid f(x)-f(y)\), which implies \(f(x) \mid f(y)\).
