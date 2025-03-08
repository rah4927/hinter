---
id: fimo_2009_algebra_p5
year: 2009
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2009 Algebra Problem 5"
---

Let \(f\) be any function that maps the set of real numbers into the set of real numbers. Prove that there exist real numbers \(x\) and \(y\) such that

\[
f(x-f(y))>y f(x)+x .
\]

---
Assume that

\[
f(x-f(y)) \leq y f(x)+x \quad \text { for all real } x, y
\]

Let \(a=f(0)\). Setting \(y=0\) in (1) gives \(f(x-a) \leq x\) for all real \(x\) and, equivalently,

\[
f(y) \leq y+a \quad \text { for all real } y .
\]

Setting \(x=f(y)\) in (1) yields in view of \((2)\)

\[
a=f(0) \leq y f(f(y))+f(y) \leq y f(f(y))+y+a .
\]

This implies \(0 \leq y(f(f(y))+1)\) and thus

\[
f(f(y)) \geq-1 \text { for all } y > 0 .
\]

From (2) and (3) we obtain \(-1 \leq f(f(y)) \leq f(y)+a\) for all \(y > 0\), so

\[
f(y) \geq-a-1 \quad \text { for all } y > 0 .
\]

Now we show that

\[
f(x) \leq 0 \quad \text { for all real } x
\]

Assume the contrary, i.e. there is some \(x\) such that \(f(x) > 0\). Take any \(y\) such that

\[
y < x-a \quad \text { and } \quad y < \frac{-a-x-1}{f(x)} .
\]

Then in view of 2

\[
x-f(y) \geq x-(y+a) > 0
\]

and with (1) and (4) we obtain

\[
y f(x)+x \geq f(x-f(y)) \geq-a-1,
\]

whence

\[
y \geq \frac{-a-x-1}{f(x)}
\]

contrary to our choice of \(y\). Thereby, we have established (5).

Setting \(x=0\) in (5) leads to \(a=f(0) \leq 0\) and (2) then yields

\[
f(x) \leq x \quad \text { for all real } x
\]

Now choose \(y\) such that \(y > 0\) and \(y > -f(-1)-1\) and set \(x=f(y)-1\). From (1), (5) and (6) we obtain

\[
f(-1)=f(x-f(y)) \leq y f(x)+x=y f(f(y)-1)+f(y)-1 \leq y(f(y)-1)-1 \leq-y-1,
\]

i.e. \(y \leq-f(-1)-1\), a contradiction to the choice of \(y\).
