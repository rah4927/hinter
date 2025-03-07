---
id: fimo_2019_algebra_p3
year: 2019
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2019 Algebra Problem 3"
---

Let \(n \geqslant 3\) be a positive integer and let \(\left(a_{1}, a_{2}, \ldots, a_{n}\right)\) be a strictly increasing sequence of \(n\) positive real numbers with sum equal to 2. Let \(X\) be a subset of \(\{1,2, \ldots, n\}\) such that the value of
\[
\left|1-\sum_{i \in X} a_{i}\right|
\]
is minimised. Prove that there exists a strictly increasing sequence of \(n\) positive real numbers \(\left(b_{1}, b_{2}, \ldots, b_{n}\right)\) with sum equal to 2 such that
\[
\sum_{i \in X} b_{i}=1
\]

---
In all solutions, we say an index set \(X\) is \(\left(a_{i}\right)\)-minimising if it has the property in the problem for the given sequence \(\left(a_{i}\right)\). Write \(X^{c}\) for the complement of \(X\), and \([a, b]\) for the interval of integers \(k\) such that \(a \leqslant k \leqslant b\). Note that
\[
\left|1-\sum_{i \in X} a_{i}\right|=\left|1-\sum_{i \in X^{c}} a_{i}\right|,
\]
so we may exchange \(X\) and \(X^{c}\) where convenient. Let
\[
\Delta=\sum_{i \in X^{c}} a_{i}-\sum_{i \in X} a_{i}
\]
and note that \(X\) is \(\left(a_{i}\right)\)-minimising if and only if it minimises \(|\Delta|\), and that \(\sum_{i \in X} a_{i}=1\) if and only if \(\Delta=0\).
In some solutions, a scaling process is used. If we have a strictly increasing sequence of positive real numbers \(c_{i}\) (typically obtained by perturbing the \(a_{i}\) in some way) such that
\[
\sum_{i \in X} c_{i}=\sum_{i \in X^{c}} c_{i}
\]
then we may put \(b_{i}=2 c_{i} / \sum_{j=1}^{n} c_{j}\). So it suffices to construct such a sequence without needing its sum to be 2 .
The solutions below show various possible approaches to the problem. Solutions 1 and 2 perturb a few of the \(a_{i}\) to form the \(b_{i}\) (with scaling in the case of Solution 1 , without scaling in the case of Solution 2). Solutions 3 and 4 look at properties of the index set \(X\). Solution 3 then perturbs many of the \(a_{i}\) to form the \(b_{i}\), together with scaling. Rather than using such perturbations, Solution 4 constructs a sequence \(\left(b_{i}\right)\) directly from the set \(X\) with the required properties. Solution 4 can be used to give a complete description of sets \(X\) that are \(\left(a_{i}\right)\)-minimising for some \(\left(a_{i}\right)\).
Without loss of generality, assume \(\sum_{i \in X} a_{i} \leqslant 1\), and we may assume strict inequality as otherwise \(b_{i}=a_{i}\) works. Also, \(X\) clearly cannot be empty.
If \(n \in X\), add \(\Delta\) to \(a_{n}\), producing a sequence of \(c_{i}\) with \(\sum_{i \in X} c_{i}=\sum_{i \in X^{c}} c_{i}\), and then scale as described above to make the sum equal to 2. Otherwise, there is some \(k\) with \(k \in X\) and \(k+1 \in X^{c}\). Let \(\delta=a_{k+1}-a_{k}\).

*  If \(\delta > \Delta\), add \(\Delta\) to \(a_{k}\) and then scale.

*  If \(\delta < \Delta\), then considering \(X \cup\{k+1\} \backslash\{k\}\) contradicts \(X\) being \(\left(a_{i}\right)\)-minimising.

*  If \(\delta=\Delta\), choose any \(j \neq k, k+1\) (possible since \(n \geqslant 3\) ), and any \(\epsilon\) less than the least of \(a_{1}\) and all the differences \(a_{i+1}-a_{i}\). If \(j \in X\) then add \(\Delta-\epsilon\) to \(a_{k}\) and \(\epsilon\) to \(a_{j}\), then scale; otherwise, add \(\Delta\) to \(a_{k}\) and \(\epsilon / 2\) to \(a_{k+1}\), and subtract \(\epsilon / 2\) from \(a_{j}\), then scale.

