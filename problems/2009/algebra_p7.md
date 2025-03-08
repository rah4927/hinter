---
id: fimo_2009_algebra_p7
year: 2009
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2009 Algebra Problem 7"
---

Find all functions \(f\) from the set of real numbers into the set of real numbers which satisfy for all real \(x, y\) the identity

\[
f(x f(x+y))=f(y f(x))+x^{2} .
\]

The final answers are \(f(x)=x\) and \(f(x)=-x\).

---
It is no hard to see that the two functions given by \(f(x)=x\) and \(f(x)=-x\) for all real \(x\) respectively solve the functional equation. In the sequel, we prove that there are no further solutions.

Let \(f\) be a function satisfying the given equation. It is clear that \(f\) cannot be a constant. Let us first show that \(f(0)=0\). Suppose that \(f(0) \neq 0\). For any real \(t\), substituting \((x, y)=\left(0, \frac{t}{f(0)}\right)\) into the given functional equation, we obtain

\[
f(0)=f(t),
\]

contradicting the fact that \(f\) is not a constant function. Therefore, \(f(0)=0\). Next for any \(t\), substituting \((x, y)=(t, 0)\) and \((x, y)=(t,-t)\) into the given equation, we get

\[
f(t f(t))=f(0)+t^{2}=t^{2},
\]

and

\[
f(t f(0))=f(-t f(t))+t^{2},
\]

respectively. Therefore, we conclude that

\[
f(t f(t))=t^{2}, \quad f(-t f(t))=-t^{2}, \quad \text { for every real } t .
\]

Consequently, for every real \(v\), there exists a real \(u\), such that \(f(u)=v\). We also see that if \(f(t)=0\), then \(0=f(t f(t))=t^{2}\) so that \(t=0\), and thus 0 is the only real number satisfying \(f(t)=0\).

We next show that for any real number \(s\),

\[
f(-s)=-f(s) .
\]

This is clear if \(f(s)=0\). Suppose now \(f(s) < 0\), then we can find a number \(t\) for which \(f(s)=-t^{2}\). As \(t \neq 0\) implies \(f(t) \neq 0\), we can also find number a such that af \((t)=s\). Substituting \((x, y)=(t, a)\) into the given equation, we get

\[
f(t f(t+a))=f(a f(t))+t^{2}=f(s)+t^{2}=0,
\]

and therefore, \(t f(t+a)=0\), which implies \(t+a=0\), and hence \(s=-t f(t)\). Consequently, \(f(-s)=f(t f(t))=t^{2}=-\left(-t^{2}\right)=-f(s)\) holds in this case.

Finally, suppose \(f(s) > 0\) holds. Then there exists a real number \(t \neq 0\) for which \(f(s)=t^{2}\). Choose a number \(a\) such that \(t f(a)=s\). Substituting \((x, y)=(t, a-t)\) into the given equation, we get \(f(s)=f(t f(a))=f((a-t) f(t))+t^{2}=f((a-t) f(t))+f(s)\). So we have \(f((a-t) f(t))=0\), from which we conclude that \((a-t) f(t)=0\). Since \(f(t) \neq 0\), we get \(a=t\) so that \(s=t f(t)\) and thus we see \(f(-s)=f(-t f(t))=-t^{2}=-f(s)\) holds in this case also. This observation finishes the proof of (3).

By substituting \((x, y)=(s, t),(x, y)=(t,-s-t)\) and \((x, y)=(-s-t, s)\) into the given equation, we obtain

\[
\begin{array}{r}
f(s f(s+t)))=f(t f(s))+s^{2} \\
f(t f(-s))=f((-s-t) f(t))+t^{2}
\end{array}
\]

and

\[
f((-s-t) f(-t))=f(s f(-s-t))+(s+t)^{2},
\]

respectively. Using the fact that \(f(-x)=-f(x)\) holds for all \(x\) to rewrite the second and the third equation, and rearranging the terms, we obtain

\[
\begin{aligned}
f(t f(s))-f(s f(s+t)) & =-s^{2} \\
f(t f(s))-f((s+t) f(t)) & =-t^{2} \\
f((s+t) f(t))+f(s f(s+t)) & =(s+t)^{2} .
\end{aligned}
\]

Adding up these three equations now yields \(2 f(t f(s))=2 t s\), and therefore, we conclude that \(f(t f(s))=t s\) holds for every pair of real numbers \(s, t\). By fixing \(s\) so that \(f(s)=1\), we obtain \(f(x)=s x\). In view of the given equation, we see that \(s=\pm 1\). It is easy to check that both functions \(f(x)=x\) and \(f(x)=-x\) satisfy the given functional equation, so these are the desired solutions.
