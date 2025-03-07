---
id: fimo_2017_number_theory_p3
year: 2017
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2017 Number Theory Problem 3"
---

Determine all integers \(n \geqslant 2\) with the following property: for any integers \(a_{1}, a_{2}, \ldots, a_{n}\) whose sum is not divisible by \(n\), there exists an index \(1 \leqslant i \leqslant n\) such that none of the numbers
\[
a_{i}, a_{i}+a_{i+1}, \ldots, a_{i}+a_{i+1}+\cdots+a_{i+n-1}
\]
is divisible by \(n\). (We let \(a_{i}=a_{i-n}\) when \(i > n\).)


---
Let us first show that, if \(n=a b\), with \(a, b \geqslant 2\) integers, then the property in the statement of the problem does not hold. Indeed, in this case, let \(a_{k}=a\) for \(1 \leqslant k \leqslant n-1\) and \(a_{n}=0\). The sum \(a_{1}+a_{2}+\cdots+a_{n}=a \cdot(n-1)\) is not divisible by \(n\). Let \(i\) with \(1 \leqslant i \leqslant n\) be an arbitrary index. Taking \(j=b\) if \(1 \leqslant i \leqslant n-b\), and \(j=b+1\) if \(n-b < i \leqslant n\), we have
\[
a_{i}+a_{i+1}+\cdots+a_{i+j-1}=a \cdot b=n \equiv 0 \quad(\bmod n)
\]
It follows that the given example is indeed a counterexample to the property of the statement.
Now let \(n\) be a prime number. Suppose by contradiction that the property in the statement of the problem does not hold. Then there are integers \(a_{1}, a_{2}, \ldots, a_{n}\) whose sum is not divisible by \(n\) such that for each \(i, 1 \leqslant i \leqslant n\), there is \(j, 1 \leqslant j \leqslant n\), for which the number \(a_{i}+a_{i+1}+\) \(\cdots+a_{i+j-1}\) is divisible by \(n\). Notice that, in any such case, we should have \(1 \leqslant j \leqslant n-1\), since \(a_{1}+a_{2}+\cdots+a_{n}\) is not divisible by \(n\). So we may construct recursively a finite sequence of integers \(0=i_{0} < i_{1} < i_{2} < \cdots < i_{n}\) with \(i_{s+1}-i_{s} \leqslant n-1\) for \(0 \leqslant s \leqslant n-1\) such that, for \(0 \leqslant s \leqslant n-1\)
\[
a_{i_{s}+1}+a_{i_{s}+2}+\cdots+a_{i_{s+1}} \equiv 0 \quad(\bmod n)
\]
(where we take indices modulo \(n\) ). Indeed, for \(0 \leqslant s < n\), we apply the previous observation to \(i=i_{s}+1\) in order to define \(i_{s+1}=i_{s}+j\).
In the sequence of \(n+1\) indices \(i_{0}, i_{1}, i_{2}, \ldots, i_{n}\), by the pigeonhole principle, we have two distinct elements which are congruent modulo \(n\). So there are indices \(r, s\) with \(0 \leqslant r < s \leqslant n\) such that \(i_{s} \equiv i_{r}(\bmod n)\) and
\[
a_{i_{r}+1}+a_{i_{r}+2}+\cdots+a_{i_{s}}=\sum_{j=r}^{s-1}\left(a_{i_{j}+1}+a_{i_{j}+2}+\cdots+a_{i_{j+1}}\right) \equiv 0 \quad(\bmod n) .
\]
Since \(i_{s} \equiv i_{r}(\bmod n)\), we have \(i_{s}-i_{r}=k \cdot n\) for some positive integer \(k\), and, since \(i_{j+1}-i_{j} \leqslant\) \(n-1\) for \(0 \leqslant j \leqslant n-1\), we have \(i_{s}-i_{r} \leqslant(n-1) \cdot n\), so \(k \leqslant n-1\). But in this case
\[
a_{i_{r}+1}+a_{i_{r}+2}+\cdots+a_{i_{s}}=k \cdot\left(a_{1}+a_{2}+\cdots+a_{n}\right)
\]
cannot be a multiple of \(n\), since \(n\) is prime and neither \(k\) nor \(a_{1}+a_{2}+\cdots+a_{n}\) is a multiple of \(n\). A contradiction.
