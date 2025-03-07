---
id: fimo_2020_algebra_p5
year: 2020
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2020 Algebra Problem 5"
---

A magician intends to perform the following trick. She announces a positive integer \(n\), along with \(2 n\) real numbers \(x_{1} < \ldots < x_{2 n}\), to the audience. A member of the audience then secretly chooses a polynomial \(P(x)\) of degree \(n\) with real coefficients, computes the \(2 n\) values \(P\left(x_{1}\right), \ldots, P\left(x_{2 n}\right)\), and writes down these \(2 n\) values on the blackboard in non-decreasing order. After that the magician announces the secret polynomial to the audience.
Can the magician find a strategy to perform such a trick?


---
Let \(x_{1} < x_{2} < \ldots < x_{2 n}\) be real numbers chosen by the magician. We will construct two distinct polynomials \(P(x)\) and \(Q(x)\), each of degree \(n\), such that the member of audience will write down the same sequence for both polynomials. This will mean that the magician cannot distinguish \(P\) from \(Q\).
Claim. There exists a polynomial \(P(x)\) of degree \(n\) such that \(P\left(x_{2 i-1}\right)+P\left(x_{2 i}\right)=0\) for \(i=\) \(1,2, \ldots, n\).
Proof. We want to find a polynomial \(a_{n} x^{n}+\ldots+a_{1} x+a_{0}\) satisfying the following system of equations:
\[
\left\{\begin{array}{l}
\left(x_{1}^{n}+x_{2}^{n}\right) a_{n}+\left(x_{1}^{n-1}+x_{2}^{n-1}\right) a_{n-1}+\ldots+2 a_{0}=0 \\
\left(x_{3}^{n}+x_{4}^{n}\right) a_{n}+\left(x_{3}^{n-1}+x_{4}^{n-1}\right) a_{n-1}+\ldots+2 a_{0}=0 \\
\cdots \\
\left(x_{2 n-1}^{n}+x_{2 n}^{n}\right) a_{n}+\left(x_{2 n-1}^{n-1}+x_{2 n}^{n-1}\right) a_{n-1}+\ldots+2 a_{0}=0
\end{array}\right.
\]
We use the well known fact that a homogeneous system of \(n\) linear equations in \(n+1\) variables has a nonzero solution. (This fact can be proved using induction on \(n\), via elimination of variables.) Applying this fact to the above system, we find a nonzero polynomial \(P(x)\) of degree not exceeding \(n\) such that its coefficients \(a_{0}, \ldots, a_{n}\) satisfy this system. Therefore \(P\left(x_{2 i-1}\right)+P\left(x_{2 i}\right)=0\) for all \(i=1,2, \ldots, n\). Notice that \(P\) has a root on each segment \(\left[x_{2 i-1}, x_{2 i}\right]\) by the Intermediate Value theorem, so \(n\) roots in total. Since \(P\) is nonzero, we get \(\operatorname{deg} P=n\)
Now consider a polynomial \(P(x)\) provided by the Claim, and take \(Q(x)=-P(x)\). The properties of \(P(x)\) yield that \(P\left(x_{2 i-1}\right)=Q\left(x_{2 i}\right)\) and \(Q\left(x_{2 i-1}\right)=P\left(x_{2 i}\right)\) for all \(i=1,2, \ldots, n\). It is also clear that \(P \neq-P=Q\) and \(\operatorname{deg} Q=\operatorname{deg} P=n\).
