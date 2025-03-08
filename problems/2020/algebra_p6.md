---
id: fimo_2020_algebra_p6
year: 2020
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2020 Algebra Problem 6"
---

Determine all functions \(f: \mathbb{Z} \rightarrow \mathbb{Z}\) such that

\[
f^{a^{2}+b^{2}}(a+b)=a f(a)+b f(b) \quad \text { for every } a, b \in \mathbb{Z} .
\]

Here, \(f^{n}\) denotes the \(n^{\text {th }}\) iteration of \(f\), i.e., \(f^{0}(x)=x\) and \(f^{n+1}(x)=f\left(f^{n}(x)\right)\) for all \(n \geqslant 0\).

The final answer is either \(f(x)=0\) for all \(x \in \mathbb{Z}\), or \(f(x)=x+1\) for all \(x \in \mathbb{Z}\).

---
Refer to the main equation as \(E(a, b)\).

\(E(0, b)\) reads as \(f^{b^{2}}(b)=b f(b)\). For \(b=-1\) this gives \(f(-1)=0\).

Now \(E(a,-1)\) reads as

\[
f^{a^{2}+1}(a-1)=a f(a)=f^{a^{2}}(a) .
\]

For \(x \in \mathbb{Z}\) define the orbit of \(x\) by \(\mathcal{O}(x)=\{x, f(x), f(f(x)), \ldots\} \subseteq \mathbb{Z}\). We see that the orbits \(\mathcal{O}(a-1)\) and \(\mathcal{O}(a)\) differ by finitely many terms. Hence, any two orbits differ by finitely many terms. In particular, this implies that either all orbits are finite or all orbits are infinite.

Case 1: All orbits are finite.

Then \(\mathcal{O}(0)\) is finite. Using \(E(a,-a)\) we get

\[
a(f(a)-f(-a))=a f(a)-a f(-a)=f^{2 a^{2}}(0) \in \mathcal{O}(0) .
\]

For \(|a| > \max _{z \in \mathcal{O}(0)}|z|\), this yields \(f(a)=f(-a)\) and \(f^{2 a^{2}}(0)=0\). Therefore, the sequence \(\left(f^{k}(0): k=0,1, \ldots\right)\) is purely periodic with a minimal period \(T\) which divides \(2 a^{2}\). Analogously, \(T\) divides \(2(a+1)^{2}\), therefore, \(T \mid \operatorname{gcd}\left(2 a^{2}, 2(a+1)^{2}\right)=2\), i.e., \(f(f(0))=0\) and \(a(f(a)-f(-a))=f^{2 a^{2}}(0)=0\) for all \(a\). Thus,

\[
\begin{array}{ll}
f(a) & =f(-a) \quad \text { for all } a \neq 0
\end{array}
\]

Next, for each \(n \in \mathbb{Z}\), by \(E(n, 1-n)\) we get

\[
n f(n)+(1-n) f(1-n)=f^{n^{2}+(1-n)^{2}}(1)=f^{2 n^{2}-2 n}(0)=0 .
\]

Assume that there exists some \(m \neq 0\) such that \(f(m) \neq 0\). Choose such an \(m\) for which \(|m|\) is minimal possible. Then \(|m| > 1\) due to \((1)\); \(f(|m|) \neq 0\) due to \((2)\); and \(f(1-|m|) \neq 0\) due to \((3)\) for \(n=|m|\). This contradicts to the minimality assumption.

So, \(f(n)=0\) for \(n \neq 0\). Finally, \(f(0)=f^{3}(0)=f^{4}(2)=2 f(2)=0\). Clearly, the function \(f(x) \equiv 0\) satisfies the problem condition, which provides the first of the two answers.

Case 2: All orbits are infinite.

Since the orbits \(\mathcal{O}(a)\) and \(\mathcal{O}(a-1)\) differ by finitely many terms for all \(a \in \mathbb{Z}\), each two orbits \(\mathcal{O}(a)\) and \(\mathcal{O}(b)\) have infinitely many common terms for arbitrary \(a, b \in \mathbb{Z}\).

For a minute, fix any \(a, b \in \mathbb{Z}\). We claim that all pairs \((n, m)\) of nonnegative integers such that \(f^{n}(a)=f^{m}(b)\) have the same difference \(n-m\). Arguing indirectly, we have \(f^{n}(a)=f^{m}(b)\) and \(f^{p}(a)=f^{q}(b)\) with, say, \(n-m > p-q\), then \(f^{p+m+k}(b)=f^{p+n+k}(a)=f^{q+n+k}(b)\), for all nonnegative integers \(k\). This means that \(f^{\ell+(n-m)-(p-q)}(b)=f^{\ell}(b)\) for all sufficiently large \(\ell\), i.e., that the sequence \(\left(f^{n}(b)\right)\) is eventually periodic, so \(\mathcal{O}(b)\) is finite, which is impossible.

Now, for every \(a, b \in \mathbb{Z}\), denote the common difference \(n-m\) defined above by \(X(a, b)\). We have \(X(a-1, a)=1\) by (1). Trivially, \(X(a, b)+X(b, c)=X(a, c)\), as if \(f^{n}(a)=f^{m}(b)\) and \(f^{p}(b)=f^{q}(c)\), then \(f^{p+n}(a)=f^{p+m}(b)=f^{q+m}(c)\). These two properties imply that \(X(a, b)=b-a\) for all \(a, b \in \mathbb{Z}\). But (1) yields \(f^{a^{2}+1}(f(a-1))=f^{a^{2}}(f(a))\), so

\[
1=X(f(a-1), f(a))=f(a)-f(a-1) \quad \text { for all } a \in \mathbb{Z} .
\]

Recalling that \(f(-1)=0\), we conclude by (two-sided) induction on \(x\) that \(f(x)=x+1\) for all \(x \in \mathbb{Z}\)

Finally, the obtained function also satisfies the assumption. Indeed, \(f^{n}(x)=x+n\) for all \(n \geqslant 0\), so

\[
f^{a^{2}+b^{2}}(a+b)=a+b+a^{2}+b^{2}=a f(a)+b f(b)
\]
