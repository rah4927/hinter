---
id: fimo_2012_algebra_p1
year: 2012
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2012 Algebra Problem 1"
---

Find all the functions \(f: \mathbb{Z} \rightarrow \mathbb{Z}\) such that
\[
f(a)^{2}+f(b)^{2}+f(c)^{2}=2 f(a) f(b)+2 f(b) f(c)+2 f(c) f(a)
\]
for all integers \(a, b, c\) satisfying \(a+b+c=0\).
\[
f_{2}(x)=k x^{2} \quad f_{3}(x)=\left\{\begin{array}{ccc}
0 & x \text { even } \\
k & x \text { odd }
\end{array} \quad f_{4}(x)=\left\{\begin{array}{ccc}
0 & x \equiv 0 & (\bmod 4) \\
k & x \equiv 1 & (\bmod 2) \\
4 k & x \equiv 2 & (\bmod 4)
\end{array}\right.\right.
\]
for any non-zero integer \(k\).

---
The substitution \(a=b=c=0\) gives \(3 f(0)^{2}=6 f(0)^{2}\), hence
\[
f(0)=0 \text {. }
\]
The substitution \(b=-a\) and \(c=0\) gives \(\left((f(a)-f(-a))^{2}=0\right.\). Hence \(f\) is an even function:
\[
f(a)=f(-a) \quad \text { for all } a \in \mathbb{Z} \text {. }
\]
Now set \(b=a\) and \(c=-2 a\) to obtain \(2 f(a)^{2}+f(2 a)^{2}=2 f(a)^{2}+4 f(a) f(2 a)\). Hence
\[
f(2 a)=0 \text { or } f(2 a)=4 f(a) \text { for all } a \in \mathbb{Z} .
\]
If \(f(r)=0\) for some \(r \geq 1\) then the substitution \(b=r\) and \(c=-a-r\) gives \((f(a+r)-f(a))^{2}=0\). So \(f\) is periodic with period \(r\), i. e.
\[
f(a+r)=f(a) \quad \text { for all } a \in \mathbb{Z} .
\]
In particular, if \(f(1)=0\) then \(f\) is constant, thus \(f(a)=0\) for all \(a \in \mathbb{Z}\). This function clearly satisfies the functional equation. For the rest of the analysis, we assume \(f(1)=k \neq 0\).
By (3) we have \(f(2)=0\) or \(f(2)=4 k\). If \(f(2)=0\) then \(f\) is periodic of period 2 , thus \(f(\) even \()=0\) and \(f(\) odd \()=k\). This function is a solution for every \(k\). We postpone the verification; for the sequel assume \(f(2)=4 k \neq 0\).
By (3) again, we have \(f(4)=0\) or \(f(4)=16 k\). In the first case \(f\) is periodic of period 4 , and \(f(3)=f(-1)=f(1)=k\), so we have \(f(4 n)=0, f(4 n+1)=f(4 n+3)=k\), and \(f(4 n+2)=4 k\) for all \(n \in \mathbb{Z}\). This function is a solution too, which we justify later. For the rest of the analysis, we assume \(f(4)=16 k \neq 0\).
We show now that \(f(3)=9 k\). In order to do so, we need two substitutions:
\[
\begin{gathered}
a=1, b=2, c=-3 \Longrightarrow f(3)^{2}-10 k f(3)+9 k^{2}=0 \Longrightarrow f(3) \in\{k, 9 k\} \\
a=1, b=3, c=-4 \Longrightarrow f(3)^{2}-34 k f(3)+225 k^{2}=0 \Longrightarrow f(3) \in\{9 k, 25 k\}
\end{gathered}
\]
Therefore \(f(3)=9 k\), as claimed. Now we prove inductively that the only remaining function is \(f(x)=k x^{2}, x \in \mathbb{Z}\). We proved this for \(x=0,1,2,3,4\). Assume that \(n \geq 4\) and that \(f(x)=k x^{2}\) holds for all integers \(x \in[0, n]\). Then the substitutions \(a=n, b=1, c=-n-1\) and \(a=n-1\), \(b=2, c=-n-1\) lead respectively to
\[
f(n+1) \in\left\{k(n+1)^{2}, k(n-1)^{2}\right\} \quad \text { and } \quad f(n+1) \in\left\{k(n+1)^{2}, k(n-3)^{2}\right\} .
\]
Since \(k(n-1)^{2} \neq k(n-3)^{2}\) for \(n \neq 2\), the only possibility is \(f(n+1)=k(n+1)^{2}\). This completes the induction, so \(f(x)=k x^{2}\) for all \(x \geq 0\). The same expression is valid for negative values of \(x\) since \(f\) is even. To verify that \(f(x)=k x^{2}\) is actually a solution, we need to check the identity \(a^{4}+b^{4}+(a+b)^{4}=2 a^{2} b^{2}+2 a^{2}(a+b)^{2}+2 b^{2}(a+b)^{2}\), which follows directly by expanding both sides. Therefore the only possible solutions of the functional equation are the constant function \(f_{1}(x)=0\) and the following functions:
\[
f_{2}(x)=k x^{2} \quad f_{3}(x)=\left\{\begin{array}{ccc}
0 & x \text { even } \\
k & x \text { odd }
\end{array} \quad f_{4}(x)=\left\{\begin{array}{ccc}
0 & x \equiv 0 & (\bmod 4) \\
k & x \equiv 1 & (\bmod 2) \\
4 k & x \equiv 2 & (\bmod 4)
\end{array}\right.\right.
\]
for any non-zero integer \(k\). The verification that they are indeed solutions was done for the first two. For \(f_{3}\) note that if \(a+b+c=0\) then either \(a, b, c\) are all even, in which case \(f(a)=f(b)=f(c)=0\), or one of them is even and the other two are odd, so both sides of the equation equal \(2 k^{2}\). For \(f_{4}\) we use similar parity considerations and the symmetry of the equation, which reduces the verification to the triples \((0, k, k),(4 k, k, k),(0,0,0),(0,4 k, 4 k)\). They all satisfy the equation.
