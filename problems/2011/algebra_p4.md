---
id: fimo_2011_algebra_p4
year: 2011
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2011 Algebra Problem 4"
---

Determine all pairs \((f, g)\) of functions from the set of positive integers to itself that satisfy

\[
f^{g(n)+1}(n)+g^{f(n)}(n)=f(n+1)-g(n+1)+1
\]

for every positive integer \(n\). Here, \(f^{k}(n)\) means \(\underbrace{f(f(\ldots f}_{k}(n) \ldots))\).

The final answer is that the only pair \((f, g)\) of functions that satisfies the equation is given by \(f(n)=n\) and \(g(n)=1\) for all \(n\).

---
The given relation implies

\[
f\left(f^{g(n)}(n)\right) < f(n+1) \quad \text { for all } n
\]

which will turn out to be sufficient to determine \(f\).

Let \(y_{1} < y_{2} < \ldots\) be all the values attained by \(f\) (this sequence might be either finite or infinite). We will prove that for every positive \(n\) the function \(f\) attains at least \(n\) values, and we have \((\mathrm{i})_{n}: f(x)=y_{n}\) if and only if \(x=n\), and (ii) \()_{n}: y_{n}=n\). The proof will follow the scheme

\[
\left.(\mathrm{i})_{1}, \text { (ii }\right)_{1},(\mathrm{i})_{2},(\text { ii })_{2}, \ldots,(\mathrm{i})_{n},(\text { ii })_{n}, \ldots
\]

To start, consider any \(x\) such that \(f(x)=y_{1}\). If \(x > 1\), then (1) reads \(f\left(f^{g(x-1)}(x-1)\right) < y_{1}\), contradicting the minimality of \(y_{1}\). So we have that \(f(x)=y_{1}\) is equivalent to \(x=1\), establish\(\operatorname{ing}(\mathrm{i})_{1}\).

Next, assume that for some \(n\) statement \((\mathrm{i})_{n}\) is established, as well as all the previous statements in (2). Note that these statements imply that for all \(k \geq 1\) and \(a < n\) we have \(f^{k}(x)=a\) if and only if \(x=a\).

Now, each value \(y_{i}\) with \(1 \leq i \leq n\) is attained at the unique integer \(i\), so \(y_{n+1}\) exists. Choose an arbitrary \(x\) such that \(f(x)=y_{n+1}\); we necessarily have \(x > n\). Substituting \(x-1\) into (1) we have \(f\left(f^{g(x-1)}(x-1)\right) < y_{n+1}\), which implies

\[
f^{g(x-1)}(x-1) \in\{1, \ldots, n\}
\]

Set \(b=f^{g(x-1)}(x-1)\). If \(b < n\) then we would have \(x-1=b\) which contradicts \(x > n\). So \(b=n\), and hence \(y_{n}=n\), which proves (ii) \({ }_{n}\). Next, from \((\mathrm{i})_{n}\) we now get \(f(k)=n \Longleftrightarrow k=n\), so removing all the iterations of \(f\) in (3) we obtain \(x-1=b=n\), which proves \((\mathrm{i})_{n+1}\).

So, all the statements in (2) are valid and hence \(f(n)=n\) for all \(n\). The given relation between \(f\) and \(g\) now reads \(n+g^{n}(n)=n+1-g(n+1)+1\) or \(g^{n}(n)+g(n+1)=2\), from which it immediately follows that we have \(g(n)=1\) for all \(n\).
