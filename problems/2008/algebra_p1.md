---
id: fimo_2008_algebra_p1
year: 2008
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2008 Algebra Problem 1"
---

Find all functions \(f:(0, \infty) \rightarrow(0, \infty)\) such that
\[
\frac{f(p)^{2}+f(q)^{2}}{f\left(r^{2}\right)+f\left(s^{2}\right)}=\frac{p^{2}+q^{2}}{r^{2}+s^{2}}
\]
for all \(p, q, r, s > 0\) with \(p q=r s\).
\[
f(x)=x \quad \text { for all } x > 0 \quad \text { or } \quad f(x)=\frac{1}{x} \quad \text { for all } x > 0
\]

---
Let \(f\) satisfy the given condition. Setting \(p=q=r=s=1\) yields \(f(1)^{2}=f(1)\) and hence \(f(1)=1\). Now take any \(x > 0\) and set \(p=x, q=1, r=s=\sqrt{x}\) to obtain
\[
\frac{f(x)^{2}+1}{2 f(x)}=\frac{x^{2}+1}{2 x} .
\]
This recasts into
\[
\begin{gathered}
x f(x)^{2}+x=x^{2} f(x)+f(x), \\
(x f(x)-1)(f(x)-x)=0 .
\end{gathered}
\]
And thus,
\[
\text { for every } x > 0, \text { either } f(x)=x \text { or } f(x)=\frac{1}{x} \text {. }
\]
Obviously, if
\[
f(x)=x \quad \text { for all } x > 0 \quad \text { or } \quad f(x)=\frac{1}{x} \quad \text { for all } x > 0
\]
then the condition of the problem is satisfied. We show that actually these two functions are the only solutions.
So let us assume that there exists a function \(f\) satisfying the requirement, other than those in (2). Then \(f(a) \neq a\) and \(f(b) \neq 1 / b\) for some \(a, b > 0\). By (1), these values must be \(f(a)=1 / a, f(b)=b\). Applying now the equation with \(p=a, q=b, r=s=\sqrt{a b}\) we obtain \(\left(a^{-2}+b^{2}\right) / 2 f(a b)=\left(a^{2}+b^{2}\right) / 2 a b ;\) equivalently
\[
f(a b)=\frac{a b\left(a^{-2}+b^{2}\right)}{a^{2}+b^{2}} .
\]
We know however (see (1)) that \(f(a b)\) must be either \(a b\) or \(1 / a b\). If \(f(a b)=a b\) then by (3) \(a^{-2}+b^{2}=a^{2}+b^{2}\), so that \(a=1\). But, as \(f(1)=1\), this contradicts the relation \(f(a) \neq a\). Likewise, if \(f(a b)=1 / a b\) then \((3)\) gives \(a^{2} b^{2}\left(a^{-2}+b^{2}\right)=a^{2}+b^{2}\), whence \(b=1\), in contradiction to \(f(b) \neq 1 / b\). Thus indeed the functions listed in (2) are the only two solutions.
