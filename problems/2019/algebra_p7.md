---
id: fimo_2019_algebra_p7_2
year: 2019
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2019 Algebra Problem 7"
---

Let \(\mathbb{Z}\) be the set of integers. We consider functions \(f: \mathbb{Z} \rightarrow \mathbb{Z}\) satisfying

\[
f(f(x+y)+y)=f(f(x)+y)
\]

for all integers \(x\) and \(y\). For such a function, we say that an integer \(v\) is \(f\)-rare if the set

\[
X_{v}=\{x \in \mathbb{Z}: f(x)=v\}
\]

is finite and nonempty.

Prove that no such function \(f\) can have more than one \(f\)-rare integer.

---
An easy inductive argument (substituting \(x+k y\) for \(x)\) shows that

\[
f(f(x+k y)+y)=f(f(x)+y)
\]

for all integers \(x, y\) and \(k\). If \(v\) is an \(f\)-rare integer and \(a\) is the least element of \(X_{v}\), then by substituting \(y=a-f(x)\) in the above, we see that

\[
f(x+k \cdot(a-f(x)))-f(x)+a \in X_{v}
\]

for all integers \(x\) and \(k\), so that in particular

\[
f(x+k \cdot(a-f(x))) \geqslant f(x)
\]

for all integers \(x\) and \(k\), by assumption on \(a\). This says that on the (possibly degenerate) arithmetic progression through \(x\) with common difference \(a-f(x)\), the function \(f\) attains its minimal value at \(x\).

Repeating the same argument with \(a\) replaced by the greatest element \(b\) of \(X_{v}\) shows that

\[
f(x+k \cdot(b-f(x)) \leqslant f(x)
\]

for all integers \(x\) and \(k\). Combined with the above inequality, we therefore have

\[
f(x+k \cdot(a-f(x)) \cdot(b-f(x)))=f(x)
\]

for all integers \(x\) and \(k\).

Thus if \(f(x) \neq a, b\), then the set \(X_{f(x)}\) contains a nondegenerate arithmetic progression, so is infinite. So the only possible \(f\)-rare integers are \(a\) and \(b\).

In particular, the \(f\)-rare integer \(v\) we started with must be one of \(a\) or \(b\), so that \(f(v)=\) \(f(a)=f(b)=v\). This means that there cannot be any other \(f\)-rare integers \(v^{\prime}\), as they would on the one hand have to be either \(a\) or \(b\), and on the other would have to satisfy \(f\left(v^{\prime}\right)=v^{\prime}\). Thus \(v\) is the unique \(f\)-rare integer.
