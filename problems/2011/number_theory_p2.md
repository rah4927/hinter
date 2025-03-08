---
id: fimo_2011_number_theory_p2
year: 2011
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2011 Number Theory Problem 2"
---

Consider a polynomial \(P(x)=\left(x+d_{1}\right)\left(x+d_{2}\right) \cdot \ldots \cdot\left(x+d_{9}\right)\), where \(d_{1}, d_{2}, \ldots, d_{9}\) are nine distinct integers. Prove that there exists an integer \(N\) such that for all integers \(x \geq N\) the number \(P(x)\) is divisible by a prime number greater than 20 .

---
Note that the statement of the problem is invariant under translations of \(x\); hence without loss of generality we may suppose that the numbers \(d_{1}, d_{2}, \ldots, d_{9}\) are positive.

The key observation is that there are only eight primes below 20 , while \(P(x)\) involves more than eight factors.

We shall prove that \(N=d^{8}\) satisfies the desired property, where \(d=\max \left\{d_{1}, d_{2}, \ldots, d_{9}\right\}\). Suppose for the sake of contradiction that there is some integer \(x \geq N\) such that \(P(x)\) is composed of primes below 20 only. Then for every index \(i \in\{1,2, \ldots, 9\}\) the number \(x+d_{i}\) can be expressed as product of powers of the first 8 primes.

Since \(x+d_{i}>x \geq d^{8}\) there is some prime power \(f_{i}>d\) that divides \(x+d_{i}\). Invoking the pigeonhole principle we see that there are two distinct indices \(i\) and \(j\) such that \(f_{i}\) and \(f_{j}\) are powers of the same prime number. For reasons of symmetry, we may suppose that \(f_{i} \leq f_{j}\). Now both of the numbers \(x+d_{i}\) and \(x+d_{j}\) are divisible by \(f_{i}\) and hence so is their difference \(d_{i}-d_{j}\). But as

\[
0 < \left|d_{i}-d_{j}\right| \leq \max \left(d_{i}, d_{j}\right) \leq d < f_{i},
\]

this is impossible. Thereby the problem is solved.
