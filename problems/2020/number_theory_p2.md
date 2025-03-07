---
id: fimo_2020_number_theory_p2
year: 2020
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2020 Number Theory Problem 2"
---

For each prime \(p\), there is a kingdom of \(p\)-Landia consisting of \(p\) islands numbered \(1,2, \ldots, p\). Two distinct islands numbered \(n\) and \(m\) are connected by a bridge if and only if \(p\) divides \(\left(n^{2}-m+1\right)\left(m^{2}-n+1\right)\). The bridges may pass over each other, but cannot cross. Prove that for infinitely many \(p\) there are two islands in \(p\)-Landia not connected by a chain of bridges.

---
We prove that for each prime \(p > 3\) dividing a number of the form \(x^{2}-x+1\) with integer \(x\) there are two unconnected islands in \(p\)-Landia.
For brevity's sake, when a bridge connects the islands numbered \(m\) and \(n\), we shall speak simply that it connects \(m\) and \(n\).
A bridge connects \(m\) and \(n\) if \(n \equiv m^{2}+1(\bmod p)\) or \(m \equiv n^{2}+1(\bmod p)\). If \(m^{2}+1 \equiv n\) \((\bmod p)\), we draw an arrow starting at \(m\) on the bridge connecting \(m\) and \(n\). Clearly only one arrow starts at \(m\) if \(m^{2}+1 \not \equiv m(\bmod p)\), and no arrows otherwise. The total number of bridges does not exceed the total number of arrows.
Suppose \(x^{2}-x+1 \equiv 0(\bmod p)\). We may assume that \(1 \leqslant x \leqslant p\); then there is no arrow starting at \(x\). Since \((1-x)^{2}-(1-x)+1=x^{2}-x+1,(p+1-x)^{2}+1 \equiv(p+1-x)(\bmod p)\), and there is also no arrow starting at \(p+1-x\). If \(x=p+1-x\), that is, \(x=\frac{p+1}{2}\), then \(4\left(x^{2}-x+1\right)=p^{2}+3\) and therefore \(x^{2}-x+1\) is not divisible by \(p\). Thus the islands \(x\) and \(p+1-x\) are different, and no arrows start at either of them. It follows that the total number of bridges in \(p\)-Landia does not exceed \(p-2\).
Let \(1,2, \ldots, p\) be the vertices of a graph \(G_{p}\), where an edge connects \(m\) and \(n\) if and only if there is a bridge between \(m\) and \(n\). The number of vertices of \(G_{p}\) is \(p\) and the number of edges is less than \(p-1\). This means that the graph is not connected, which means that there are two islands not connected by a chain of bridges.
It remains to prove that there are infinitely many primes \(p\) dividing \(x^{2}-x+1\) for some integer \(x\). Let \(p_{1}, p_{2}, \ldots, p_{k}\) be any finite set of such primes. The number \(\left(p_{1} p_{2} \cdot \ldots \cdot p_{k}\right)^{2}-p_{1} p_{2} \cdot \ldots \cdot p_{k}+1\) is greater than 1 and not divisible by any \(p_{i}\); therefore it has another prime divisor with the required property.
