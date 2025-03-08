---
id: fimo_2017_algebra_p6
year: 2017
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2017 Algebra Problem 6"
---

Find all functions \(f: \mathbb{R} \rightarrow \mathbb{R}\) such that

\[
f(f(x) f(y))+f(x+y)=f(x y)
\]

for all \(x, y \in \mathbb{R}\).

The final answer is that there are 3 solutions:

\[
x \mapsto 0 \quad \text { or } \quad x \mapsto x-1 \quad \text { or } \quad x \mapsto 1-x \quad(x \in \mathbb{R}) .
\]

---
n easy check shows that all the 3 above mentioned functions indeed satisfy the original equation \((*)\).

In order to show that these are the only solutions, first observe that if \(f(x)\) is a solution then \(-f(x)\) is also a solution. Hence, without loss of generality we may (and will) assume that \(f(0) \leqslant 0\) from now on. We have to show that either \(f\) is identically zero or \(f(x)=x-1\) \((\forall x \in \mathbb{R})\)

Observe that, for a fixed \(x \neq 1\), we may choose \(y \in \mathbb{R}\) so that \(x+y=x y \Longleftrightarrow y=\frac{x}{x-1}\), and therefore from the original equation \((*)\) we have

\[
f\left(f(x) \cdot f\left(\frac{x}{x-1}\right)\right)=0 \quad(x \neq 1)
\]

In particular, plugging in \(x=0\) in \((1)\), we conclude that \(f\) has at least one zero, namely \((f(0))^{2}\) :

\[
f\left((f(0))^{2}\right)=0
\]

We analyze two cases (recall that \(f(0) \leqslant 0)\) :

Case 1: \(f(0)=0\).

Setting \(y=0\) in the original equation we get the identically zero solution:

\[
f(f(x) f(0))+f(x)=f(0) \Longrightarrow f(x)=0 \text { for all } x \in \mathbb{R}
\]

From now on, we work on the main

Case 2: \(f(0) < 0\).

We begin with the following

\section{Claim 1.}
\[
f(1)=0, \quad f(a)=0 \Longrightarrow a=1, \quad \text { and } \quad f(0)=-1
\]

Proof. We need to show that 1 is the unique zero of \(f\). First, observe that \(f\) has at least one zero \(a\) by \((2)\); if \(a \neq 1\) then setting \(x=a\) in (1) we get \(f(0)=0\), a contradiction. Hence from (2) we get \((f(0))^{2}=1\). Since we are assuming \(f(0) < 0\), we conclude that \(f(0)=-1\).

Setting \(y=1\) in the original equation \((*)\) we get

\[
f(f(x) f(1))+f(x+1)=f(x) \Longleftrightarrow f(0)+f(x+1)=f(x) \Longleftrightarrow f(x+1)=f(x)+1 \quad(x \in \mathbb{R}) .
\]

An easy induction shows that

\[
f(x+n)=f(x)+n \quad(x \in \mathbb{R}, n \in \mathbb{Z})
\]

Now we make the following

Claim 2. \(f\) is injective.

Proof. Suppose that \(f(a)=f(b)\) with \(a \neq b\). Then by (4), for all \(N \in \mathbb{Z}\),

\[
f(a+N+1)=f(b+N)+1
\]

Choose any integer \(N < -b\); then there exist \(x_{0}, y_{0} \in \mathbb{R}\) with \(x_{0}+y_{0}=a+N+1, x_{0} y_{0}=b+N\). Since \(a \neq b\), we have \(x_{0} \neq 1\) and \(y_{0} \neq 1\). Plugging in \(x_{0}\) and \(y_{0}\) in the original equation \((*)\) we get

\[
\begin{array}{rlr}
f\left(f\left(x_{0}\right) f\left(y_{0}\right)\right)+f(a+N+1)=f(b+N) & \Longleftrightarrow f\left(f\left(x_{0}\right) f\left(y_{0}\right)\right)+1=0 & \\
& \Longleftrightarrow f\left(f\left(x_{0}\right) f\left(y_{0}\right)+1\right)=0 & \text { by (4) } \\
& \Longleftrightarrow f\left(x_{0}\right) f\left(y_{0}\right)=0 & \text { by (3) }
\end{array}
\]

However, by Claim 1 we have \(f\left(x_{0}\right) \neq 0\) and \(f\left(y_{0}\right) \neq 0\) since \(x_{0} \neq 1\) and \(y_{0} \neq 1\), a contradiction.

Now the end is near. For any \(t \in \mathbb{R}\), plug in \((x, y)=(t,-t)\) in the original equation \((*)\) to get

\[
\begin{aligned}
f(f(t) f(-t))+f(0)=f\left(-t^{2}\right) & \Longleftrightarrow f(f(t) f(-t))=f\left(-t^{2}\right)+1 & & \text { by (3) } \\
& \Longleftrightarrow f(f(t) f(-t))=f\left(-t^{2}+1\right) & & \text { by (4) } \\
& \Longleftrightarrow f(t) f(-t)=-t^{2}+1 & & \text { by injectivity of } f .
\end{aligned}
\]

Similarly, plugging in \((x, y)=(t, 1-t)\) in \((*)\) we get

\[
\begin{array}{rlrl}
f(f(t) f(1-t))+f(1)=f(t(1-t)) & \Longleftrightarrow f(f(t) f(1-t))=f(t(1-t)) & \text { by }(3) \\
& \Longleftrightarrow f(t) f(1-t)=t(1-t) \quad \text { by injectivity of } f .
\end{array}
\]

But since \(f(1-t)=1+f(-t)\) by \((4)\), we get

\[
\begin{aligned}
f(t) f(1-t)=t(1-t) & \Longleftrightarrow f(t)(1+f(-t))=t(1-t) \Longleftrightarrow f(t)+\left(-t^{2}+1\right)=t(1-t) \\
& \Longleftrightarrow f(t)=t-1,
\end{aligned}
\]

as desired.
