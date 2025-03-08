---
id: fimo_2015_algebra_p4
year: 2015
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2015 Algebra Problem 4"
---

Find all functions \(f: \mathbb{R} \rightarrow \mathbb{R}\) satisfying the equation
\[
f(x+f(x+y))+f(x y)=x+f(x+y)+y f(x)
\]
for all real numbers \(x\) and \(y\).


---
Clearly, each of the functions \(x \mapsto x\) and \(x \mapsto 2-x\) satisfies (1). It suffices now to show that they are the only solutions to the problem.
Suppose that \(f\) is any function satisfying (1). Then setting \(y=1\) in (1), we obtain
\[
f(x+f(x+1))=x+f(x+1)
\]
in other words, \(x+f(x+1)\) is a fixed point of \(f\) for every \(x \in \mathbb{R}\).
We distinguish two cases regarding the value of \(f(0)\).
Case 1. \(f(0) \neq 0\).
By letting \(x=0\) in (1), we have
\[
f(f(y))+f(0)=f(y)+y f(0) .
\]
So, if \(y_{0}\) is a fixed point of \(f\), then substituting \(y=y_{0}\) in the above equation we get \(y_{0}=1\). Thus, it follows from (2) that \(x+f(x+1)=1\) for all \(x \in \mathbb{R}\). That is, \(f(x)=2-x\) for all \(x \in \mathbb{R}\).
Case 2. \(f(0)=0\).
By letting \(y=0\) and replacing \(x\) by \(x+1\) in (1), we obtain
\[
f(x+f(x+1)+1)=x+f(x+1)+1 .
\]
From (1), the substitution \(x=1\) yields
\[
f(1+f(y+1))+f(y)=1+f(y+1)+y f(1) .
\]
By plugging \(x=-1\) into (2), we see that \(f(-1)=-1\). We then plug \(y=-1\) into (4) and deduce that \(f(1)=1\). Hence, (4) reduces to
\[
f(1+f(y+1))+f(y)=1+f(y+1)+y .
\]
Accordingly, if both \(y_{0}\) and \(y_{0}+1\) are fixed points of \(f\), then so is \(y_{0}+2\). Thus, it follows from (2) and (3) that \(x+f(x+1)+2\) is a fixed point of \(f\) for every \(x \in \mathbb{R}\); i.e.,
\[
f(x+f(x+1)+2)=x+f(x+1)+2 .
\]
Replacing \(x\) by \(x-2\) simplifies the above equation to
\[
f(x+f(x-1))=x+f(x-1) .
\]
On the other hand, we set \(y=-1\) in (1) and get
\[
f(x+f(x-1))=x+f(x-1)-f(x)-f(-x) .
\]
Therefore, \(f(-x)=-f(x)\) for all \(x \in \mathbb{R}\).
Finally, we substitute \((x, y)\) by \((-1,-y)\) in \((1)\) and use the fact that \(f(-1)=-1\) to get
\[
f(-1+f(-y-1))+f(y)=-1+f(-y-1)+y .
\]
Since \(f\) is an odd function, the above equation becomes
\[
-f(1+f(y+1))+f(y)=-1-f(y+1)+y .
\]
By adding this equation to (5), we conclude that \(f(y)=y\) for all \(y \in \mathbb{R}\).
