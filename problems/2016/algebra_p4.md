---
id: fimo_2016_algebra_p4
year: 2016
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2016 Algebra Problem 4"
---

Denote by \(\mathbb{R}^{+}\)the set of all positive real numbers. Find all functions \(f: \mathbb{R}^{+} \rightarrow \mathbb{R}^{+}\)such that

\[
x f\left(x^{2}\right) f(f(y))+f(y f(x))=f(x y)\left(f\left(f\left(x^{2}\right)\right)+f\left(f\left(y^{2}\right)\right)\right)
\]

for all positive real numbers \(x\) and \(y\).

The final answer is \(f(x)=\frac{1}{x}\) for any \(x \in \mathbb{R}^{+}\).

---
Taking \(x=y=1\) in (1), we get \(f(1) f(f(1))+f(f(1))=2 f(1) f(f(1))\) and hence \(f(1)=1\). Swapping \(x\) and \(y\) in (1) and comparing with (1) again, we find

\[
x f\left(x^{2}\right) f(f(y))+f(y f(x))=y f\left(y^{2}\right) f(f(x))+f(x f(y)) .
\]

Taking \(y=1\) in \((2)\), we have \(x f\left(x^{2}\right)+f(f(x))=f(f(x))+f(x)\), that is,

\[
f\left(x^{2}\right)=\frac{f(x)}{x}
\]

Take \(y=1\) in (1) and apply (3) to \(x f\left(x^{2}\right)\). We get \(f(x)+f(f(x))=f(x)\left(f\left(f\left(x^{2}\right)\right)+1\right)\), which implies

\[
f\left(f\left(x^{2}\right)\right)=\frac{f(f(x))}{f(x)}
\]

For any \(x \in \mathbb{R}^{+}\), we find that

\[
f\left(f(x)^{2}\right) \stackrel{(3)}{=} \frac{f(f(x))}{f(x)} \stackrel{(4)}{=} f\left(f\left(x^{2}\right)\right) \stackrel{(3)}{=} f\left(\frac{f(x)}{x}\right) .
\]

It remains to show the following key step.

\begin{itemize}
  \item Claim. The function \(f\) is injective.
\end{itemize}

Proof. Using (3) and (4), we rewrite (1) as

\[
f(x) f(f(y))+f(y f(x))=f(x y)\left(\frac{f(f(x))}{f(x)}+\frac{f(f(y))}{f(y)}\right) .
\]

Take \(x=y\) in (6) and apply (3). This gives \(f(x) f(f(x))+f(x f(x))=2 \frac{f(f(x))}{x}\), which means

\[
f(x f(x))=f(f(x))\left(\frac{2}{x}-f(x)\right)
\]

Using (3), equation (2) can be rewritten as

\[
f(x) f(f(y))+f(y f(x))=f(y) f(f(x))+f(x f(y))
\]

Suppose \(f(x)=f(y)\) for some \(x, y \in \mathbb{R}^{+}\). Then (8) implies

\[
f(y f(y))=f(y f(x))=f(x f(y))=f(x f(x)) .
\]

Using \((7)\), this gives

\[
f(f(y))\left(\frac{2}{y}-f(y)\right)=f(f(x))\left(\frac{2}{x}-f(x)\right) .
\]

Noting \(f(x)=f(y)\), we find \(x=y\). This establishes the injectivity. By the Claim and (5), we get the only possible solution \(f(x)=\frac{1}{x}\). It suffices to check that this is a solution. Indeed, the left-hand side of (1) becomes

\[
x \cdot \frac{1}{x^{2}} \cdot y+\frac{x}{y}=\frac{y}{x}+\frac{x}{y}
\]

while the right-hand side becomes

\[
\frac{1}{x y}\left(x^{2}+y^{2}\right)=\frac{x}{y}+\frac{y}{x}
\]

The two sides agree with each other.
