---
id: fimo_2007_algebra_p7
year: 2007
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2007 Algebra Problem 7"
---

Let \(n > 1\) be an integer. In the space, consider the set
\[
S=\{(x, y, z) \mid x, y, z \in\{0,1, \ldots, n\}, x+y+z > 0\}
\]
Find the smallest number of planes that jointly contain all \((n+1)^{3}-1\) points of \(S\) but none of them passes through the origin.


---
It is easy to find \(3 n\) such planes. For example, planes \(x=i, y=i\) or \(z=i\) \((i=1,2, \ldots, n)\) cover the set \(S\) but none of them contains the origin. Another such collection consists of all planes \(x+y+z=k\) for \(k=1,2, \ldots, 3 n\).
We show that \(3 n\) is the smallest possible number.
Lemma 1. Consider a nonzero polynomial \(P\left(x_{1}, \ldots, x_{k}\right)\) in \(k\) variables. Suppose that \(P\) vanishes at all points \(\left(x_{1}, \ldots, x_{k}\right)\) such that \(x_{1}, \ldots, x_{k} \in\{0,1, \ldots, n\}\) and \(x_{1}+\cdots+x_{k} > 0\), while \(P(0,0, \ldots, 0) \neq 0\). Then \(\operatorname{deg} P \geq k n\).
Proof. We use induction on \(k\). The base case \(k=0\) is clear since \(P \neq 0\). Denote for clarity \(y=x_{k}\).
Let \(R\left(x_{1}, \ldots, x_{k-1}, y\right)\) be the residue of \(P\) modulo \(Q(y)=y(y-1) \ldots(y-n)\). Polynomial \(Q(y)\) vanishes at each \(y=0,1, \ldots, n\), hence \(P\left(x_{1}, \ldots, x_{k-1}, y\right)=R\left(x_{1}, \ldots, x_{k-1}, y\right)\) for all \(x_{1}, \ldots, x_{k-1}, y \in\{0,1, \ldots, n\}\). Therefore, \(R\) also satisfies the condition of the Lemma; moreover, \(\operatorname{deg}_{y} R \leq n\). Clearly, \(\operatorname{deg} R \leq \operatorname{deg} P\), so it suffices to prove that \(\operatorname{deg} R \geq n k\).
Now, expand polynomial \(R\) in the powers of \(y\) :
\[
R\left(x_{1}, \ldots, x_{k-1}, y\right)=R_{n}\left(x_{1}, \ldots, x_{k-1}\right) y^{n}+R_{n-1}\left(x_{1}, \ldots, x_{k-1}\right) y^{n-1}+\cdots+R_{0}\left(x_{1}, \ldots, x_{k-1}\right) .
\]
We show that polynomial \(R_{n}\left(x_{1}, \ldots, x_{k-1}\right)\) satisfies the condition of the induction hypothesis.
Consider the polynomial \(T(y)=R(0, \ldots, 0, y)\) of degree \(\leq n\). This polynomial has \(n\) roots \(y=1, \ldots, n\); on the other hand, \(T(y) \not \equiv 0\) since \(T(0) \neq 0\). Hence \(\operatorname{deg} T=n\), and its leading coefficient is \(R_{n}(0,0, \ldots, 0) \neq 0\). In particular, in the case \(k=1\) we obtain that coefficient \(R_{n}\) is nonzero.
Similarly, take any numbers \(a_{1}, \ldots, a_{k-1} \in\{0,1, \ldots, n\}\) with \(a_{1}+\cdots+a_{k-1} > 0\). Substituting \(x_{i}=a_{i}\) into \(R\left(x_{1}, \ldots, x_{k-1}, y\right)\), we get a polynomial in \(y\) which vanishes at all points \(y=0, \ldots, n\) and has degree \(\leq n\). Therefore, this polynomial is null, hence \(R_{i}\left(a_{1}, \ldots, a_{k-1}\right)=0\) for all \(i=0,1, \ldots, n\). In particular, \(R_{n}\left(a_{1}, \ldots, a_{k-1}\right)=0\).
Thus, the polynomial \(R_{n}\left(x_{1}, \ldots, x_{k-1}\right)\) satisfies the condition of the induction hypothesis. So, we have \(\operatorname{deg} R_{n} \geq(k-1) n\) and \(\operatorname{deg} P \geq \operatorname{deg} R \geq \operatorname{deg} R_{n}+n \geq k n\).
Now we can finish the solution. Suppose that there are \(N\) planes covering all the points of \(S\) but not containing the origin. Let their equations be \(a_{i} x+b_{i} y+c_{i} z+d_{i}=0\). Consider the polynomial
\[
P(x, y, z)=\prod_{i=1}^{N}\left(a_{i} x+b_{i} y+c_{i} z+d_{i}\right) .
\]
It has total degree \(N\). This polynomial has the property that \(P\left(x_{0}, y_{0}, z_{0}\right)=0\) for any \(\left(x_{0}, y_{0}, z_{0}\right) \in S\), while \(P(0,0,0) \neq 0\). Hence by Lemma 1 we get \(N=\operatorname{deg} P \geq 3 n\), as desired.
