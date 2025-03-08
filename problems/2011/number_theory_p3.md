---
id: fimo_2011_number_theory_p3
year: 2011
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2011 Number Theory Problem 3"
---

Let \(n \geq 1\) be an odd integer. Determine all functions \(f\) from the set of integers to itself such that for all integers \(x\) and \(y\) the difference \(f(x)-f(y)\) divides \(x^{n}-y^{n}\).


---
Obviously, all functions in the answer satisfy the condition of the problem. We will show that there are no other functions satisfying that condition.
Let \(f\) be a function satisfying the given condition. For each integer \(n\), the function \(g\) defined by \(g(x)=f(x)+n\) also satisfies the same condition. Therefore, by subtracting \(f(0)\) from \(f(x)\) we may assume that \(f(0)=0\).
For any prime \(p\), the condition on \(f\) with \((x, y)=(p, 0)\) states that \(f(p)\) divides \(p^{n}\). Since the set of primes is infinite, there exist integers \(d\) and \(\varepsilon\) with \(0 \leq d \leq n\) and \(\varepsilon \in\{1,-1\}\) such that for infinitely many primes \(p\) we have \(f(p)=\varepsilon p^{d}\). Denote the set of these primes by \(P\). Since a function \(g\) satisfies the given condition if and only if \(-g\) satisfies the same condition, we may \(\operatorname{suppose} \varepsilon=1\)
The case \(d=0\) is easily ruled out, because 0 does not divide any nonzero integer. Suppose \(d \geq 1\) and write \(n\) as \(m d+r\), where \(m\) and \(r\) are integers such that \(m \geq 1\) and \(0 \leq r \leq d-1\). Let \(x\) be an arbitrary integer. For each prime \(p\) in \(P\), the difference \(f(p)-f(x)\) divides \(p^{n}-x^{n}\). Using the equality \(f(p)=p^{d}\), we get
\[
p^{n}-x^{n}=p^{r}\left(p^{d}\right)^{m}-x^{n} \equiv p^{r} f(x)^{m}-x^{n} \equiv 0 \quad\left(\bmod p^{d}-f(x)\right)
\]
Since we have \(r < d\), for large enough primes \(p \in P\) we obtain
\[
\left|p^{r} f(x)^{m}-x^{n}\right| < p^{d}-f(x) .
\]
Hence \(p^{r} f(x)^{m}-x^{n}\) has to be zero. This implies \(r=0\) and \(x^{n}=\left(x^{d}\right)^{m}=f(x)^{m}\). Since \(m\) is odd, we obtain \(f(x)=x^{d}\)
