---
id: fimo_2013_algebra_p5
year: 2013
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2013 Algebra Problem 5"
---

Let \(\mathbb{Z}_{\geqslant 0}\) be the set of all nonnegative integers. Find all the functions \(f: \mathbb{Z}_{\geqslant 0} \rightarrow \mathbb{Z}_{\geqslant 0}\) satisfying the relation

\[
f(f(f(n)))=f(n+1)+1
\]

for all \(n \in \mathbb{Z}_{\geqslant 0}\).

The final answer is that there are two such functions: \(f(n)=n+1\) for all \(n \in \mathbb{Z}_{\geqslant 0}\), and

\[
f(n)=\left\{\begin{array}{ll}
n+1, & n \equiv 0(\bmod 4) \text { or } n \equiv 2(\bmod 4), \\
n+5, & n \equiv 1(\bmod 4), \\
n-3, & n \equiv 3(\bmod 4)
\end{array} \quad \text { for all } n \in \mathbb{Z}_{\geqslant 0} .\right.
\]

---
Throughout the solution, we write \(h^{k}(x)\) to abbreviate the \(k\) th iteration of function \(h\), so \(h^{0}\) is the identity function, and \(h^{k}(x)=\underbrace{h(\ldots h}_{k \text { times }}(x) \ldots))\) for \(k \geqslant 1\).

To start, we get from \((*)\) that

\[
f^{4}(n)=f\left(f^{3}(n)\right)=f(f(n+1)+1) \text { and } f^{4}(n+1)=f^{3}(f(n+1))=f(f(n+1)+1)+1,
\]

thus

\[
f^{4}(n)+1=f^{4}(n+1) .
\]

I. Let us denote by \(R_{i}\) the range of \(f^{i}\); note that \(R_{0}=\mathbb{Z}_{\geqslant 0}\) since \(f^{0}\) is the identity function. Obviously, \(R_{0} \supseteq R_{1} \supseteq \ldots\). Next, from (2) we get that if \(a \in R_{4}\) then also \(a+1 \in R_{4}\). This implies that \(\mathbb{Z}_{\geqslant 0} \backslash R_{4}\) - and hence \(\mathbb{Z}_{\geqslant 0} \backslash R_{1}\) - is finite. In particular, \(R_{1}\) is unbounded.

Assume that \(f(m)=f(n)\) for some distinct \(m\) and \(n\). Then from \((*)\) we obtain \(f(m+1)=\) \(f(n+1)\); by an easy induction we then get that \(f(m+c)=f(n+c)\) for every \(c \geqslant 0\). So the function \(f(k)\) is periodic with period \(|m-n|\) for \(k \geqslant m\), and thus \(R_{1}\) should be bounded, which is false. So, \(f\) is injective.

II. Denote now \(S_{i}=R_{i-1} \backslash R_{i}\); all these sets are finite for \(i \leqslant 4\). On the other hand, by the injectivity we have \(n \in S_{i} \Longleftrightarrow f(n) \in S_{i+1}\). By the injectivity again, \(f\) implements a bijection between \(S_{i}\) and \(S_{i+1}\), thus \(\left|S_{1}\right|=\left|S_{2}\right|=\ldots\); denote this common cardinality by \(k\). If \(0 \in R_{3}\) then \(0=f(f(f(n)))\) for some \(n\), thus from \((*)\) we get \(f(n+1)=-1\) which is impossible. Therefore \(0 \in R_{0} \backslash R_{3}=S_{1} \cup S_{2} \cup S_{3}\), thus \(k \geqslant 1\).

Next, let us describe the elements \(b\) of \(R_{0} \backslash R_{3}=S_{1} \cup S_{2} \cup S_{3}\). We claim that each such element satisfies at least one of three conditions \((i) b=0,(i i) b=f(0)+1\), and (iii) \(b-1 \in S_{1}\). Otherwise \(b-1 \in \mathbb{Z}_{\geqslant 0}\), and there exists some \(n > 0\) such that \(f(n)=b-1\); but then \(f^{3}(n-1)=f(n)+1=b\), so \(b \in R_{3}\).

