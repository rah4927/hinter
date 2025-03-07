---
id: fimo_2008_number_theory_p2
year: 2008
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2008 Number Theory Problem 2"
---

Let \(a_{1}, a_{2}, \ldots, a_{n}\) be distinct positive integers, \(n \geq 3\). Prove that there exist distinct indices \(i\) and \(j\) such that \(a_{i}+a_{j}\) does not divide any of the numbers \(3 a_{1}, 3 a_{2}, \ldots, 3 a_{n}\).

---
Without loss of generality, let \(0 < a_{1} < a_{2} < \cdots < a_{n}\). One can also assume that \(a_{1}, a_{2}, \ldots, a_{n}\) are coprime. Otherwise division by their greatest common divisor reduces the question to the new sequence whose terms are coprime integers.
Suppose that the claim is false. Then for each \(i < n\) there exists a \(j\) such that \(a_{n}+a_{i}\) divides \(3 a_{j}\). If \(a_{n}+a_{i}\) is not divisible by 3 then \(a_{n}+a_{i}\) divides \(a_{j}\) which is impossible as \(0 < a_{j} \leq a_{n} < a_{n}+a_{i}\). Thus \(a_{n}+a_{i}\) is a multiple of 3 for \(i=1, \ldots, n-1\), so that \(a_{1}, a_{2}, \ldots, a_{n-1}\) are all congruent (to \(\left.-a_{n}\right)\) modulo 3 .
Now \(a_{n}\) is not divisible by 3 or else so would be all remaining \(a_{i}\) 's, meaning that \(a_{1}, a_{2}, \ldots, a_{n}\) are not coprime. Hence \(a_{n} \equiv r(\bmod 3)\) where \(r \in\{1,2\}\), and \(a_{i} \equiv 3-r(\bmod 3)\) for all \(i=1, \ldots, n-1\).
Consider a sum \(a_{n-1}+a_{i}\) where \(1 \leq i \leq n-2\). There is at least one such sum as \(n \geq 3\). Let \(j\) be an index such that \(a_{n-1}+a_{i}\) divides \(3 a_{j}\). Observe that \(a_{n-1}+a_{i}\) is not divisible by 3 since \(a_{n-1}+a_{i} \equiv 2 a_{i} \not \equiv 0(\bmod 3)\). It follows that \(a_{n-1}+a_{i}\) divides \(a_{j}\), in particular \(a_{n-1}+a_{i} \leq a_{j}\). Hence \(a_{n-1} < a_{j} \leq a_{n}\), implying \(j=n\). So \(a_{n}\) is divisible by all sums \(a_{n-1}+a_{i}, 1 \leq i \leq n-2\). In particular \(a_{n-1}+a_{i} \leq a_{n}\) for \(i=1, \ldots, n-2\).
Let \(j\) be such that \(a_{n}+a_{n-1}\) divides \(3 a_{j}\). If \(j \leq n-2\) then \(a_{n}+a_{n-1} \leq 3 a_{j} < a_{j}+2 a_{n-1}\). This yields \(a_{n} < a_{n-1}+a_{j}\); however \(a_{n-1}+a_{j} \leq a_{n}\) for \(j \leq n-2\). Therefore \(j=n-1\) or \(j=n\).
For \(j=n-1\) we obtain \(3 a_{n-1}=k\left(a_{n}+a_{n-1}\right)\) with \(k\) an integer, and it is straightforward that \(k=1\left(k \leq 0\right.\) and \(k \geq 3\) contradict \(0 < a_{n-1} < a_{n} ; k=2\) leads to \(\left.a_{n-1}=2 a_{n} > a_{n-1}\right)\). Thus \(3 a_{n-1}=a_{n}+a_{n-1}\), i. e. \(a_{n}=2 a_{n-1}\).
Similarly, if \(j=n\) then \(3 a_{n}=k\left(a_{n}+a_{n-1}\right)\) for some integer \(k\), and only \(k=2\) is possible. Hence \(a_{n}=2 a_{n-1}\) holds true in both cases remaining, \(j=n-1\) and \(j=n\).
Now \(a_{n}=2 a_{n-1}\) implies that the sum \(a_{n-1}+a_{1}\) is strictly between \(a_{n} / 2\) and \(a_{n}\). But \(a_{n-1}\) and \(a_{1}\) are distinct as \(n \geq 3\), so it follows from the above that \(a_{n-1}+a_{1}\) divides \(a_{n}\). This provides the desired contradiction.
