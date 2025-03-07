---
id: fimo_2006_number_theory_p1
year: 2006
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2006 Number Theory Problem 1"
---

Determine all pairs \((x, y)\) of integers satisfying the equation
\[
1+2^{x}+2^{2 x+1}=y^{2} .
\]


---
If \((x, y)\) is a solution then obviously \(x \geq 0\) and \((x,-y)\) is a solution too. For \(x=0\) we get the two solutions \((0,2)\) and \((0,-2)\).
Now let \((x, y)\) be a solution with \(x > 0\); without loss of generality confine attention to \(y > 0\). The equation rewritten as
\[
2^{x}\left(1+2^{x+1}\right)=(y-1)(y+1)
\]
shows that the factors \(y-1\) and \(y+1\) are even, exactly one of them divisible by 4 . Hence \(x \geq 3\) and one of these factors is divisible by \(2^{x-1}\) but not by \(2^{x}\). So
\[
y=2^{x-1} m+\epsilon, \quad m \text { odd }, \quad \epsilon=\pm 1 .
\]
Plugging this into the original equation we obtain
\[
2^{x}\left(1+2^{x+1}\right)=\left(2^{x-1} m+\epsilon\right)^{2}-1=2^{2 x-2} m^{2}+2^{x} m \epsilon
\]
or, equivalently
\[
1+2^{x+1}=2^{x-2} m^{2}+m \epsilon
\]
Therefore
\[
1-\epsilon m=2^{x-2}\left(m^{2}-8\right) .
\]
For \(\epsilon=1\) this yields \(m^{2}-8 \leq 0\), i.e., \(m=1\), which fails to satisfy (2).
For \(\epsilon=-1\) equation (2) gives us
\[
1+m=2^{x-2}\left(m^{2}-8\right) \geq 2\left(m^{2}-8\right)
\]
implying \(2 m^{2}-m-17 \leq 0\). Hence \(m \leq 3\); on the other hand \(m\) cannot be 1 by (2). Because \(m\) is odd, we obtain \(m=3\), leading to \(x=4\). From (1) we get \(y=23\). These values indeed satisfy the given equation. Recall that then \(y=-23\) is also good. Thus we have the complete list of solutions \((x, y):(0,2),(0,-2),(4,23),(4,-23)\).