This yields

\[
3 k=\left|S_{1} \cup S_{2} \cup S_{3}\right| \leqslant 1+1+\left|S_{1}\right|=k+2,
\]

or \(k \leqslant 1\). Therefore \(k=1\), and the inequality above comes to equality. So we have \(S_{1}=\{a\}\), \(S_{2}=\{f(a)\}\), and \(S_{3}=\left\{f^{2}(a)\right\}\) for some \(a \in \mathbb{Z}_{\geqslant 0}\), and each one of the three options \((i)\), \((i i)\), and (iii) should be realized exactly once, which means that

\[
\left\{a, f(a), f^{2}(a)\right\}=\{0, a+1, f(0)+1\} .
\]

III. From (3), we get \(a+1 \in\left\{f(a), f^{2}(a)\right\}\) (the case \(a+1=a\) is impossible). If \(a+1=f^{2}(a)\) then we have \(f(a+1)=f^{3}(a)=f(a+1)+1\) which is absurd. Therefore

\[
f(a)=a+1 .
\]

Next, again from (3) we have \(0 \in\left\{a, f^{2}(a)\right\}\). Let us consider these two cases separately. Case 1. Assume that \(a=0\), then \(f(0)=f(a)=a+1=1\). Also from \((3)\) we get \(f(1)=f^{2}(a)=\) \(f(0)+1=2\). Now, let us show that \(f(n)=n+1\) by induction on \(n\); the base cases \(n \leqslant 1\) are established. Next, if \(n \geqslant 2\) then the induction hypothesis implies

\[
n+1=f(n-1)+1=f^{3}(n-2)=f^{2}(n-1)=f(n),
\]

establishing the step. In this case we have obtained the first of two answers; checking that is satisfies \((*)\) is straightforward.

Case 2. Assume now that \(f^{2}(a)=0\); then by (3) we get \(a=f(0)+1\). By (4) we get \(f(a+1)=\) \(f^{2}(a)=0\), then \(f(0)=f^{3}(a)=f(a+1)+1=1\), hence \(a=f(0)+1=2\) and \(f(2)=3\) by (4). To summarize,

\[
f(0)=1, \quad f(2)=3, \quad f(3)=0 .
\]

Now let us prove by induction on \(m\) that (1) holds for all \(n=4 k, 4 k+2,4 k+3\) with \(k \leqslant m\) and for all \(n=4 k+1\) with \(k < m\). The base case \(m=0\) is established above. For the step, assume that \(m \geqslant 1\). From \((*)\) we get \(f^{3}(4 m-3)=f(4 m-2)+1=4 m\). Next, by (2) we have

\[
f(4 m)=f^{4}(4 m-3)=f^{4}(4 m-4)+1=f^{3}(4 m-3)+1=4 m+1 .
\]

Then by the induction hypothesis together with \((*)\) we successively obtain

\[
\begin{aligned}
& f(4 m-3)=f^{3}(4 m-1)=f(4 m)+1=4 m+2 \\
& f(4 m+2)=f^{3}(4 m-4)=f(4 m-3)+1=4 m+3 \\
& f(4 m+3)=f^{3}(4 m-3)=f(4 m-2)+1=4 m
\end{aligned}
\]

thus finishing the induction step.

Finally, it is straightforward to check that the constructed function works:

\[
\begin{array}{rlr}
f^{3}(4 k) & =4 k+7=f(4 k+1)+1, & f^{3}(4 k+1)=4 k+4=f(4 k+2)+1 \\
f^{3}(4 k+2) & =4 k+1=f(4 k+3)+1, & f^{3}(4 k+3)=4 k+6=f(4 k+4)+1
\end{array}
\]
