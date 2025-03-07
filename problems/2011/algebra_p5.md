---
id: fimo_2011_algebra_p5
year: 2011
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2011 Algebra Problem 5"
---

Prove that for every positive integer \(n\), the set \(\{2,3,4, \ldots, 3 n+1\}\) can be partitioned into \(n\) triples in such a way that the numbers from each triple are the lengths of the sides of some obtuse triangle.

---
Throughout the solution, we denote by \([a, b]\) the set \(\{a, a+1, \ldots, b\}\). We say that \(\{a, b, c\}\) is an obtuse triple if \(a, b, c\) are the sides of some obtuse triangle.
We prove by induction on \(n\) that there exists a partition of \([2,3 n+1]\) into \(n\) obtuse triples \(A_{i}\) \((2 \leq i \leq n+1)\) having the form \(A_{i}=\left\{i, a_{i}, b_{i}\right\}\). For the base case \(n=1\), one can simply set \(A_{2}=\{2,3,4\}\). For the induction step, we need the following simple lemma.
Lemma. Suppose that the numbers \(a < b < c\) form an obtuse triple, and let \(x\) be any positive number. Then the triple \(\{a, b+x, c+x\}\) is also obtuse.
Proof. The numbers \(a < b+x < c+x\) are the sides of a triangle because \((c+x)-(b+x)=\) \(c-b < a\). This triangle is obtuse since \((c+x)^{2}-(b+x)^{2}=(c-b)(c+b+2 x) > (c-b)(c+b) > a^{2}\).
Now we turn to the induction step. Let \(n > 1\) and put \(t=\lfloor n / 2\rfloor < n\). By the induction hypothesis, there exists a partition of the set \([2,3 t+1]\) into \(t\) obtuse triples \(A_{i}^{\prime}=\left\{i, a_{i}^{\prime}, b_{i}^{\prime}\right\}\) \((i \in[2, t+1])\). For the same values of \(i\), define \(A_{i}=\left\{i, a_{i}^{\prime}+(n-t), b_{i}^{\prime}+(n-t)\right\}\). The constructed triples are obviously disjoint, and they are obtuse by the lemma. Moreover, we have
\[
\bigcup_{i=2}^{t+1} A_{i}=[2, t+1] \cup[n+2, n+2 t+1] .
\]
Next, for each \(i \in[t+2, n+1]\), define \(A_{i}=\{i, n+t+i, 2 n+i\}\). All these sets are disjoint, and
\[
\bigcup_{i=t+2}^{n+1} A_{i}=[t+2, n+1] \cup[n+2 t+2,2 n+t+1] \cup[2 n+t+2,3 n+1]
\]
so
\[
\bigcup_{i=2}^{n+1} A_{i}=[2,3 n+1] .
\]
Thus, we are left to prove that the triple \(A_{i}\) is obtuse for each \(i \in[t+2, n+1]\).
Since \((2 n+i)-(n+t+i)=n-t < t+2 \leq i\), the elements of \(A_{i}\) are the sides of a triangle. Next, we have
\((2 n+i)^{2}-(n+t+i)^{2}=(n-t)(3 n+t+2 i) \geq \frac{n}{2} \cdot(3 n+3(t+1)+1) > \frac{n}{2} \cdot \frac{9 n}{2} \geq(n+1)^{2} \geq i^{2}\), so this triangle is obtuse. The proof is completed.
