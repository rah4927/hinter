---
id: fimo_2020_number_theory_p3
year: 2020
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2020 Number Theory Problem 3"
---

Let \(n\) be an integer with \(n \geqslant 2\). Does there exist a sequence \(\left(a_{1}, \ldots, a_{n}\right)\) of positive integers with not all terms being equal such that the arithmetic mean of every two terms is equal to the geometric mean of some (one or more) terms in this sequence?

The final answer is that no such sequence exists.

---
Suppose that \(a_{1}, \ldots, a_{n}\) satisfy the required properties. Let \(d=\operatorname{gcd}\left(a_{1} \ldots, a_{n}\right)\). If \(d > 1\) then replace the numbers \(a_{1}, \ldots, a_{n}\) by \(\frac{a_{1}}{d}, \ldots, \frac{a_{n}}{d}\); all arithmetic and all geometric means will be divided by \(d\), so we obtain another sequence satisfying the condition. Hence, without loss of generality, we can assume that \(\operatorname{gcd}\left(a_{1} \ldots, a_{n}\right)=1\).

We show two numbers, \(a_{m}\) and \(a_{k}\) such that their arithmetic mean, \(\frac{a_{m}+a_{k}}{2}\) is different from the geometric mean of any (nonempty) subsequence of \(a_{1} \ldots, a_{n}\). That proves that there cannot exist such a sequence.

Choose the index \(m \in\{1, \ldots, n\}\) such that \(a_{m}=\max \left(a_{1}, \ldots, a_{n}\right)\). Note that \(a_{m} \geqslant 2\), because \(a_{1}, \ldots, a_{n}\) are not all equal. Let \(p\) be a prime divisor of \(a_{m}\).

Let \(k \in\{1, \ldots, n\}\) be an index such that \(a_{k}=\max \left\{a_{i}: p \nmid a_{i}\right\}\). Due to \(\operatorname{gcd}\left(a_{1} \ldots, a_{n}\right)=1\), not all \(a_{i}\) are divisible by \(p\), so such a \(k\) exists. Note that \(a_{m}>a_{k}\) because \(a_{m} \geqslant a_{k}, p \mid a_{m}\) and \(p \nmid a_{k}\).

Let \(b=\frac{a_{m}+a_{k}}{2}\); we will show that \(b\) cannot be the geometric mean of any subsequence of \(a_{1}, \ldots, a_{n}\).

Consider the geometric mean, \(g=\sqrt[t]{a_{i_{1}} \cdot \ldots \cdot a_{i_{t}}}\) of an arbitrary subsequence of \(a_{1}, \ldots, a_{n}\). If none of \(a_{i_{1}}, \ldots, a_{i_{t}}\) is divisible by \(p\), then they are not greater than \(a_{k}\), so

\[
g=\sqrt[t]{a_{i_{1}} \cdot \ldots \cdot a_{i_{t}}} \leqslant a_{k} < \frac{a_{m}+a_{k}}{2}=b
\]

and therefore \(g \neq b\).

Otherwise, if at least one of \(a_{i_{1}}, \ldots, a_{i_{t}}\) is divisible by \(p\), then \(2 g=2 \sqrt[t]{a_{i_{1}} \cdot \ldots \cdot a_{i_{t}}}\) is either not an integer or is divisible by \(p\), while \(2 b=a_{m}+a_{k}\) is an integer not divisible by \(p\), so \(g \neq b\) again.
