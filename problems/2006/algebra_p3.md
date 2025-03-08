---
id: fimo_2006_algebra_p3
year: 2006
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2006 Algebra Problem 3"
---

The sequence \(c_{0}, c_{1}, \ldots, c_{n}, \ldots\) is defined by \(c_{0}=1, c_{1}=0\) and \(c_{n+2}=c_{n+1}+c_{n}\) for \(n \geq 0\). Consider the set \(S\) of ordered pairs \((x, y)\) for which there is a finite set \(J\) of positive integers such that \(x=\sum_{j \in J} c_{j}, y=\sum_{j \in J} c_{j-1}\). Prove that there exist real numbers \(\alpha, \beta\) and \(m, M\) with the following property: An ordered pair of nonnegative integers \((x, y)\) satisfies the inequality
\[
m < \alpha x+\beta y < M
\]
if and only if \((x, y) \in S\).
N. B. A sum over the elements of the empty set is assumed to be 0 .

---
Let \(\varphi=(1+\sqrt{5}) / 2\) and \(\psi=(1-\sqrt{5}) / 2\) be the roots of the quadratic equation \(t^{2}-t-1=0\). So \(\varphi \psi=-1, \varphi+\psi=1\) and \(1+\psi=\psi^{2}\). An easy induction shows that the general term \(c_{n}\) of the given sequence satisfies
\[
c_{n}=\frac{\varphi^{n-1}-\psi^{n-1}}{\varphi-\psi} \quad \text { for } n \geq 0 .
\]
Suppose that the numbers \(\alpha\) and \(\beta\) have the stated property, for appropriately chosen \(m\) and \(M\). Since \(\left(c_{n}, c_{n-1}\right) \in S\) for each \(n\), the expression
\(\alpha c_{n}+\beta c_{n-1}=\frac{\alpha}{\sqrt{5}}\left(\varphi^{n-1}-\psi^{n-1}\right)+\frac{\beta}{\sqrt{5}}\left(\varphi^{n-2}-\psi^{n-2}\right)=\frac{1}{\sqrt{5}}\left[(\alpha \varphi+\beta) \varphi^{n-2}-(\alpha \psi+\beta) \psi^{n-2}\right]\) is bounded as \(n\) grows to infinity. Because \(\varphi > 1\) and \(-1 < \psi < 0\), this implies \(\alpha \varphi+\beta=0\).
To satisfy \(\alpha \varphi+\beta=0\), one can set for instance \(\alpha=\psi, \beta=1\). We now find the required \(m\) and \(M\) for this choice of \(\alpha\) and \(\beta\).
Note first that the above displayed equation gives \(c_{n} \psi+c_{n-1}=\psi^{n-1}, n \geq 1\). In the sequel, we denote the pairs in \(S\) by \(\left(a_{J}, b_{J}\right)\), where \(J\) is a finite subset of the set \(\mathbb{N}\) of positive integers and \(a_{J}=\sum_{j \in J} c_{j}, b_{J}=\sum_{j \in J} c_{j-1}\). Since \(\psi a_{J}+b_{J}=\sum_{j \in J}\left(c_{j} \psi+c_{j-1}\right)\), we obtain
\[
\psi a_{J}+b_{J}=\sum_{j \in J} \psi^{j-1} \quad \text { for each }\left(a_{J}, b_{J}\right) \in S .
\]
On the other hand, in view of \(-1 < \psi < 0\),
\[
-1=\frac{\psi}{1-\psi^{2}}=\sum_{j=0}^{\infty} \psi^{2 j+1} < \sum_{j \in J} \psi^{j-1} < \sum_{j=0}^{\infty} \psi^{2 j}=\frac{1}{1-\psi^{2}}=1-\psi=\varphi .
\]
Therefore, according to (1),
\[
-1 < \psi a_{J}+b_{J} < \varphi \quad \text { for each }\left(a_{J}, b_{J}\right) \in S .
\]
Thus \(m=-1\) and \(M=\varphi\) is an appropriate choice.
Conversely, we prove that if an ordered pair of nonnegative integers \((x, y)\) satisfies the inequality \(-1 < \psi x+y < \varphi\) then \((x, y) \in S\). Lemma. Let \(x, y\) be nonnegative integers such that \(-1 < \psi x+y < \varphi\). Then there exists a subset \(J\) of \(\mathbb{N}\) such that
\[
\psi x+y=\sum_{j \in J} \psi^{j-1}
\]
Proof. For \(x=y=0\) it suffices to choose the empty subset of \(\mathbb{N}\) as \(J\), so let at least one of \(x, y\) be nonzero. There exist representations of \(\psi x+y\) of the form
\[
\psi x+y=\psi^{i_{1}}+\cdots+\psi^{i_{k}}
\]
where \(i_{1} \leq \cdots \leq i_{k}\) is a sequence of nonnegative integers, not necessarily distinct. For instance, we can take \(x\) summands \(\psi^{1}=\psi\) and \(y\) summands \(\psi^{0}=1\). Consider all such representations of minimum length \(k\) and focus on the ones for which \(i_{1}\) has the minimum possible value \(j_{1}\). Among them, consider the representations where \(i_{2}\) has the minimum possible value \(j_{2}\). Upon choosing \(j_{3}, \ldots, j_{k}\) analogously, we obtain a sequence \(j_{1} \leq \cdots \leq j_{k}\) which clearly satisfies \(\psi x+y=\sum_{r=1}^{k} \psi^{j_{r}}\). To prove the lemma, it suffices to show that \(j_{1}, \ldots, j_{k}\) are pairwise distinct.
Suppose on the contrary that \(j_{r}=j_{r+1}\) for some \(r=1, \ldots, k-1\). Let us consider the case \(j_{r} \geq 2\) first. Observing that \(2 \psi^{2}=1+\psi^{3}\), we replace \(j_{r}\) and \(j_{r+1}\) by \(j_{r}-2\) and \(j_{r}+1\), respectively. Since
\[
\psi^{j_{r}}+\psi^{j_{r+1}}=2 \psi^{j_{r}}=\psi^{j_{r}-2}\left(1+\psi^{3}\right)=\psi^{j_{r}-2}+\psi^{j_{r}+1},
\]
the new sequence also represents \(\psi x+y\) as needed, and the value of \(i_{r}\) in it contradicts the minimum choice of \(j_{r}\).
Let \(j_{r}=j_{r+1}=0\). Then the sum \(\psi x+y=\sum_{r=1}^{k} \psi^{j_{r}}\) contains at least two summands equal to \(\psi^{0}=1\). On the other hand \(j_{s} \neq 1\) for all \(s\), because the equality \(1+\psi=\psi^{2}\) implies that a representation of minimum length cannot contain consecutive \(i_{r}\) 's. It follows that
\[
\psi x+y=\sum_{r=1}^{k} \psi^{j_{r}} > 2+\psi^{3}+\psi^{5}+\psi^{7}+\cdots=2-\psi^{2}=\varphi
\]
contradicting the condition of the lemma.
Let \(j_{r}=j_{r+1}=1\); then \(\sum_{r=1}^{k} \psi^{j_{r}}\) contains at least two summands equal to \(\psi^{1}=\psi\). Like in the case \(j_{r}=j_{r+1}=0\), we also infer that \(j_{s} \neq 0\) and \(j_{s} \neq 2\) for all \(s\). Therefore
\[
\psi x+y=\sum_{r=1}^{k} \psi^{j_{r}} < 2 \psi+\psi^{4}+\psi^{6}+\psi^{8}+\cdots=2 \psi-\psi^{3}=-1,
\]
which is a contradiction again. The conclusion follows.
Now let the ordered pair \((x, y)\) satisfy \(-1 < \psi x+y < \varphi\); hence the lemma applies to \((x, y)\). Let \(J \subset \mathbb{N}\) be such that (2) holds. Comparing (1) and (2), we conclude that \(\psi x+y=\psi a_{J}+b_{J}\). Now, \(x, y, a_{J}\) and \(b_{J}\) are integers, and \(\psi\) is irrational. So the last equality implies \(x=a_{J}\) and \(y=b_{J}\). This shows that the numbers \(\alpha=\psi, \beta=1, m=-1, M=\varphi\) meet the requirements.
