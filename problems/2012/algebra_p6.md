---
id: fimo_2012_algebra_p6
year: 2012
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2012 Algebra Problem 6"
---

Let \(f: \mathbb{N} \rightarrow \mathbb{N}\) be a function, and let \(f^{m}\) be \(f\) applied \(m\) times. Suppose that for every \(n \in \mathbb{N}\) there exists a \(k \in \mathbb{N}\) such that \(f^{2 k}(n)=n+k\), and let \(k_{n}\) be the smallest such \(k\). Prove that the sequence \(k_{1}, k_{2}, \ldots\) is unbounded.

---
We restrict attention to the set
\[
S=\left\{1, f(1), f^{2}(1), \ldots\right\} .
\]
Observe that \(S\) is unbounded because for every number \(n\) in \(S\) there exists a \(k > 0\) such that \(f^{2 k}(n)=n+k\) is in \(S\). Clearly \(f\) maps \(S\) into itself; moreover \(f\) is injective on \(S\). Indeed if \(f^{i}(1)=f^{j}(1)\) with \(i \neq j\) then the values \(f^{m}(1)\) start repeating periodically from some point on, and \(S\) would be finite.
Define \(g: S \rightarrow S\) by \(g(n)=f^{2 k_{n}}(n)=n+k_{n}\). We prove that \(g\) is injective too. Suppose that \(g(a)=g(b)\) with \(a < b\). Then \(a+k_{a}=f^{2 k_{a}}(a)=f^{2 k_{b}}(b)=b+k_{b}\) implies \(k_{a} > k_{b}\). So, since \(f\) is injective on \(S\), we obtain
\[
f^{2\left(k_{a}-k_{b}\right)}(a)=b=a+\left(k_{a}-k_{b}\right)
\]
However this contradicts the minimality of \(k_{a}\) as \(0 < k_{a}-k_{b} < k_{a}\).
Let \(T\) be the set of elements of \(S\) that are not of the form \(g(n)\) with \(n \in S\). Note that \(1 \in T\) by \(g(n) > n\) for \(n \in S\), so \(T\) is non-empty. For each \(t \in T \operatorname{denote} C_{t}=\left\{t, g(t), g^{2}(t), \ldots\right\}\); call \(C_{t}\) the chain starting at \(t\). Observe that distinct chains are disjoint because \(g\) is injective. Each \(n \in S \backslash T\) has the form \(n=g\left(n^{\prime}\right)\) with \(n^{\prime} < n, n^{\prime} \in S\). Repeated applications of the same observation show that \(n \in C_{t}\) for some \(t \in T\), i. e. \(S\) is the disjoint union of the chains \(C_{t}\).
If \(f^{n}(1)\) is in the chain \(C_{t}\) starting at \(t=f^{n_{t}}(1)\) then \(n=n_{t}+2 a_{1}+\cdots+2 a_{j}\) with
\[
f^{n}(1)=g^{j}\left(f^{n_{t}}(1)\right)=f^{2 a_{j}}\left(f^{2 a_{j-1}}\left(\cdots f^{2 a_{1}}\left(f^{n_{t}}(1)\right)\right)\right)=f^{n_{t}}(1)+a_{1}+\cdots+a_{j} .
\]
Hence
\[
f^{n}(1)=f^{n_{t}}(1)+\frac{n-n_{t}}{2}=t+\frac{n-n_{t}}{2} .
\]
Now we show that \(T\) is infinite. We argue by contradiction. Suppose that there are only finitely many chains \(C_{t_{1}}, \ldots, C_{t_{r}}\), starting at \(t_{1} < \cdots < t_{r}\). Fix \(N\). If \(f^{n}(1)\) with \(1 \leq n \leq N\) is in \(C_{t}\) then \(f^{n}(1)=t+\frac{n-n_{t}}{2} \leq t_{r}+\frac{N}{2}\) by (1). But then the \(N+1\) distinct natural numbers \(1, f(1), \ldots, f^{N}(1)\) are all less than \(t_{r}+\frac{N}{2}\) and hence \(N+1 \leq t_{r}+\frac{N}{2}\). This is a contradiction if \(N\) is sufficiently large, and hence \(T\) is infinite.
To complete the argument, choose any \(k\) in \(\mathbb{N}\) and consider the \(k+1\) chains starting at the first \(k+1\) numbers in \(T\). Let \(t\) be the greatest one among these numbers. Then each of the chains in question contains a number not exceeding \(t\), and at least one of them does not contain any number among \(t+1, \ldots, t+k\). So there is a number \(n\) in this chain such that \(g(n)-n > k\), i. e. \(k_{n} > k\). In conclusion \(k_{1}, k_{2}, \ldots\) is unbounded.
