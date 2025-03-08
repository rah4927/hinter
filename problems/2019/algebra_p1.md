---
id: fimo_2019_algebra_p1
year: 2019
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2019 Algebra Problem 1"
---

Let \(\mathbb{Z}\) be the set of integers. Determine all functions \(f: \mathbb{Z} \rightarrow \mathbb{Z}\) such that, for all integers \(a\) and \(b\)

\[
f(2 a)+2 f(b)=f(f(a+b))
\]

The final answers are \(f(n)=0\) and \(f(n)=2 n+K\) for any constant \(K \in \mathbb{Z}\).

---
Most solutions to this problem first prove that \(f\) must be linear, before determining all linear functions satisfying (1).

Substituting \(a=0, b=n+1\) gives \(f(f(n+1))=f(0)+2 f(n+1)\). Substituting \(a=1, b=n\) gives \(f(f(n+1))=f(2)+2 f(n)\).

In particular, \(f(0)+2 f(n+1)=f(2)+2 f(n)\), and so \(f(n+1)-f(n)=\frac{1}{2}(f(2)-f(0))\). Thus \(f(n+1)-f(n)\) must be constant. Since \(f\) is defined only on \(\mathbb{Z}\), this tells us that \(f\) must be a linear function; write \(f(n)=M n+K\) for arbitrary constants \(M\) and \(K\), and we need only determine which choices of \(M\) and \(K\) work.

Now, (1) becomes

\[
2 M a+K+2(M b+K)=M(M(a+b)+K)+K
\]

which we may rearrange to form

\[
(M-2)(M(a+b)+K)=0 .
\]

Thus, either \(M=2\), or \(M(a+b)+K=0\) for all values of \(a+b\). In particular, the only possible solutions are \(f(n)=0\) and \(f(n)=2 n+K\) for any constant \(K \in \mathbb{Z}\), and these are easily seen to work.
